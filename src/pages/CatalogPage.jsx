import React, { useState, useEffect } from "react";
import { data, Link } from "react-router-dom";
import { GetAllCatalog } from "../clients/apiCatalog";

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await GetAllCatalog();
                console.log("Data yang diterima: ", response.data.data);
                setCars(response.data.data);
            } catch (err) {
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCars = Array.isArray(cars)
        ? cars.filter((car) => {
              const matchesCategory =
                  selectedCategory === "All" ||
                  car.category === selectedCategory;
              const matchesSearch = car.nama
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase());
              return matchesCategory && matchesSearch;
          })
        : [];

    if (loading) {
        return (
            <div className="container text-center py-5">
                <p>Loading cars...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container text-center py-5">
                <p className="text-danger">{error}</p>
            </div>
        );
    }

    return (
        <div className="container py-4">
            <style>
                {`
          .btn {
            background-color: black;
            color: white;
            border: none;
          }
          .btn:hover {
            background-color: #333;
            color: white;
          }
          .category-btn:not(.active) {
            background-color: white !important;
            color: black !important;
            border: 0.5px solid black !important;
          }
          .category-btn.active {
            background-color: black !important;
            color: white !important;
          }
        `}
            </style>

            <div className="text-center mb-4">
                <h1 className="fw-bold">Our Catalog</h1>
                <br />
                <p className="text-muted">
                    Welcome to AtmaBid, your premier destination for exclusive
                    vehicle auctions. Discover a meticulously curated selection
                    of high-quality cars that cater to every lifestyle and
                    preference, from sleek and practical sedans to luxurious
                    SUVs and cutting-edge electric vehicles. Whether you’re a
                    first-time buyer, a seasoned car enthusiast, or looking for
                    a reliable family vehicle, AtmaBid has something perfect for
                    you.
                </p>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex gap-2">
                    {["All", "Standard", "Luxury", "EV"].map((cat) => (
                        <button
                            key={cat}
                            className={`btn category-btn ${
                                cat === selectedCategory ? "active" : ""
                            }`}
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
                    <button className="btn">Search</button>
                </div>
            </div>

            <div className="row g-4" style={{ minHeight: "400px" }}>
                {filteredCars.length > 0 ? (
                    filteredCars.map((car) => (
                        <div
                            key={car.id}
                            className="col-lg-3 col-md-6 card-item"
                            data-category={car.category}
                        >
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={`/images/${car.image}`}
                                    alt={car.nama}
                                    className="card-img-top"
                                    style={{
                                        height: "200px",
                                        objectFit: "cover",
                                    }}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold mb-3">
                                        {car.nama}
                                    </h5>
                                    <div className="mb-3">
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="text-muted small">
                                                Kilometers:
                                            </span>
                                            <span className="small">
                                                {car.kilometers}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="text-muted small">
                                                Transmission:
                                            </span>
                                            <span className="small">
                                                {car.transmission}
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-1">
                                            <span className="text-muted small">
                                                Listed on:
                                            </span>
                                            <span className="small">
                                                {car.listedDate}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <span className="text-muted small d-block">
                                                Current Bid
                                            </span>
                                            <span className="fw-bold text-dark">
                                                {car.harga}
                                            </span>
                                        </div>
                                        <div className="text-end">
                                            <span className="text-muted small d-block">
                                                Time Left
                                            </span>
                                            <span className="fw-bold text-dark">
                                                {car.timeLeft}
                                            </span>
                                        </div>
                                    </div>
                                    <Link
                                        to="/detail"
                                        className="btn mt-auto w-100"
                                    >
                                        Bid Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="text-muted">
                            No cars found matching your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Catalog;
