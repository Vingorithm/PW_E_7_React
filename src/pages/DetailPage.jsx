import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { GetAllCatalog } from "../clients/apiCatalog";

const Detail = () => {
  const location = useLocation();
  const car = location.state?.car;

  console.log(car);

  const [productDetail, setProductDetail] = useState(car || {});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [bid, setBid] = useState(productDetail.currentBid || 100000);

  const handleImageSwap = (imageSrc) => {
    setProductDetail((prevState) => ({
      ...prevState,
      largeImage: imageSrc,
    }));
  };

  const handleIncreaseBid = () => setBid(bid + 1000);
  const handleDecreaseBid = () => {
    if (bid > 1000) setBid(bid - 1000);
  };

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const relatedData = await GetAllCatalog();

        setRelatedProducts(relatedData.data.data);
      } catch (error) {
        console.error("Error fetching related products:", error);
        setRelatedProducts([]);
      }
    };

    fetchRelatedProducts();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row align-items-stretch">
        <div className="col-md-8 d-flex flex-column">
          <div className="mb-3 flex-grow-1">
            <img
              id="large-image"
              src={productDetail.largeImage}
              className="img-fluid large-car"
              alt="Car Large"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="row">
            {productDetail.images?.map((image, index) => (
              <div className="col-4 mb-2" key={index}>
                <img
                  src={`images/${image}`}
                  className="img-fluid small-car"
                  alt={`Car Small ${index}`}
                  style={{ height: "150px", objectFit: "cover" }}
                  onClick={() => handleImageSwap(`images/${image}`)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column">
          <h1 className="mb-3">
            <strong>{productDetail.title}</strong>
          </h1>
          <div className="row">
            <div className="col-6">
              <p><strong>Brand</strong></p>
              <p>{productDetail.car?.brand}</p>
              <p><strong>Engine</strong></p>
              <p>{productDetail.car?.capacity}</p>
            </div>
            <div className="col-6">
              <p><strong>Kilometers</strong></p>
              <p>{productDetail.car?.odometer}</p>
              <p><strong>Transmission</strong></p>
              <p>{productDetail.car?.transmission}</p>
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
          <Link to="/payment" className="btn btn-dark mt-auto w-100">
            Bid Now
          </Link>
        </div>
      </div>

      <div className="content mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1>You May Also Like</h1>
          <p className="mb-0">
            <a 
              href="/catalog" 
              style={{ color: 'black', textDecoration: 'none' }}
            >
              See more <i className="fa-solid fa-chevron-right"></i>
            </a>
          </p>
        </div>
        <div className="row g-4">
          {Array.isArray(relatedProducts) && relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.auction.car.image || 'default-image.jpg'}
                    alt={product.auction.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{product.auction.title}</h5>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Kilometers:</span>
                        <span className="small">{product.auction.car.odometer}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Transmission:</span>
                        <span className="small">{product.auction.car.transmission}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Listed on:</span>
                        <span className="small">{product.auction.auction_date}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <span className="text-muted small d-block">Current Bid</span>
                        <span className="fw-bold text-dark">
                          Rp. {product.auction.starting_price}
                        </span>
                      </div>
                      <div className="text-end">
                        <span className="text-muted small d-block">Time Left</span>
                        <span className="fw-bold text-dark">--</span>
                      </div>
                    </div>
                    <button className="btn btn-dark mt-auto w-100">Bid Now</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No related products available.</p>
          )}
        </div>
        <br />
      </div>
    </div>
  );
};

export default Detail;
