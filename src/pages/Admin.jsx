import { useEffect, useState } from "react";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  function save(updated) {
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  }

  function updateStatus(id, status) {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status } : b
    );
    save(updated);
  }

  function deleteBooking(id) {
    const updated = bookings.filter((b) => b.id !== id);
    save(updated);
  }

  function getFiltered() {
    if (filter === "All") return bookings;
    return bookings.filter((b) => b.status === filter);
  }

  const filteredBookings = getFiltered();

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>

      {/* FILTER BAR */}
      <div style={styles.filters}>
        {["All", "New", "Confirmed", "Cancelled"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.filterBtn,
              backgroundColor: filter === f ? "black" : "#eee",
              color: filter === f ? "white" : "black",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {filteredBookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.service}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td><b>{b.status}</b></td>

                <td style={styles.actions}>
                  <button onClick={() => updateStatus(b.id, "Confirmed")} style={styles.confirm}>
                    Confirm
                  </button>

                  <button onClick={() => updateStatus(b.id, "Cancelled")} style={styles.cancel}>
                    Cancel
                  </button>

                  <button onClick={() => deleteBooking(b.id)} style={styles.delete}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
  },

  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  filterBtn: {
    padding: "6px 12px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  actions: {
    display: "flex",
    gap: "8px",
  },

  confirm: {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "5px 8px",
    cursor: "pointer",
  },

  cancel: {
    backgroundColor: "orange",
    color: "white",
    border: "none",
    padding: "5px 8px",
    cursor: "pointer",
  },

  delete: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 8px",
    cursor: "pointer",
  },
};