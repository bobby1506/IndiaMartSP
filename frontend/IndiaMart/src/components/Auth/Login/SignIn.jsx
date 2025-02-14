/* eslint-disable react/no-unescaped-entities */
import { Form, Button, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SignIn = ({ login }) => {
  const inputRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    login(formData);
  };

  useEffect(() => {
    inputRef.current = inputRef.current.focus();
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        style={{
          width: "350px",
          padding: "20px",
          borderRadius: "15px",
          boxShadow:
            "5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.9)",
          background: "#F5EFE6",
          border: "none",
        }}
      >
        <h3 className="text-center mb-4">Sign In</h3>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              ref={inputRef}
              placeholder="Enter email"
              value={formData.email}
              onChange={handleOnChange}
              style={{
                borderRadius: "10px",
                border: "none",
                padding: "10px",
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              placeholder="Enter password"
              style={{
                borderRadius: "10px",
                border: "none",
                padding: "10px",
              }}
            />
          </Form.Group>
          <Button
            className="w-100 mt-2"
            type="submit"
            style={{
              borderRadius: "10px",
              background: "#D4A373",
              border: "none",
              padding: "10px",
              color: "#fff",
              fontWeight: "bold",
              boxShadow:
                "3px 3px 10px rgba(0,0,0,0.1), -3px -3px 10px rgba(255,255,255,0.8)",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#C47F5D")}
            onMouseOut={(e) => (e.target.style.background = "#D4A373")}
          >
            Login
          </Button>
        </Form>
        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#C47F5D" }}>
              Sign Up
            </Link>
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default SignIn;
