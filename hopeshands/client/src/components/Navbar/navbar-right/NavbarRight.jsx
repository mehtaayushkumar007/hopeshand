import "./NavbarRight.css";
import { FaSearch, FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
const NavbarRight = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar-right-content">

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search campaigns..."
        />
        <FaSearch className="search-icon" />
      </div>

      {/* Notification */}
      <div className="notification">
        <FaBell />
        <span className="notification-badge">3</span>
      </div>

      {user ? (
        <>
          {/* Dashboard */}
          <Link to="/dashboard">
            <button className="login-btn">
              Dashboard
            </button>
          </Link>

          {/* Logout */}
          <button
            className="fundraiser-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          {/* Login */}
          <Link to="/login">
            <button className="login-btn">
              Login / Register
            </button>
          </Link>

          {/* Register */}
          <Link to="/register">
            <button className="fundraiser-btn">
              Start Fundraiser
            </button>
          </Link>
        </>
      )}

    </div>
  );
};

export default NavbarRight;