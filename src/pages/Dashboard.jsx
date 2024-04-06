import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/style.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from "../features/authSlice"

const Dashboard = () => {
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
                      <h6>2</h6>
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
                      <h6>2</h6>
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
                      <h6>2</h6>
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
                      <h6>2</h6>
                    </div>
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
