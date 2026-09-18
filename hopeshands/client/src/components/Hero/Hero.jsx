import "./Hero.css";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        <HeroContent />

        <HeroImage />

      </div>

      <HeroStats />

    </section>
  );
};

export default Hero;