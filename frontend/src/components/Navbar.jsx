import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🍬 Sweet Shop</h2>

      <div style={styles.links}>
        <Link to="/login" style={styles.link}>
          Login
        </Link>
        <Link to="/dashboard" style={styles.link}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    background: "linear-gradient(135deg, #7b2cbf, #c77dff)",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Navbar;
