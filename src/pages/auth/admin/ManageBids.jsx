import React, { useState } from "react";

const ManageBids = () => {
  const [month, setMonth] = useState("januari");
  const auctions = [
    {
      id: 1,
      userId: 2,
      startTime: "12.09.2019 - 12.50 PM",
      endTime: "20.09.2019 - 12.50 PM",
      startingPrice: "$30000",
      status: "Approve",
    },
    {
      id: 2,
      userId: 3,
      startTime: "12.09.2019 - 12.50 PM",
      endTime: "20.09.2019 - 12.50 PM",
      startingPrice: "$20000",
      status: "Rejected",
    },
  ];

  return (
    <div className="dashboard">
      <h1>Kelola Lelang</h1>

      {/* Statistics */}
      <div className="statistics" style={{ display: "flex", gap: "20px" }}>
        <StatCard
          title="Total Pengguna"
          value="200"
          iconSrc="./images/pengguna.svg"
        />
        <StatCard
          title="Total Lelang"
          value="2121"
          iconSrc="./images/lelang.svg"
        />
      </div>

      {/* Table Section */}
      <div className="table-card">
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>List Lelang</h2>
          <div style={{ display: "flex" }}>
            <select
              className="form-select"
              name="months"
              id="months"
              style={{
                maxHeight: "40px",
                maxWidth: "10rem",
                marginRight: "20px",
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
                marginBottom: "20px",
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
        <table
          className="table"
          style={{ width: "100%", borderCollapse: "collapse" }}
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
                  <span
                    className={`status ${auction.status.toLowerCase()}`}
                    style={{
                      color: auction.status === "Approve" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {auction.status}
                  </span>
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
  );
};

const StatCard = ({ title, value, iconSrc }) => {
  return (
    <div
      className="stat-item"
      style={{ display: "flex", alignItems: "center", gap: "20px" }}
    >
      <div className="stat-item-1">
        <p>{title}</p>
        <h1>{value}</h1>
      </div>
      <span className="icon">
        <img
          src={iconSrc}
          alt={title}
          style={{ width: "50px", height: "50px" }}
        />
      </span>
    </div>
  );
};

export default ManageBids;
