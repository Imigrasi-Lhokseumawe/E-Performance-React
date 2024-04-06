import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ListInteldakim = () => {
  const [inteldakim, setInteldakim] = useState([]);
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
    getInteldakim();
  }, []);

  const getInteldakim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/inteldakim");
      setInteldakim(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteInteldakim = async (userId) => {
    await axios.delete(`http://localhost:5000/inteldakim/${userId}`);
    getInteldakim();
  };

  return (
    <div>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Data Table Seksi Inteldakim</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Tables</li>
              <li class="breadcrumb-item active">Data Seksi Inteldakim</li>
            </ol>
          </nav>
        </div>

        <div className="pagetitle">
          <a className="btn btn-success" href="/add-inteldakim">
            Tambah
          </a>
        </div>

        <section class="section table">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Data Seksi Inteldakim</h5>

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
                      {inteldakim.length === 0 ? (
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            Tidak terdapat data Inteldakim yang tersimpan
                          </td>
                        </tr>
                      ) : (
                        inteldakim.map((inteldakim, index) => (
                          <tr key={inteldakim.id}>
                            <td>{index + 1}</td>
                            <td>{inteldakim.kegiatan}</td>
                            <td>{inteldakim.jumlah}</td>
                            <td>{inteldakim.target}</td>
                            <td>{inteldakim.anggaran}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm me-2"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteInteldakim(inteldakim.uuid)}
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

export default ListInteldakim;