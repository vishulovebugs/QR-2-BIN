// Main App Component - Developed by Team
// Root component with routing configuration
// All page routes are defined here
// Created: 2025 | Waste Management App

import { Route, Routes } from 'react-router-dom'
import './index.css'
import './App.css'
import Navbar from './Component/Navbar/Navbar.jsx'
import Home from './Component/Home/Home.jsx'
import Solution from './Component/Solution/Solution.jsx'
import About from './Component/About/About.jsx'
import Login from './Pages/Login.jsx'
import Profile from './Pages/Profile.jsx'
import Features from './Component/Feautres/Feautres.jsx'
import Help from './Component/Help/Help.jsx'

// Main App component - handles routing for entire application
function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <main style={{ flex: 1, padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/features" element={<Features />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
