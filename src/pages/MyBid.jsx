import React, { useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyBid = () => {
  const [selectedMonth, setSelectedMonth] = useState('januari');
  const [showModal, setShowModal] = useState(false);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    console.log('Item Deleted');
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <div className="dashboard" style={{ height: '40rem', marginTop: '2rem' }}>
        <div className="table-card">
          <div className="header">
            <h2>List Lelang Saya</h2>
            <div style={{ display: 'flex' }}>
              <select
                className="form-select"
                name="months"
                id="months"
                style={{ maxHeight: '40px', maxWidth: '10rem', marginRight: '20px' }}
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((month, index) => (
                  <option key={index} value={month.toLowerCase()}>
                    {month}
                  </option>
                ))}
              </select>
              <Link
                to="/addBid" 
                className="btn btn-primary"
                style={{
                  marginBottom: '20px',
                  backgroundColor: '#00AAB6',
                  border: 'none',
                  borderRadius: '50px',
                  maxHeight: '40px',
                  width: '14rem',
                }}
              >
                Tambah Lelang
              </Link>
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Id Lelang</th>
                <th>Waktu Mulai</th>
                <th>Waktu Selesai</th>
                <th>Harga Awal</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, startTime: '12.09.2019 - 12.50 PM', endTime: '20.09.2019 - 12.50 PM', price: '$30000', status: 'Approve' },
                { id: 2, startTime: '12.09.2019 - 12.50 PM', endTime: '20.09.2019 - 12.50 PM', price: '$20000', status: 'Rejected' },
              ].map((auction) => (
                <tr key={auction.id}>
                  <td>{auction.id}</td>
                  <td>{auction.startTime}</td>
                  <td>{auction.endTime}</td>
                  <td>{auction.price}</td>
                  <td>
                    <span className={`status ${auction.status.toLowerCase()}`}>{auction.status}</span>
                  </td>
                  <td>
                    <Link
                      to="/addBid" //to={`/editBid/${auction.id}`}
                      className="btn btn-primary"
                      style={{
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        padding: '5px',
                        marginRight: '10px',
                      }}
                    >
                      <FaPencilAlt style={{ color: 'blue' }} />
                    </Link>

                    <button className="btn delete" onClick={handleDeleteClick}>
                      <FaTrashAlt style={{ color: 'red' }} />
                    </button>

                    {showModal && (
                      <div className="modal fade show" style={{ display: 'block', zIndex: 1050 }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header" style={{ position: 'relative' }}>
                              <h5 className="modal-title" id="exampleModalLabel" style={{ color: 'black' }}>Delete</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleCancel} style={{
                                position: 'absolute',
                                top: '10px',
                                right: '15px',
                                border: 'none',
                                background: 'transparent',
                                fontSize: '1.5rem',
                                color: '#000',
                              }}>
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              Are you sure you want to delete this item?
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                              <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
        .dashboard {
          margin-top: 10rem;
        }

        .table-card .header h2 {
          margin-bottom: 1rem;
        }

        .table-card .header select {
          font-size: 1rem;
        }

        .status {
          font-weight: bold;
        }

        .status.approve {
          color: green;
        }

        .status.reject {
          color: red !important;
        }

        .delete {
          border: none;
          background: none;
          cursor: pointer;
          padding: 5px;
        }

        .modal-content {
          background-color: #f1f1f1;
          color: #333;
        }

        .modal-header {
          background-color: #f1f1f1; 
          color: white;
        }

        .modal-footer {
          background-color: #f1f1f1;
        }
        
      `}</style>
    </div>
  );
};

export default MyBid;
