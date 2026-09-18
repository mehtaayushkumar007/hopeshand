import "./Navbar.css";  
import NavbarLogo from "./navbar-logo/NavbarLogo";
import NavbarLinks from "./navbar-links/NavbarLinks";
import NavbarRight from "./navbar-right/NavbarRight";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <NavbarLogo />
      </div>

      <div className="navbar-center">
        <NavbarLinks /> 
      </div>

      <div className="navbar-right">
        <NavbarRight />
      </div>
    </header>
  );
};

export default Navbar;