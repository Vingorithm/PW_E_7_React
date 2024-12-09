import React from 'react';
import { FaCreditCard } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="container mt-5">
        {/* Order Section */}
        <div className="row">
          <div className="col-md-12">
            <h1>Your Order</h1>
            <div className="card mb-3 d-flex flex-row">
              <img
                src="images/car2.jpg"
                className="img-fluid"
                alt="Car Image"
                style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title"><strong>Mercedes-AMG GT 4-Door Coupe</strong></h5>
                <p className="card-text"><small className="text-muted">Order Date: 22 October 2024</small></p>
                <p className="card-text"><small className="text-muted">Harga: Rp. 600.000.000</small></p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <h1>Payment Method</h1>
        <div className="row mt-3">
          <div className="col-md-2">
            <button className="btn custom-button" style={{ width: '100%' }}>
              <FaCreditCard style={{ fontSize: '30px' }} />
              <div>Mastercard</div>
            </button>
          </div>
          <div className="col-md-2">
            <button className="btn custom-button" style={{ width: '100%' }}>
              <FaCreditCard style={{ fontSize: '30px' }} />
              <div>Paypal</div>
            </button>
          </div>
          <div className="col-md-2">
            <button className="btn custom-button" style={{ width: '100%' }}>
              <FaCreditCard style={{ fontSize: '30px' }} />
              <div>Dana</div>
            </button>
          </div>
          <div className="col-md-2">
            <button className="btn custom-button" style={{ width: '100%' }}>
              <FaCreditCard  style={{ fontSize: '30px' }} />
              <div>Bca Mobile</div>
            </button>
          </div>
          <div className="col-md-2">
            <button className="btn custom-button" style={{ width: '100%' }}>
              <FaCreditCard style={{ fontSize: '30px' }} />
              <div>Gopay</div>
            </button>
          </div>
          <div className="col-md-2">
            <button className="btn custom-button" style={{ width: '100%' }}>
              <FaCreditCard style={{ fontSize: '30px' }} />
              <div>Brimo</div>
            </button>
          </div>
        </div>

        {/* Payment Summary */}
        <hr />
        <div className="d-flex justify-content-between">
          <h5>Subtotal</h5>
          <h5>Rp. 600.000.000</h5>
        </div>
        <div className="d-flex justify-content-between">
          <h5>Est. Shipping Cost</h5>
          <h5>Rp. 12.000.000</h5>
        </div>
        <div className="d-flex justify-content-between">
          <h5>Tax (11%)</h5>
          <h5>Rp. 66.000.000</h5>
        </div>
        <div className="d-flex justify-content-between">
          <h5>Application Cost</h5>
          <h5>Rp. 100.000</h5>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h5><strong>Total</strong></h5>
          <h5><strong>Rp. 688.100.000</strong></h5>
        </div>

        {/* Pay Now Button */}
        <div className="d-flex justify-content-between mt-4">
          <h5></h5>
          <a href="/" className="btn btn-primary" style={{ padding: '10px 30px' }}>Pay Now</a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
