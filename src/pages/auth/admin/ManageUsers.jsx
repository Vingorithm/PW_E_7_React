import React, { useState, useEffect } from "react";
import { FaUsers, FaGavel } from "react-icons/fa";
import {
  DeleteUser,
  GetAllAuction,
  GetAllUser,
  UpdateUserStatus,
} from "../../../clients/apiAdmin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageUsers = () => {
  const [month, setMonth] = useState("januari");
  const [auctions, setAuctions] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await GetAllUser();
      setUsers(response.data.users || []);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Gagal memuat data pengguna.");
    } finally {
      setLoading(false);
    }
  };

  const fetchAuctions = async () => {
    try {
      setLoading(true);
      const response = await GetAllAuction();
      setAuctions(response.data.users || []);
    } catch (err) {
      console.error("Error fetching auctions:", err);
      setError("Gagal memuat data lelang.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchAuctions();
  }, []);

  const handleDeleteButton = async (id) => {
    try {
      console.log(id);
      await DeleteUser(id);
      fetchUsers();
      toast.success("Pengguna berhasil dihapus");
    } catch (err) {
      console.error("Error fetching auctions:", err);
      toast.error("Pengguna gagal dihapus");
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await UpdateUserStatus(id, { status: newStatus });
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, status: newStatus } : user
      );
      setUsers(updatedUsers);
      toast.success("Status pengguna berhasil diperbarui");
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Gagal memperbarui status pengguna.");
    }
  };

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="dashboard" style={{ padding: "1rem" }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1>Kelola Pengguna</h1>

      {/* Statistics */}
      <div
        className="statistics"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <StatCard
          title="Total Pengguna"
          value={users.length}
          icon={<FaUsers size={50} color="#00AAB6" />}
        />
        <StatCard
          title="Total Lelang"
          value={auctions.length} // Placeholder value
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
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h2>List Pengguna</h2>
          <div
            style={{
              display: "flex",
              gap: "10px",
              width: "25rem",
            }}
          >
            <select
              className="form-select"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              style={{ maxHeight: "40px", maxWidth: "10rem" }}
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
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
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
                  <th>Username</th>
                  <th>Email</th>
                  <th>NIK</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username || "-"}</td>
                    <td>{user.email}</td>
                    <td>{user.identity_number || "-"}</td>
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
                        onClick={() => handleDeleteButton(user.id)}
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
            {/* Pagination */}
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              {Array.from({
                length: Math.ceil(users.length / usersPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  style={{
                    margin: "0 5px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    backgroundColor:
                      currentPage === index + 1 ? "#00AAB6" : "#f0f0f0",
                    color: currentPage === index + 1 ? "white" : "black",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        )}
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
