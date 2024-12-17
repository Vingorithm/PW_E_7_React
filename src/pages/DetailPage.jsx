import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import { GetAllCatalog, ShowCarCatalog } from "../clients/apiCatalog";
import { ShowAuction } from "../clients/apiAuction";

const Detail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [bid, setBid] = useState(0);

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await ShowAuction(id);
        console.log(response.data);
        setProductDetail(response.data);
        setBid(parseFloat(response.data.starting_price) || 100000);
      } catch (error) {
        console.error("Error fetching car detail:", error);
      }
    };

  const fetchRelatedProducts = async () => {
      try {
        const relatedData = await GetAllCatalog();
        setRelatedProducts(relatedData?.data?.data || []);
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchCarDetail();
    fetchRelatedProducts();
  }, [id]);

  const handleIncreaseBid = () => setBid((prevBid) => prevBid + 1000);
  const handleDecreaseBid = () => {
    setBid((prevBid) => (prevBid > 1000 ? prevBid - 1000 : prevBid));
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-stretch">
        <div className="col-md-8 d-flex flex-column">
          <div className="mb-3 flex-grow-1">
            <img
              src={productDetail.car?.image}
              className="img-fluid large-car"
              alt={productDetail.title}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-md-4 d-flex flex-column">
          <h1 className="mb-3">
            <strong>{productDetail.title}</strong>
          </h1>
          <div className="row">
            <div className="col-6">
              <p><strong>Brand</strong></p>
              <p>{productDetail.car?.brand || 'Unknown'}</p>
              <p><strong>Category</strong></p>
              <p>{productDetail.car?.category}</p>
              <p><strong>Engine Capacity</strong></p>
              <p>{productDetail.car?.capacity}</p>
            </div>
            <div className="col-6">
              <p><strong>Kilometers</strong></p>
              <p>{productDetail.car?.odometer}</p>
              <p><strong>Transmission</strong></p>
              <p>{productDetail.car?.transmission}</p>
              <p><strong>Condition</strong></p>
              <p>{productDetail.car?.condition}</p>
            </div>
          </div>
          <p><strong>Description</strong></p>
          <p>{productDetail.description}</p>
          <p><strong>Current Bid</strong></p>
          <p style={{ fontSize: "24px" }}>Rp. {bid.toLocaleString()}</p>
          <p><strong>Auction Date</strong></p>
          <p>{productDetail.auction_date}</p>
          <p><strong>Time</strong></p>
          <p>{productDetail.start_time} - {productDetail.end_time}</p>
          
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
            <Link 
              to="/catalog" 
              style={{ color: 'black', textDecoration: 'none' }}
            >
              See more <i className="fa-solid fa-chevron-right"></i>
            </Link>
          </p>
        </div>
        <div className="row g-4">
          {Array.isArray(relatedProducts) && relatedProducts.length > 0 ? (
            relatedProducts.map((product) => (
              <div className="col-lg-3 col-md-6" key={product.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.auction?.car?.image || 'default-image.jpg'}
                    alt={product.auction?.car?.brand}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{product.auction?.car?.brand}</h5>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Kilometers:</span>
                        <span className="small">{product.auction?.car?.odometer}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Transmission:</span>
                        <span className="small">{product.auction?.car?.transmission}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="text-muted small">Listed on:</span>
                        <span className="small">{product.auction?.auction_date}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <span className="text-muted small d-block">Starting Price</span>
                        <span className="fw-bold text-dark">
                          Rp. {parseFloat(product.auction?.starting_price).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-end">
                        <span className="text-muted small d-block">Status</span>
                        <span className="fw-bold text-dark">{product.auction?.status}</span>
                      </div>
                    </div>
                    <Link to={`/detail/${product.id}`} className="btn btn-dark mt-auto w-100">
                      Bid Now
                    </Link>
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