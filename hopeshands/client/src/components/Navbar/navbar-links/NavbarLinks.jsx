import { NavLink } from "react-router-dom";
import "./NavbarLinks.css";

const NavbarLinks = () => {
  return (
    <nav className="navbar-links">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/campaigns"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }
      >
        Campaigns
      </NavLink>

      <NavLink
        to="/categories"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }
      >
        Categories
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/how-it-works"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }
      >
        How It Works
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default NavbarLinks;