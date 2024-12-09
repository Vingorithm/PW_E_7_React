import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const [largeImage, setLargeImage] = useState("images/car1.jpg");
  const [bid, setBid] = useState(100000);

  const images = [
    { image: "car1.jpg" },
    { image: "car2.jpg" },
    { image: "car3.jpg" },
  ];

  const handleImageSwap = (imageSrc) => {
    setLargeImage(imageSrc);
  };

  const handleIncreaseBid = () => {
    setBid(bid + 1000);
  };

  const handleDecreaseBid = () => {
    if (bid > 1000) {
      setBid(bid - 1000);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-stretch">
        <div className="col-md-8 d-flex flex-column">
          <div className="mb-3 flex-grow-1">
            <img
              id="large-image"
              src={largeImage}
              className="img-fluid large-car"
              alt="Car Large"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="row">
            {images.map((image, index) => (
              <div className="col-4 mb-2" key={index}>
                <img
                  src={`images/${image.image}`}
                  className="img-fluid small-car"
                  alt={`Car Small ${index}`}
                  style={{ height: "150px", objectFit: "cover" }}
                  onClick={() => handleImageSwap(`images/${image.image}`)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column">
          <h1 className="mb-3">
            <strong>Mercedes-AMG GT 4-Door Coupe</strong>
          </h1>
          <div className="row">
            <div className="col-6">
              <p><strong>Brand</strong></p>
              <p>Mercedes</p>
              <p><strong>Engine</strong></p>
              <p>2.5L I6</p>
            </div>
            <div className="col-6">
              <p><strong>Kilometers</strong></p>
              <p>10,000</p>
              <p><strong>Transmission</strong></p>
              <p>Automatic</p>
            </div>
          </div>
          <p><strong>Current Bid</strong></p>
          <p style={{ fontSize: "24px" }}>Rp. {bid.toLocaleString()}</p>
          <p><strong>Time Left</strong></p>
          <div className="row text-center mt-3">
            {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
              <div className="col-3" key={index}>
                <div className="time-box">
                  <p><strong>{unit}</strong></p>
                  <p style={{ fontSize: "24px" }}>--</p>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleDecreaseBid}
            >
              -
            </button>
            <input
              type="number"
              className="form-control text-center mx-2"
              value={bid}
              min="1000"
              step="1000"
              readOnly
              style={{ width: "100%" }}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleIncreaseBid}
            >
              +
            </button>
          </div>
          <br />
          <button className="btn btn-primary" style={{ width: "100%" }}>
            Place Bid
          </button>
        </div>
      </div>

      <div className="content mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>You May Also Like</h1>
            <p className="mb-0">
            <a href="/catalog" className="navlink button-nav">
                See more <i className="fa-solid fa-chevron-right"></i>
            </a>
            </p>
        </div>
        <div className="row g-4">
            {[...Array(8)].map((_, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
                <div className="card h-100 shadow-sm">
                <img
                    src="images/car2.jpg"
                    alt={`Car ${index}`}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">
                    Mercedes-AMG GT 4-Door Coupe
                    </h5>
                    <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Kilometers:</span>
                        <span className="small">20,000</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Transmission:</span>
                        <span className="small">Automatic</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Listed on:</span>
                        <span className="small">12-10-2024</span>
                    </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <span className="text-muted small d-block">Current Bid</span>
                        <span className="fw-bold text-primary">Rp. 600.000.000</span>
                    </div>
                    <div className="text-end">
                        <span className="text-muted small d-block">Time Left</span>
                        <span className="fw-bold text-danger">2d 10h</span>
                    </div>
                    </div>
                    <button className="btn btn-primary mt-auto w-100">Bid Now</button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default Detail;
