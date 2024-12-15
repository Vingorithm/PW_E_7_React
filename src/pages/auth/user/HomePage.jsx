import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './Home.css';
import Video from '../../../assets/videos/vid1.mp4';
import Video2 from '../../../assets/videos/vid2.mp4';
import Image1 from '../../../assets/images/bids1.jpg';
import Image2 from '../../../assets/images/bids2.jpg';
import Image3 from '../../../assets/images/bids3.webp';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiAuctionLine } from "react-icons/ri";

const Home = () => {
    // Dummy data for Featured Cars
    const [cars] = useState([
        {
            id: 1,
            image: './images/car2.jpg',
            name: 'Mercedes-AMG GT 4-Door Coupe',
            kilometers: '20,000',
            transmission: 'Automatic',
            listedOn: '12-10-2024',
            currentBid: 'Rp. 600.000.000',
            timeLeft: '2d 10h',
            detailLink: '/detail',
        },
        {
            id: 2,
            image: './images/car3.jpg',
            name: 'BMW M5 Competition',
            kilometers: '15,000',
            transmission: 'Manual',
            listedOn: '10-11-2024',
            currentBid: 'Rp. 800.000.000',
            timeLeft: '1d 5h',
            detailLink: '/detail',
        },
        {
            id: 3,
            image: './images/car4.jpg',
            name: 'Audi RS7 Sportback',
            kilometers: '12,000',
            transmission: 'Automatic',
            listedOn: '08-09-2024',
            currentBid: 'Rp. 1.200.000.000',
            timeLeft: '3d 2h',
            detailLink: '/detail',
        },
    ]);
    const [carouselItems] = useState([
        {
            id: 1,
            image: Image1,
            title: 'Toyota Highlander (2017)',
            description: `Last fully redesigned for the 2014 model year, the Toyota Highlander received styling
                        and drivetrain updates for 2017, including a new grille and an available V-6 engine.`,
            detailLink: '/detail',
        },
        {
            id: 2,
            image: Image2,
            title: 'Audi Sport quattro concept (2013)',
            description: `quattro is Audi and Audi is quattro – the brand and the technology are indelibly linked.
                        In celebration of the 30th birthday of the Sport quattro, Audi will present its
                        legitimate successor at the 2013 IAA in Frankfurt am Main. The Audi
                        Sport quattro concept show car continues the grand quattro tradition, with a stunning
                        coupe design and plug-in hybrid drive with a system output of 515 kW (700 hp).`,
            detailLink: '/detail',
        },
        {
            id: 3,
            image: Image3,
            title: 'Peterbilt 379 (2018)',
            description: `Serving as the successor to the 359, the 379 was a conventional-cab truck configured
                        primarily for highway use, serving as the flagship of the Peterbilt model line. During
                        much of its production, the 379 was popular among owner-operator drivers.`,
            detailLink: '/detail',
        },
    ]);

    return (
        <div>
            <head>
                <title>Home</title>
            </head>
            <div className="page-home container-main">
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


                <div className="page-home container-carouselz">
                    <div className="page-home carousel-header-container">
                        <div className="page-home carousel-header">
                            <h1>
                                <RiAuctionLine /><br /> Hottest Bids
                            </h1>
                        </div>
                    </div>
                    <div id="myCarousel" className="page-home carousel slide" data-bs-ride="carousel">
                        <ol className="page-home carousel-indicators">
                            {carouselItems.map((item, index) => (
                                <li
                                    key={item.id}
                                    data-bs-target="#myCarousel"
                                    data-bs-slide-to={index}
                                    className={`page-home ${index === 0 ? 'active' : ''}`}
                                ></li>
                            ))}
                        </ol>

                        <div className="page-home carousel-inner">
                            {carouselItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`page-home carousel-item ${index === 0 ? 'active' : ''}`}
                                >
                                    <div
                                        className="page-home overlay-image A"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    ></div>
                                    <div className="page-home container">
                                        <h1 className="page-home">{item.title}</h1>
                                        <p className="page-home">{item.description}</p>
                                        <a
                                            href={item.detailLink}
                                            className="page-home btn btn-lg btn-success"
                                            style={{ borderRadius: '4px' }}
                                        >
                                            Bid Now
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="page-home carousel-control-prev"
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="page-home carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="page-home visually-hidden">Previous</span>
                        </button>
                        <button
                            className="page-home carousel-control-next"
                            type="button"
                            data-bs-target="#myCarousel"
                            data-bs-slide="next"
                        >
                            <span className="page-home carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="page-home visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="page-home content">
                    <div className="page-home container-text-left">
                        <div className="page-home d-flex justify-content-between align-items-center mb-1">
                            <h1><strong className="page-home">Featured Cars</strong></h1>
                            <a href="/catalog" className="page-home mb-0" style={{ textDecoration: 'none', color: 'black' }}>
                                see more <i className="page-home fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                        <div className="page-home row mb-4 overflow-x-scroll d-flex flex-nowrap containerCard">
                            {cars.map((car) => (
                                <div key={car.id} className="page-home card">
                                    <img src={car.image} className="page-home card-img-top" alt={car.name} />
                                    <div className="page-home card-body">
                                        <h5 className="page-home card-title text-card"><strong>{car.name}</strong></h5>
                                        <p className="page-home card-text text-card">
                                            <span className="page-home">Kilometers: {car.kilometers}</span>
                                            <span className="page-home">Transmission: {car.transmission}</span>
                                            <span className="page-home card-span-list">Listed on: {car.listedOn}</span>
                                        </p>
                                        <div className="page-home d-flex justify-content-between align-items-start">
                                            <div className="page-home bid-section" style={{ textAlign: 'left' }}>
                                                <span className="page-home text-muted small">Current Bid</span><br />
                                                <span className="page-home bid-price"><strong>{car.currentBid}</strong></span>
                                            </div>
                                            <div className="page-home time-section text-right">
                                                <span className="page-home text-muted small">Time Left</span><br />
                                                <span className="page-home time-left">{car.timeLeft}</span>
                                            </div>
                                        </div>
                                        <br />
                                        <a href={car.detailLink} className="page-home btn custom-bid-btn">Bid Now</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="page-home timeline-container">
                </div>
                <div className="page-home container-about">
                    <video className="page-home videoBackgroundBot" autoPlay loop muted playsInline>
                        <source className="page-home videoBackgroundSource" src={Video2} type="video/mp4" />
                    </video>
                    <div className="page-home container-aboutCard">
                        <div className="page-home image-about">
                        </div>
                        <div className="page-home text-about">
                            <h1>About Us.</h1>
                            <p>
                                Our mission is to provide a safe and enjoyable bidding experience,
                                offering a diverse selection of vehicles—from standard to luxury
                                and electric cars—at competitive prices. At Atma Autobid, we are
                                committed to ensuring customer satisfaction through innovative
                                technology and dedicated support. Join us today and find your dream
                                car!
                            </p>
                            <a href="#" className="page-home btn btn-lg btn-secondary aboutButton">
                                Contact Us <i className="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
