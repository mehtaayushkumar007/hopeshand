import { Link } from "react-router-dom";
import { FaHandHoldingHeart } from "react-icons/fa";
import "./NavbarLogo.css";

const NavbarLogo = () => {
  return (
    <Link to="/" className="logo">

      <div className="logo-icon-container">
        <FaHandHoldingHeart className="logo-icon" />
      </div>

      <div className="logo-content">
        <h2 className="logo-title">HopeHands</h2>
        <p className="logo-subtitle">
          Fundraising Platform
        </p>
      </div>

    </Link>
  );
};

export default NavbarLogo;