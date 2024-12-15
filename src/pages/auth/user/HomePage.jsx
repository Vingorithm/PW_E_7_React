import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './Home.css';
import Video from '../../../assets/videos/vid1.mp4';

const Home = () => {
  return (
    <div>
      <head>
        <title>Home</title>
        <script src="./js/fadein.js"></script>
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
                  <i className="page-home fa-solid fa-magnifying-glass"></i>
                  <input className="page-home search-input" placeholder="Describe what you're Looking for!" type="search" />
                </div>
              </form>
            </div>
            <div className="page-home buttonLanding" id="fadein3">
              <button className="page-home btnA">
                <a className="page-home btnAlink" href="/catalog">Start Bidding</a>
              </button>
              <button onClick={() => document.getElementById('howToBid').scrollIntoView()} className="page-home btnB">
                <p className="page-home btnBlink">How to Bid <i className="page-home fa-solid fa-chevron-down"></i></p>
              </button>
            </div>
          </div>
        </div>

        <div className="page-home container-carouselz">
          <div className="page-home carousel-header-container">
            <div className="page-home carousel-header">
              <h1><i className="page-home fa-solid fa-gavel"></i> <br /> Hottest Bids</h1>
            </div>
          </div>
          <div id="myCarousel" className="page-home carousel slide" data-bs-ride="carousel">
            <ol className="page-home carousel-indicators">
              <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="page-home active"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1" className="page-home"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2" className="page-home"></li>
            </ol>

            <div className="page-home carousel-inner">
              <div className="page-home carousel-item active">
                <div className="page-home overlay-image A" style={{ backgroundImage: 'url(./images/bids1.jpg)' }}></div>
                <div className="page-home container">
                  <h1 className="page-home">Toyota Highlander (2017)</h1>
                  <p className="page-home">
                    Last fully redesigned for the 2014 model year, the Toyota Highlander received styling
                    and drivetrain updates for 2017, including a new grille and an available V-6 engine.
                  </p>
                  <a href="/detail" className="page-home btn btn-lg btn-success" style={{ borderRadius: '4px' }}>
                    Bid Now
                  </a>
                </div>
              </div>
              {/* Add other carousel items here */}
            </div>
            <button className="page-home carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="page-home carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="page-home visually-hidden">Previous</span>
            </button>
            <button className="page-home carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
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
              {/* You can dynamically generate these car cards using map if you have car data */}
              <div className="page-home card">
                <img src="./images/car2.jpg" className="page-home card-img-top" alt="Car" />
                <div className="page-home card-body">
                  <h5 className="page-home card-title text-card"><strong>Mercedes-AMG GT 4-Door Coupe</strong></h5>
                  <p className="page-home card-text text-card">
                    <span className="page-home">Kilometers: 20,000</span>
                    <span className="page-home">Transmission: Automatic</span>
                    <span className="page-home card-span-list">Listed on: 12-10-2024</span>
                  </p>
                  <div className="page-home d-flex justify-content-between align-items-start">
                    <div className="page-home bid-section" style={{ textAlign: 'left' }}>
                      <span className="page-home text-muted small">Current Bid</span><br />
                      <span className="page-home bid-price"><strong>Rp. 600.000.000</strong></span>
                    </div>
                    <div className="page-home time-section text-right">
                      <span className="page-home text-muted small">Time Left</span><br />
                      <span className="page-home time-left">2d 10h</span>
                    </div>
                  </div>
                  <br />
                  <a href="/detail" className="page-home btn custom-bid-btn">Bid Now</a>
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
