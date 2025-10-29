// Features Page Component - Developed by Team
// Showcases app features with interactive cards and animations
// Created: 2025 | Waste Management App

import React from 'react';
import { 
  Route, 
  Trash2, 
  BarChart3, 
  MessageSquare, 
  Leaf,
  MapPin,
  TrendingUp,
  Bell,
  Users,
  CheckCircle
} from 'lucide-react';
import './Feautres.css';

// Main Features component - displays feature cards with benefits
function Features() {
  // Feature data array - manually configured by developers
  const features = [
    {
      id: 1,
      icon: <Route size={32} />,
      title: "Route Optimization for Collection Trucks",
      description: "Uses AI or Google Maps API to plan efficient paths.",
      details: [
        "AI-powered route planning",
        "Real-time traffic integration",
        "Reduces fuel consumption by 30%",
        "Minimizes collection time"
      ],
      gradient: "gradient-route",
      color: "#3b82f6"
    },
    {
      id: 2,
      icon: <Trash2 size={32} />,
      title: "Smart Bin Monitoring",
      description: "Integration with IoT sensors to detect bin fill levels and alert drivers.",
      details: [
        "Real-time fill level detection",
        "Automatic alerts to drivers",
        "Prevents overflow situations",
        "Optimizes collection schedules"
      ],
      gradient: "gradient-bin",
      color: "#8b5cf6"
    },
    {
      id: 3,
      icon: <BarChart3 size={32} />,
      title: "Analytics Dashboard",
      description: "Shows waste trends, collection efficiency, and recycling rates.",
      details: [
        "Comprehensive waste analytics",
        "Collection efficiency metrics",
        "Recycling rate tracking",
        "Predictive insights"
      ],
      gradient: "gradient-analytics",
      color: "#10b981"
    },
    {
      id: 4,
      icon: <MessageSquare size={32} />,
      title: "User Feedback System",
      description: "Citizens can report missed pickups or overflowing bins.",
      details: [
        "Easy complaint submission",
        "Real-time tracking",
        "Quick resolution system",
        "Community engagement"
      ],
      gradient: "gradient-feedback",
      color: "#f59e0b"
    },
    {
      id: 5,
      icon: <Leaf size={32} />,
      title: "Carbon Footprint Tracker",
      description: "Calculates emission savings through recycling or route optimization.",
      details: [
        "CO₂ emission tracking",
        "Recycling impact calculator",
        "Environmental savings report",
        "Sustainability goals"
      ],
      gradient: "gradient-carbon",
      color: "#22c55e"
    }
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="features-hero-content">
          <h1 className="features-hero-title">
            <span className="gradient-text">Powerful Features</span>
            <br />
            for Smart Waste Management
          </h1>
          <p className="features-hero-subtitle">
            Cutting-edge technology to revolutionize waste collection, monitoring, and sustainability
          </p>
        </div>
        
        {/* Floating Icons */}
        <div className="floating-icons">
          <div className="floating-icon icon-1"><Route size={24} /></div>
          <div className="floating-icon icon-2"><Trash2 size={24} /></div>
          <div className="floating-icon icon-3"><BarChart3 size={24} /></div>
          <div className="floating-icon icon-4"><MessageSquare size={24} /></div>
          <div className="floating-icon icon-5"><Leaf size={24} /></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section">
        <div className="features-container">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card-large"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`feature-icon-wrapper ${feature.gradient}`}>
                {feature.icon}
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title-large">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <div className="feature-details-list">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="feature-detail-item">
                      <CheckCircle size={16} style={{ color: feature.color }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-card-glow" style={{ background: `radial-gradient(circle at center, ${feature.color}20, transparent)` }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="features-stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              <TrendingUp size={28} />
            </div>
            <h4 className="stat-value">30%</h4>
            <p className="stat-label">Efficiency Increase</p>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <MapPin size={28} />
            </div>
            <h4 className="stat-value">50+</h4>
            <p className="stat-label">Routes Optimized</p>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <Bell size={28} />
            </div>
            <h4 className="stat-value">1000+</h4>
            <p className="stat-label">Smart Bins Monitored</p>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">
              <Users size={28} />
            </div>
            <h4 className="stat-value">5000+</h4>
            <p className="stat-label">Active Users</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Waste Management?</h2>
          <p className="cta-subtitle">Join thousands of satisfied users making a difference</p>
          <button className="cta-button">
            Get Started Today
            <span className="button-arrow">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Features;
