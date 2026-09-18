import "./HeroImage.css";
import heroImg from "./hero.jpg";

import FloatingDonationCard from "./FloatingDonationCard";
import DonorCard from "./DonorCard";

const HeroImage = () => {
  return (
    <div className="hero-image-container">

      <img
        src={heroImg}
        alt="HopeHands"
        className="hero-main-image"
      />

      <FloatingDonationCard />

      <DonorCard />

    </div>
  );
};

export default HeroImage;