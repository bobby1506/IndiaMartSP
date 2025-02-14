import { useEffect, useState } from "react";

const OrderListSeller = ({ orderSeller, getOrderSeller, getApproval }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrderSeller();
  }, []);

  useEffect(() => {
    setOrders(orderSeller);
  }, [orderSeller]);

  const handleApprovalChange = (orderId) => {
    // getApproval();
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
        {orders?.map((order, index) => {
          return (
            <div key={index} className="col d-flex justify-content-center">
              <div
                className="card shadow-lg p-4"
                style={{
                  background:
                    "linear-gradient(135deg, #f5e6cc, rgb(219, 204, 186))",
                  borderRadius: "16px",
                  width: "350px",
                  //   border: `3px solid ${order.isApproved ? "green" : "red"}`,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div className="card-body text-center">
                  <h5 className="card-title mb-2">{order.shopName}</h5>
                  <p className="mb-1">
                    <strong>Owner:</strong> {order.userName}
                  </p>
                  <p className="mb-1">
                    <strong>Email:</strong> {order.email}
                  </p>
                  <p className="mb-1">
                    <strong>Mobile:</strong> {order.mobile}
                  </p>
                  <p className="mb-1">
                    <strong>Shop Address:</strong> {order.shopAddress}
                  </p>
                  <p className="mb-1">
                    <strong>Shipping:</strong> {order.shippingDetails}
                  </p>
                  <hr />
                  <h6 className="mt-2">Products Ordered:</h6>
                  <ul className="list-group list-group-flush">
                    {order.products.map((product, i) => (
                      <li key={i} className="list-group-item bg-transparent">
                        {product.productName} -{" "}
                        <strong>{product.quantity}</strong>
                      </li>
                    ))}
                  </ul>
                  <hr />
                  <p className="mt-2">
                    <strong>Status:</strong>
                    <span
                      className={`badge ${
                        order.isApproved ? "bg-success" : "bg-danger"
                      } ms-2`}
                    >
                      {order.isApproved ? "Approved" : "Pending"}
                    </span>
                  </p>
                  {!order.isApproved && (
                    <button
                      className="btn btn-success mt-2"
                      onClick={() => handleApprovalChange(order._id)}
                    >
                      Approve Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderListSeller;
