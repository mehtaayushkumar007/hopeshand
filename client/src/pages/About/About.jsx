import {
  Heart,
  ShieldCheck,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-label">ABOUT HOPEHANDS</span>

          <h1>
            Turning Compassion
            <span>Into Real Impact</span>
          </h1>

          <p>
            HopeHands is a fundraising platform that connects people who need
            support with people who are ready to make a difference.
          </p>

          <div className="about-hero-buttons">
            <button
              className="about-primary-btn"
              onClick={() => navigate("/campaigns")}
            >
              Explore Campaigns
              <ArrowRight size={18} />
            </button>

            <button
              className="about-secondary-btn"
              onClick={() => navigate("/create-campaign")}
            >
              Start a Fundraiser
            </button>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="about-intro">
        <div className="about-intro-image">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85"
            alt="People supporting a community"
          />

          <div className="impact-card">
            <Heart size={22} />
            <div>
              <strong>Making Giving Matter</strong>
              <span>One contribution at a time</span>
            </div>
          </div>
        </div>

        <div className="about-intro-content">
          <span className="section-label">WHO WE ARE</span>

          <h2>
            A Platform Built Around
            <span>Human Connection</span>
          </h2>

          <p>
            We believe that everyone deserves a chance to overcome difficult
            circumstances. Whether it is a medical emergency, education,
            hunger, animal welfare, or a community initiative, the right
            support can change someone's life.
          </p>

          <p>
            HopeHands makes it easier for people to create fundraisers, share
            their stories, discover meaningful causes, and contribute securely
            to campaigns they care about.
          </p>

          <div className="about-check-list">
            <div>
              <CheckCircle size={19} />
              <span>Simple and accessible fundraising</span>
            </div>

            <div>
              <CheckCircle size={19} />
              <span>Secure and transparent donations</span>
            </div>

            <div>
              <CheckCircle size={19} />
              <span>Community-driven social impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}

      <section className="mission-section">
        <div className="mission-heading">
          <span className="section-label">OUR PURPOSE</span>

          <h2>Why HopeHands Exists</h2>

          <p>
            Our mission is to make fundraising more accessible, trustworthy,
            and meaningful for everyone.
          </p>
        </div>

        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon">
              <Heart size={25} />
            </div>

            <h3>Compassion</h3>

            <p>
              We encourage people to come together and support individuals,
              families, and communities during their most difficult moments.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <ShieldCheck size={25} />
            </div>

            <h3>Trust & Transparency</h3>

            <p>
              We aim to create a fundraising environment where campaign
              information and donations can be handled with greater
              transparency.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <Users size={25} />
            </div>

            <h3>Community</h3>

            <p>
              HopeHands brings fundraisers and donors together to build a
              community where every person can contribute to positive change.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <Target size={25} />
            </div>

            <h3>Impact</h3>

            <p>
              Our goal is not simply to collect donations, but to help direct
              support toward causes that can create meaningful impact.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT HELPS ================= */}

      <section className="about-impact">
        <div className="about-impact-content">
          <span className="section-label">OUR APPROACH</span>

          <h2>Small Contributions Can Create Big Change</h2>

          <p>
            HopeHands is designed to remove the complexity from online
            fundraising and make participation simple for both fundraisers and
            donors.
          </p>

          <div className="impact-points">
            <div className="impact-point">
              <span>01</span>
              <div>
                <h3>Create</h3>
                <p>
                  Start a fundraiser and tell your story to people who care.
                </p>
              </div>
            </div>

            <div className="impact-point">
              <span>02</span>
              <div>
                <h3>Connect</h3>
                <p>
                  Share your campaign and connect with a supportive community.
                </p>
              </div>
            </div>

            <div className="impact-point">
              <span>03</span>
              <div>
                <h3>Support</h3>
                <p>
                  Donors can discover causes and contribute to campaigns.
                </p>
              </div>
            </div>

            <div className="impact-point">
              <span>04</span>
              <div>
                <h3>Impact</h3>
                <p>
                  Together, contributions become meaningful support for people
                  and causes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-impact-image">
          <img
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1000&q=85"
            alt="Community volunteers helping others"
          />
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="about-stats">
        <div className="about-stat">
          <strong>200+</strong>
          <span>Fundraisers</span>
        </div>

        <div className="about-stat">
          <strong>10K+</strong>
          <span>Donors</span>
        </div>

        <div className="about-stat">
          <strong>₹50L+</strong>
          <span>Raised</span>
        </div>

        <div className="about-stat">
          <strong>8+</strong>
          <span>Cause Categories</span>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="about-cta">
        <div>
          <span>BE PART OF THE CHANGE</span>

          <h2>Every Helping Hand Matters</h2>

          <p>
            Whether you donate, create a fundraiser, or simply share a cause,
            your actions can help someone move one step closer to a better
            tomorrow.
          </p>
        </div>

        <div className="about-cta-buttons">
          <button
            className="about-primary-btn"
            onClick={() => navigate("/campaigns")}
          >
            Find a Cause
            <ArrowRight size={18} />
          </button>

          <button
            className="about-outline-btn"
            onClick={() => navigate("/create-campaign")}
          >
            Start Fundraising
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="about-footer">
        <div>
          <strong>HopeHands</strong>
          <span>Making giving simple. Making impact meaningful.</span>
        </div>

        <p>© 2026 HopeHands. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;