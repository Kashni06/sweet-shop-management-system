import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "12px 20px",
        display: "flex",
        gap: "16px",
        borderBottom: "1px solid #ddd",
        fontWeight: "bold",
      }}
    >
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;
