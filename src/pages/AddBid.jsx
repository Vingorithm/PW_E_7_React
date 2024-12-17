import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const AddBid = () => {
  const [carModel, setCarModel] = useState('');
  const [startingPrice, setStartingPrice] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [auctionTitle, setAuctionTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [address, setAddress] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      carModel,
      startingPrice,
      startDateTime,
      endDateTime,
      auctionTitle,
      description,
      image,
      address,
    });
    setIsToastVisible(true); // Show the toast
  };

  return (
    <div className="container-main" style={{ marginBottom: '18rem' }}>
      <div className="content">
        <div className="container text-center pt-5">
          <h1 className="title pt-2">Sell Your Vehicle</h1>
          <p>
            Welcome to the Atma AutoBid platform, where you can effortlessly sell your vehicle and reach a wider
            audience. Whether you're looking to list a car for auction or sell it outright, our user-friendly interface
            makes the process simple and efficient. Join us today and unlock the potential of your vehicle!
          </p>
        </div>

        <div className="container mt-2 mb-3">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="carModel" className="form-label">Car Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="carModel"
                  name="carModel"
                  value={carModel}
                  onChange={(e) => setCarModel(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="startingPrice" className="form-label">Starting Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="startingPrice"
                  name="startingPrice"
                  value={startingPrice}
                  onChange={(e) => setStartingPrice(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="startDateTime" className="form-label">Start Date and Time</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="startDateTime"
                  name="startDateTime"
                  value={startDateTime}
                  onChange={(e) => setStartDateTime(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="endDateTime" className="form-label">End Date and Time</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="endDateTime"
                  name="endDateTime"
                  value={endDateTime}
                  onChange={(e) => setEndDateTime(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="auctionTitle" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="auctionTitle"
                  name="auctionTitle"
                  value={auctionTitle}
                  onChange={(e) => setAuctionTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="carpicture">Car Pictures</label>
                <input
                  required
                  type="file"
                  className="form-control"
                  id="image"
                  name="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="nav-icon fas fa-check"></i>
                <span> Submit</span>
              </button>
            </form>
          </div>
        </div>

        {isToastVisible && (
          <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" className="toast text-bg-primary" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="2000">
              <div className="toast-body">
                <i className="fa-solid fa-check me-3" style={{ color: '#ffffff' }}></i>
                Congratulations! You have successfully added your auction. Please wait for confirmation from the admin.
              </div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        body {
            font-family: 'Roboto', sans-serif;
        }

        .form-container {
            max-width: 1500px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            background-color: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }
      `}</style>
    </div>
  );
};

export default AddBid;
