import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  Users,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import "./Campaigns.css";

function Campaigns() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");

  const campaigns = [
  {
    id: 1,
    title: "Help Moksha Get Medical Treatment",
    description:
      "Help provide urgent medical treatment and support for Moksha's recovery.",
    category: "Medical",
    creator: "Rahul Parihar",
    target: 50000,
    raised: 32000,
    donors: 24,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    urgent: true,
    taxBenefits: true,
  },

  {
    id: 2,
    title: "Education Support for Children",
    description:
      "Support children with education, books, and essential learning resources.",
    category: "Education",
    creator: "Hope Foundation",
    target: 100000,
    raised: 75000,
    donors: 46,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    urgent: false,
    taxBenefits: true,
  },

  {
    id: 3,
    title: "Emergency Family Support",
    description:
      "Help a family recover from an unexpected financial emergency.",
    category: "Emergency",
    creator: "Ranjit Somaji",
    target: 75000,
    raised: 45000,
    donors: 31,
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    urgent: true,
    taxBenefits: false,
  },

  {
    id: 4,
    title: "Help Save a Child's Life",
    description:
      "Your contribution can help provide critical treatment and medical care.",
    category: "Medical",
    creator: "Sushmita",
    target: 150000,
    raised: 90000,
    donors: 68,
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    urgent: true,
    taxBenefits: true,
  },

  {
    id: 5,
    title: "Food Support for Families",
    description:
      "Provide nutritious food and essential supplies to families in need.",
    category: "Food",
    creator: "HopeHands Community",
    target: 60000,
    raised: 28000,
    donors: 19,
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
    urgent: false,
    taxBenefits: false,
  },

  {
    id: 6,
    title: "Animal Rescue & Care",
    description:
      "Support rescue, medical treatment, food, and shelter for animals.",
    category: "Animals",
    creator: "Animal Care Society",
    target: 80000,
    raised: 52000,
    donors: 37,
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80",
    urgent: false,
    taxBenefits: false,
  },
];
  const categories = [
    "All",
    "Medical",
    "Education",
    "Emergency",
    "Food",
    "Animals",
    "Environment",
  ];

  const filteredCampaigns = useMemo(() => {
    let result = campaigns.filter((campaign) => {
      const matchesCategory =
        category === "All" || campaign.category === category;

      const searchText = search.toLowerCase();

      const matchesSearch =
        campaign.title.toLowerCase().includes(searchText) ||
        campaign.description.toLowerCase().includes(searchText) ||
        campaign.category.toLowerCase().includes(searchText) ||
        campaign.creator.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === "Most Funded") {
      result.sort(
        (a, b) =>
          b.raised / b.target -
          a.raised / a.target
      );
    }

    if (sortBy === "Most Donors") {
      result.sort((a, b) => b.donors - a.donors);
    }

    if (sortBy === "Urgent") {
      result.sort(
        (a, b) =>
          Number(b.urgent) -
          Number(a.urgent)
      );
    }

    return result;
  }, [search, category, sortBy]);

  const getPercentage = (raised, target) => {
    return Math.min(
      Math.round((raised / target) * 100),
      100
    );
  };

  return (
    <div className="campaigns-page">

      {/* EXISTING NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="campaigns-hero">

        <div className="campaigns-hero-content">

          <span className="campaigns-label">
            MAKE A DIFFERENCE
          </span>

          <h1>
            Find a Cause
            <br />
            <span>Worth Supporting</span>
          </h1>

          <p>
            Explore fundraising campaigns and help
            people, communities, and causes create a
            better tomorrow.
          </p>

          <div className="campaign-search">

            <Search size={21} />

            <input
              type="text"
              placeholder="Search campaigns, causes or categories..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            <button>
              Search
            </button>

          </div>

        </div>

      </section>

      {/* CAMPAIGNS MAIN */}
      <main className="campaigns-main">

        {/* FILTER BAR */}
        <div className="campaign-toolbar">

          <div className="category-section">

            <div className="category-title">
              <SlidersHorizontal size={18} />
              <span>Categories</span>
            </div>

            <div className="category-buttons">

              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? "category-btn selected"
                      : "category-btn"
                  }
                  onClick={() =>
                    setCategory(item)
                  }
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          <div className="sort-section">

            <span>Sort by</span>

            <div className="sort-select">

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
              >
                <option>Latest</option>
                <option>Most Funded</option>
                <option>Most Donors</option>
                <option>Urgent</option>
              </select>

              <ChevronDown size={16} />

            </div>

          </div>

        </div>

        {/* RESULTS HEADER */}
        <div className="campaign-results-header">

          <div>
            <h2>
              Explore Campaigns
            </h2>

            <p>
              {filteredCampaigns.length} campaigns found
            </p>
          </div>

        </div>

        {/* CAMPAIGN CARDS */}
        <div className="campaign-grid">

          {filteredCampaigns.map((campaign) => {

            const percentage =
              getPercentage(
                campaign.raised,
                campaign.target
              );

            return (
              <article
                className="campaign-card"
                key={campaign.id}
              >

                {/* IMAGE */}
                <div className="campaign-image-wrapper">

                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="campaign-image"
                  />

                  <div className="campaign-badges">

                    {campaign.urgent && (
                      <span className="badge urgent">
                        URGENT
                      </span>
                    )}

                    {campaign.taxBenefits && (
                      <span className="badge tax">
                        TAX BENEFITS
                      </span>
                    )}

                  </div>

                  <button className="campaign-heart">
                    <Heart size={18} />
                  </button>

                </div>

                {/* CARD CONTENT */}
                <div className="campaign-card-content">

                  <span className="campaign-category">
                    {campaign.category}
                  </span>

                  <h3>
                    {campaign.title}
                  </h3>

                  <p className="campaign-description">
                    {campaign.description}
                  </p>

                  {/* CREATOR */}
                  <div className="campaign-creator">

                    <div className="creator-avatar">
                      {campaign.creator.charAt(0)}
                    </div>

                    <div>
                      <span>
                        Raised by
                      </span>

                      <strong>
                        {campaign.creator}
                      </strong>
                    </div>

                  </div>

                  {/* PROGRESS */}
                  <div className="campaign-progress">

                    <div className="campaign-progress-info">

                      <strong>
                        ₹
                        {campaign.raised.toLocaleString(
                          "en-IN"
                        )}
                      </strong>

                      <span>
                        of ₹
                        {campaign.target.toLocaleString(
                          "en-IN"
                        )}
                      </span>

                      <b>
                        {percentage}%
                      </b>

                    </div>

                    <div className="campaign-progress-bar">

                      <div
                        className="campaign-progress-fill"
                        style={{
                          width: `${percentage}%`,
                        }}
                      />

                    </div>

                  </div>

                  {/* CARD FOOTER */}
                  <div className="campaign-card-footer">

                    <div className="donor-count">

                      <Users size={16} />

                      <span>
                        {campaign.donors} donors
                      </span>

                    </div>

                    <button
                      className="donate-btn"
                      onClick={() =>
                        navigate(
                          `/campaign/${campaign.id}`
                        )
                      }
                    >
                      Donate
                      <ArrowRight size={16} />
                    </button>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* NO RESULTS */}
        {filteredCampaigns.length === 0 && (
          <div className="no-campaigns">

            <Search size={45} />

            <h3>
              No campaigns found
            </h3>

            <p>
              Try another search term or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Filters
            </button>

          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="campaigns-footer">

        <div className="footer-brand">

          <div className="footer-logo">
            <Heart
              size={19}
              fill="currentColor"
            />

            <span>
              Hope<span>Hands</span>
            </span>
          </div>

          <p>
            Connecting people, creating hope,
            and making a difference.
          </p>

        </div>

        <div className="footer-copy">
          © 2026 HopeHands. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Campaigns;