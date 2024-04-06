import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ListLalintalkim = () => {
  const [lalintalkim, setLalintalkim] = useState([]);
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
    getLalintalkim();
  }, []);

  const getLalintalkim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/lalintalkim");
      setLalintalkim(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteLalintalkim = async (userId) => {
    await axios.delete(`http://localhost:5000/lalintalkim/${userId}`);
    getLalintalkim();
  };

  return (
    <div>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Data Table Seksi Lalintalkim</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Tables</li>
              <li class="breadcrumb-item active">Data Seksi Lalintalkim</li>
            </ol>
          </nav>
        </div>

        <div className="pagetitle">
          <a className="btn btn-success" href="/add-lalintalkim">
            Tambah
          </a>
        </div>

        <section class="section table">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Data Seksi Lalintalkim</h5>

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
                      {lalintalkim.length === 0 ? (
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            Tidak terdapat data Lalintalkim yang tersimpan
                          </td>
                        </tr>
                      ) : (
                        lalintalkim.map((lalintalkim, index) => (
                          <tr key={lalintalkim.id}>
                            <td>{index + 1}</td>
                            <td>{lalintalkim.kegiatan}</td>
                            <td>{lalintalkim.jumlah}</td>
                            <td>{lalintalkim.target}</td>
                            <td>{lalintalkim.anggaran}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm me-2 unprint"
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm unprint"
                                onClick={() => handleDeleteLalintalkim(lalintalkim.uuid)}
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

export default ListLalintalkim;
