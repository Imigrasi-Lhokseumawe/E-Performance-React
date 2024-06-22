import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ListTikkim = () => {
  const [tikkim, setTikkim] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  useEffect(() => {
    getTikkim();
  }, []);

  const getTikkim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tikkim");
      setTikkim(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteTikkim = async (userId) => {
    await axios.delete(`http://localhost:5000/tikkim/${userId}`);
    getTikkim();
  };

  const handleAccept = async (e, userId) => {
    e.preventDefault();
    console.log("ID:", userId);
    const jsonData = { isAccept: true };
    try {
      await axios.patch(`http://localhost:5000/tikkim/${userId}`, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi untuk memformat angka sebagai mata uang IDR
  const formatCurrency = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Data Table Seksi Tikkim</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Tables</li>
              <li class="breadcrumb-item active">Data Seksi Tikkim</li>
            </ol>
          </nav>
        </div>

        <div className="pagetitle">
          <a className="btn btn-success" href="/add-tikkim">
            Tambah
          </a>
        </div>

        <section class="section table">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Data Seksi Tikkim</h5>

                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>
                          <b>N</b>o
                        </th>
                        <th style={{ textAlign: 'center' }}>Kinerja</th>
                        <th style={{ textAlign: 'center' }}>Jumlah Target Kinerja</th>
                        <th style={{ textAlign: 'center' }}>Output</th>
                        <th style={{ textAlign: 'center' }}>Realisasi Anggaran</th>
                        <th style={{ textAlign: 'center' }}>Sisa Ketersediaan Anggaran</th>
                        <th style={{ textAlign: 'center' }}>Periode</th>
                        <th style={{ textAlign: 'center' }}>Status</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tikkim.length === 0 ? (
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            Tidak terdapat data Tikkim yang tersimpan
                          </td>
                        </tr>
                      ) : (
                        tikkim.map((tikkim, index) => (
                          <tr key={tikkim.id}>
                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                            <td style={{ textAlign: 'center' }}>{tikkim.kegiatan}</td>
                            <td style={{ textAlign: 'center' }}>{tikkim.jumlah}</td>
                            <td style={{ textAlign: 'center' }}>{tikkim.output}</td>
                            <td style={{ textAlign: 'center' }}>{formatCurrency(tikkim.anggaran)}</td>
                            <td style={{ textAlign: 'center' }}>{formatCurrency(tikkim.sisaAnggaran)}</td>
                            <td style={{ textAlign: 'center' }}>{tikkim.periode}</td>
                            <td style={{ textAlign: 'center' }}>
                            {tikkim.isAccept ? (
                                <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                              ) : (
                                <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
                              )}
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <Link
                                to={`/edit-tikkim/${tikkim.uuid}`}
                                type="button"
                                className="btn btn-primary btn-sm me-2"
                              >
                                Edit
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm me-1"
                                onClick={() => handleDeleteTikkim(tikkim.uuid)}
                              >
                                Hapus
                              </button>

                              {user && user.role === "admin" && !tikkim.isAccept && (
                                <button
                                  type="button"
                                  className="btn btn-success btn-sm"
                                  onClick={(e) => handleAccept(e, tikkim.uuid)}
                                >
                                  <FontAwesomeIcon icon={faCheck} />
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ListTikkim;
