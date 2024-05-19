import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddLalintalkim = () => {
  const [kegiatan, setKegiatan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [output, setOutput] = useState("");
  const [anggaran, setAnggaran] = useState("");
  const [sisaAnggaran, setSisaAnggaran] = useState("");
  const [periode, setPeriode] = useState("");
  const [tanggal, setTanggal] = useState("");
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

  const saveLalintalkim = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kegiatan", kegiatan);
    formData.append("jumlah", jumlah);
    formData.append("output", output);
    formData.append("anggaran", anggaran);
    formData.append("sisaAnggaran", sisaAnggaran);
    formData.append("periode", periode);
    formData.append("tanggal", tanggal);

    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      await axios.post("http://localhost:5000/lalintalkim", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/data-seksi-lalintalkim");
    } catch (error) {
      console.log(error);
    }
  };

  // Fungsi untuk memformat angka sebagai mata uang
  const formatCurrency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(number)
      .replace(/\D00(?=\D*$)/, "");
  };

  // Fungsi untuk menghapus format mata uang dan mengembalikan angka
  const parseCurrency = (value) => {
    return value.replace(/[Rp.,\s]/g, "");
  };

  return (
    <div>
      <main id="main" class="main">
        <div class="pagetitle">
          <h1>Tambah Data Lalintalkim</h1>
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
                  <h5 class="card-title">Form Data Lalintalkim</h5>
                  <form class="row g-3" onSubmit={saveLalintalkim}>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Indikator Kinerja / Kegiatan
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
                        Jumlah Target Kinerja
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
                        Output
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={output}
                        onChange={(e) => setOutput(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Realisasi Anggaran
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={formatCurrency(anggaran)}
                        onChange={(e) =>
                          setAnggaran(parseCurrency(e.target.value))
                        }
                        onBlur={(e) =>
                          setAnggaran(parseCurrency(e.target.value))
                        }
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Sisa Ketersediaan Anggaran
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={formatCurrency(sisaAnggaran)}
                        onChange={(e) =>
                          setSisaAnggaran(parseCurrency(e.target.value))
                        }
                        onBlur={(e) =>
                          setSisaAnggaran(parseCurrency(e.target.value))
                        }
                      />
                    </div>
                    <div class="col-md-3">
                      <label for="inputName5" class="form-label">
                        Periode
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={periode}
                        onChange={(e) => setPeriode(e.target.value)}
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputTanggal" className="form-label">
                        Tanggal
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="inputTanggal"
                        value={tanggal}
                        onChange={(e) => setTanggal(e.target.value)}
                      />
                    </div>
                    {/* Tombol Simpan */}
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Simpan
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

export default AddLalintalkim;
