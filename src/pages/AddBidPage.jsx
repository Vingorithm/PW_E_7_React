import React, { useState } from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const AddBid = () => {
  const [selectedMonth, setSelectedMonth] = useState('januari');

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
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
              <button
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
              </button>
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
                    <button className="btn delete">
                      <FaPencilAlt style={{ color: 'blue' }} />
                    </button>
                    <button className="btn delete">
                      <FaTrashAlt style={{ color: 'red' }} />
                    </button>
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
          color: red;
        }

        .delete {
          border: none;
          background: none;
          cursor: pointer;
          padding: 5px;
        }
      `}</style>
    </div>
  );
};

export default AddBid;
