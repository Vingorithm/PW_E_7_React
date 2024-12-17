import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './Home.css';
import Video from '../../../assets/videos/vid1.mp4';
import Video2 from '../../../assets/videos/vid2.mp4';
import Image1 from '../../../assets/images/bids1.jpg';
import Image2 from '../../../assets/images/bids2.jpg';
import Image3 from '../../../assets/images/bids3.webp';
import Image4 from '../../../assets/images/car3.jpg';

import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiAuctionLine } from "react-icons/ri";
import { GoChevronRight } from "react-icons/go";
import { GoLinkExternal } from "react-icons/go";
import { GetAllCatalog } from '../../../clients/apiCatalog';

const Home = () => {

    const [cars, setCars] = useState([]); // State to store cars data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await GetAllCatalog();
                console.log(response.data);
                const auctionData = response.data.data.map(item => item.auction);
                const processedData = auctionData.map((auction) => {
                    const auctionEnd = new Date(`${auction.auction_date}T${auction.end_time}`);
                    const now = new Date();
                    const timeDifference = auctionEnd - now;
                    const daysLeft = Math.max(0, Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
                    const hoursLeft = Math.max(0, Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

                    return {
                        id_auction: auction.id,
                        id: auction.car.id,
                        nama: auction.car.brand,
                        kilometers: auction.car.odometer,
                        listedDate: auction.auction_date,
                        harga: auction.starting_price,
                        timeLeft: `${daysLeft}d ${hoursLeft}h`,
                        transmission: auction.car.transmission,
                        category: auction.car.category,
                        image: auction.car?.image || "default.jpg",
                    };
                });

                console.log("Final processed data:", processedData);
                setCars(processedData); // Set the processed data to state
            } catch (err) {
                console.error("Error details:", err);
                setError(`Failed to fetch data: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <head>
                <title>Home</title>
            </head>
            <div className="page-home container-main">
                {/* Video background and landing section */}
                <div className="page-home container-landingP">
                    <video className="page-home videoBackground" autoPlay loop muted playsInline>
                        <source className="page-home videoBackgroundSource" src={Video} type="video/mp4" />
                    </video>
                    <div className="page-home backgroundLanding">
                        <h1 className="page-home TitleTextLanding" id="fadein1">Find Your Dream Car Today</h1>
                        <div className="page-home searchBar">
                            <form action="">
                                <div className="page-home search" id="fadein2">
                                    <FaMagnifyingGlass />
                                    <input className="page-home search-input" placeholder="Describe what you're Looking for!" type="search" />
                                </div>
                            </form>
                        </div>
                        <div className="page-home buttonLanding" id="fadein3">
                            <button className="page-home btnA">
                                <a className="page-home btnAlink" href="/catalog">Start Bidding</a>
                            </button>
                            <button onClick={() => document.getElementById('howToBid').scrollIntoView()} className="page-home btnB">
                                <p className="page-home btnBlink">How to Bid</p>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured Cars Section */}
                <div className="page-home d-flex justify-content-between align-items-center mb-1 mt-5 px-5">
                    <h1><strong>Featured Cars</strong></h1>
                    <Link to="/catalog" className="page-home mb-0" style={{ textDecoration: 'none', color: 'black' }}>
                        See more <GoChevronRight />
                    </Link>
                </div>
                <div
                    className="page-home row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"
                    style={{
                        minHeight: "400px",
                        marginTop: "20px",
                        marginBottom: "20px",
                        paddingRight: "20px",
                        paddingLeft: "20px",
                        gap: "20px",
                    }}
                >
                    {/* Loading and error states */}
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}

                    {/* Feature cards display */}
                    {cars.map((car) => (
                        <div
                            key={car.id}
                            className="page-home col card-item"
                            data-category={car.category}
                            style={{ maxWidth: "300px" }}
                        >
                            <div className="page-home card h-80 shadow-sm w-100 p-3 ">
                                <img
                                    src={car.image}
                                    alt={car.nama}
                                    className="page-home card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="page-home card-body d-flex flex-column">
                                    <h5 className="page-home card-title fw-bold mb-3">{car.nama}</h5>
                                    <div className="page-home mb-3">
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
                                            <h6 className="fw-bold">Rp. {car.harga}</h6>
                                        </div>
                                        <div>
                                            <span className="text-muted small d-block">Time Left</span>
                                            <h6 className="fw-bold">{car.timeLeft}</h6>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/detail/${car.id}`}
                                        className="btn btn-primary w-100 mt-auto p-2"
                                        style={{ backgroundColor: "black" }}
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* About Us Section */}
                <div className="page-home container-about">
                    <video className="page-home videoBackgroundBot" autoPlay loop muted playsInline>
                        <source className="page-home videoBackgroundSource" src={Video2} type="video/mp4" />
                    </video>
                    <div className="page-home container-aboutCard">
                        <div className="page-home image-about" style={{ backgroundImage: `url(${Image4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div className="page-home text-about">
                            <h1>About Us.</h1>
                            <p>
                                Our mission is to provide a safe and enjoyable bidding experience, offering a diverse selection of vehicles—from standard to luxury and electric cars—at competitive prices. At Atma Autobid, we are committed to ensuring customer satisfaction through innovative technology and dedicated support. Join us today and find your dream car!
                            </p>
                            <a href="#" className="page-home btn btn-lg btn-secondary aboutButton" style={{ borderRadius: '4px', padding: '5px', marginTop: '0px' }}>
                                Contact Us <GoLinkExternal />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
