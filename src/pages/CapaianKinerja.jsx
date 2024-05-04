import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import "../styles/Homepage.css";
import "../styles/CapaianKinerja.css";

const CapaianKinerja = () => {
  const [lalintalkim, setLalintalkim] = useState([]);
  const [inteldakim, setInteldakim] = useState([]);
  const [tikkim, setTikkim] = useState([]);
  const [tataUsaha, setTataUsaha] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    getInteldakim();
    getLalintalkim();
    getTikkim();
    getTataUsaha();
  }, []);

  const getLalintalkim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/lalintalkim-all");
      setLalintalkim(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getInteldakim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/inteldakim-all");
      setInteldakim(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTikkim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tikkim-all");
      setTikkim(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTataUsaha = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tata-usaha-all");
      setTataUsaha(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="me-auto">
            <h1>
              <img
                className="img-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Lambang_Imigrasi_Kemenkumham.svg"
                alt=""
              />
              <a href="/">IMIGRASI LHOKSEUMAWE</a>
            </h1>
          </div>
          {/* Tombol hamburger */}
          <div className="mobile-nav-toggle d-lg-none">
            <button onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${
              isMobileMenuOpen ? "active" : ""
            }`}
          >
            <ul>
              <li>
                <a className="nav-link scrollto active" href="/">
                  Beranda
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/capaian-kinerja">
                  Capaian Kinerja
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/kinerja">
                  Kinerja
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="hero-capaian"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="container text-center" data-aos="fade-up">
          <h1>E-PERFOMACE</h1>
          <h1>SISTEM INFORMASI CAPAIAN</h1>
          <h1>KINERJA TAHUN 2022</h1>
          <h2>&copy; URUSAN KEUANGAN KANIM IMIGRASI LHOKSEUMAWE</h2>
        </div>
      </section>

      <main>
        <section id="what-we-do" className="what-we-do">
          <div className="container">
            <hr className="line mt-1 mb-5" />
            <div className="section-title">
              <h2>SEKSI LALINTALKIM</h2>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Indikator Kinerja/Kegiatan</th>
                    <th scope="col">Jumlah Target Kinerja</th>
                    <th scope="col">Output</th>
                    <th scope="col">Realisasi Anggaran</th>
                    <th scope="col">Sisa Ketersediaan Anggaran</th>
                    <th scope="col">Periode</th>
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
                            <td>{lalintalkim.output}</td>
                            <td>{lalintalkim.anggaran}</td>
                            <td>{lalintalkim.sisaAnggaran}</td>
                            <td>{lalintalkim.periode}</td>
                          </tr>
                        ))
                      )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="what-we-do"  >
          <div className="container">
            <hr className="line mt-1 mb-5" />
            <div className="section-title">
              <h2>SEKSI INTELDAKIM</h2>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Indikator Kinerja/Kegiatan</th>
                    <th scope="col">Jumlah Target Kinerja</th>
                    <th scope="col">Output</th>
                    <th scope="col">Realisasi Anggaran</th>
                    <th scope="col">Sisa Ketersediaan Anggaran</th>
                    <th scope="col">Periode</th>
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
                            <td>{inteldakim.output}</td>
                            <td>{inteldakim.anggaran}</td>
                            <td>{inteldakim.sisaAnggaran}</td>
                            <td>{inteldakim.periode}</td>
                          </tr>
                        ))
                      )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="what-we-do" class="what-we-do">
          <div className="container">
            <hr className="line mt-1 mb-5" />
            <div className="section-title">
              <h2>SEKSI TIKKIM</h2>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Indikator Kinerja/Kegiatan</th>
                    <th scope="col">Jumlah Target Kinerja</th>
                    <th scope="col">Output</th>
                    <th scope="col">Realisasi Anggaran</th>
                    <th scope="col">Sisa Ketersediaan Anggaran</th>
                    <th scope="col">Periode</th>
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
                            <td>{tikkim.output}</td>
                            <td>{tikkim.anggaran}</td>
                            <td>{tikkim.sisaAnggaran}</td>
                            <td>{tikkim.periode}</td>
                          </tr>
                        ))
                      )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="what-we-do" class="what-we-do">
          <div className="container">
            <hr className="line mt-1 mb-5" />
            <div className="section-title">
              <h2>SUBBAG TATA USAHA</h2>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Indikator Kinerja/Kegiatan</th>
                    <th scope="col">Jumlah Target Kinerja</th>
                    <th scope="col">Output</th>
                    <th scope="col">Realisasi Anggaran</th>
                    <th scope="col">Sisa Ketersediaan Anggaran</th>
                    <th scope="col">Periode</th>
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
                            <td>{tataUsaha.output}</td>
                            <td>{tataUsaha.anggaran}</td>
                            <td>{tataUsaha.sisaAnggaran}</td>
                            <td>{tataUsaha.periode}</td>
                          </tr>
                        ))
                      )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CapaianKinerja;
