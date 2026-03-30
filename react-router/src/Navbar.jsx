import { Link } from "react-router-dom";
import { Home, User, Mail } from "lucide-react";
import "./Navbar.css";

function Navbar({ active }) {
  return (
    <div className="navbar">

      <Link
        to="/"
        className="nav-menu"
        style={{ fontWeight: active === "home" ? "bold" : "normal" }}
      >
        <Home size={18} /> Home
      </Link>

      <Link
        to="/about"
        className="nav-menu"
        style={{ fontWeight: active === "about" ? "bold" : "normal" }}
      >
        <User size={18} /> About Us
      </Link>

      <Link
        to="/contact"
        className="nav-menu"
        style={{ fontWeight: active === "contact" ? "bold" : "normal" }}
      >
        <Mail size={18} /> Contact Us
      </Link>

    </div>
  );
}

export default Navbar;