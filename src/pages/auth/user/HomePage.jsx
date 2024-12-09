import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './Home.css';

const Home = () => {
    const scrollHowToBid = () => {
        document.getElementById("howtobid").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="container-main">
            {/* Landing Page Section */}
            <div className="container-landingP">
                <video className="videoBackground" autoPlay loop muted playsInline>
                    <source src="./videos/vid1.mp4" type="video/mp4" />
                </video>
                <div className="backgroundLanding">
                    <h1 className="TitleTextLanding">Find Your Dream Car Today</h1>
                    <div className="searchBar">
                        <form>
                            <div className="search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                    className="search-input"
                                    placeholder="Describe what you're looking for!"
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="buttonLanding">
                        <button className="btnA">
                            <Link to="/catalog" className="btnAlink">Start Bidding</Link>
                        </button>
                        <button onClick={scrollHowToBid} className="btnB">
                            How to Bid <i className="fa-solid fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="container-carouselz">
                <div className="carousel-header">
                    <h1><i className="fa-solid fa-gavel"></i> Hottest Bids</h1>
                </div>
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Carousel Items */}
                        {[
                            {
                                title: "Toyota Highlander (2017)",
                                description: "Last fully redesigned for the 2014 model year...",
                                image: "./images/bids1.jpg",
                            },
                            {
                                title: "Audi Sport quattro concept (2013)",
                                description: "quattro is Audi and Audi is quattro...",
                                image: "./images/bids2.jpg",
                            },
                            {
                                title: "Peterbilt 379 (2018)",
                                description: "Serving as the successor to the 359...",
                                image: "./images/bids3.webp",
                            },
                        ].map((item, index) => (
                            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                                <div
                                    className="overlay-image"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                ></div>
                                <div className="container">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <Link to="/detail" className="btn btn-lg btn-success">Bid Now</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </div>

            {/* Remaining Sections */}
            {/* Add Featured Cars, How to Bid, and About Us sections similarly */}
        </div>
    );
};

export default Home;
