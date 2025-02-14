import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SellerList = ({ seller, getSeller }) => {
  const [sellers, setSellers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getSeller();

    setSellers(seller.data);
  }, [getSeller]);

  return (
    <div className="container mt-4">
      <div className="row">
        {sellers.map((seller, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card" style={{ backgroundColor: "#f5e6cc" }}>
              <div className="card-body">
                <h5 className="card-title">{seller.username}</h5>
                <p className="card-text">{seller.email}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/orderForm/${seller.sellerId}`)}
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

export default SellerList;
