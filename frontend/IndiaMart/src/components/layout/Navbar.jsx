/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { clearToken } from "../../shared/localStorage";

const CustomNavbar = ({ logout }) => {
  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener("click", () => {
        navbarCollapse.classList.toggle("show");
      });
    }
  }, []);

  const handleLogout = () => {
    clearToken();
    logout();
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        width: "100vw",
        backgroundColor: "#f5e6cc", // Creamy color
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "15px 0",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: "#5c4b41",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          MyBrand
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={navLinkStyle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders" style={navLinkStyle}>
                Order History
              </Link>
            </li>
          </ul>
          <button
            className="btn"
            onClick={handleLogout}
            style={logoutButtonStyle}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

const navLinkStyle = {
  color: "#5c4b41",
  fontWeight: "600",
  fontSize: "1.1rem",
  margin: "0 15px",
  transition: "0.3s",
  textDecoration: "none",
};

const logoutButtonStyle = {
  backgroundColor: "#8b6f47",
  color: "white",
  fontWeight: "600",
  fontSize: "1rem",
  marginLeft: "20px",
  padding: "8px 15px",
  borderRadius: "5px",
  border: "none",
  transition: "0.3s",
};

export default CustomNavbar;
