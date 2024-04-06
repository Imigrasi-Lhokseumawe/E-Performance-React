import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from "../features/authSlice"

const ListTataUsaha = () => {
  const [tataUsaha, setTataUsaha] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isError} = useSelector((state => state.auth))

  useEffect(()=> {
    dispatch(getMe())
  }, [dispatch])

  useEffect(()=> {
    if (isError){
      navigate("/")
    }
  }, [isError, navigate])

  useEffect(() => {
    getTataUsaha();
  }, []);

  const getTataUsaha = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tata-usaha");
      setTataUsaha(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteTataUsaha = async (userId) => {
    await axios.delete(`http://localhost:5000/tata-usaha/${userId}`);
    getTataUsaha();
  };

  return (
    <div>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Data Table Subbag Tata Usaha</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Tables</li>
              <li class="breadcrumb-item active">Data Subbag Tata Usaha</li>
            </ol>
          </nav>
        </div>

        <div className="pagetitle">
          <a className="btn btn-success" href="/add-tata-usaha">
            Tambah
          </a>
        </div>

        <section class="section table">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Data Subbag Tata Usaha</h5>

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
                    {tataUsaha.length === 0 ? (
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            Tidak terdapat data Tata Usaha yang tersimpan
                          </td>
                        </tr>
                      ) : (
                        tataUsaha.map((tataUsaha, index) => (
                          <tr key={tataUsaha.id}>
                            <td>{index + 1}</td>
                            <td>{tataUsaha.kegiatan}</td>
                            <td>{tataUsaha.jumlah}</td>
                            <td>{tataUsaha.target}</td>
                            <td>{tataUsaha.anggaran}</td>
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
                                onClick={() => handleDeleteTataUsaha(tataUsaha.uuid)}
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
  )
}

export default ListTataUsaha
