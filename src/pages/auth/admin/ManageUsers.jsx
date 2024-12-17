import React, { useState } from "react";

const ManageUsers = () => {
  const [month, setMonth] = useState("januari");
  const users = [
    {
      id: 1,
      name: "Joko Waluyo",
      email: "joko@gmail.com",
      phone: "+6281621712811",
      nik: "3402121101010001",
      status: "Approve",
    },
    {
      id: 2,
      name: "Sejarah Satu",
      email: "sejarah@gmail.com",
      phone: "+6281644712811",
      nik: "3402121101010002",
      status: "Rejected",
    },
  ];

  return (
    <div className="dashboard">
      <h1>Kelola Pengguna</h1>

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
          <h2>List Pengguna</h2>
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
                "juli",
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
              Tambah Pengguna
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
              <th>Id Pengguna</th>
              <th>Nama Lengkap</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th>NIK</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.nik}</td>
                <td>
                  <span
                    className={`status ${user.status.toLowerCase()}`}
                    style={{
                      color: user.status === "Approve" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
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

export default ManageUsers;
