import "./HeroContent.css";
import { FaArrowRight, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="hero-content">

      <span className="hero-badge">
        <FaHeart className="badge-icon" />
        Together, We Can Create Change
      </span>

      <h1 className="hero-heading">
        Small Contribution,
        <br />
        Big <span>Change</span>
      </h1>

      <p className="hero-text">
        HopeHands is a trusted crowdfunding platform that connects generous
        people with meaningful causes. Every donation brings hope, empowers
        communities, and transforms lives.
      </p>

      <div className="hero-buttons">

  <Link to="/register">
    <button className="primary-btn">
      Start Fundraising
    </button>
  </Link>

  <Link to="/login">
    <button className="secondary-btn">
      Login
    </button>
  </Link>

</div>

      <div className="hero-community">

        <div className="avatar-group">

          <img src="https://i.pravatar.cc/45?img=1" alt="" />
          <img src="https://i.pravatar.cc/45?img=2" alt="" />
          <img src="https://i.pravatar.cc/45?img=3" alt="" />
          <img src="https://i.pravatar.cc/45?img=4" alt="" />

        </div>

        <div className="community-text">
          <h4>10,000+ Supporters</h4>
          <p>Join our growing community of changemakers.</p>
        </div>

      </div>

    </div>
  );
};

export default HeroContent;