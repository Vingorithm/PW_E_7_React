import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const scrollHowToBid = () => {
        document.getElementById("howtobid").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="container-main">
            {/* Header */}
            <div className="header">
                {/* Include header component */}
            </div>

            {/* Landing Page Section */}
            <div className="container-landingP">
                <video className="videoBackground" autoPlay loop muted playsInline>
                    <source className="videoBackgroundSource" src="./videos/vid1.mp4" type="video/mp4" />
                </video>
                <div className="backgroundLanding">
                    <h1 className="TitleTextLanding" id="fadein1">Find Your Dream Car Today</h1>
                    <div className="searchBar">
                        <form>
                            <div className="search" id="fadein2">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input
                                    className="search-input"
                                    placeholder="Describe what you're Looking for!"
                                    type="search"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="buttonLanding" id="fadein3">
                        <button className="btnA">
                            <Link className="btnAlink" to="/catalog">Start Bidding</Link>
                        </button>
                        <button onClick={scrollHowToBid} className="btnB">
                            <p className="btnBlink">How to Bid <i className="fa-solid fa-chevron-down"></i></p>
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="container-carouselz">
                <div className="carousel-header-container">
                    <div className="carousel-header">
                        <h1><i className="fa-solid fa-gavel"></i><br /> Hottest Bids</h1>
                    </div>
                </div>
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        {/* Carousel Item 1 */}
                        <div className="carousel-item active">
                            <div className="overlay-image A" style={{ backgroundImage: 'url(./images/bids1.jpg)' }}></div>
                            <div className="container">
                                <h1>Toyota Highlander (2017)</h1>
                                <p>
                                    Last fully redesigned for the 2014 model year, the Toyota Highlander received styling
                                    and drivetrain updates for 2017, including a new grille and an available V-6 engine.
                                </p>
                                <Link to="/detail" className="btn btn-lg btn-success" style={{ borderRadius: '4px' }}>Bid Now</Link>
                            </div>
                        </div>

                        {/* Carousel Item 2 */}
                        <div className="carousel-item">
                            <div className="overlay-image B" style={{ backgroundImage: 'url(./images/bids2.jpg)' }}></div>
                            <div className="container">
                                <h1>Audi Sport quattro concept (2013)</h1>
                                <p>
                                    quattro is Audi and Audi is quattro – the brand and the technology are indelibly linked.
                                    Audi will present its legitimate successor at the 2013 IAA in Frankfurt am Main.
                                </p>
                                <Link to="/detail" className="btn btn-lg btn-success" style={{ borderRadius: '4px' }}>Bid Now</Link>
                            </div>
                        </div>

                        {/* Carousel Item 3 */}
                        <div className="carousel-item">
                            <div className="overlay-image C" style={{ backgroundImage: 'url(./images/bids3.webp)' }}></div>
                            <div className="container">
                                <h1>Peterbilt 379 (2018)</h1>
                                <p>
                                    Serving as the successor to the 359, the 379 was a conventional-cab truck primarily for highway use.
                                </p>
                                <Link to="/detail" className="btn btn-lg btn-success" style={{ borderRadius: '4px' }}>Bid Now</Link>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* Featured Cars Section */}
            <div className="content">
                <div className="container-text-left">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                        <h1><strong>Featured Cars</strong></h1>
                        <Link to="/catalog" className="mb-0" style={{ textDecoration: 'none', color: 'black' }}>
                            see more <i className="fa-solid fa-chevron-right"></i>
                        </Link>
                    </div>
                    <div className="row mb-4 overflow-x-scroll d-flex flex-nowrap containerCard">
                        {/* Featured Car Card */}
                        {[...Array(5)].map((_, index) => (
                            <div className="card" key={index}>
                                <img src="./images/car2.jpg" className="card-img-top" alt="Car" />
                                <div className="card-body">
                                    <h5 className="card-title text-card"><strong>Mercedes-AMG GT 4-Door Coupe</strong></h5>
                                    <p className="card-text text-card">
                                        <span>Kilometers: 20,000</span>
                                        <span>Transmission: Automatic</span>
                                        <span className="card-span-list">Listed on: 12-10-2024</span>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div className="bid-section" style={{ textAlign: 'left' }}>
                                            <span className="text-muted small">Current Bid</span><br />
                                            <span className="bid-price"><strong>Rp. 600.000.000</strong></span>
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
                        ))}
                    </div>
                </div>
            </div>

            {/* How to Bid Section */}
            <div className="timeline-header">
                <h1>How to Bid</h1>
            </div>
            <div className="timeline">
                {['Register an Account', 'Verify your Identity', 'Search for your Dream Vehicle', 'Start Bidding'].map((step, index) => (
                    <div className={`container-howToBid ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="Number-container">
                            <div className="Number">
                                <h2>{index + 1}</h2>
                            </div>
                        </div>
                        <div className="textBox">
                            <h2><strong>{step}</strong></h2>
                            <p>Explanation of the step...</p>
                            <span className={index % 2 === 0 ? 'leftArrow' : 'rightArrow'}></span>
                        </div>
                    </div>
                ))}
            </div>

            {/* About Us Section */}
            <div className="container-about">
                <video className="videoBackgroundBot" autoPlay loop muted playsInline>
                    <source className="videoBackgroundSource" src="./videos/vid2.mp4" type="video/mp4" />
                </video>
                <div className="container-aboutCard">
                    <div className="image-about"></div>
                    <div className="text-about">
                        <h1>About Us</h1>
                        <p>
                            Our mission is to provide a safe and enjoyable bidding experience, offering a diverse selection of vehicles—from standard to luxury and electric cars—at competitive prices.
                            At Atma Autobid, we are committed to ensuring customer satisfaction through innovative technology and dedicated support.
                            Join us today and find your dream car!
                        </p>
                        <a href="#" className="btn btn-lg btn-secondary aboutButton">Contact Us <i className="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
