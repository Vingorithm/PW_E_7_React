import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const dataMobil = [
    {
      id: 1,
      nama: "Toyota Camry",
      category: "Standard",
      image: "camry.jpg",
      harga: "Rp 350.000.000",
      kilometers: "20,000",
      transmission: "Automatic",
      listedDate: "12-10-2024",
      timeLeft: "2d 10h"
    },
    {
      id: 2,
      nama: "BMW 320i",
      category: "Luxury",
      image: "bmw.jpg",
      harga: "Rp 850.000.000",
      kilometers: "15,000",
      transmission: "Automatic",
      listedDate: "12-10-2024",
      timeLeft: "1d 8h"
    },
    {
      id: 3,
      nama: "Tesla Model 3",
      category: "EV",
      image: "tesla.jpg",
      harga: "Rp 750.000.000",
      kilometers: "10,000",
      transmission: "Automatic",
      listedDate: "12-10-2024",
      timeLeft: "3d 5h"
    },
    {
      id: 4,
      nama: "Honda Civic",
      category: "Standard",
      image: "civic.jpg",
      harga: "Rp 450.000.000",
      kilometers: "25,000",
      transmission: "Automatic",
      listedDate: "12-10-2024",
      timeLeft: "4d 12h"
    }
  ];

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
    <div className="container-fluid px-4 py-3">
      {/* Header Section */}
      <div className="mb-4">
        <h1 className="mb-3"><strong>Our Catalog</strong></h1>
        <p className="text-muted">
          Welcome to Atma AutoBid's exclusive catalog, where you can explore a curated selection of high-quality vehicles. 
          Dive into the details, and find the perfect vehicle that meets your needs.
        </p>
      </div>

      {/* Filter and Search Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Category Buttons */}
        <div className="d-flex align-items-center gap-2">
          <button 
            className="btn btn-outline-primary category-btn active" 
            onClick={(e) => filterCategory('All', e.target)}
          >
            All
          </button>
          <button 
            className="btn btn-outline-primary category-btn" 
            onClick={(e) => filterCategory('Standard', e.target)}
          >
            Standard
          </button>
          <button 
            className="btn btn-outline-primary category-btn" 
            onClick={(e) => filterCategory('Luxury', e.target)}
          >
            Luxury
          </button>
          <button 
            className="btn btn-outline-primary category-btn" 
            onClick={(e) => filterCategory('EV', e.target)}
          >
            EV
          </button>
        </div>

        {/* Search and Sort */}
        <div className="d-flex align-items-center gap-3">
          <div className="input-group" style={{ width: '300px' }}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search vehicles..."
              aria-label="Search vehicles" 
            />
            <button className="btn btn-outline-primary" type="button">
              Search
            </button>
          </div>
          <div className="dropdown">
            <button 
              className="btn btn-outline-secondary dropdown-toggle" 
              type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              Sort By
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item">Price: Low to High</button></li>
              <li><button className="dropdown-item">Price: High to Low</button></li>
              <li><button className="dropdown-item">Time Left</button></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="row g-4">
        {dataMobil.map((item) => (
          <div key={item.id} className="col-lg-3 col-md-6 card-item" data-category={item.category}>
            <div className="card h-100 shadow-sm">
              <img 
                src={`/images/${item.image}`} 
                className="card-img-top"
                alt={item.nama}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-3">{item.nama}</h5>
                <div className="mb-3">
                  <div className="small text-muted mb-1">
                    <i className="bi bi-speedometer2 me-2"></i>
                    {item.kilometers} km
                  </div>
                  <div className="small text-muted mb-1">
                    <i className="bi bi-gear me-2"></i>
                    {item.transmission}
                  </div>
                  <div className="small text-muted">
                    <i className="bi bi-calendar me-2"></i>
                    Listed: {item.listedDate}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-auto mb-3">
                  <div>
                    <div className="text-muted small">Current Bid</div>
                    <div className="fw-bold text-primary">{item.harga}</div>
                  </div>
                  <div className="text-end">
                    <div className="text-muted small">Time Left</div>
                    <div className="fw-bold text-danger">{item.timeLeft}</div>
                  </div>
                </div>
                <Link 
                  to="/detail" 
                  className="btn btn-primary w-100"
                >
                  Bid Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;