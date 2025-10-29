// Solution Page Component - Developed by Team
// Explains how the app connects users with garbage collectors
// Includes workflow diagrams and step-by-step process
// Created: 2025 | Waste Management App

import React from 'react';
import { 
  Users, 
  MapPin, 
  Trash2, 
  Bell, 
  CheckCircle, 
  Gift,
  ArrowRight,
  Smartphone,
  UserCheck,
  TrendingUp,
  Recycle,
  Award
} from 'lucide-react';
import './Solution.css';

// Solution component - describes the complete workflow
function Solution() {
  // Step-by-step process - manually designed by team
  const steps = [
    {
      id: 1,
      icon: <Smartphone size={32} />,
      title: "User Request",
      description: "Urban/Rural user opens app when they need to dispose garbage",
      color: "#3b82f6"
    },
    {
      id: 2,
      icon: <MapPin size={32} />,
      title: "Location Detection",
      description: "App detects user's location and finds nearest garbage collectors",
      color: "#8b5cf6"
    },
    {
      id: 3,
      icon: <Bell size={32} />,
      title: "Assignment",
      description: "Nearest available garbage picker receives instant notification",
      color: "#f59e0b"
    },
    {
      id: 4,
      icon: <UserCheck size={32} />,
      title: "Collection",
      description: "Garbage picker confirms and collects waste from user's location",
      color: "#10b981"
    },
    {
      id: 5,
      icon: <CheckCircle size={32} />,
      title: "Verification",
      description: "Collection is verified and documented in the system",
      color: "#06b6d4"
    },
    {
      id: 6,
      icon: <Gift size={32} />,
      title: "Reward",
      description: "User receives points/rewards for responsible waste disposal",
      color: "#ec4899"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "Efficiency",
      stat: "3x Faster",
      description: "Garbage collection response time"
    },
    {
      icon: <Users size={24} />,
      title: "Coverage",
      stat: "100%",
      description: "Urban and rural areas covered"
    },
    {
      icon: <Recycle size={24} />,
      title: "Sustainability",
      stat: "85%",
      description: "Increase in recycling rates"
    },
    {
      icon: <Award size={24} />,
      title: "Engagement",
      stat: "5000+",
      description: "Active users earning rewards"
    }
  ];

  return (
    <div className="solution-page">
      {/* Hero Section */}
      <section className="solution-hero">
        <div className="solution-hero-content">
          <h1 className="solution-hero-title">
            Connecting Communities with
            <span className="gradient-text-solution"> Smart Waste Solutions</span>
          </h1>
          <p className="solution-hero-subtitle">
            Bridging the gap between urban/rural residents and local garbage collectors 
            through intelligent matching and reward-based engagement
          </p>
        </div>

        {/* Animated Connection Diagram */}
        <div className="connection-diagram">
          <div className="diagram-node user-node">
            <Users size={40} />
            <p>Urban/Rural Users</p>
          </div>
          
          <div className="connection-line">
            <div className="pulse-dot"></div>
            <div className="pulse-dot" style={{ animationDelay: '0.5s' }}></div>
            <div className="pulse-dot" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="diagram-node app-node">
            <Smartphone size={40} />
            <p>Our App</p>
          </div>

          <div className="connection-line">
            <div className="pulse-dot"></div>
            <div className="pulse-dot" style={{ animationDelay: '0.5s' }}></div>
            <div className="pulse-dot" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="diagram-node collector-node">
            <Trash2 size={40} />
            <p>Garbage Collectors</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2 className="section-title">
          <span className="title-icon">🔄</span>
          How It Works
        </h2>
        <p className="section-subtitle">
          A simple 6-step process that makes waste management effortless
        </p>

        <div className="steps-flow">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div 
                className="step-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="step-number" style={{ background: step.color }}>
                  {step.id}
                </div>
                <div 
                  className="step-icon-wrapper" 
                  style={{ 
                    background: `${step.color}20`,
                    color: step.color 
                  }}
                >
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="step-arrow">
                  <ArrowRight size={28} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Detailed Flow Diagram */}
      <section className="flow-diagram-section">
        <h2 className="section-title">
          <span className="title-icon">📊</span>
          Complete Workflow
        </h2>

        <div className="workflow-container">
          {/* User Side */}
          <div className="workflow-column">
            <div className="column-header user-header">
              <Users size={24} />
              <h3>User Journey</h3>
            </div>
            
            <div className="workflow-step">
              <div className="step-bubble user-bubble">
                <Smartphone size={20} />
                <span>Open App</span>
              </div>
            </div>

            <div className="workflow-connector">↓</div>

            <div className="workflow-step">
              <div className="step-bubble user-bubble">
                <MapPin size={20} />
                <span>Share Location</span>
              </div>
            </div>

            <div className="workflow-connector">↓</div>

            <div className="workflow-step">
              <div className="step-bubble user-bubble">
                <Trash2 size={20} />
                <span>Request Pickup</span>
              </div>
            </div>

            <div className="workflow-connector">↓</div>

            <div className="workflow-step">
              <div className="step-bubble user-bubble">
                <CheckCircle size={20} />
                <span>Confirm Collection</span>
              </div>
            </div>

            <div className="workflow-connector">↓</div>

            <div className="workflow-step">
              <div className="step-bubble user-bubble reward-bubble">
                <Gift size={20} />
                <span>Receive Rewards</span>
              </div>
            </div>
          </div>

          {/* System Side */}
          <div className="workflow-column center-column">
            <div className="column-header system-header">
              <Smartphone size={24} />
              <h3>System Process</h3>
            </div>

            <div className="system-process">
              <div className="process-box">
                <MapPin size={24} />
                <p>Location Analysis</p>
              </div>
              <div className="process-arrow">↓</div>
              
              <div className="process-box">
                <UserCheck size={24} />
                <p>Find Nearest Collector</p>
              </div>
              <div className="process-arrow">↓</div>
              
              <div className="process-box">
                <Bell size={24} />
                <p>Send Notification</p>
              </div>
              <div className="process-arrow">↓</div>
              
              <div className="process-box">
                <CheckCircle size={24} />
                <p>Track & Verify</p>
              </div>
              <div className="process-arrow">↓</div>
              
              <div className="process-box reward-box">
                <Award size={24} />
                <p>Calculate Rewards</p>
              </div>
            </div>
          </div>

          {/* Collector Side */}
          <div className="workflow-column">
            <div className="column-header collector-header">
              <Trash2 size={24} />
              <h3>Collector Journey</h3>
            </div>

            <div className="workflow-step">
              <div className="step-bubble collector-bubble">
                <Bell size={20} />
                <span>Receive Alert</span>
              </div>
            </div>

            <div className="workflow-connector">↓</div>

            <div className="workflow-step">
              <div className="step-bubble collector-bubble">
                <MapPin size={20} />
                <span>View Location</span>
              </div>
            </div>

            <div className="workflow-connector">↓</div>

            <div className="workflow-step">
              <div className="step-bubble collector-bubble">
                <UserCheck size={20} />
                <span>Accept Request</span>
              </div>
            </div>

            <div className="workflow-connector">↓</div>

            <div className="workflow-step">
              <div className="step-bubble collector-bubble">
                <Trash2 size={20} />
                <span>Collect Waste</span>
              </div>
            </div>

            <div className="workflow-connector">↓</div>

            <div className="workflow-step">
              <div className="step-bubble collector-bubble success-bubble">
                <CheckCircle size={20} />
                <span>Mark Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="section-title">
          <span className="title-icon">✨</span>
          Impact & Benefits
        </h2>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-stat">{benefit.stat}</h3>
              <h4 className="benefit-title">{benefit.title}</h4>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="solution-cta">
        <div className="cta-content-solution">
          <h2 className="cta-title-solution">Join the Revolution</h2>
          <p className="cta-subtitle-solution">
            Be part of the smart waste management ecosystem that rewards responsible behavior
          </p>
          <button className="cta-button-solution">
            Get Started Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Solution;