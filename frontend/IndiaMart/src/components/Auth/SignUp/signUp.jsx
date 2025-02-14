/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupForm = ({ register }) => {
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    isSeller: false,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4" style={cardStyle}>
        <h3 className="text-center mb-4" style={{ color: "#5c4b41" }}>
          Sign Up
        </h3>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              ref={inputRef}
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleOnChange}
              placeholder="Enter username"
              className="form-control"
              style={inputStyle}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleOnChange}
              className="form-control"
              style={inputStyle}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              placeholder="Enter password"
              className="form-control"
              style={inputStyle}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Are you a Seller?</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="isSeller"
                  value="true"
                  checked={formData.isSeller}
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, isSeller: true }))
                  }
                />
                <label className="form-check-label" style={radioStyle}>
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="isSeller"
                  value="false"
                  checked={!formData.isSeller}
                  onChange={() =>
                    setFormData((prev) => ({ ...prev, isSeller: false }))
                  }
                />
                <label className="form-check-label" style={radioStyle}>
                  No
                </label>
              </div>
            </div>
          </div>
          <button className="btn w-100 mt-2" type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <p style={{ color: "#5c4b41" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#C47F5D" }}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "350px",
  padding: "20px",
  borderRadius: "15px",
  boxShadow:
    "5px 5px 15px rgba(0,0,0,0.2), -5px -5px 15px rgba(255,255,255,0.8)",
  background: "#F5EFE6",
  border: "none",
};

const inputStyle = {
  borderRadius: "10px",
  border: "none",
  padding: "10px",
};

const radioStyle = {
  fontWeight: "600",
  color: "#5c4b41",
};

const buttonStyle = {
  borderRadius: "10px",
  background: "#D4A373",
  border: "none",
  padding: "10px",
  boxShadow:
    "3px 3px 10px rgba(67, 37, 10, 0.75), -3px -3px 10px rgba(255,255,255,0.8)",
  transition: "0.3s",
};

export default SignupForm;
