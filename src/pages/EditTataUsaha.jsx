/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditTataUsaha = () => {
  const [kegiatan, setKegiatan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [target, setTarget] = useState("");
  const [anggaran, setAnggaran] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
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
    getTataUsahaById();
  }, []);

  const getTataUsahaById = async () => {
    const response = await axios.get(`http://localhost:5000/tata-usaha/${id}`);
    setKegiatan(response.data.kegiatan);
    setJumlah(response.data.jumlah);
    setTarget(response.data.target);
    setAnggaran(response.data.anggaran);
  };

  const updateTataUsaha = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kegiatan", kegiatan);
    formData.append("jumlah", jumlah);
    formData.append("target", target);
    formData.append("anggaran", anggaran);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      await axios.patch(`http://localhost:5000/tata-usaha/${id}`, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/data-subbag-tata-usaha");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Edit Data Subbag Tata Usaha</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Forms</li>
              <li class="breadcrumb-item active">Layouts</li>
            </ol>
          </nav>
        </div>
        <section class="section table">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Form Data Subbag Tata Usaha</h5>
                  <form class="row g-3" onSubmit={updateTataUsaha}>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Kegiatan
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={kegiatan}
                        onChange={(e) => setKegiatan(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Jumlah
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={jumlah}
                        onChange={(e) => setJumlah(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Target
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Anggaran
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={anggaran}
                        onChange={(e) => setAnggaran(e.target.value)}
                      />
                    </div>
                    {/* Tombol Update */}
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditTataUsaha;
