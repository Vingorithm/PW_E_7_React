import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Upcoming = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dataMobil = [
    {
      id: 1,
      nama: "Toyota Camry",
      category: "Standard",
      image: "camry.jpg",
      harga: "Rp 350.000.000",
      kilometers: "20,000",
      transmission: "Automatic",
      listedDate: "12-17-2024",
    },
    {
      id: 2,
      nama: "BMW 320i",
      category: "Luxury",
      image: "bmw.jpg",
      harga: "Rp 850.000.000",
      kilometers: "15,000",
      transmission: "Automatic",
      listedDate: "12-31-2024",
    },
    {
      id: 3,
      nama: "Tesla Model 3",
      category: "EV",
      image: "tesla.jpg",
      harga: "Rp 750.000.000",
      kilometers: "10,000",
      transmission: "Automatic",
      listedDate: "12-31-2024",
    },
    {
      id: 4,
      nama: "Honda Civic",
      category: "Standard",
      image: "civic.jpg",
      harga: "Rp 450.000.000",
      kilometers: "25,000",
      transmission: "Automatic",
      listedDate: "12-31-2024",
    },
  ];

  const calculateTimeLeft = (listedDate) => {
    const targetDate = new Date(listedDate);
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      return "00d 00h 00m 00s";
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setLoading(true);

    const interval = setInterval(() => {
      const updatedTimeLeft = {};
      dataMobil.forEach((car) => {
        updatedTimeLeft[car.id] = calculateTimeLeft(car.listedDate);
      });
      setTimeLeft(updatedTimeLeft);
      setLoading(false);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCars = dataMobil.filter((car) => {
    const matchesCategory = selectedCategory === "All" || car.category === selectedCategory;
    const matchesSearch = car.nama.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const simulateError = false;

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Upcoming Cars</h1>
        <p className="text-muted">
          Discover our upcoming vehicle lineup at Atma AutoBid, featuring the latest and most anticipated
          models ready to be auctioned. Stay ahead and explore the next wave of high-quality vehicles before anyone else.
        </p>
      </div>

      {simulateError && (
        <div className="alert alert-danger" role="alert">
          There was an error loading the data. Please try again later.
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          {["All", "Standard", "Luxury", "EV"].map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-dark category-btn ${cat === selectedCategory ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="d-flex gap-3 align-items-center">
          <input
            type="text"
            className="form-control"
            placeholder="Search vehicles..."
            style={{ maxWidth: "300px" }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-dark">Search</button>
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => {
              return (
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

                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <div>
                          <span className="text-muted small d-block">Current Bid</span>
                          <span className="fw-bold text-primary">{car.harga}</span>
                        </div>
                        <div className="text-end">
                          <span className="text-muted small d-block">Time Left</span>
                          <span className="fw-bold text-danger">
                            {timeLeft[car.id] || "Loading..."}
                          </span>
                        </div>
                      </div>

                      <Link
                        to="/detail"
                        className={`btn btn-dark mt-auto w-100 ${timeLeft[car.id] === "00d 00h 00m 00s" ? '' : 'disabled'}`}
                        onClick={timeLeft[car.id] !== "00d 00h 00m 00s" ? (e) => e.preventDefault() : null}
                        aria-disabled={timeLeft[car.id] !== "00d 00h 00m 00s" ? 'true' : 'false'}
                      >
                        Bid Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center">
              <p className="text-muted">No cars found matching your search.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Upcoming;
