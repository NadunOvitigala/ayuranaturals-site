import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <img src={logo} alt="Ayura Naturals" height="50" />

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/treatments">Treatments</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#f5f5f5",
  },
  links: {
    display: "flex",
    gap: "20px",
    fontWeight: "bold",
  },
};
