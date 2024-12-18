import React, { useState, useEffect } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logoBlu from "../assets/images/payment/logo-blu.png";
import logoBrimo from "../assets/images/payment/logo-brimo.png";
import logoDana from "../assets/images/payment/logo-dana.png";
import logoGopay from "../assets/images/payment/logo-gopay.png";
import logoMastercard from "../assets/images/payment/logo-mastercard.png";
import logoPaypal from "../assets/images/payment/logo-paypal.png";

const Payment = () => {
  const [order, setOrder] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [summary, setSummary] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const navigate = useNavigate();

  const paymentLogos = {
    Mastercard: logoMastercard,
    Paypal: logoPaypal,
    Dana: logoDana,
    "Bca Mobile": logoBlu,
    Gopay: logoGopay,
    Brimo: logoBrimo,
  };

  useEffect(() => {
    const fetchData = async () => {
      const orderData = {
        image: "images/car2.jpg",
        title: "Mercedes-AMG GT 4-Door Coupe",
        orderDate: "22 October 2024",
        price: 600000000,
      };
      const paymentMethodData = ["Mastercard", "Paypal", "Dana", "Bca Mobile", "Gopay", "Brimo"];
      const summaryData = {
        subtotal: 600000000,
        shippingCost: 12000000,
        tax: 66000000,
        applicationCost: 100000,
        total: 688100000,
      };

      setOrder(orderData);
      setPaymentMethods(paymentMethodData);
      setSummary(summaryData);
    };

    fetchData();
  }, []);

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    setIsPaymentSuccessful(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "calc(100vh - 150px)" }}>
      <style>
        {`
          .payment-success-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .payment-success-content {
            background: white;
            padding: 20px 40px;
            border-radius: 8px;
            text-align: center;
            animation: fadeIn 0.5s ease;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .selected-method {
            background-color: #d4edda !important;
            border-color: #155724 !important;
            color: #155724 !important;
          }

          .payment-button img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
          }
        `}
      </style>

      <div className="container mt-5" style={{ paddingBottom: "100px" }}>
        {/* Payment Success Overlay */}
        {isPaymentSuccessful && (
          <div className="payment-success-overlay">
            <div className="payment-success-content text-center">
              <h1>Payment Successful!</h1>
              <MdOutlineDownloadDone style={{ fontSize: "100px", color: "black" }} />
              <p>Thank you for trusting Atma Bid.</p>
            </div>
          </div>
        )}

        {/* Order Section */}
        {order && (
          <div className="row mb-4">
            <div className="col-md-12">
              <h2>Your Order</h2>
              <div className="card d-flex flex-row">
                <img
                  src={order.image}
                  className="img-fluid"
                  alt="Car"
                  style={{ width: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{order.title}</h5>
                  <p className="card-text text-muted">Order Date: {order.orderDate}</p>
                  <p className="card-text text-muted">Price: Rp. {order.price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Payment Methods */}
        <h2>Payment Method</h2>
        <div className="row mt-3">
          {paymentMethods.map((method) => (
            <div className="col-md-2 mb-3" key={method}>
              <button
                className={`btn payment-button ${selectedPaymentMethod === method ? "selected-method" : ""}`}
                style={{ width: "100%" }}
                onClick={() => handleSelectPaymentMethod(method)}
              >
                <img
                  src={paymentLogos[method]}
                  alt={method}
                  onError={(e) => (e.target.src = logoMastercard)} // Fallback to Mastercard
                />
                <div>{method}</div>
              </button>
            </div>
          ))}
        </div>

        {/* Payment Summary */}
        {summary && (
          <>
            <hr />
            {[
              ["Subtotal", summary.subtotal],
              ["Est. Shipping Cost", summary.shippingCost],
              ["Tax (11%)", summary.tax],
              ["Application Cost", summary.applicationCost],
              ["Total", summary.total],
            ].map(([label, value]) => (
              <div className="d-flex justify-content-between" key={label}>
                <h5>{label}</h5>
                <h5>Rp. {value.toLocaleString()}</h5>
              </div>
            ))}
          </>
        )}

        {/* Pay Now Button */}
        <div className="d-flex justify-content-end mt-4">
          <button onClick={handlePayment} className="btn btn-dark" style={{ padding: "10px 30px" }}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
