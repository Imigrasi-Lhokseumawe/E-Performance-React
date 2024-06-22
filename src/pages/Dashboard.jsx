/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const [lalintalkimTotal, setLalintalkimTotal] = useState(0);
  const [inteldakimTotal, setInteldakimTotal] = useState(0);
  const [tikkimTotal, setTikkimTotal] = useState(0);
  const [tataUsahaTotal, setTataUsahaTotal] = useState(0);
  const [lalintalkimStatus, setLalintalkimStatus] = useState([
    { month: "Januari", status: false },
    { month: "Februari", status: false },
    { month: "Maret", status: false },
    { month: "April", status: false },
    { month: "Mei", status: false },
    { month: "Juni", status: false },
    { month: "Juli", status: false },
    { month: "Agustus", status: false },
    { month: "September", status: false },
    { month: "Oktober", status: false },
    { month: "November", status: false },
    { month: "Desember", status: false },
  ]);
  const [inteldakimStatus, setInteldakimStatus] = useState([
    { month: "Januari", status: false },
    { month: "Februari", status: false },
    { month: "Maret", status: false },
    { month: "April", status: false },
    { month: "Mei", status: false },
    { month: "Juni", status: false },
    { month: "Juli", status: false },
    { month: "Agustus", status: false },
    { month: "September", status: false },
    { month: "Oktober", status: false },
    { month: "November", status: false },
    { month: "Desember", status: false },
  ]);
  const [tikkimStatus, setTikkimStatus] = useState([
    { month: "Januari", status: false },
    { month: "Februari", status: false },
    { month: "Maret", status: false },
    { month: "April", status: false },
    { month: "Mei", status: false },
    { month: "Juni", status: false },
    { month: "Juli", status: false },
    { month: "Agustus", status: false },
    { month: "September", status: false },
    { month: "Oktober", status: false },
    { month: "November", status: false },
    { month: "Desember", status: false },
  ]);
  const [tataUsahaStatus, setTataUsahaStatus] = useState([
    { month: "Januari", status: false },
    { month: "Februari", status: false },
    { month: "Maret", status: false },
    { month: "April", status: false },
    { month: "Mei", status: false },
    { month: "Juni", status: false },
    { month: "Juli", status: false },
    { month: "Agustus", status: false },
    { month: "September", status: false },
    { month: "Oktober", status: false },
    { month: "November", status: false },
    { month: "Desember", status: false },
  ]);
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
    getInteldakim();
    getTikkim();
    getTataUsaha();
  }, []);

  const getLalintalkim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/lalintalkim");
      const lalintalkimData = response.data;
      setLalintalkimTotal(response.data.length);
      updateLalintalkimStatus(lalintalkimData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getInteldakim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/inteldakim");
      const inteldakimData = response.data;
      setInteldakimTotal(response.data.length);
      updateInteldakimStatus(inteldakimData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTikkim = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tikkim");
      const tikkimData = response.data;
      setTikkimTotal(response.data.length);
      updateTikkimStatus(tikkimData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getTataUsaha = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tata-usaha");
      const tataUsahaData = response.data;
      setTataUsahaTotal(response.data.length);
      updateTataUsahaStatus(tataUsahaData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateLalintalkimStatus = (data) => {
    const updatedLalintalkimStatus = lalintalkimStatus.map((month) => {
      const filteredData = data.filter((item) => {
        return new Date(item.tanggal).getMonth() === getMonthIndex(month.month);
      });
      return {
        ...month,
        status: filteredData.length > 0 ? filteredData[0].isAccept : null,
      };
    });
    setLalintalkimStatus(updatedLalintalkimStatus);
  };

  const updateInteldakimStatus = (data) => {
    const updatedInteldakimStatus = inteldakimStatus.map((month) => {
      const filteredData = data.filter((item) => {
        return new Date(item.tanggal).getMonth() === getMonthIndex(month.month);
      });
      return {
        ...month,
        status: filteredData.length > 0 ? filteredData[0].isAccept : null,
      };
    });
    setInteldakimStatus(updatedInteldakimStatus);
  };

  const updateTikkimStatus = (data) => {
    const updatedTikkimStatus = tikkimStatus.map((month) => {
      const filteredData = data.filter((item) => {
        return new Date(item.tanggal).getMonth() === getMonthIndex(month.month);
      });
      return {
        ...month,
        status: filteredData.length > 0 ? filteredData[0].isAccept : null,
      };
    });
    setTikkimStatus(updatedTikkimStatus);
  };

  const updateTataUsahaStatus = (data) => {
    const updatedTataUsahaStatus = tataUsahaStatus.map((month) => {
      const filteredData = data.filter((item) => {
        return new Date(item.tanggal).getMonth() === getMonthIndex(month.month);
      });
      return {
        ...month,
        status: filteredData.length > 0 ? filteredData[0].isAccept : null,
      };
    });
    setTataUsahaStatus(updatedTataUsahaStatus);
  };

  const getMonthIndex = (monthName) => {
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return months.findIndex((month) => month === monthName);
  };

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/dashboard">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-xxl-3 col-md-6">
              <div className="card info-card sales-card">
                <div className="card-body">
                  <h5 className="card-title">Seksi Lalintalkim</h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faUserTie} />
                    </div>
                    <div className="ps-3">
                      <h6>{lalintalkimTotal}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-md-6">
              <div className="card info-card revenue-card">
                <div className="card-body">
                  <h5 className="card-title">Seksi Inteldakim</h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faUserTie} />
                    </div>
                    <div className="ps-3">
                      <h6>{inteldakimTotal}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">Seksi Tikkim</h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faUserTie} />
                    </div>
                    <div className="ps-3">
                      <h6>{tikkimTotal}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-12">
              <div className="card info-card customers-card">
                <div className="card-body">
                  <h5 className="card-title">Subbag Tata Usaha</h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <FontAwesomeIcon icon={faUserTie} />
                    </div>
                    <div className="ps-3">
                      <h6>{tataUsahaTotal}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Status Lalintalkim */}
          <h4>Lalintalkim</h4>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    {lalintalkimStatus.map((month, index) => (
                      <div key={index} className="text-center">
                        <h6>{month.month}</h6>
                        <FontAwesomeIcon
                          icon={month.status ? faCheckCircle : faTimesCircle}
                          className={
                            month.status ? "text-success" : "text-danger"
                          }
                          size="2x"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4>Inteldakim</h4>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    {inteldakimStatus.map((month, index) => (
                      <div key={index} className="text-center">
                        <h6>{month.month}</h6>
                        <FontAwesomeIcon
                          icon={month.status ? faCheckCircle : faTimesCircle}
                          className={
                            month.status ? "text-success" : "text-danger"
                          }
                          size="2x"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Status Tikkim */}
          <h4>Tikkim</h4>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    {tikkimStatus.map((month, index) => (
                      <div key={index} className="text-center">
                        <h6>{month.month}</h6>
                        <FontAwesomeIcon
                          icon={month.status ? faCheckCircle : faTimesCircle}
                          className={
                            month.status ? "text-success" : "text-danger"
                          }
                          size="2x"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Status Tata Usaha */}
          <h4>Tata Usaha</h4>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-around align-items-center">
                    {tataUsahaStatus.map((month, index) => (
                      <div key={index} className="text-center">
                        <h6>{month.month}</h6>
                        <FontAwesomeIcon
                          icon={month.status ? faCheckCircle : faTimesCircle}
                          className={
                            month.status ? "text-success" : "text-danger"
                          }
                          size="2x"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
