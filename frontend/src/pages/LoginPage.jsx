import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api"; // axios instance

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    console.log("LOGIN CLICKED", email, password);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      console.log("LOGIN RESPONSE:", res.data);

      // Save JWT token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  }

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleLogin}>
        <div style={styles.icon}>🍭</div>

        <h1 style={styles.title}>Sweet Shop</h1>
        <p style={styles.subtitle}>Login to your account</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <label style={styles.label}>Email</label>
        <input
          type="email"
          placeholder="admin@example.com or user@example.com"
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

        <button type="submit" style={styles.button}>
          Login
        </button>

        <p style={styles.footerText}>
          Don’t have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

/* ✅ styles object (was missing) */
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
    background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
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

/* ✅ THIS WAS THE MAIN MISSING LINE */
export default LoginPage;
