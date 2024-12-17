import React, { useState, useEffect } from 'react';
import { FaEdit, FaUser, FaLock } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetProfile } from "../clients/apiUser"; 
import { UpdateProfile } from "../clients/apiUser"; 
import carImage from '../assets/images/car10.png';
import profile from '../assets/images/profile.png';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [isPasswordChange, setIsPasswordChange] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    full_name: '',
    phone: '',
    ektp: null,
    status: '',
    foto_profile: profile,
    identity_number: '',
  });

  // Fetch profile data after component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true); 
        const response = await GetProfile();
        setFormData({
          username: response.data.user.username || '',
          password: response.data.user.password || '',
          email: response.data.user.email || '',
          full_name: response.data.user.full_name || '',
          phone: response.data.user.phone || '',
          ektp: response.data.user.ektp || null,
          status: response.data.user.status,
          foto_profile: response.data.user.foto_profile,
          identity_number: response.data.user.identity_number,
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

  const handleSaveProfile = async (e) => {
    e.preventDefault(); // Mencegah reload form

    try {
        setLoading(true);
        setError(null);

        // Menyiapkan formData untuk mengirim file bersama dengan data lainnya
        const formData = new FormData();
        
        formData.append('email', formData.email);  // Menambahkan email
        formData.append('full_name', formData.full_name);  // Menambahkan full_name
        formData.append('phone_number', formData.phone_number);  // Menambahkan phone_number
        formData.append('identity_number', formData.identity_number);  // Menambahkan identity_number

        // Menambahkan file jika ada
        if (formData.photo_profile) {
            formData.append('photo_profile', formData.photo_profile);  // Menambahkan file foto_profile
        }

        if (formData.identity_number_file) {
            formData.append('identity_number', formData.identity_number_file);  // Menambahkan file identity_number
        }

        console.log('Sending data:', formData);

        const response = await UpdateProfile(formData);
        console.log('Full Response:', response); // Log lengkap respons
        console.log('Response data:', response.data);  

        // Menampilkan toast notification
        toast.success("Profile updated successfully!", {
            position: "top-right", // Posisi toast
            autoClose: 3000,       // Durasi tampil 3 detik
        });

        // Arahkan kembali ke halaman About
        setIsPasswordChange(false); // Ini akan menampilkan tab About
        setIsEditing(false); // Menonaktifkan mode edit
    } catch (err) {
        console.error("Update error:", err);
        setError(`Failed to update profile: ${err.message}`);
        toast.error("Failed to update profile!", {
            position: "top-right",
            autoClose: 3000,
        });
    } finally {
        setLoading(false);
    }
};

  const handleChange = (e) => {
    const { id, value } = e.target; 
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
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

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div className="container mt-4 mb-5" style={{ width: '800px' }}>
      <div className="profile-container shadow p-4 rounded" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '1.5rem', borderRadius: '0.375rem' }}>
        <div className="profile-header">
          <img src={carImage} alt="Car" className="img-fluid" style={{
            width: '100%',  
            height: '200px',            
            objectFit: 'cover',        
            padding: '2px',           
            borderRadius: '8px'        
          }} />
        </div>

        <div className="profile-avatar-container d-flex justify-content-center align-items-center position-relative">
          <div className="profile-avatar mr-3" style={{
            position: 'absolute',
            top: '30px',
            left: '55%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            zIndex: '50'
          }}>
            <img src={formData.foto_profile ? formData.foto_profile : profile} alt="Profile" className="rounded-circle" width="150" style={{
              width: '50%',
              height: '50%',
              objectFit: 'cover',
              borderRadius: '50%'
            }}/>
          </div>
          <div className="position-absolute mt-5" style={{ right: 0, top: '160%', transform: 'translateY(-50%)' }}>
            <button className="btn btn-primary" onClick={handleEnableEdit}>
              <FaEdit /> Edit Profile
            </button>
          </div>
        </div>

        <div className="profile-nav text-left mt-4">
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
                  <input type="text" id="username" value={formData.username} disabled={isEditing} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email</label>
                  <input type="email" id="email" value={formData.email} disabled={!isEditing} onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label fw-bold">Full Name</label>
                  <input type="text" id="fullname" value={formData.fullname} disabled={!isEditing} onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                  <input type="tel" id="phone" value={formData.phone} disabled={!isEditing} onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3">
                  <label htmlFor="ektp" className="form-label fw-bold">E-KTP</label>
                  <p style={{ fontSize: '12px', fontStyle: 'italic', textAlign: 'justify' }}>
                    Based on PERDIRJEND NO 3.KN.2016 concerning PMPJ (Implementation of the Principles of Knowing Your Customer), users are required to submit their KTP (Indonesian National Identity Card)
                  </p>
                  <input type="file" id="image" name="image" disabled={!isEditing} onChange={handleChange} className="form-control" />
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
                      type="button"
                      className="btn"
                      onClick={handleSaveProfile}
                      style={{ backgroundColor: '#333', color: '#fff', width: '150px'}}
                    >
                      Save
                    </button>
                  </div>
                )}
              </form>
              <ToastContainer />
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
                    style={{ marginRight: '10px' }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-dark">Save Changes</button>
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