import "./DonorCard.css";
import { FaHeart } from "react-icons/fa";

const DonorCard = () => {
  return (
    <div className="donor-card">

      <div className="donor-avatars">
        <img src="https://i.pravatar.cc/45?img=21" alt="Donor" />
        <img src="https://i.pravatar.cc/45?img=22" alt="Donor" />
        <img src="https://i.pravatar.cc/45?img=23" alt="Donor" />
        <img src="https://i.pravatar.cc/45?img=24" alt="Donor" />
      </div>

      <div className="donor-info">
        <h4>2,500+ Donors</h4>

        <p>
          <FaHeart className="heart-icon" />
          Supporting Together
        </p>
      </div>

    </div>
  );
};

export default DonorCard;