// Help/Contact Page Component - Developed by Team
// Shows team member contact details with flip card animations
// Includes FAQ section and quick contact options
// Created: 2025 | Waste Management App

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  User, 
  MapPin,
  Linkedin,
  Github,
  MessageCircle
} from 'lucide-react';
import './Help.css';

// Help component - team contact information with interactive cards
function Help() {
  // State for tracking hovered card - enables flip animation
  const [hoveredCard, setHoveredCard] = useState(null);

  // Team member data - manually entered by developers
  const teamMembers = [
    {
      id: 1,
      name: "Vishu",
      role: "",
      phone: "",
      email: "@gmail.com",
      location: "Delhi, India",
      avatar: "V",
      color: "#3b82f6"
    },
    {
      id: 2,
      name: "Vishesh Verma",
      role: "",
      phone: "",
      email: "",
      location: "",
      avatar: "VV",
      color: "#8b5cf6"
    },
    {
      id: 3,
      name: "Harsh Anand",
      role: "",
      phone: "",
      email: "",
      location: "",
      avatar: "HA",
      color: "#10b981"
    },
    {
      id: 4,
      name: "Garvit Tiwari",
      role: "UI/UX Designer",
      phone: "",
      email: "",
      location: "",
      avatar: "GT",
      color: "#f59e0b"
    }
  ];

  return (
    <div className="help-page">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="help-hero-content">
          <h1 className="help-hero-title">
            Need Help? <span className="gradient-text-help">We're Here!</span>
          </h1>
          <p className="help-hero-subtitle">
            Get in touch with our team for any questions, support, or feedback
          </p>
          <div className="hero-icons">
            <MessageCircle size={40} className="hero-icon" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title-help">
          <User size={28} />
          <span>Meet Our Team</span>
        </h2>
        <p className="section-subtitle-help">
          Hover over the cards to see contact details
        </p>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-card"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                animationDelay: `${member.id * 0.1}s`,
              }}
            >
              {/* Front of Card */}
              <div className={`card-front ${hoveredCard === member.id ? 'flipped' : ''}`}>
                <div 
                  className="member-avatar"
                  style={{ background: member.color }}
                >
                  {member.avatar}
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <div className="hover-hint">
                  Hover for contact details
                </div>
              </div>

              {/* Back of Card - Contact Details */}
              <div className={`card-back ${hoveredCard === member.id ? 'show' : ''}`}>
                <div className="contact-details">
                  <div className="detail-item">
                    <div className="detail-icon" style={{ background: `${member.color}20`, color: member.color }}>
                      <Phone size={20} />
                    </div>
                    <div className="detail-info">
                      <p className="detail-label">Phone</p>
                      <p className="detail-value">{member.phone}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon" style={{ background: `${member.color}20`, color: member.color }}>
                      <Mail size={20} />
                    </div>
                    <div className="detail-info">
                      <p className="detail-label">Email</p>
                      <p className="detail-value">{member.email}</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon" style={{ background: `${member.color}20`, color: member.color }}>
                      <MapPin size={20} />
                    </div>
                    <div className="detail-info">
                      <p className="detail-label">Location</p>
                      <p className="detail-value">{member.location}</p>
                    </div>
                  </div>

                  <div className="social-links">
                    <button 
                      className="social-btn"
                      style={{ background: `${member.color}20`, color: member.color }}
                    >
                      <Linkedin size={18} />
                    </button>
                    <button 
                      className="social-btn"
                      style={{ background: `${member.color}20`, color: member.color }}
                    >
                      <Github size={18} />
                    </button>
                    <button 
                      className="social-btn"
                      style={{ background: `${member.color}20`, color: member.color }}
                    >
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="quick-contact-section">
        <div className="quick-contact-container">
          <h2 className="quick-contact-title">Quick Contact</h2>
          <p className="quick-contact-subtitle">
            Choose your preferred way to reach us
          </p>

          <div className="contact-options">
            <div className="contact-option">
              <div className="option-icon phone-icon">
                <Phone size={28} />
              </div>
              <h3>Call Us</h3>
              <p>Available 24/7</p>
              <a href="tel:+919876543210" className="contact-link">
                +91 98765 43210
              </a>
            </div>

            <div className="contact-option">
              <div className="option-icon email-icon">
                <Mail size={28} />
              </div>
              <h3>Email Us</h3>
              <p>We'll reply within 24 hours</p>
              <a href="mailto:support@wasteapp.com" className="contact-link">
                support@wasteapp.com
              </a>
            </div>

            <div className="contact-option">
              <div className="option-icon message-icon">
                <MessageCircle size={28} />
              </div>
              <h3>Live Chat</h3>
              <p>Get instant help</p>
              <button className="contact-link-btn">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title-help">
          <span>❓</span>
          <span>Frequently Asked Questions</span>
        </h2>

        <div className="faq-grid">
          <div className="faq-card">
            <h3 className="faq-question">How do I request a garbage pickup?</h3>
            <p className="faq-answer">
              Simply open the app, share your location, and request a pickup. The nearest collector will be notified instantly.
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">How do rewards work?</h3>
            <p className="faq-answer">
              You earn points for every successful waste collection. These points can be redeemed for discounts and offers.
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">Is the service available in rural areas?</h3>
            <p className="faq-answer">
              Yes! We connect both urban and rural users with their nearest garbage collectors.
            </p>
          </div>

          <div className="faq-card">
            <h3 className="faq-question">What if no collector is available?</h3>
            <p className="faq-answer">
              The system will notify you and suggest the next available time slot for collection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Help;
