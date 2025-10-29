// Home Page Component - Developed by Team
// Main landing page with features and footer
// Created: 2025 | Waste Management App

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';
import './Home.css';

// Homepage component - handles navigation and displays key features
export default function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">
      {/* Hero Section - Main headline and value proposition */}
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

          <button className="price-btn" onClick={() => navigate('/profile')}>Get Started</button>
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
      <button className="chat-button" onClick={() => navigate('/profile')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l5.71-.97C9 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
        </svg>
        Let's Chat
      </button>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Waste Management App</h3>
            <p className="footer-tagline">
              Connecting communities for a cleaner, greener future
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <div className="contact-item-footer">
                <MapPin size={16} />
                <span>Delhi, India</span>
              </div>
              <div className="contact-item-footer">
                <Phone size={16} />
                <span>+91 99232XXXXX</span>
              </div>
              <div className="contact-item-footer">
                <Mail size={16} />
                <span>support@wasteapp.com</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Waste Management App. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component - Reusable card for displaying features
// Props: icon, title, variant (styling)
function FeatureCard({ icon, title, variant }) {
  return (
    <div className={`feature-card ${variant}`}>
      <div className="feature-icon">{icon}</div>
      <div className="feature-title">{title}</div>
    </div>
  );
}

// Solution Card Component - Displays solution features with gradients
// Props: icon, title, gradient (color scheme)
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