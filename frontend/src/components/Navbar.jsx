import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "14px 20px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        gap: "20px",
        fontWeight: "bold",
      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
