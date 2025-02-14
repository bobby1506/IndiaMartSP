import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const SellerList = ({ seller, getSeller }) => {
  const [sellers, setSellers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSeller();
  }, []);

  useEffect(() => {
    if (seller.seller) {
      setSellers(seller.seller);
    }
  }, [seller]);

  return (
    <div className="container mt-5" style={{ maxWidth: "1200px" }}>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {sellers?.map((seller, index) => (
          <div key={index} className="col d-flex justify-content-center">
            <div
              className="card shadow-lg p-4 text-center"
              style={{
                background:
                  "linear-gradient(135deg,rgb(254, 247, 233),rgb(250, 240, 228))",
                borderRadius: "16px",
                width: "300px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="card-body">
                <p className="mb-2">
                  <strong>Name:</strong>{" "}
                  <span className="fw-normal">{seller.userName}</span>
                </p>
                <p className="mb-4">
                  <strong>Email:</strong>{" "}
                  <span className="fw-normal">{seller.email}</span>
                </p>
                <button
                  className="btn w-100 mt-2"
                  type="submit"
                  style={buttonStyle}
                  onClick={() => navigate(`/orderForm/${seller._id}`)}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const buttonStyle = {
  borderRadius: "10px",
  background: "#D4A373",
  border: "none",
  padding: "10px",
  // boxShadow:
  //   "3px 3px 10px rgba(182, 120, 65, 0.75), -3px -3px 10px rgba(255,255,255,0.8)",
  transition: "0.3s",
};

export default SellerList;
