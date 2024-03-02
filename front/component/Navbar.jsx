import { Link } from "react-router-dom";
import logo from "../images/pic.jpg"; // Adjust the path accordingly
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav logo">
        <img src={logo} alt="Logo" width="90px"/> {/* Use the imported logo variable */}
      </div>
      <div className="nav link">
        <Link to="/" className="lst">Home</Link>
        <Link to="/menu" className="lst">Menu</Link>
        <Link to="/about" className="lst">About</Link>
        <Link to="/contact" className="lst">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
