import React from "react";
import "../assets/css/style.css";

const Sidebar = () => {
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
              <span>Data Lalintalkim</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/data-seksi-inteldakim">
              <span>Data Inteldakim</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/data-seksi-tikkim">
              <span>Data Tikkim</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/data-subbag-tata-usaha">
              <span>Data Subbag Tata Usaha</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
