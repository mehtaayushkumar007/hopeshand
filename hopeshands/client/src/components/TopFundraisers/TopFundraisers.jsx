import { useState } from "react";
import "./TopFundraisers.css";

const fundraisers = [
  {
    id: 1,
    title: "Help Save Little Moksha: Urgent Support Needed For SMA Type 1",
    person: "Moksha",
    image: "/images/Hero.jpg",
    raised: "₹ 12,55,405",
    percentage: 1,
    taxBenefits: true,
    urgent: true,
  },
  {
    id: 2,
    title: "A Road Accident Left Rahul Fighting For His Life.",
    person: "Rahul Parihar",
    image: "/images/Hero.jpg",
    raised: "₹ 1,01,405",
    percentage: 25,
    taxBenefits: true,
    urgent: true,
  },
  {
    id: 3,
    title: "Stand With Ranjit in His Fight Against Acute Respiratory...",
    person: "Ranjit Somaji Ghadigaonkar",
    image: "/images/Hero.jpg",
    raised: "₹ 1,70,357",
    percentage: 28,
    taxBenefits: true,
    urgent: true,
  },
  {
    id: 4,
    title: "Give Our Baby The Gift Of Life - Support This Urgent Liver...",
    person: "Baby Of Sushmita",
    image: "/images/Hero.jpg",
    raised: "₹ 1,81,863",
    percentage: 10,
    taxBenefits: true,
    urgent: true,
  },
];

function TopFundraisers() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = fundraisers.slice(
    startIndex,
    startIndex + 4
  );

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + 1 >= fundraisers.length
        ? 0
        : prev + 1
    );
  };

  const handlePrevious = () => {
    setStartIndex((prev) =>
      prev === 0
        ? fundraisers.length - 1
        : prev - 1
    );
  };

  const handleDonate = (fundraiser) => {
    console.log(
      "Donate clicked:",
      fundraiser.title
    );

    // Later:
    // navigate(`/campaign/${fundraiser.id}`);
  };

  return (
    <section className="top-fundraisers">

      {/* Heading */}

      <div className="fundraiser-heading">

        <h2>Our Top Fundraisers</h2>

        <div className="heading-line"></div>

      </div>

      {/* Carousel */}

      <div className="fundraiser-carousel">

        {/* Previous */}

        <button
          className="carousel-arrow carousel-prev"
          onClick={handlePrevious}
          aria-label="Previous fundraisers"
        >
          ‹
        </button>

        {/* Cards */}

        <div className="fundraiser-list">

          {visibleCards.map((fundraiser) => (
            <div
              className="fundraiser-card"
              key={fundraiser.id}
            >

              {/* Image */}

              <div className="fundraiser-image">

                <img
                  src={fundraiser.image}
                  alt={fundraiser.title}
                />

                {/* Tax badge */}

                {fundraiser.taxBenefits && (
                  <span className="tax-badge">
                    TAX BENEFITS
                  </span>
                )}

                {/* Urgent badge */}

                {fundraiser.urgent && (
                  <span className="urgent-badge">
                    URGENT
                  </span>
                )}

                {/* Medical icon */}

                <div className="medical-icon">
                  ♧
                </div>

              </div>

              {/* Content */}

              <div className="fundraiser-content">

                <h3>
                  {fundraiser.title}
                </h3>

                <p className="fundraiser-person">
                  by{" "}
                  <span>
                    {fundraiser.person}
                  </span>
                </p>

                {/* Share buttons */}

                <div className="share-buttons">

                  <button
                    className="share-button"
                    onClick={() =>
                      console.log(
                        "WhatsApp share"
                      )
                    }
                  >
                    <span className="whatsapp-icon">
                      ◉
                    </span>
                    Share
                  </button>

                  <button
                    className="share-button"
                    onClick={() =>
                      console.log(
                        "Facebook share"
                      )
                    }
                  >
                    <span className="facebook-icon">
                      f
                    </span>
                    Share
                  </button>

                </div>

              </div>

              {/* Progress */}

              <div className="fundraiser-progress">

                <div className="progress-info">

                  <span className="raised">
                    {fundraiser.raised}
                    {" "}
                    <small>Raised</small>
                  </span>

                  <span className="percentage">
                    {fundraiser.percentage}%
                  </span>

                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${fundraiser.percentage}%`,
                    }}
                  ></div>

                </div>

              </div>

              {/* Donate */}

              <div className="donate-wrapper">

                <button
                  className="donate-button"
                  onClick={() =>
                    handleDonate(fundraiser)
                  }
                >
                  DONATE
                </button>

              </div>

            </div>
          ))}

        </div>

        {/* Next */}

        <button
          className="carousel-arrow carousel-next"
          onClick={handleNext}
          aria-label="Next fundraisers"
        >
          ›
        </button>

      </div>

    </section>
  );
}

export default TopFundraisers;