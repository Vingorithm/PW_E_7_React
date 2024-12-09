import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const filterCategory = (category, element) => {
    const items = document.querySelectorAll('.card-item');
    items.forEach((item) => {
      if (category === 'All' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });
    element.classList.add('active');
  };

  return (
    <div className="container-main">
      <div className="content">
        <div className="container text-center">
          <h1 className="title">
            <strong>Our Catalog</strong>
          </h1>
          <p>
            Welcome to Atma AutoBid exclusive catalog, where you can explore a curated selection of high-quality
            vehicles. Dive into the details, and find the perfect vehicle that meets your needs.
          </p>

          <div className="row mb-4">
            <div className="col-md-6 text-start">
              <span className="me-2"><strong>Category:</strong></span>
              <button className="btn category-btn me-2 active" id="all-btn" onClick={(e) => filterCategory('All', e.target)}>
                All
              </button>
              <button className="btn category-btn me-2" onClick={(e) => filterCategory('Standard', e.target)}>
                Standard
              </button>
              <button className="btn category-btn me-2" onClick={(e) => filterCategory('Luxury', e.target)}>
                Luxury
              </button>
              <button className="btn category-btn me-2" onClick={(e) => filterCategory('EV', e.target)}>
                EV
              </button>
            </div>

            <div className="col-md-6 text-end d-flex align-items-center">
              <div className="input-group mb-0 me-2">
                <input type="text" className="form-control" placeholder="Search vehicles" aria-label="Search vehicles" id="catalog-search" />
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
              <div className="dropdown">
                <button className="btn filter-btn dropdown-toggle" type="button" id="filterDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Filter
                </button>
                <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                  <li><a className="dropdown-item" href="#">Sort By Price</a></li>
                  <li><a className="dropdown-item" href="#">Sort By Time</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row" id="catalog">
            {/* Example of card items, you can replace this with dynamic data */}
            <div className="col-md-3 mb-4 card-item" data-category="Standard">
              <div className="card">
                <img src="car_image.jpg" className="card-img-top" alt="Car" />
                <div className="card-body">
                  <h5 className="card-title text-card"><strong>Car Name</strong></h5>
                  <p className="card-text text-card">
                    <span>Kilometers: 20,000</span>
                    <span>Transmission: Automatic</span>
                    <span className="card-span-list">Listed on: 12-10-2024</span>
                  </p>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="bid-section" style={{ textAlign: 'left' }}>
                      <span className="text-muted small">Current Bid</span><br />
                      <span className="bid-price"><strong>$20,000</strong></span>
                    </div>
                    <div className="time-section text-right">
                      <span className="text-muted small">Time Left</span><br />
                      <span className="time-left">2d 10h</span>
                    </div>
                  </div>
                  <br />
                  <Link to="/detail" className="btn custom-bid-btn">Bid Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Roboto;
        }

        body {
          background-color: white;
          height: 100%;
          margin: 0;
          padding: 0;
        }

        .container-main {
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .content {
          padding-top: 140px;
          flex-grow: 1;
        }

        .category-btn, .filter-btn {
          background-color: white;
          color: black;
          border: 1px solid #6c757d;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .category-btn:hover {
          background-color: black;
          color: white;
        }

        .category-btn.active {
          background-color: black;
          color: white;
        }

        .card-item {
          margin-bottom: 16px;
        }

        .card-text {
          margin-bottom: 8px;
        }

        .bid-price {
          font-size: 20px;
          color: #000;
        }

        .custom-bid-btn {
          background-color: black;
          color: white;
          border: none;
          padding: 10px 0;
          font-size: 14px;
        }

        .custom-bid-btn:hover {
          background-color: rgb(78, 78, 78);
        }
      `}</style>
    </div>
  );
};

export default Catalog;
