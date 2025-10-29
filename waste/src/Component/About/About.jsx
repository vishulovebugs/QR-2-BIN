// About/Contact Us Page Component - Developed by Team
// Company information, social media links, and contact form
// Comprehensive contact section with all communication channels
// Created: 2025 | Waste Management App

import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  MessageCircle,
  Send,
  Building2,
  Globe,
  Clock
} from 'lucide-react';
import './About.css';

// About component - displays company contact details and social platforms
function About() {
  // Social media platform data - manually configured by team
  const socialPlatforms = [
    {
      name: "Facebook",
      icon: <Facebook size={28} />,
      handle: "@WasteManagementApp",
      link: "https://facebook.com/wasteapp",
      color: "#1877f2",
      followers: "12.5K"
    },
    {
      name: "Twitter",
      icon: <Twitter size={28} />,
      handle: "@WasteApp",
      link: "https://twitter.com/wasteapp",
      color: "#1da1f2",
      followers: "8.3K"
    },
    {
      name: "Instagram",
      icon: <Instagram size={28} />,
      handle: "@waste.app",
      link: "https://instagram.com/waste.app",
      color: "#e4405f",
      followers: "15.2K"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={28} />,
      handle: "Waste Management App",
      link: "https://linkedin.com/company/wasteapp",
      color: "#0077b5",
      followers: "5.7K"
    },
    {
      name: "YouTube",
      icon: <Youtube size={28} />,
      handle: "@WasteManagementApp",
      link: "https://youtube.com/@wasteapp",
      color: "#ff0000",
      followers: "20K"
    },
    {
      name: "GitHub",
      icon: <Github size={28} />,
      handle: "waste-management-app",
      link: "https://github.com/wasteapp",
      color: "#333",
      followers: "3.2K"
    }
  ];

  const contactInfo = [
    {
      icon: <Building2 size={24} />,
      label: "Company",
      value: "Waste Management App Pvt. Ltd.",
      color: "#3b82f6"
    },
    {
      icon: <MapPin size={24} />,
      label: "Address",
      value: "123 Green Street, Eco Park, Delhi - 110001, India",
      color: "#10b981"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
      color: "#f59e0b"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "support@wasteapp.com",
      link: "mailto:support@wasteapp.com",
      color: "#8b5cf6"
    },
    {
      icon: <Globe size={24} />,
      label: "Website",
      value: "www.wasteapp.com",
      link: "https://www.wasteapp.com",
      color: "#06b6d4"
    },
    {
      icon: <Clock size={24} />,
      label: "Support Hours",
      value: "24/7 Available",
      color: "#ec4899"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            Get in <span className="gradient-text-about">Touch</span>
          </h1>
          <p className="about-hero-subtitle">
            We'd love to hear from you. Connect with us on your favorite platform
          </p>
        </div>
      </section>

      {/* Company Contact Info */}
      <section className="company-info-section">
        <h2 className="section-title-about">
          <Building2 size={28} />
          <span>Company Information</span>
        </h2>

        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="contact-info-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="info-icon"
                style={{ background: `${info.color}20`, color: info.color }}
              >
                {info.icon}
              </div>
              <div className="info-content">
                <p className="info-label">{info.label}</p>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="info-value-link"
                    style={{ color: info.color }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="info-value">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-media-section">
        <h2 className="section-title-about">
          <MessageCircle size={28} />
          <span>Connect on Social Media</span>
        </h2>
        <p className="section-subtitle-about">
          Follow us on your favorite platforms for updates, tips, and community stories
        </p>

        <div className="social-platforms-grid">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-platform-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="platform-icon"
                style={{ background: `${platform.color}20`, color: platform.color }}
              >
                {platform.icon}
              </div>
              <h3 className="platform-name">{platform.name}</h3>
              <p className="platform-handle">{platform.handle}</p>
              <div className="platform-stats">
                <span className="follower-count">{platform.followers}</span>
                <span className="follower-label">Followers</span>
              </div>
              <div className="platform-hover-overlay" style={{ background: platform.color }}>
                <Send size={24} />
                <span>Visit Profile</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <h2 className="section-title-about">
            <Mail size={28} />
            <span>Send us a Message</span>
          </h2>
          <p className="section-subtitle-about">
            Have a question? Fill out the form and we'll get back to you shortly
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="How can we help you?" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="6" 
                placeholder="Tell us more about your inquiry..." 
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <Send size={20} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2 className="section-title-about">
          <MapPin size={28} />
          <span>Visit Our Office</span>
        </h2>
        <div className="map-placeholder">
          <MapPin size={60} />
          <p>123 Green Street, Eco Park</p>
          <p>Delhi - 110001, India</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="directions-btn">
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
