import { useState } from "react";
import {
  LayoutDashboard,
  Heart,
  PlusCircle,
  Bell,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Users,
  IndianRupee,
  Target,
  MoreVertical,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const campaigns = [
    {
      id: 1,
      title: "Help Moksha Get Medical Treatment",
      category: "Medical",
      target: 50000,
      raised: 32000,
      donors: 24,
      status: "Active",
      image: "/images/moksha.jpg",
    },
    {
      id: 2,
      title: "Education Support for Children",
      category: "Education",
      target: 100000,
      raised: 75000,
      donors: 46,
      status: "Active",
      image: "/images/education.jpg",
    },
    {
      id: 3,
      title: "Emergency Family Support",
      category: "Emergency",
      target: 75000,
      raised: 45000,
      donors: 31,
      status: "Active",
      image: "/images/emergency.jpg",
    },
  ];

  const recentDonations = [
    {
      id: 1,
      campaign: "Help Moksha Get Medical Treatment",
      amount: 1000,
      date: "Today",
      status: "Completed",
    },
    {
      id: 2,
      campaign: "Education Support for Children",
      amount: 2500,
      date: "Yesterday",
      status: "Completed",
    },
    {
      id: 3,
      campaign: "Emergency Family Support",
      amount: 500,
      date: "05 Sep 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="dashboard">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="dashboard-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="dashboard-logo">
          <div className="logo-icon">
            <Heart size={22} fill="currentColor" />
          </div>

          <span>
            Hope<span>Hands</span>
          </span>

          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="dashboard-nav">

          <button className="nav-item active">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>

          <button className="nav-item">
            <Heart size={20} />
            <span>My Campaigns</span>
          </button>

          <button className="nav-item">
            <IndianRupee size={20} />
            <span>My Donations</span>
          </button>

          <button
            className="nav-item"
            onClick={() => navigate("/create-campaign")}
          >
            <PlusCircle size={20} />
            <span>Create Campaign</span>
          </button>

          <button className="nav-item">
            <Bell size={20} />
            <span>Notifications</span>
            <span className="notification-count">3</span>
          </button>

          <button className="nav-item">
            <User size={20} />
            <span>Profile</span>
          </button>

          <button className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </button>

        </nav>

        <div className="sidebar-bottom">

          <button
            className="nav-item logout"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>

        </div>

      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Topbar */}
        <header className="dashboard-topbar">

          <button
            className="mobile-menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>

          <div className="topbar-search">
            <span>Dashboard</span>
          </div>

          <div className="topbar-user">

            <button className="notification-button">
              <Bell size={21} />
              <span className="notification-dot"></span>
            </button>

            <div className="user-info">

              <div className="user-avatar">
                {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <div className="user-details">
                <strong>
                  {user?.fullName || "User"}
                </strong>

                <span>
                  {user?.role || "User"}
                </span>
              </div>

            </div>

          </div>

        </header>

        {/* Content */}
        <section className="dashboard-content">

          {/* Welcome */}
          <div className="welcome-section">

            <div>
              <h1>
                Welcome back,{" "}
                {user?.fullName?.split(" ")[0] || "User"}! 👋
              </h1>

              <p>
                Here's what's happening with your HopeHands account.
              </p>
            </div>

            <button
              className="create-campaign-btn"
              onClick={() => navigate("/create-campaign")}
            >
              <PlusCircle size={19} />
              Create Campaign
            </button>

          </div>

          {/* Statistics */}
          <div className="stats-grid">

            <div className="stat-card">

              <div className="stat-icon green">
                <Target size={23} />
              </div>

              <div>
                <p>Total Campaigns</p>
                <h2>3</h2>
                <span className="stat-positive">
                  <TrendingUp size={14} />
                  Active campaigns
                </span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon orange">
                <IndianRupee size={23} />
              </div>

              <div>
                <p>Total Raised</p>
                <h2>₹1.52L</h2>
                <span className="stat-positive">
                  <TrendingUp size={14} />
                  +12.5% this month
                </span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon blue">
                <Users size={23} />
              </div>

              <div>
                <p>Total Donors</p>
                <h2>101</h2>
                <span className="stat-positive">
                  <TrendingUp size={14} />
                  +18 new donors
                </span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon purple">
                <Heart size={23} />
              </div>

              <div>
                <p>My Donations</p>
                <h2>₹4,000</h2>
                <span className="stat-positive">
                  8 donations
                </span>
              </div>

            </div>

          </div>

          {/* Campaign Section */}
          <div className="dashboard-section">

            <div className="section-heading">

              <div>
                <h2>My Campaigns</h2>
                <p>Manage your fundraising campaigns</p>
              </div>

              <button
                className="view-all"
                onClick={() => navigate("/campaigns")}
              >
                View All
              </button>

            </div>

            <div className="campaign-table-wrapper">

              <table className="campaign-table">

                <thead>
                  <tr>
                    <th>Campaign</th>
                    <th>Target</th>
                    <th>Raised</th>
                    <th>Progress</th>
                    <th>Donors</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>

                  {campaigns.map((campaign) => {

                    const percentage = Math.round(
                      (campaign.raised / campaign.target) * 100
                    );

                    return (
                      <tr key={campaign.id}>

                        <td>
                          <div className="campaign-info">

                            <img
                              src={campaign.image}
                              alt={campaign.title}
                            />

                            <div>
                              <strong>
                                {campaign.title}
                              </strong>

                              <span>
                                {campaign.category}
                              </span>
                            </div>

                          </div>
                        </td>

                        <td>
                          ₹{campaign.target.toLocaleString("en-IN")}
                        </td>

                        <td>
                          <strong>
                            ₹{campaign.raised.toLocaleString("en-IN")}
                          </strong>
                        </td>

                        <td>

                          <div className="progress-container">

                            <div className="progress-bar">
                              <div
                                className="progress-fill"
                                style={{
                                  width: `${percentage}%`,
                                }}
                              />
                            </div>

                            <span>
                              {percentage}%
                            </span>

                          </div>

                        </td>

                        <td>
                          {campaign.donors}
                        </td>

                        <td>
                          <span className="status active-status">
                            {campaign.status}
                          </span>
                        </td>

                        <td>
                          <button className="more-button">
                            <MoreVertical size={18} />
                          </button>
                        </td>

                      </tr>
                    );
                  })}

                </tbody>

              </table>

            </div>

          </div>

          {/* Bottom Grid */}
          <div className="bottom-grid">

            {/* Recent Donations */}
            <div className="dashboard-section donations-section">

              <div className="section-heading">

                <div>
                  <h2>Recent Donations</h2>
                  <p>Your latest donation activity</p>
                </div>

                <button className="view-all">
                  View All
                </button>

              </div>

              <div className="donations-list">

                {recentDonations.map((donation) => (

                  <div
                    className="donation-item"
                    key={donation.id}
                  >

                    <div className="donation-icon">
                      <Heart size={18} fill="currentColor" />
                    </div>

                    <div className="donation-details">
                      <strong>
                        {donation.campaign}
                      </strong>

                      <span>
                        {donation.date}
                      </span>
                    </div>

                    <div className="donation-right">

                      <strong>
                        ₹{donation.amount.toLocaleString("en-IN")}
                      </strong>

                      <span>
                        {donation.status}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Quick Actions */}
            <div className="dashboard-section quick-actions">

              <div className="section-heading">

                <div>
                  <h2>Quick Actions</h2>
                  <p>Get started quickly</p>
                </div>

              </div>

              <button
                onClick={() => navigate("/create-campaign")}
              >
                <PlusCircle size={21} />
                <div>
                  <strong>Create a Campaign</strong>
                  <span>Start raising funds for a cause</span>
                </div>
              </button>

              <button
                onClick={() => navigate("/campaigns")}
              >
                <Heart size={21} />
                <div>
                  <strong>Explore Campaigns</strong>
                  <span>Find a cause you want to support</span>
                </div>
              </button>

              <button>
                <User size={21} />
                <div>
                  <strong>Update Profile</strong>
                  <span>Manage your personal information</span>
                </div>
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;