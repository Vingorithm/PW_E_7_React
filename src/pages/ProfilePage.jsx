import React, { useState } from 'react';
import { FaEdit, FaUser, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isPasswordChange, setIsPasswordChange] = useState(false);

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

  return (
    <div className="container mt-4">
      <div className="profile-container">
        <div className="profile-header">
          <img src="./images/car10.png" alt="Car" className="img-fluid" />
        </div>

        <div className="profile-avatar-container text-center">
          <div className="profile-avatar">
            <img src="./images/profile.png" alt="Profile" className="rounded-circle" width="150" />
          </div>
          <div className="change-btn-container">
            <button className="btn btn-primary" onClick={handleEnableEdit}>
              <FaEdit /> Edit Profile
            </button>
          </div>
        </div>

        <div className="profile-nav text-center">
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

        <div className="profile-content">
          {!isPasswordChange && (
            <div id="about" className="content-section">
              <form className="profile-form">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value="lukas_matthew" disabled className="form-control" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" value="mysecretpassword" disabled className="form-control" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value="example@gmail.com" disabled className="form-control" />

                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" value="Lukas Matthew" className="form-control" />

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" value="0123456789" className="form-control" />

                <label htmlFor="ektp">E-KTP</label>
                <input type="file" id="image" name="image" className="form-control" />

                <label>Status</label>
                <span className="profile-status">Active</span>

                {isEditing && (
                  <div id="editprofile" className="d-flex justify-content-between align-items-center mt-3">
                    <button className="btn btn-danger" onClick={handleDisableEdit}>
                      Cancel
                    </button>
                    <button className="btn btn-success" onClick={handleDisableEdit}>
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
                <input type="password" id="current-password" required className="form-control" />

                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" required className="form-control" />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" required className="form-control" />

                <div className="button-group mt-3">
                  <button type="button" className="btn btn-danger" onClick={handleShowAbout}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">
                    Update Password
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

