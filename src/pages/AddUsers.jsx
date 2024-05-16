import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddUsers = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
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

  const saveUsers = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confPassword", confPassword);
    formData.append("role", role);

    console.log(formData);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      await axios.post("http://localhost:5000/users", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/data-users");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <main id="main" className="main">
        <div class="pagetitle">
          <h1>Tambah Data Users</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Forms</li>
              <li class="breadcrumb-item active">Tambah Users</li>
            </ol>
          </nav>
        </div>

        <section class="section table">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Form Data Users</h5>
                  <form class="row g-3" onSubmit={saveUsers}>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Email
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Konfirmasi Password
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputName5"
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputName5" class="form-label">
                        Select Roles
                      </label>
                      <select
                      class="form-control"
                        name="course"
                        id="course"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value={null} selected>
                          Select Roles
                        </option>
                        <option value="inteldakim">
                          Inteldakim
                        </option>
                        <option value="lalintalkim">Lalintalkim</option>
                        <option value="tikkim">
                          Tikkim
                        </option>
                        <option value="tatausaha">
                          Tata Usaha
                        </option>
                      </select>
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

export default AddUsers;
