import {
  UserPlus,
  FileText,
  ShieldCheck,
  Share2,
  Heart,
  Search,
  CreditCard,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Users,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./HowItWorks.css";

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <div className="how-page">
      <Navbar />

      {/* HERO */}
      <section className="how-hero">
        <div className="how-hero-overlay"></div>

        <div className="how-hero-content">
          <span className="how-label">HOW HOPEHANDS WORKS</span>

          <h1>
            Turning Support
            <span>Into Real Change</span>
          </h1>

          <p>
            Whether you want to raise funds or support a cause, HopeHands makes
            the process simple, secure, and transparent.
          </p>

          <div className="how-hero-buttons">
            <button
              className="how-primary-btn"
              onClick={() => navigate("/create-campaign")}
            >
              Start a Fundraiser
              <ArrowRight size={18} />
            </button>

            <button
              className="how-secondary-btn"
              onClick={() => navigate("/campaigns")}
            >
              Find a Cause
            </button>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="how-overview">
        <div className="overview-heading">
          <span className="section-label">
            SIMPLE. SECURE. IMPACTFUL.
          </span>

          <h2>How HopeHands Works</h2>

          <p>
            Our platform connects people who need help with people who want to
            help.
          </p>
        </div>

        <div className="overview-cards">
          <div className="overview-card">
            <div className="overview-icon">
              <Heart size={25} />
            </div>

            <h3>Raise Funds</h3>

            <p>
              Create a fundraiser and bring attention to a cause that matters
              to you.
            </p>

            <button onClick={() => navigate("/create-campaign")}>
              Start Fundraising
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="overview-card">
            <div className="overview-icon">
              <Search size={25} />
            </div>

            <h3>Donate</h3>

            <p>
              Discover campaigns and support individuals, families, and causes
              you care about.
            </p>

            <button onClick={() => navigate("/campaigns")}>
              Explore Campaigns
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* FUNDRAISER PROCESS */}
      <section className="process-section">
        <div className="process-image">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1100&q=85"
            alt="People working together"
          />
        </div>

        <div className="process-content">
          <span className="section-label">FOR FUNDRAISERS</span>

          <h2>
            Start Your Fundraiser
            <span>In Four Simple Steps</span>
          </h2>

          <p className="process-intro">
            Create your campaign, tell your story, and connect with people
            willing to support your cause.
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>

              <div className="step-icon">
                <UserPlus size={20} />
              </div>

              <div className="step-content">
                <h3>Create Your Account</h3>
                <p>Sign up and create your HopeHands account.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">02</div>

              <div className="step-icon">
                <FileText size={20} />
              </div>

              <div className="step-content">
                <h3>Create Your Campaign</h3>
                <p>
                  Add your story, fundraising goal, images, and campaign
                  details.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">03</div>

              <div className="step-icon">
                <ShieldCheck size={20} />
              </div>

              <div className="step-content">
                <h3>Verification</h3>
                <p>
                  Submit the required information for campaign verification.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">04</div>

              <div className="step-icon">
                <Share2 size={20} />
              </div>

              <div className="step-content">
                <h3>Share & Raise Funds</h3>
                <p>
                  Share your fundraiser and start receiving community support.
                </p>
              </div>
            </div>
          </div>

          <button
            className="process-btn"
            onClick={() => navigate("/create-campaign")}
          >
            Create a Fundraiser
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* DONOR PROCESS */}
      <section className="process-section donor-section">
        <div className="process-content">
          <span className="section-label">FOR DONORS</span>

          <h2>
            Support a Cause
            <span>That Matters to You</span>
          </h2>

          <p className="process-intro">
            Find campaigns you believe in and make a contribution securely.
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>

              <div className="step-icon">
                <Search size={20} />
              </div>

              <div className="step-content">
                <h3>Discover a Campaign</h3>
                <p>Browse campaigns and find a cause you care about.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">02</div>

              <div className="step-icon">
                <FileText size={20} />
              </div>

              <div className="step-content">
                <h3>Review the Campaign</h3>
                <p>Read the campaign story, goal, and progress.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">03</div>

              <div className="step-icon">
                <CreditCard size={20} />
              </div>

              <div className="step-content">
                <h3>Make a Donation</h3>
                <p>Choose your amount and complete the donation.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">04</div>

              <div className="step-icon">
                <BarChart3 size={20} />
              </div>

              <div className="step-content">
                <h3>Track Your Impact</h3>
                <p>View your supported campaigns from your dashboard.</p>
              </div>
            </div>
          </div>

          <button
            className="process-btn"
            onClick={() => navigate("/campaigns")}
          >
            Find a Campaign
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="process-image">
          <img
            src="https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1100&q=85"
            alt="People supporting charitable causes"
          />
        </div>
      </section>

      {/* TRUST */}
      <section className="trust-section">
        <div className="trust-heading">
          <span className="section-label">WHY HOPEHANDS</span>

          <h2>Built to Make Giving Easier</h2>

          <p>
            We focus on creating a fundraising experience that is simple,
            transparent, and community-driven.
          </p>
        </div>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon">
              <ShieldCheck size={24} />
            </div>

            <h3>Secure Platform</h3>

            <p>
              We design the platform with security in mind to help protect
              users and donation-related information.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <CheckCircle size={24} />
            </div>

            <h3>Transparent Campaigns</h3>

            <p>
              Campaign information, goals, and progress are presented clearly
              to users.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <UsersIcon />
            </div>

            <h3>Community Driven</h3>

            <p>
              Fundraisers and donors come together around causes that matter.
            </p>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <Heart size={24} />
            </div>

            <h3>Meaningful Impact</h3>

            <p>
              Every contribution has the potential to create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="how-cta">
        <div>
          <span>READY TO MAKE A DIFFERENCE?</span>

          <h2>Start Your HopeHands Journey Today</h2>

          <p>
            Create a fundraiser or discover a campaign where your contribution
            can make a difference.
          </p>
        </div>

        <div className="how-cta-buttons">
          <button
            className="how-primary-btn"
            onClick={() => navigate("/create-campaign")}
          >
            Start a Fundraiser
            <ArrowRight size={18} />
          </button>

          <button
            className="how-outline-btn"
            onClick={() => navigate("/campaigns")}
          >
            Explore Campaigns
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="how-footer">
        <div>
          <strong>HopeHands</strong>
          <span>Making giving simple. Making impact meaningful.</span>
        </div>

        <p>© 2026 HopeHands. All rights reserved.</p>
      </footer>
    </div>
  );
}

function UsersIcon() {
  return <Users size={24} />;
}

export default HowItWorks;