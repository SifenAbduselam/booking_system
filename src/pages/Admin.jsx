import { useEffect, useState } from "react";

export default function Admin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  function updateStatus(id, newStatus) {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: newStatus } : b
    );

    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  }

  return (
    <div style={styles.container}>
      <h1>Admin Dashboard</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
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
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.name}</td>
                <td>{b.service}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>
                  <strong>{b.status}</strong>
                </td>

                <td style={styles.actions}>
                  <button
                    style={styles.confirm}
                    onClick={() => updateStatus(b.id, "Confirmed")}
                  >
                    Confirm
                  </button>

                  <button
                    style={styles.cancel}
                    onClick={() => updateStatus(b.id, "Cancelled")}
                  >
                    Cancel
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
    padding: "40px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  confirm: {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
  },
  cancel: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
  },
};