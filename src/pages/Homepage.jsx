import React from "react";
import { Carousel } from 'react-bootstrap';
import "../styles/Homepage.css";
import image1 from "../assets/img/news-1.jpg"
import image2 from "../assets/img/news-2.jpg"
import image3 from "../assets/img/news-3.jpg"
import capaian1 from "../assets/img/capaian-1.jpg"
import capaian2 from "../assets/img/capaian-2.jpg"

const Homepage = () => {
  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <div className="me-auto">
            <h1>
            <img className="img-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Lambang_Imigrasi_Kemenkumham.svg" alt="" />
              <a href="/">IMIGRASI LHOKSEUMAWE</a>
            </h1>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
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
        id="hero"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="container text-center text-md-left" data-aos="fade-up">
          <h1 className="besar">E-PERFOMACE</h1>
          <h1 className="kecil">SISTEM INFORMASI CAPAIAN</h1>
          <h1 className="kecil font-arial">KINERJA TAHUN 2022</h1>
          <h2>&copy; URUSAN KEUANGAN KANIM IMIGRASI LHOKSEUMAWE</h2>
        </div>
      </section>

      <main>
        <section id="what-we-do" class="what-we-do">
          <div className="container">
          <hr className="line mt-1 mb-5"/>
            <div className="section-title">
              <h2>CAPAIAN KINERJA</h2>
              <p>
                Pada tahun anggaran 2022, Kantor Imigrasi Kelas II TPI
                Lhokseumawe berkomitmen melalui Perjanjian Kinerja yang telah
                ditandatangani antara Kepala Divisi Keimigrasian Kantor Wilayah
                Kementerian Hukum dan HAM Aceh dengan Kepala Kantor Imigrasi
                Kelas II TPI Lhokseumawe untuk merealisasikan seluruh target
                capaian kinerja yang terdapat dalam 2 (dua) Program Kerja Utama
                yaitu Program Penegakan dan Pelayanan Hukum serta Program
                Dukungan Manajemen
              </p>
            </div>
          </div>
        </section>
        
        <section id="about" class="about">
          <div class="container">
          <hr className="line"/>
            <div class="row rata-kiri">
              <div class="col-lg-6">
                <img src={capaian1} class="img-fluid" alt="" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <h3>PROGRAM PENEGAKAN DAN PELAYANAN HUKUM KEIMIGRASIAN</h3>
                <h4>SASARAN PROGRAM</h4>
                <p>
                  Meningkatkan Kepuasan Masyarakat atas Layanan Keimigrasian
                  serta Meningkatkannya Stabilitas Keamanan Melalui Pencegahan,
                  Pengawasan dan Penindakan Keimigrasian
                </p>
                <h4>INDIKATOR KINERJA PROGRAM</h4>
                <p>
                  Indeks Kepuasan Masyarakat terhadap Layanan Keimigrasian serta
                  Indeks Pengamanan Keimigrasian
                </p>
                <h4>INDIKATOR OUTPUT PROGRAM</h4>
                <p>
                  Jumlah Pelayanan Kegiatan yang Diselesaikan Sesuai Dengan
                  Ketentuan serta Jumlah Kegiatan Penegakan Hukum Keimigrasian
                  yang Dilaksanakan
                </p>
                <h4>KEGIATAN PROGRAM</h4>
                <p>
                  Penyelenggaraan Fungsi Pengkoordinasian, Pelayanan dan
                  Penegakan Hukum Keimigrasian di Wilayah
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="about">
          <div class="container">
          <hr className="line mb-5"/>
            <div class="row rata-kanan">
              <div class="col-lg-6">
                <h3>PROGRAM DUKUNGAN MANAJEMEN</h3>
                <h4>SASARAN PROGRAM</h4>
                <p>
                  Mewujudkan Tata Kelola Pemerintahan yang Efektif dan Efisien
                  di Lingkungan Kementerian Hukum dan HAM dengan Mengoptimalkan
                  Kualitas Layanan Berbasis TI
                </p>
                <h4>INDIKATOR KINERJA PROGRAM</h4>
                <p>
                  Layanan Tata Kelola Pemerintah yang yang Efektif dan Efisien
                  di Lingkungan Ditjen Imigrasi
                </p>
                <h4>INDIKATOR OUTPUT PROGRAM</h4>
                <p>
                  Indeks Kepuasan Layanan Internal di lingkungan Ditjen Imigrasi
                </p>
                <h4>KEGIATAN PROGRAM</h4>
                <p>Dukungan Manajemen dan Teknis Lainnya UPT Imigrasi</p>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <img src={capaian2} class="img-fluid" alt="" />
              </div>
            </div>
            <hr className="line mt-5"/>
          </div>
        </section>
        <section class="kinerja" id="kinerja">
  <div class="container">

    <div class="section-title">
      <h2>CAPAIAN KINERJA</h2>
    </div>

    <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={image3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

  </div>
</section>
      </main>
    </div>
  );
};

export default Homepage;
