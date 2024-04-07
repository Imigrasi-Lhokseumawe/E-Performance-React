import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ListTikkim = () => {
  const [tikkim, setTikkim] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

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
                        <th>Kegiatan</th>
                        <th>Jumlah</th>
                        <th>Target</th>
                        <th>Anggaran</th>
                        <th>Action</th>
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
                            <td>{index + 1}</td>
                            <td>{tikkim.kegiatan}</td>
                            <td>{tikkim.jumlah}</td>
                            <td>{tikkim.target}</td>
                            <td>{tikkim.anggaran}</td>
                            <td>
                              <Link
                                to={`/edit-tikkim/${tikkim.uuid}`}
                                type="button"
                                className="btn btn-primary btn-sm me-2"
                              >
                                Edit
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm unprint"
                                onClick={() => handleDeleteTikkim(tikkim.uuid)}
                              >
                                Hapus
                              </button>
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
