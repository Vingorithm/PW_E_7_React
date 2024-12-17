import React, { useState } from "react";
import { FaUsers, FaGavel } from "react-icons/fa"; // Import react-icons

const ManageBids = () => {
  const [month, setMonth] = useState("januari");
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      userId: 2,
      startTime: "12.09.2019 - 12.50 PM",
      endTime: "20.09.2019 - 12.50 PM",
      startingPrice: "$30000",
      status: "Ongoing",
    },
    {
      id: 2,
      userId: 3,
      startTime: "12.09.2019 - 12.50 PM",
      endTime: "20.09.2019 - 12.50 PM",
      startingPrice: "$20000",
      status: "Upcoming",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updatedAuctions = auctions.map((auction) =>
      auction.id === id ? { ...auction, status: newStatus } : auction
    );
    setAuctions(updatedAuctions);
  };

  return (
    <div className="dashboard" style={{ padding: "1rem" }}>
      <h1>Kelola Lelang</h1>

      {/* Statistics */}
      <div
        className="statistics"
        style={{
          display: "flex",
          flexWrap: "wrap",
          // justifyContent: "center",
          gap: "20px",
        }}
      >
        <StatCard
          title="Total Pengguna"
          value="200"
          icon={<FaUsers size={50} color="#00AAB6" />}
        />
        <StatCard
          title="Total Lelang"
          value="2121"
          icon={<FaGavel size={50} color="#00AAB6" />}
        />
      </div>

      {/* Table Section */}
      <div
        className="table-card"
        style={{ overflowX: "auto", marginTop: "20px" }}
      >
        <div
          className="header"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h2>List Lelang</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              width: "25rem",
            }}
          >
            <select
              className="form-select"
              name="months"
              id="months"
              style={{
                maxHeight: "40px",
                maxWidth: "10rem",
              }}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            >
              {[
                "januari",
                "februari",
                "maret",
                "april",
                "mei",
                "juni",
                "agustus",
                "september",
                "oktober",
                "november",
                "desember",
              ].map((m) => (
                <option key={m} value={m}>
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </option>
              ))}
            </select>
            <button
              className="btn btn-primary"
              style={{
                backgroundColor: "#00AAB6",
                border: "none",
                borderRadius: "50px",
                maxHeight: "40px",
                width: "14rem",
              }}
            >
              Tambah Lelang
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table
            className="table"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "600px",
            }}
          >
            <thead>
              <tr>
                <th>Id Lelang</th>
                <th>Id Pengguna</th>
                <th>Waktu Mulai</th>
                <th>Waktu Selesai</th>
                <th>Harga Awal</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {auctions.map((auction) => (
                <tr key={auction.id}>
                  <td>{auction.id}</td>
                  <td>{auction.userId}</td>
                  <td>{auction.startTime}</td>
                  <td>{auction.endTime}</td>
                  <td>{auction.startingPrice}</td>
                  <td>
                    <select
                      value={auction.status}
                      onChange={(e) =>
                        handleStatusChange(auction.id, e.target.value)
                      }
                      style={{
                        backgroundColor:
                          auction.status === "Ongoing"
                            ? "#d4edda"
                            : auction.status === "Upcoming"
                            ? "#fff3cd"
                            : "#cce5ff",
                        color:
                          auction.status === "Ongoing"
                            ? "green"
                            : auction.status === "Upcoming"
                            ? "orange"
                            : "blue",
                        fontWeight: "bold",
                        padding: "5px",
                        borderRadius: "5px",
                        border: "none",
                      }}
                    >
                      <option value="Ongoing">Ongoing</option>
                      <option value="Upcoming">Upcoming</option>
                      <option value="Finished">Finished</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn edit"
                      style={{ background: "none", border: "none" }}
                    >
                      <i
                        className="bi bi-pencil-square"
                        style={{ color: "blue" }}
                      ></i>
                    </button>
                    <button
                      className="btn delete"
                      style={{ background: "none", border: "none" }}
                    >
                      <i
                        className="bi bi-trash-fill"
                        style={{ color: "red" }}
                      ></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => {
  return (
    <div
      className="stat-item"
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        gap: "10px",
        minWidth: "150px",
      }}
    >
      <div className="stat-item-1">
        <p>{title}</p>
        <h1>{value}</h1>
      </div>
      <span className="icon">{icon}</span>
    </div>
  );
};

export default ManageBids;
