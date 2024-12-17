import React, { useState } from "react";
import { FaUsers, FaGavel } from "react-icons/fa";

const ManageUsers = () => {
  const [month, setMonth] = useState("januari");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Joko Waluyo",
      email: "joko@gmail.com",
      phone: "+6281621712811",
      nik: "3402121101010001",
      status: "Verified",
    },
    {
      id: 2,
      name: "Sejarah Satu",
      email: "sejarah@gmail.com",
      phone: "+6281644712811",
      nik: "3402121101010002",
      status: "Unverified",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="dashboard" style={{ padding: "1rem" }}>
      <h1>Kelola Pengguna</h1>

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
              Tambah Pengguna
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
                    <select
                      value={user.status}
                      onChange={(e) =>
                        handleStatusChange(user.id, e.target.value)
                      }
                      style={{
                        backgroundColor:
                          user.status === "Verified"
                            ? "#d4edda"
                            : user.status === "Unverified"
                            ? "#fff3cd"
                            : "#f8d7da",
                        color:
                          user.status === "Verified"
                            ? "green"
                            : user.status === "Unverified"
                            ? "orange"
                            : "red",
                        fontWeight: "bold",
                        padding: "5px",
                        borderRadius: "5px",
                        border: "none",
                      }}
                    >
                      <option value="Verified">Verified</option>
                      <option value="Unverified">Unverified</option>
                      <option value="Blocked">Blocked</option>
                    </select>
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

export default ManageUsers;
