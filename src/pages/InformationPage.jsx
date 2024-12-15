import React from "react";
import { FaUserCircle, FaIdBadge, FaCar, FaGavel, FaExternalLinkAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Information = () => {
  const scrollHowToBid = () => {
    document.getElementById("howtobid").scrollIntoView({ behavior: "smooth" });
  };

  const styles = {
    timelineHeader: {
      textAlign: "center",
      margin: "30px 0",
      color: "#343a40",
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
      backgroundColor: "#ffffff",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      width: "80%",
    },
    numberContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: "#007bff",
      color: "white",
      fontSize: "24px",
      fontWeight: "bold",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
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
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      padding: "30px",
      borderRadius: "10px",
      marginTop: "-150px",
      zIndex: 2,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    videoBackground: {
      width: "100%",
      height: "400px",
      objectFit: "cover",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div>
      <div style={styles.timelineHeader}>
        <h1><strong>How to Bid</strong></h1>
        <p>Follow these easy steps to start your bidding journey!</p>
      </div>

      <div style={styles.timeline}>
        {[
          { number: 1, title: "Register an Account", description: "Make your very own account and get started on Atma Autobid!", icon: <FaUserCircle size={24} /> },
          { number: 2, title: "Verify your Identity", description: "Verify your identity through the profile page to bid securely!", icon: <FaIdBadge size={24} /> },
          { number: 3, title: "Search for your Dream Vehicle", description: "Browse through our catalog to find your perfect vehicle!", icon: <FaCar size={24} /> },
          { number: 4, title: "Start Bidding", description: "Place your bids and may the best bidder win!", icon: <FaGavel size={24} /> },
        ].map((step, index) => (
          <div key={index} style={styles.containerHowToBid}>
            <div style={styles.numberContainer}>{step.number}</div>
            <div style={styles.textBox}>
              <h4>{step.title}</h4>
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
            Our mission is to provide a safe and enjoyable bidding experience, offering a diverse selection of vehicles—from standard to luxury and
            electric cars—at competitive prices. At Atma Autobid, we are committed to ensuring customer satisfaction through innovative technology and
            dedicated support. Join us today and find your dream car!
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            Contact Us <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
