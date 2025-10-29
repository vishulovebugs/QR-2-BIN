// Profile/Dashboard Page Component - Developed by Team
// Main dashboard with three user types: Residential, Municipal, Collector
// Includes QR code generation, waste tracking, rewards system
// Created: 2025 | Waste Management App

import React, { useState } from 'react';
import './Profile.css';
import { UserRound, Building2, Home, Truck, BotMessageSquare, QrCode, TrendingUp, Flame, Coins, Database, ShoppingBag, ArrowLeft, Gift, Tag, BarChart3, Camera, CheckCircle, XCircle, Package, Calendar, Users, ClipboardCheck, TrendingDown, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import QrScanner from './QrScanner';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Main Profile component - handles different dashboard views
export default function Profile() {
  // State management for selected dashboard and current view
  const [selected, setSelected] = useState(null); // 'residential' | 'municipal' | 'collector' | null
  const [view, setView] = useState('main'); // 'main' | 'redeem'
  
  return (
    <div className="profile-page">
      {/* Profile Header - shows current dashboard */}
      <header className="profile-hero">
        <div className="hero-content">
          <div className="hero-icon">
            <UserRound size={28} />
          </div>
          <div>
            <h1>Profile</h1>
            <p className="subtitle">{selected ? 'Details' : 'Choose a dashboard to continue'}</p>
          </div>
        </div>
      </header>

      {selected === 'residential' ? (
        <section className="dashboards single">
          {view === 'redeem' ? (
            <RedeemView onBack={() => setView('main')} />
          ) : (
            <ResidentialDetails onBack={() => { setSelected(null); setView('main'); }} onRedeem={() => setView('redeem')} />
          )}
        </section>
      ) : selected === 'municipal' ? (
        <section className="dashboards single">
          <MunicipalDetails onBack={() => { setSelected(null); setView('main'); }} />
        </section>
      ) : selected === 'collector' ? (
        <section className="dashboards single">
          <CollectorDetails onBack={() => { setSelected(null); setView('main'); }} />
        </section>
      ) : (
        <section className="dashboards">
          <DashboardCard
            title="Residential Dashboard"
            description="Track household pickups, schedule requests, and view recycling insights tailored for residents."
            icon={<Home size={24} />}
            accent="residential"
            onOpen={() => { setSelected('residential'); setView('main'); }}
          />
          <DashboardCard
            title="Municipal Dashboard"
            description="Monitor city-wide operations, route performance, service SLAs, and analytics for municipalities."
            icon={<Building2 size={24} />}
            accent="municipal"
            onOpen={() => { setSelected('municipal'); setView('main'); }}
          />
          <DashboardCard
            title="Collector App"
            description="On-the-go tools for collection teams: route checklist, incident reporting, and QR verification."
            icon={<Truck size={24} />}
            accent="collector"
            onOpen={() => { setSelected('collector'); setView('main'); }}
          />
        </section>
      )}

      {/* Floating chatbot button */}
      <button className="chatbot-fab" aria-label="Open chatbot">
        <BotMessageSquare size={22} />
      </button>
    </div>
  );
}

function ResidentialDetails({ onBack, onRedeem }){
  // Mock data - easy to replace with real user data from credentials/API
  const userData = {
    userId: 'RES-' + Math.random().toString(36).substring(2, 9).toUpperCase(),
    pointsEarned: Math.floor(Math.random() * 5000) + 1000,
    currentStreak: Math.floor(Math.random() * 30) + 1,
    qrData: `RESIDENTIAL-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
  };

  // Mock progress data for chart (last 7 days)
  const progressData = Array.from({ length: 7 }, (_, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    value: Math.floor(Math.random() * 100) + 20,
  }));
  const maxValue = Math.max(...progressData.map(d => d.value));

  return (
    <article className={`card accent-residential residential-card`}>
      <button className="back-link" onClick={onBack} type="button" aria-label="Back to dashboards">
        <ArrowLeft size={16} />
        <span>Back to dashboards</span>
      </button>
      <div className="card-icon"><Home size={24} /></div>
      <h3 className="card-title">Residential Dashboard</h3>
      <p className="card-desc">Track household pickups, schedule requests, and view recycling insights. User ID: {userData.userId}</p>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><Coins size={20} /></div>
          <div>
            <p className="stat-label">Points Earned</p>
            <p className="stat-value">{userData.pointsEarned.toLocaleString()}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon streak"><Flame size={20} /></div>
          <div>
            <p className="stat-label">Current Streak</p>
            <p className="stat-value">{userData.currentStreak} days</p>
          </div>
        </div>
      </div>

      {/* QR Code */}
      <div className="qr-section">
        <h4 className="section-heading">
          <QrCode size={18} />
          <span>Your QR Code</span>
        </h4>
        <div className="qr-container">
          <QRCodeSVG value={userData.qrData} size={160} level="H" />
          <p className="qr-hint">Scan for verification and tracking</p>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="progress-section">
        <h4 className="section-heading">
          <BarChart3 size={18} />
          <span>Weekly Progress Tracker</span>
        </h4>
        <div className="chart-container">
          {progressData.map((d, i) => (
            <div key={i} className="chart-bar-wrapper">
              <div className="chart-bar-bg">
                <div 
                  className="chart-bar-fill" 
                  style={{ height: `${(d.value / maxValue) * 100}%` }}
                  title={`${d.day}: ${d.value}`}
                />
              </div>
              <span className="chart-label">{d.day}</span>
              <span className="chart-value">{d.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-actions">
        <button className="btn btn-primary" type="button">
          <Database size={16} />
          <span>View my data</span>
        </button>
        <button className="btn btn-outline" type="button" onClick={onRedeem}>
          <ShoppingBag size={16} />
          <span>Redeem your points</span>
        </button>
      </div>
    </article>
  );
}

function RedeemView({ onBack }) {
  const userPoints = 2450; // Mock user points
  
  const offers = [
    { id: 1, brand: 'Amazon', type: 'Gift Voucher', discount: 54, points: 500, color: '#FF9900' },
    { id: 2, brand: 'Flipkart', type: 'Shopping Voucher', discount: 30, points: 400, color: '#047BD5' },
    { id: 3, brand: 'Myntra', type: 'Fashion Voucher', discount: 40, points: 450, color: '#FF3F6C' },
    { id: 4, brand: 'BigBasket', type: 'Grocery Voucher', discount: 25, points: 350, color: '#84C225' },
    { id: 5, brand: 'Swiggy', type: 'Food Voucher', discount: 35, points: 380, color: '#FC8019' },
    { id: 6, brand: 'Zomato', type: 'Dining Voucher', discount: 30, points: 360, color: '#E23744' },
  ];

  return (
    <article className="card accent-residential redeem-card">
      <button className="back-link" onClick={onBack} type="button" aria-label="Back to dashboard">
        <ArrowLeft size={16} />
        <span>Back to dashboard</span>
      </button>
      
      <div className="card-icon"><ShoppingBag size={24} /></div>
      <h3 className="card-title">Redeem Your Points</h3>
      
      {/* Your Points Section */}
      <div className="points-balance">
        <div className="points-icon"><Coins size={20} /></div>
        <div>
          <p className="points-label">Your Points</p>
          <p className="points-value">{userPoints.toLocaleString()}</p>
        </div>
      </div>

      {/* Available Offers */}
      <div className="offers-section">
        <h4 className="section-heading">
          <Gift size={18} />
          <span>Available Offers</span>
        </h4>
        
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card" style={{ '--brand-color': offer.color }}>
              <div className="offer-header">
                <h5 className="offer-brand">{offer.brand}</h5>
                <span className="offer-discount">
                  <Tag size={14} />
                  {offer.discount}% OFF
                </span>
              </div>
              <p className="offer-type">{offer.type}</p>
              <div className="offer-footer">
                <span className="offer-points">
                  <Coins size={14} />
                  {offer.points} points
                </span>
                <button 
                  className="offer-redeem-btn" 
                  type="button"
                  disabled={userPoints < offer.points}
                >
                  {userPoints >= offer.points ? 'Redeem' : 'Not enough'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function CollectorDetails({ onBack }) {
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setScanResult(result);
      setScanning(false);
    }
  };

  const handleError = (error) => {
    console.error('QR Scan Error:', error);
  };

  return (
    <article className="card accent-collector collector-card">
      <button className="back-link" onClick={onBack} type="button" aria-label="Back to dashboards">
        <ArrowLeft size={16} />
        <span>Back to dashboards</span>
      </button>
      
      <div className="card-icon"><Truck size={24} /></div>
      <h3 className="card-title">Collector App</h3>
      <p className="card-desc">On-the-go tools for collection teams: route checklist, incident reporting, and QR verification.</p>

      {/* Main Feature: Scan QR Code */}
      <div className="scanner-section">
        <h4 className="section-heading">
          <QrCode size={18} />
          <span>Scan QR Code</span>
        </h4>

        {!scanning && !scanResult && (
          <div className="scanner-prompt">
            <div className="scanner-icon">
              <Camera size={48} />
            </div>
            <p className="scanner-text">Tap the button below to start scanning</p>
            <button className="btn btn-primary scanner-btn" type="button" onClick={() => setScanning(true)}>
              <Camera size={16} />
              <span>Open Camera</span>
            </button>
          </div>
        )}

        {scanning && (
          <div className="scanner-active">
            <QrScanner onScan={handleScan} onError={handleError} />
            <button className="btn btn-outline scanner-stop" type="button" onClick={() => setScanning(false)}>
              <XCircle size={16} />
              <span>Stop Scanning</span>
            </button>
          </div>
        )}

        {scanResult && (
          <div className="scan-result">
            <div className="result-icon success">
              <CheckCircle size={32} />
            </div>
            <h5 className="result-title">QR Code Scanned Successfully!</h5>
            <div className="result-data">
              <p className="result-label">Scanned Data:</p>
              <p className="result-value">{scanResult}</p>
            </div>
            <div className="result-actions">
              <button className="btn btn-primary" type="button" onClick={() => { setScanResult(null); }}>
                <QrCode size={16} />
                <span>Scan Another</span>
              </button>
              <button className="btn btn-outline" type="button" onClick={() => { setScanResult(null); }}>
                <Database size={16} />
                <span>View Details</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function MunicipalDetails({ onBack }) {
  const [expandedSection, setExpandedSection] = useState(null);

  // Mock data - easy to replace with real API data
  const statsData = {
    totalCollections: {
      value: 12847,
      weekChange: 12.5,
      isIncrease: true,
    },
    todayCollections: {
      value: 342,
      weekChange: 8.3,
      isIncrease: true,
    },
    registeredHouseholds: {
      value: 4567,
      weekChange: 3.2,
      isIncrease: true,
    },
    overallCompliance: {
      value: 87.5,
      weekChange: -2.1,
      isIncrease: false,
    },
  };

  // Mock household addresses
  const householdsList = [
    { id: 1, name: 'Rajesh Kumar', address: '42 MG Road, Sector 12', city: 'Bangalore', pincode: '560001' },
    { id: 2, name: 'Priya Sharma', address: '15 Park Street, Andheri West', city: 'Mumbai', pincode: '400058' },
    { id: 3, name: 'Amit Patel', address: '78 Gandhi Nagar, Vastrapur', city: 'Ahmedabad', pincode: '380015' },
    { id: 4, name: 'Neha Gupta', address: '23 Connaught Place, Central Delhi', city: 'New Delhi', pincode: '110001' },
    { id: 5, name: 'Vikram Singh', address: '56 Marine Drive, Fort', city: 'Mumbai', pincode: '400002' },
    { id: 6, name: 'Sneha Iyer', address: '89 Brigade Road, MG Road', city: 'Bangalore', pincode: '560025' },
    { id: 7, name: 'Arjun Reddy', address: '34 Banjara Hills, Road No 3', city: 'Hyderabad', pincode: '500034' },
    { id: 8, name: 'Kavita Menon', address: '67 Anna Salai, Thousand Lights', city: 'Chennai', pincode: '600002' },
  ];

  // Mock compliance bar chart data
  const complianceBarData = [
    { month: 'Jan', compliant: 85, nonCompliant: 15 },
    { month: 'Feb', compliant: 88, nonCompliant: 12 },
    { month: 'Mar', compliant: 82, nonCompliant: 18 },
    { month: 'Apr', compliant: 90, nonCompliant: 10 },
    { month: 'May', compliant: 87, nonCompliant: 13 },
    { month: 'Jun', compliant: 89, nonCompliant: 11 },
  ];

  // Mock segregation pie chart data
  const segregationData = [
    { name: 'Properly Segregated', value: 87.5, color: '#22c55e' },
    { name: 'Not Segregated', value: 12.5, color: '#ef4444' },
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <article className="card accent-municipal municipal-card">
      <button className="back-link" onClick={onBack} type="button" aria-label="Back to dashboards">
        <ArrowLeft size={16} />
        <span>Back to dashboards</span>
      </button>
      
      <div className="card-icon"><Building2 size={24} /></div>
      <h3 className="card-title">Municipal Dashboard</h3>
      <p className="card-desc">Monitor city-wide operations, route performance, and service analytics.</p>

      {/* Statistics Grid */}
      <div className="municipal-stats-grid">
        {/* Total Collections */}
        <div className="municipal-stat-card">
          <div className="stat-header">
            <div className="stat-icon-large total">
              <Package size={24} />
            </div>
            <div className="stat-main">
              <p className="stat-label-large">Total Collections</p>
              <p className="stat-value-large">{statsData.totalCollections.value.toLocaleString()}</p>
            </div>
          </div>
          <div className="stat-comparison">
            {statsData.totalCollections.isIncrease ? (
              <TrendingUp size={14} className="trend-icon up" />
            ) : (
              <TrendingDown size={14} className="trend-icon down" />
            )}
            <span className={`trend-text ${statsData.totalCollections.isIncrease ? 'up' : 'down'}`}>
              {Math.abs(statsData.totalCollections.weekChange)}% from last week
            </span>
          </div>
        </div>

        {/* Today's Collections */}
        <div className="municipal-stat-card">
          <div className="stat-header">
            <div className="stat-icon-large today">
              <Calendar size={24} />
            </div>
            <div className="stat-main">
              <p className="stat-label-large">Today's Collections</p>
              <p className="stat-value-large">{statsData.todayCollections.value.toLocaleString()}</p>
            </div>
          </div>
          <div className="stat-comparison">
            {statsData.todayCollections.isIncrease ? (
              <TrendingUp size={14} className="trend-icon up" />
            ) : (
              <TrendingDown size={14} className="trend-icon down" />
            )}
            <span className={`trend-text ${statsData.todayCollections.isIncrease ? 'up' : 'down'}`}>
              {Math.abs(statsData.todayCollections.weekChange)}% from last week
            </span>
          </div>
        </div>

        {/* Registered Households */}
        <div className="municipal-stat-card clickable" onClick={() => toggleSection('households')}>
          <div className="stat-header">
            <div className="stat-icon-large households">
              <Users size={24} />
            </div>
            <div className="stat-main">
              <p className="stat-label-large">Registered Households</p>
              <p className="stat-value-large">{statsData.registeredHouseholds.value.toLocaleString()}</p>
            </div>
          </div>
          <div className="stat-comparison">
            {statsData.registeredHouseholds.isIncrease ? (
              <TrendingUp size={14} className="trend-icon up" />
            ) : (
              <TrendingDown size={14} className="trend-icon down" />
            )}
            <span className={`trend-text ${statsData.registeredHouseholds.isIncrease ? 'up' : 'down'}`}>
              {Math.abs(statsData.registeredHouseholds.weekChange)}% from last week
            </span>
          </div>
          <button className="expand-btn" type="button">
            {expandedSection === 'households' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        {/* Overall Compliance */}
        <div className="municipal-stat-card clickable" onClick={() => toggleSection('compliance')}>
          <div className="stat-header">
            <div className="stat-icon-large compliance">
              <ClipboardCheck size={24} />
            </div>
            <div className="stat-main">
              <p className="stat-label-large">Overall Compliance</p>
              <p className="stat-value-large">{statsData.overallCompliance.value}%</p>
            </div>
          </div>
          <div className="stat-comparison">
            {statsData.overallCompliance.isIncrease ? (
              <TrendingUp size={14} className="trend-icon up" />
            ) : (
              <TrendingDown size={14} className="trend-icon down" />
            )}
            <span className={`trend-text ${statsData.overallCompliance.isIncrease ? 'up' : 'down'}`}>
              {Math.abs(statsData.overallCompliance.weekChange)}% from last week
            </span>
          </div>
          <button className="expand-btn" type="button">
            {expandedSection === 'compliance' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Expanded Households List */}
      {expandedSection === 'households' && (
        <div className="expanded-section">
          <h4 className="section-heading">
            <MapPin size={18} />
            <span>Registered Household Addresses</span>
          </h4>
          <div className="households-list">
            {householdsList.map(household => (
              <div key={household.id} className="household-item">
                <div className="household-icon">
                  <Home size={16} />
                </div>
                <div className="household-info">
                  <p className="household-name">{household.name}</p>
                  <p className="household-address">{household.address}</p>
                  <p className="household-location">{household.city} - {household.pincode}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expanded Compliance Charts */}
      {expandedSection === 'compliance' && (
        <div className="expanded-section">
          <h4 className="section-heading">
            <BarChart3 size={18} />
            <span>Compliance Analytics</span>
          </h4>
          
          {/* Bar Chart */}
          <div className="chart-wrapper">
            <h5 className="chart-title">Monthly Compliance Trend</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={complianceBarData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="var(--muted)" />
                <YAxis stroke="var(--muted)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(15,23,42,0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="compliant" fill="#22c55e" name="Compliant %" radius={[8, 8, 0, 0]} />
                <Bar dataKey="nonCompliant" fill="#ef4444" name="Non-Compliant %" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="chart-wrapper">
            <h5 className="chart-title">Overall Segregation Distribution</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={segregationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {segregationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(15,23,42,0.95)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </article>
  );
}

function DashboardCard({ title, description, icon, accent, onOpen }) {
  return (
    <article className={`card accent-${accent} ${onOpen ? 'clickable' : ''}`} onClick={onOpen} role={onOpen ? 'button' : undefined} tabIndex={onOpen ? 0 : undefined} onKeyDown={(e) => { if(onOpen && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); onOpen(); } }}>
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      {onOpen && (
        <button className="card-action" type="button" onClick={(e) => { e.stopPropagation(); onOpen(); }}>
          Open
        </button>
      )}
    </article>
  );
}
