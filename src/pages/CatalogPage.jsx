import React from "react";
import { Link } from "react-router-dom";

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
      timeLeft: "2d 10h",
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
      timeLeft: "1d 8h",
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
      timeLeft: "3d 5h",
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
      timeLeft: "4d 12h",
    },
  ];

  const filterCategory = (category, element) => {
    const items = document.querySelectorAll(".card-item");
    items.forEach((item) => {
      if (category === "All" || item.getAttribute("data-category") === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });

    const buttons = document.querySelectorAll(".category-btn");
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    element.classList.add("active");
  };

  return (
    <div className="container py-4">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Our Catalog</h1>
        <br />
        <p className="text-muted">
        Welcome to AtmaBid, your premier destination for exclusive vehicle auctions. Discover a meticulously curated selection of high-quality cars that cater to every lifestyle and preference, from sleek and practical sedans to luxurious SUVs and cutting-edge electric vehicles. Whether you’re a first-time buyer, a seasoned car enthusiast, or looking for a reliable family vehicle, AtmaBid has something perfect for you.  
        </p>
      </div>

      {/* Filter and Search */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Categories */}
        <div className="d-flex gap-2">
          {["All", "Standard", "Luxury", "EV"].map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-primary category-btn ${cat === "All" ? "active" : ""}`}
              onClick={(e) => filterCategory(cat, e.target)}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Search and Sort */}
        <div className="d-flex gap-3 align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Search vehicles..."
            style={{ maxWidth: "300px" }}
          />
          <button className="btn btn-outline-primary">Search</button>
        </div>
      </div>

     {/* Product Cards */}
        <div className="row g-4">
        {dataMobil.map((car) => (
            <div key={car.id} className="col-lg-3 col-md-6 card-item" data-category={car.category}>
            <div className="card h-100 shadow-sm">
                <img
                src={`/images/${car.image}`}
                alt={car.nama}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-3">{car.nama}</h5>
                
                {/* Vehicle Details */}
                <div className="mb-3">
                    <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted small">Kilometers:</span>
                    <span className="small">{car.kilometers}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted small">Transmission:</span>
                    <span className="small">{car.transmission}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted small">Listed on:</span>
                    <span className="small">{car.listedDate}</span>
                    </div>
                </div>

                {/* Bid and Time Information */}
                <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                    <span className="text-muted small d-block">Current Bid</span>
                    <span className="fw-bold text-primary">{car.harga}</span>
                    </div>
                    <div className="text-end">
                    <span className="text-muted small d-block">Time Left</span>
                    <span className="fw-bold text-danger">{car.timeLeft}</span>
                    </div>
                </div>

                <Link to="/detail" className="btn btn-primary mt-auto w-100">
                    Bid Now
                </Link>
                </div>
            </div>
            </div>
        ))}
        <br />
        </div>
    </div>
  );
};

export default Catalog;
