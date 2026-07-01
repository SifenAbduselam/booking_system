import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBooking = {
      ...form,
      id: Date.now(),
      status: "New",
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, newBooking])
    );

    alert("Booking saved!");

    setForm({
      name: "",
      service: "",
      date: "",
      time: "",
    });
  }

  return (
    <div style={styles.container}>
      <h1>Book a Service</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select service</option>
          <option value="Photography">Photography</option>
          <option value="Bakery">Bakery</option>
          <option value="Clinic">Clinic</option>
          <option value="Hotel">Hotel</option>
        </select>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};