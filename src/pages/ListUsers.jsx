import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
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
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteUsers = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };

  return (
    <div>
      <main id="main" className="main">
        <div class="pagetitle">
          <h1>Data Table Users</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Tables</li>
              <li class="breadcrumb-item active">Data Users</li>
            </ol>
          </nav>
        </div>

        <div className="pagetitle">
          <a className="btn btn-success" href="/add-users">
            Tambah
          </a>
        </div>

        <section class="section table">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Data Seksi Tikkim</h5>

                  <table class="table datatable">
                    <thead>
                      <tr>
                        <th>
                          <b>N</b>o
                        </th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length === 0 ? (
                        <tr>
                          <td colSpan="6" style={{ textAlign: "center" }}>
                            Tidak terdapat data Users yang tersimpan
                          </td>
                        </tr>
                      ) : (
                        users.map((users, index) => (
                          <tr key={users.id}>
                            <td>{index + 1}</td>
                            <td>{users.username}</td>
                            <td>{users.email}</td>
                            <td>{users.role}</td>
                            <td>
                              <Link
                                to={`/edit-users/${users.uuid}`}
                                type="button"
                                className="btn btn-primary btn-sm me-2"
                              >
                                Edit
                              </Link>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteUsers(users.uuid)}
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
  );
};

export default ListUsers;
