import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  Heart,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-label">GET IN TOUCH</span>

          <h1>
            We're Here
            <span>To Help</span>
          </h1>

          <p>
            Have a question, need help with a fundraiser, or want to learn more
            about HopeHands? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}

      <section className="contact-info-section">
        <div className="contact-info-heading">
          <span className="section-label">CONTACT HOPEHANDS</span>

          <h2>Let's Start a Conversation</h2>

          <p>
            Reach out to us through any of the channels below or send us a
            message using the contact form.
          </p>
        </div>

        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Mail size={23} />
            </div>

            <h3>Email Us</h3>

            <p>For general questions and support.</p>

            <a href="mailto:support@hopehands.com">
              support@hopehands.com
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Phone size={23} />
            </div>

            <h3>Call Us</h3>

            <p>Available during support hours.</p>

            <a href="tel:+911234567890">
              +91 12345 67890
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapPin size={23} />
            </div>

            <h3>Our Location</h3>

            <p>HopeHands Support Office</p>

            <span>India</span>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Clock size={23} />
            </div>

            <h3>Support Hours</h3>

            <p>Monday – Friday</p>

            <span>9:00 AM – 6:00 PM</span>
          </div>
        </div>
      </section>

      {/* ================= FORM ================= */}

      <section className="contact-form-section">
        <div className="contact-form-image">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=85"
            alt="HopeHands support team"
          />

          <div className="contact-image-card">
            <MessageCircle size={21} />

            <div>
              <strong>Need Help?</strong>
              <span>Our team is ready to assist you.</span>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <span className="section-label">SEND US A MESSAGE</span>

          <h2>How Can We Help?</h2>

          <p className="contact-form-intro">
            Fill out the form below and our team will get back to you as soon
            as possible.
          </p>

          {submitted && (
            <div className="success-message">
              <CheckCircle size={20} />

              <div>
                <strong>Message sent successfully!</strong>
                <span>
                  Thank you for contacting HopeHands. We'll get back to you
                  soon.
                </span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="fundraiser">Fundraiser Help</option>
                <option value="donation">Donation Support</option>
                <option value="payment">Payment Issue</option>
                <option value="account">Account Help</option>
                <option value="report">Report a Campaign</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              Send Message
              <Send size={17} />
            </button>
          </form>
        </div>
      </section>

      {/* ================= HELP ================= */}

      <section className="contact-help">
        <div className="contact-help-heading">
          <span className="section-label">QUICK HELP</span>

          <h2>Looking for Something Else?</h2>

          <p>
            You may find the answer you're looking for in one of these sections.
          </p>
        </div>

        <div className="contact-help-grid">
          <div className="help-card">
            <div className="help-icon">
              <HelpCircle size={23} />
            </div>

            <div>
              <h3>How It Works</h3>

              <p>
                Learn how fundraising and donations work on HopeHands.
              </p>

              <button onClick={() => navigate("/how-it-works")}>
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="help-card">
            <div className="help-icon">
              <HeartIcon />
            </div>

            <div>
              <h3>Find a Campaign</h3>

              <p>
                Explore campaigns and discover causes that matter to you.
              </p>

              <button onClick={() => navigate("/campaigns")}>
                Explore Campaigns
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="help-card">
            <div className="help-icon">
              <MessageCircle size={23} />
            </div>

            <div>
              <h3>Start Fundraising</h3>

              <p>
                Have a cause that needs support? Start your own fundraiser.
              </p>

              <button onClick={() => navigate("/create-campaign")}>
                Start Now
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="contact-cta">
        <div>
          <span>MAKE A DIFFERENCE</span>

          <h2>Have a Cause Worth Sharing?</h2>

          <p>
            Create a fundraiser and connect with people who are ready to help.
          </p>
        </div>

        <button
          className="contact-cta-btn"
          onClick={() => navigate("/create-campaign")}
        >
          Start a Fundraiser
          <ArrowRight size={18} />
        </button>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="contact-footer">
        <div>
          <strong>HopeHands</strong>

          <span>
            Making giving simple. Making impact meaningful.
          </span>
        </div>

        <p>© 2026 HopeHands. All rights reserved.</p>
      </footer>
    </div>
  );
}

function HeartIcon() {
  return <Heart size={23} />;
}

export default Contact;