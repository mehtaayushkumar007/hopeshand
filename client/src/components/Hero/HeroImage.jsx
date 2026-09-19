import "./HeroImage.css";

import FloatingDonationCard from "./FloatingDonationCard";
import DonorCard from "./DonorCard";

const HeroImage = () => {
  return (
    <div className="hero-image-container">

      <img
        src={"https://images.unsplash.com/photo-1638526970908-b18e32b0bc42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvbmF0aW9ufGVufDB8fDB8fHww"}
        alt="HopeHands"
        className="hero-main-image"
      />

      <FloatingDonationCard />

      <DonorCard />

    </div>
  );
};

export default HeroImage;