import "./FloatingDonationCard.css";
import { FaDonate, FaArrowRight } from "react-icons/fa";

const FloatingDonationCard = () => {
  return (
    <div className="floating-donation-card">

      <div className="donation-icon">
        <FaDonate />
      </div>

      <span className="card-badge">
        Featured Campaign
      </span>

      <h3>
        Every Donation
        <br />
        Brings Hope
      </h3>

      <p>
        Help families receive education, healthcare, food, and emergency
        support through trusted campaigns on HopeHands.
      </p>

      <div className="donation-progress">

        <div className="progress-info">
          <span>Raised</span>
          <strong>₹2,35,000</strong>
        </div>

        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>

        <div className="progress-footer">
          <span>78% Funded</span>
          <span>₹3,00,000 Goal</span>
        </div>

      </div>

      <button className="donate-btn">
        Donate Now
        <FaArrowRight />
      </button>

    </div>
  );
};

export default FloatingDonationCard;