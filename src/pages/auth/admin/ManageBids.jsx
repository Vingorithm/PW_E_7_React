import React, { useState, useEffect } from "react";
import { FaUsers, FaGavel } from "react-icons/fa";
import {
  GetAllAuction,
  GetAllUser,
  UpdateUserAuction,
} from "../../../clients/apiAdmin";
import { toast, ToastContainer } from "react-toastify";

const ManageBids = () => {
  const [month, setMonth] = useState("januari");
  const [auctions, setAuctions] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [auctionsPerPage] = useState(5);

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

  const handleStatusChange = async (id, newStatus) => {
    try {
      await UpdateUserAuction(id, { status: newStatus });
      const updatedAuctions = auctions.map((auction) =>
        auction.id === id ? { ...auction, status: newStatus } : auction
      );
      setAuctions(updatedAuctions);
      toast.success("Berhasil mengupdate status auction");
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Gagal memperbarui status.");
    }
  };

  const indexOfLastAuction = currentPage * auctionsPerPage;
  const indexOfFirstAuction = indexOfLastAuction - auctionsPerPage;
  const currentAuctions = auctions.slice(
    indexOfFirstAuction,
    indexOfLastAuction
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="dashboard" style={{ padding: "1rem" }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <h1>Kelola Lelang</h1>

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
          value={auctions.length}
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
                {currentAuctions.map((auction) => (
                  <tr key={auction.id}>
                    <td>{auction.id}</td>
                    <td>{auction.user_id}</td>
                    <td>{`${auction.auction_date} ${auction.start_time}`}</td>
                    <td>{`${auction.auction_date} ${auction.end_time}`}</td>
                    <td>{`Rp${auction.starting_price}`}</td>
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
                        style={{
                          border: "none",
                          background: "none",
                          color: "blue",
                          marginRight: "0.6rem",
                        }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <button
                        style={{
                          border: "none",
                          background: "none",
                          color: "red",
                        }}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div style={{ marginTop: "10px", textAlign: "center" }}>
              {Array.from({
                length: Math.ceil(auctions.length / auctionsPerPage),
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
        gap: "10px",
        minWidth: "150px",
      }}
    >
      <div>
        <p>{title}</p>
        <h1>{value}</h1>
      </div>
      {icon}
    </div>
  );
};

export default ManageBids;
