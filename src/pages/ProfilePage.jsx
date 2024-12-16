import React, { useState, useEffect } from 'react';
import { FaEdit, FaUser, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);  // Declare setLoading here
  const [error, setError] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [isPasswordChange, setIsPasswordChange] = useState(false);
  const [formData, setFormData] = useState({
    username: "Lucas",
    password: "secret",
    email: "lucas@gmail.com",
    fullname: "Lucas ",
    phone: "081234567",
    ektp: null,
    status: "Active", 
    foto_profile: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true); 
        const response = await fetch("/api/client"); 
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); 
        }
        const data = await response.json();

        setFormData({
            username: data.username,
            password: data.password,
            email: data.email,
            fullname: data.fullname,
            phone: data.phone,
            ektp: data.ektp,
            status: data.status || "Active", 
            foto_profile: data.foto_profile || "default.jpg",
        });
      } catch (err) {
          console.error("Error details:", err); 
          setError(`Failed to fetch profile data: ${err.message}`);
      } finally {
          setLoading(false); 
      }
    };

      fetchProfileData();
  }, []);
  

  const handleEnableEdit = () => {
    setIsEditing(true);
  };

  const handleDisableEdit = () => {
    setIsEditing(false);
  };

  const handleShowAbout = () => {
    setIsPasswordChange(false);
  };

  const handleShowChangePassword = () => {
    setIsPasswordChange(true);
  };

  const handleUpdatePassword = (event) => {
    event.preventDefault();
    alert('Password updated successfully!');
    handleShowAbout();
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  return (
    <div className="container mt-4 mb-5" style={{ width: '800px' }}>
      <div className="profile-container shadow p-4 rounded" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1.5rem', borderRadius: '0.375rem' }}>
        <div className="profile-header">
          <img src="./images/car10.png" alt="Car" className="img-fluid" />
        </div>
  
        <div className="profile-avatar-container d-flex justify-content-center align-items-center position-relative">
          <div className="profile-avatar mr-3">
            <img src={formData.foto_profile || "./images/default-avatar.png"} alt="Profile" className="rounded-circle" width="150" />
          </div>
          <div className="position-absolute" style={{ right: 0, top: '160%', transform: 'translateY(-50%)' }}>
            <button className="btn btn-primary" onClick={handleEnableEdit}>
              <FaEdit /> Edit Profile
            </button>
          </div>
        </div>
  
        <div className="profile-nav text-left">
          <button
            className={`btn ${!isPasswordChange ? 'btn-secondary active' : 'btn-light'}`}
            onClick={handleShowAbout}
          >
            <FaUser /> About
          </button>
          <button
            className={`btn ${isPasswordChange ? 'btn-secondary active' : 'btn-light'}`}
            onClick={handleShowChangePassword}
          >
            <FaLock /> Change Password
          </button>
        </div>
  
        <div className="w-100 mt-2 mb-3">
          <hr />
        </div>
  
        <div className="profile-content mb-5">
          {!isPasswordChange && (
            <div id="about" className="content-section">
              <form className="profile-form">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">Username</label>
                  <input type="text" id="username" value={formData.username} disabled={!isEditing} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-bold">Password</label>
                  <input type="password" id="password" value={formData.password} disabled={!isEditing} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input type="email" id="email" value={formData.email} disabled={!isEditing} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label fw-bold">Full Name</label>
                  <input type="text" id="fullname" value={formData.fullname} disabled={!isEditing} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                  <input type="tel" id="phone" value={formData.phone} disabled={!isEditing} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="ektp" className="form-label fw-bold">E-KTP</label>
                  <p style={{ fontSize: '12px', fontStyle: 'italic', textAlign: 'justify' }}>
                    Based on PERDIRJEND NO 3.KN.2016 concerning PMPJ (Implementation of the Principles of Knowing Your Customer), users are required to submit their KTP (Indonesian National Identity Card)
                  </p>
                  <input type="file" id="image" name="image" disabled={!isEditing} className="form-control" />
                </div>

                <div className="mb-3 fw-bold">
                  <label style={{ marginBottom: '10px' }}>Status</label>
                  <div>
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: formData.status === 'Active' ? '#28a745' : '#dc3545', 
                        color: 'white',
                        padding: '5px 20px',
                        borderRadius: '5px',
                        fontWeight: 'normal',
                      }}
                    >
                      {formData.status}
                    </span>
                  </div>
                </div>
  
                {isEditing && (
                  <div id="editprofile" className="d-flex justify-content-end align-items-center mt-3">
                    <button
                      className="btn btn-outline-dark"  // Apply custom styling for cancel button
                      onClick={handleDisableEdit}
                      style={{ borderColor: '#333', color: '#333', marginRight: '10px', width: '150px'}}  // Custom color and border for the cancel button
                    >
                      Cancel
                    </button>
                    <button
                      className="btn"
                      onClick={handleDisableEdit}
                      style={{ backgroundColor: '#333', color: '#fff', width: '150px'}}  // Save button style
                    >
                      Save
                    </button>
                  </div>
                )}
              </form>
            </div>
          )}
  
          {isPasswordChange && (
            <div id="change-password" className="content-section">
              <h3>Change Password</h3>
              <form className="profile-form" onSubmit={handleUpdatePassword}>
                <label htmlFor="current-password">Current Password</label>
                <input type="password" id="current-password" value={currentPassword} onChange={handleCurrentPasswordChange} required className="form-control" />
  
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" required className="form-control" />
  
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" required className="form-control" />
  
                <div className="button-group mt-3 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={handleShowAbout}
                    style={{ borderColor: '#333', color: '#333', marginRight: '10px', width: '150px' }}  // Cancel button styling
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn"
                    style={{ backgroundColor: '#333', color: '#fff', width: '150px' }}  // Update Password button styling
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );  
};

export default Profile;

const styles = {
  '.content-section': {
    marginTop: '20px',
  },
  '.profile-form input': {
    marginBottom: '10px',
  },
  '.profile-status': {
    fontWeight: 'bold',
    color: 'green',
  },
};

