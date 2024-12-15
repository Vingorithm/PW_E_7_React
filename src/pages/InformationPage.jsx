import React from "react";
import { FaUserCircle, FaIdBadge, FaCar, FaGavel, FaExternalLinkAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Information = () => {
  const scrollHowToBid = () => {
    document.getElementById("howtobid").scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    header: {
      marginBottom: "20px",
    },
    timelineHeader: {
      textAlign: "center",
      margin: "20px 0",
    },
    timeline: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    containerHowToBid: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px 0",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      backgroundColor: "#f8f9fa",
    },
    numberContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#6c757d",
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
    },
    textBox: {
      marginLeft: "20px",
      flex: 1,
    },
    aboutContainer: {
      position: "relative",
      marginTop: "50px",
      textAlign: "center",
    },
    aboutText: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      padding: "20px",
      borderRadius: "10px",
      marginTop: "-200px",
      zIndex: 2,
    },
    videoBackground: {
      width: "100%",
      height: "300px",
      objectFit: "cover",
    },
  };

  return (
    <div>
      <div style={styles.header}>
        <h1>Header</h1>
      </div>

      <div style={styles.timelineHeader}>
        <h1>How to Bid</h1>
      </div>

      <div style={styles.timeline}>
        {[
          { number: 1, title: "Register an Account", description: "Make your very own account and get started on Atma Autobid!", icon: <FaUserCircle /> },
          { number: 2, title: "Verify your Identity", description: "Verify your identity through the profile page to bid securely!", icon: <FaIdBadge /> },
          { number: 3, title: "Search for your Dream Vehicle", description: "Browse through our catalog to find your perfect vehicle!", icon: <FaCar /> },
          { number: 4, title: "Start Bidding", description: "Place your bids and may the best bidder win!", icon: <FaGavel /> },
        ].map((step, index) => (
          <div key={index} style={styles.containerHowToBid}>
            <div style={styles.numberContainer}>{step.number}</div>
            <div style={styles.textBox}>
              <h2>
                <strong>{step.title}</strong>
              </h2>
              <p>{step.description}</p>
              <span>{step.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.aboutContainer}>
        <video style={styles.videoBackground} autoPlay loop muted>
          <source src="./videos/vid2.mp4" type="video/mp4" />
        </video>
        <div style={styles.aboutText}>
          <h1>About Us</h1>
          <p>
            Our mission is to provide a safe and enjoyable bidding experience, offering a diverse selection of
            vehicles—from standard to luxury and electric cars—at competitive prices. At Atma Autobid, we are committed
            to ensuring customer satisfaction through innovative technology and dedicated support. Join us today and find
            your dream car!
          </p>
          <a href="#" className="btn btn-secondary btn-lg">
            Contact Us <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
