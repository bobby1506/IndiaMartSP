/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderForm = ({ createOrder }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { sellerId } = useParams();
  const [formData, setFormData] = useState({
    userName: "",
    address: "",
    email: "",
    mobile: "",
    shippingDetails: "",
    shopName: "",
    shopAddress: "",
    products: [{ productName: "", quantity: "" }],
  });

  const handleOnChange = (e, index = null) => {
    const { name, value } = e.target;

    if (index !== null) {
      const updatedProducts = [...formData.products];
      updatedProducts[index][name] = value;
      setFormData((prev) => ({ ...prev, products: updatedProducts }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addProduct = () => {
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, { productName: "", quantity: "" }],
    }));
  };

  const removeProduct = (index) => {
    const updatedProducts = formData.products.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, products: updatedProducts }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", formData);
    createOrder(formData, sellerId);
    navigate("/");
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 p-3">
      <div className="card p-4 shadow-sm w-100" style={cardStyle}>
        <h3 className="text-center mb-3">Place Order</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              ref={inputRef}
              className="form-control"
              name="userName"
              value={formData.userName}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleOnChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              name="mobile"
              value={formData.mobile}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Shipping Details</label>
            <textarea
              className="form-control"
              name="shippingDetails"
              value={formData.shippingDetails}
              onChange={handleOnChange}
              required
            ></textarea>
          </div>

          <h5 className="mt-3">Organization Details</h5>
          <div className="mb-3">
            <label className="form-label">Shop Name</label>
            <input
              type="text"
              className="form-control"
              name="shopName"
              value={formData.shopName}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Shop Address</label>
            <textarea
              className="form-control"
              name="shopAddress"
              value={formData.shopAddress}
              onChange={handleOnChange}
              required
            ></textarea>
          </div>

          <h5 className="mt-3">Products</h5>
          {formData.products.map((product, index) => (
            <div className="d-flex gap-2 mb-2" key={index}>
              <input
                type="text"
                className="form-control"
                name="productName"
                placeholder="Product Name"
                value={product.productName}
                onChange={(e) => handleOnChange(e, index)}
                required
              />
              <input
                type="number"
                className="form-control"
                name="quantity"
                placeholder="Quantity"
                value={product.quantity}
                onChange={(e) => handleOnChange(e, index)}
                required
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeProduct(index)}
                >
                  &times;
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="btn btn-success mb-3"
            onClick={addProduct}
          >
            Add Product
          </button>

          <button type="submit" className="btn w-100" style={buttonStyle}>
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

const cardStyle = {
  maxWidth: "600px",
  width: "100%",
  borderRadius: "15px",
  background: "#F5EFE6",
  boxShadow:
    "5px 5px 15px rgba(0,0,0,0.2), -5px -5px 15px rgba(255,255,255,0.8)",
};

const buttonStyle = {
  background: "#D4A373",
  color: "white",
  borderRadius: "10px",
  border: "none",
  padding: "10px",
  fontWeight: "bold",
  transition: "0.3s",
};

export default OrderForm;
