/* eslint-disable react/prop-types */
import { useState } from "react";
import { clearToken } from "../../shared/localStorage";
import { House, Clock, Hourglass, BoxArrowRight } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";

const Sidebar = ({ logout }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLogout = () => {
    clearToken();
    logout();
  };

  return (
    <div
      className="sidebar"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <nav className="nav flex-column">
        <a href="#" className="nav-link">
          <House size={24} className="icon" />
          {isExpanded && " Profile"}
        </a>
        <a href="#" className="nav-link">
          <Clock size={24} className="icon" />
          {isExpanded && " History"}
        </a>
        <a href="#" className="nav-link">
          <Hourglass size={24} className="icon" />
          {isExpanded && " Pending"}
        </a>
      </nav>

      <div className="spacer"></div>

      <button className="logout-btn" onClick={handleLogout}>
        <BoxArrowRight size={24} className="icon" />
        {isExpanded && " Logout"}
      </button>
    </div>
  );
};

export default Sidebar;
