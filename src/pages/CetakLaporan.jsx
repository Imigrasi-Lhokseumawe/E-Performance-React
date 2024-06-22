import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Print.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const CetakLaporan = () => {
  const [lalintalkim, setLalintalkim] = useState([]);
  const [inteldakim, setInteldakim] = useState([]);
  const [tikkim, setTikkim] = useState([]);
  const [tataUsaha, setTataUsaha] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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

  const fetchData = async (start, end) => {
    try {
      const lalintalkimResponse = await axios.get(
        "http://localhost:5000/lalintalkim",
        {
          params: { startDate: start, endDate: end },
        }
      );
      const inteldakimResponse = await axios.get(
        "http://localhost:5000/inteldakim",
        {
          params: { startDate: start, endDate: end },
        }
      );
      const tikkimResponse = await axios.get("http://localhost:5000/tikkim", {
        params: { startDate: start, endDate: end },
      });
      const tataUsahaResponse = await axios.get(
        "http://localhost:5000/tata-usaha",
        {
          params: { startDate: start, endDate: end },
        }
      );

      return {
        lalintalkim: lalintalkimResponse.data,
        inteldakim: inteldakimResponse.data,
        tikkim: tikkimResponse.data,
        tataUsaha: tataUsahaResponse.data,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        lalintalkim: [],
        inteldakim: [],
        tikkim: [],
        tataUsaha: [],
      };
    }
  };

  const handleShowData = async () => {
    if (startDate && endDate) {
      const data = await fetchData(startDate, endDate); // Combine fetch data
      localStorage.setItem("filteredData", JSON.stringify(data));
      window.open("/cetak-laporan-page", "_blank");
    } else {
      alert("Please select both start and end dates");
    }
  };

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Cetak Laporan Kinerja</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">Forms</li>
              <li className="breadcrumb-item active">Cetak Laporan Kinerja</li>
            </ol>
          </nav>
        </div>

        <div className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cetak Laporan Data Kinerja</h5>
                  <hr />
                  <div className="row">
                    <div className="col-md-3">
                      <label htmlFor="startDate" className="form-label">
                        Tanggal Awal
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="endDate" className="form-label">
                        Tanggal Akhir
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>

                    <div className="col-md-4">
                      <button
                        className="btn btn-primary me-3"
                        style={{ marginTop: "31px" }}
                        onClick={handleShowData}
                      >
                        Tampilkan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CetakLaporan;
