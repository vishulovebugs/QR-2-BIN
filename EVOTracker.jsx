import React, { useState } from 'react';
import './EVOTracker.css';

const EVOTracker = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    {
      id: 'collector',
      title: 'Collector',
      description: 'I collect and manage EVO items',
      icon: 'C'
    },
    {
      id: 'municipality',
      title: 'Municipality',
      description: 'I represent a local government entity',
      icon: 'M'
    },
    {
      id: 'residents',
      title: 'Residents',
      description: 'I am a local resident',
      icon: 'R'
    }
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRole) {
      setIsSubmitted(true);
      console.log('Role selected:', selectedRole);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedRole(null);
      }, 3000);
    }
  };

  const handleReset = () => {
    setSelectedRole(null);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="evo-container">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>Welcome to EVO Tracker!</h2>
          <p>You've been registered as a <strong>{roles.find(r => r.id === selectedRole)?.title}</strong></p>
          <button className="reset-btn" onClick={handleReset}>
            Select Different Role
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="evo-container">
      <div className="evo-card">
        <div className="header">
          <h1 className="logo">EVO Tracker</h1>
          <p className="subtitle">Track and manage your EVO collection</p>
        </div>
        
        <form onSubmit={handleSubmit} className="role-form">
          <div className="form-group">
            <label className="form-label">Select Your Role</label>
            <div className="roles-grid">
              {roles.map((role) => (
                <div
                  key={role.id}
                  className={`role-card ${selectedRole === role.id ? 'selected' : ''}`}
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <div className="role-icon">{role.icon}</div>
                  <h3 className="role-title">{role.title}</h3>
                  <p className="role-description">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <button
            type="submit"
            className={`submit-btn ${selectedRole ? 'active' : ''}`}
            disabled={!selectedRole}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default EVOTracker;
