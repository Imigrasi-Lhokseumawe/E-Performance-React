import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { LoginUser, reset } from "../features/authSlice"
import "../styles/Kinerja.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Kinerja = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(()=>{
    if(user || isSuccess) {
      navigate("/dashboard")
    }
    dispatch(reset())
  }, [user, isSuccess, dispatch, navigate])

  const Auth = (e) => {
    e.preventDefault()
    dispatch(LoginUser({username, password}))
  }

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
          {/* Tombol hamburger */}
          <div className="mobile-nav-toggle d-lg-none">
            <button onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
          <nav id="navbar" className={`navbar order-last order-lg-0 ${isMobileMenuOpen ? 'active' : ''}`}>
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
        id="hero-kinerja"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div
                class="container text-md-left "
                data-aos="fade-up"
              >
                <h1 className="besar-kinerja">E-PERFOMACE</h1>
                <h1>SISTEM INFORMASI</h1>
                <h1>CAPAIAN KINERJA TAHUN</h1>
                <h1>2022</h1>
                <h2>&copy; URUSAN KEUANGAN KANIM IMIGRASI LHOKSEUMAWE</h2>
              </div>
            </div>
            <div class="col-md-4">
              <div class="container text-center">
                <div
                  className="shadow-2-strong"
                  style={{ borderRadius: "1rem" }}
                >
                  <form onSubmit={Auth} className="form-group">
                    <div className="card-body p-5">
                      <p style={{ fontWeight: "bold" }}>Silahkan Login Untuk <br /> Melanjutkan Pengisian Capaian Kinerja</p>
                      {isError && <p className="font-weight-bold text-danger">{message}</p>}
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder="username"
                          value={username} onChange={(e)=> setUsername(e.target.value)}
                          style={{ borderRadius: "20px", border: "2px solid #003f62" }}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="typePasswordX-2"
                          className="form-control form-control-md"
                          placeholder="password"
                          value={password} onChange={(e)=> setPassword(e.target.value)}
                          style={{ borderRadius: "20px", border: "2px solid #003f62" }}
                        />
                      </div>

                      <button
                        id="loginButton"
                        className="btn btn-md btn-block d-flex justify-content-center align-items-center w-100"
                        type="submit"
                        style={{ backgroundColor: "#425d70", color: "black", borderRadius: "20px", border: "2px solid #003f62" }}
                      >
                        <span>{isLoading ? 'Loading...' : 'Login'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kinerja;
