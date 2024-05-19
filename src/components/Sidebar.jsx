import React from "react";
import { useSelector } from "react-redux";
import "../assets/css/style.css";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link collapsed" href="/dashboard">
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/data-seksi-lalintalkim">
              <span>Lalintalkim</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/data-seksi-inteldakim">
              <span>Inteldakim</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/data-seksi-tikkim">
              <span>Tikkim</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/data-subbag-tata-usaha">
              <span>Subbag Tata Usaha</span>
            </a>
          </li>
          {user && user.role === "admin" && (
          <li className="nav-item">
            <a className="nav-link collapsed" href="/data-users">
              <span>Data Users</span>
            </a>
          </li>
          )}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
