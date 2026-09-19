import { useMemo, useState } from "react";
import { Search, ArrowRight, Heart, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Categories.css";

const categories = [
  {
    id: 1,
    name: "Medical & Healthcare",
    description:
      "Support medical treatments, surgeries, medicines, and healthcare needs.",
    campaigns: 42,
    raised: "₹18.5L",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    color: "medical",
  },
  {
    id: 2,
    name: "Education",
    description:
      "Help children and students access education, books, fees, and learning resources.",
    campaigns: 31,
    raised: "₹12.8L",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    color: "education",
  },
  {
    id: 3,
    name: "Emergency",
    description:
      "Provide urgent financial support to individuals and families facing emergencies.",
    campaigns: 28,
    raised: "₹9.4L",
    image:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    color: "emergency",
  },
  {
    id: 4,
    name: "Food & Hunger",
    description:
      "Help provide nutritious meals and essential food supplies to families in need.",
    campaigns: 24,
    raised: "₹7.2L",
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
    color: "food",
  },
  {
    id: 5,
    name: "Children",
    description:
      "Support children's welfare, safety, education, healthcare, and development.",
    campaigns: 36,
    raised: "₹15.6L",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    color: "children",
  },
  {
    id: 6,
    name: "Animal Welfare",
    description:
      "Support animal rescue, treatment, food, shelter, and rehabilitation.",
    campaigns: 19,
    raised: "₹5.8L",
    image:
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=900&q=80",
    color: "animals",
  },
  {
    id: 7,
    name: "Environment",
    description:
      "Support environmental protection, conservation, clean water, and sustainability.",
    campaigns: 16,
    raised: "₹4.9L",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80",
    color: "environment",
  },
  {
    id: 8,
    name: "Community",
    description:
      "Help communities build better homes, facilities, and opportunities for everyone.",
    campaigns: 22,
    raised: "₹8.1L",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
    color: "community",
  },
];

function Categories() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleExplore = (categoryName) => {
    navigate(`/campaigns?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="categories-page">
      <Navbar />

      {/* Hero */}
      <section className="categories-hero">
        <div className="categories-hero-content">
          <span className="categories-label">EXPLORE CAUSES</span>

          <h1>
            Find a Cause
            <span> Worth Supporting</span>
          </h1>

          <p>
            Discover campaigns that matter. Choose a cause close to your heart
            and make a meaningful difference today.
          </p>

          <div className="category-search">
            <Search size={21} />

            <input
              type="text"
              placeholder="Search categories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="category-stats">
        <div className="category-stat">
          <div className="stat-icon">
            <Heart size={22} />
          </div>

          <div>
            <strong>8+</strong>
            <span>Causes</span>
          </div>
        </div>

        <div className="category-stat">
          <div className="stat-icon">
            <Target size={22} />
          </div>

          <div>
            <strong>200+</strong>
            <span>Active Campaigns</span>
          </div>
        </div>

        <div className="category-stat">
          <div className="stat-icon">
            <Users size={22} />
          </div>

          <div>
            <strong>10K+</strong>
            <span>Donors</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <main className="categories-main">
        <div className="categories-heading">
          <div>
            <span className="section-label">CHOOSE A CATEGORY</span>

            <h2>Causes You Can Support</h2>

            <p>
              Every contribution matters. Explore our causes and find a
              campaign where your support can create an impact.
            </p>
          </div>

          <button
            className="view-all-btn"
            onClick={() => navigate("/campaigns")}
          >
            View All Campaigns
            <ArrowRight size={18} />
          </button>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="categories-grid">
            {filteredCategories.map((category) => (
              <article className="category-card" key={category.id}>
                <div className="category-image">
                  <img src={category.image} alt={category.name} />

                  <div className={`category-badge ${category.color}`}>
                    {category.name}
                  </div>
                </div>

                <div className="category-content">
                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <div className="category-info">
                    <div>
                      <strong>{category.campaigns}</strong>
                      <span>Campaigns</span>
                    </div>

                    <div>
                      <strong>{category.raised}</strong>
                      <span>Raised</span>
                    </div>
                  </div>

                  <button
                    className="explore-category-btn"
                    onClick={() => handleExplore(category.name)}
                  >
                    Explore Campaigns
                    <ArrowRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="no-categories">
            <Search size={42} />
            <h3>No categories found</h3>
            <p>Try searching for another cause.</p>
          </div>
        )}
      </main>

      {/* CTA */}
      <section className="categories-cta">
        <div>
          <span>MAKE AN IMPACT</span>

          <h2>Can't find the cause you're looking for?</h2>

          <p>
            Start your own fundraiser and bring your community together for a
            cause that matters to you.
          </p>
        </div>

        <button
          className="start-fundraiser-btn"
          onClick={() => navigate("/create-campaign")}
        >
          Start a Fundraiser
          <ArrowRight size={18} />
        </button>
      </section>

      {/* Footer */}
      <footer className="categories-footer">
        <div>
          <strong>HopeHands</strong>
          <span>Making giving simple. Making impact meaningful.</span>
        </div>

        <p>© 2026 HopeHands. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Categories;
