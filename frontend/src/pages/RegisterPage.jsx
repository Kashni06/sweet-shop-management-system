import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api"; // ✅ axios instance

function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", {
        email,
        password,
      });

      // ✅ after successful register → go to login
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleRegister}>
        <div style={styles.icon}>🍬</div>

        <h1 style={styles.title}>Create Account</h1>
        <p style={styles.subtitle}>Join the Sweet Shop</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <label style={styles.label}>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          placeholder="••••••••"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label style={styles.label}>Confirm Password</label>
        <input
          type="password"
          placeholder="••••••••"
          style={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" style={styles.button}>
          Register
        </button>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f3e8ff, #e9d5ff)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    width: "360px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  icon: { fontSize: "40px", marginBottom: "10px" },
  title: { margin: 0, color: "#7b2cbf" },
  subtitle: { color: "#666", marginBottom: "30px" },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "6px",
    fontWeight: "bold",
    color: "#444",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    marginBottom: "18px",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #f97316, #ec4899)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  footerText: { marginTop: "20px", color: "#555" },
  link: {
    color: "#7b2cbf",
    fontWeight: "bold",
    textDecoration: "none",
  },
};

export default RegisterPage;
