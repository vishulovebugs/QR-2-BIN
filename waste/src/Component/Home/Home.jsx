import React from 'react';
import './Home.css';

export default function Homepage() {
  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          All-in-one solution for efficient
          <br />
          fleet & waste management
        </h1>
        <p className="hero-subtitle">
          A one-stop System that delivers your all needs across the departments
        </p>

        <div className="diagram-container">
          {/* Top Row Features */}
          <div className="feature-row">
            <FeatureCard
              icon="₹"
              title="User Charges / Payment Collection"
              variant="orange"
            />
            <FeatureCard
              icon="👤"
              title="Complaint Management"
              variant="gray"
            />
            <FeatureCard
              icon="🗑️"
              title="Waste Collection Tracking (WCTS)"
              variant="orange"
            />
          </div>

          {/* Connector Lines */}
          <div className="connector-row">
            <div className="connector-line"></div>
            <div className="connector-line"></div>
          </div>

          {/* Middle Row Features */}
          <div className="feature-row middle">
            <FeatureCard
              icon="📄"
              title="RFID QR based Payment and Waste Collection System"
              variant="blue"
            />
            <FeatureCard
              icon="⛽"
              title="Fuel & Attendance Management"
              variant="red"
            />
          </div>

          {/* Connector Line */}
          <div className="connector-row single">
            <div className="connector-line"></div>
          </div>

          {/* Solution Cards */}
          <div className="solution-grid">
            <SolutionCard
              icon="👁️"
              title="Live Update"
              gradient="gradient-1"
            />
            <SolutionCard
              icon="📉"
              title="Cost Optimisation"
              gradient="gradient-2"
            />
            <SolutionCard
              icon="📊"
              title="Smart Control Room"
              gradient="gradient-3"
            />
          </div>

          <p className="solution-description">
            Live data from the ground to ensure 100% operations
            <br />
            Instant alerts & notifications, smart control room dashboards
          </p>

          <button className="price-btn">See Price</button>
        </div>
      </section>

      {/* Why Section */}
      <section className="why-section">
        <h2 className="why-subtitle">Why Us?</h2>
        <h3 className="why-title">
          Put Us to work & Invest
          <br />
          your time where it's needed
        </h3>
      </section>

      {/* Chat Button */}
      <button className="chat-button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
        Let's Chat
      </button>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, variant }) {
  return (
    <div className={`feature-card ${variant}`}>
      <div className="feature-icon">{icon}</div>
      <div className="feature-title">{title}</div>
    </div>
  );
}

// Solution Card Component
function SolutionCard({ icon, title, gradient }) {
  return (
    <div className="solution-card">
      <div className={`solution-icon ${gradient}`}>
        {icon}
      </div>
      <h3 className="solution-title">{title}</h3>
    </div>
  );
}