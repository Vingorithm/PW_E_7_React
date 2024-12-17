import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetAllUpcoming } from "../clients/apiUpcoming";
import { GetAllCatalog } from "../clients/apiCatalog";

const Upcoming = () => {
  const [loading, setLoading] = useState(true);
  const [dataMobil, setDataMobil] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = (listedDate) => {
    const targetDate = new Date(listedDate);
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) return "00d 00h 00m 00s";

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await GetAllUpcoming();
        console.log(response.data);
        const upcomingCars = response.data.data.filter((car) => car.status === "Upcoming");
        setDataMobil(upcomingCars);
      } catch (error) {
        console.error("Error fetching catalog data:", error);
        setDataMobil([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);  

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = {};
      dataMobil.forEach((car) => {
        updatedTimeLeft[car.id] = calculateTimeLeft(car.listedDate);
      });
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [dataMobil]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (category) => setSelectedCategory(category);

  const filteredCars = (dataMobil || []).filter((car) => {
    const matchesCategory = selectedCategory === "All" || car.category === selectedCategory;
    const matchesSearch = car.nama.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });  

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Upcoming Cars</h1>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          {["All", "Standard", "Luxury", "EV"].map((cat) => (
            <button
              key={cat}
              className={`btn btn-outline-dark ${cat === selectedCategory ? "active" : ""}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search vehicles..."
          style={{ maxWidth: "300px" }}
          value={searchQuery}
          onChange={handleSearchChange}
        />
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
            filteredCars.map((car) => (
              <div key={car.id} className="col-lg-3 col-md-6">
                <div className="card h-100 shadow-sm">
                  <img
                    src={`/images/${car.image}`}
                    alt={car.nama}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{car.nama}</h5>
                    <div className="mb-3">
                      <p>Kilometers: {car.kilometers}</p>
                      <p>Transmission: {car.transmission}</p>
                      <p>Listed on: {car.listedDate}</p>
                    </div>
                    <div className="text-danger fw-bold">
                      Time Left: {timeLeft[car.id] || "Loading..."}
                    </div>
                    <Link
                      to="/detail"
                      className="btn btn-dark mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No cars found matching your search.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Upcoming;
