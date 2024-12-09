import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <head>
        <title>Home</title>
        <script src="./js/fadein.js"></script>
      </head>

      <div className="container-main">
        <div className="header">
          {/* Include your header component here */}
        </div>
        <div className="container-landingP">
          <video className="videoBackground" autoPlay loop muted playsInline>
            <source className="videoBackgroundSource" src="./videos/vid1.mp4" type="video/mp4" />
          </video>
          <div className="backgroundLanding">
            <h1 className="TitleTextLanding" id="fadein1">Find Your Dream Car Today</h1>
            <div className="searchBar">
              <form action="">
                <div className="search" id="fadein2">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input className="search-input" placeholder="Describe what you're Looking for!" type="search" />
                </div>
              </form>
            </div>
            <div className="buttonLanding" id="fadein3">
              <button className="btnA">
                <a className="btnAlink" href="/catalog">Start Bidding</a>
              </button>
              <button onClick={() => document.getElementById('howToBid').scrollIntoView()} className="btnB">
                <p className="btnBlink">How to Bid <i className="fa-solid fa-chevron-down"></i></p>
              </button>
            </div>
          </div>
        </div>

        <div className="container-carouselz">
          <div className="carousel-header-container">
            <div className="carousel-header">
              <h1><i className="fa-solid fa-gavel"></i> <br /> Hottest Bids</h1>
            </div>
          </div>
          <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
              <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="overlay-image A" style={{ backgroundImage: 'url(./images/bids1.jpg)' }}></div>
                <div className="container">
                  <h1>Toyota Highlander (2017)</h1>
                  <p>
                    Last fully redesigned for the 2014 model year, the Toyota Highlander received styling
                    and drivetrain updates for 2017, including a new grille and an available V-6 engine.
                  </p>
                  <a href="/detail" className="btn btn-lg btn-success" style={{ borderRadius: '4px' }}>
                    Bid Now
                  </a>
                </div>
              </div>
              {/* Add other carousel items here */}
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

        <div className="content">
          <div className="container-text-left">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h1><strong>Featured Cars</strong></h1>
              <a href="/catalog" className="mb-0" style={{ textDecoration: 'none', color: 'black' }}>
                see more <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="row mb-4 overflow-x-scroll d-flex flex-nowrap containerCard">
              {/* You can dynamically generate these car cards using map if you have car data */}
              <div className="card">
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
                  <a href="/detail" className="btn custom-bid-btn">Bid Now</a>
                </div>
              </div>
              {/* Add more car cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
