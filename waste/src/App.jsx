import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import './App.css'
import Navbar from './Component/Navbar/Navbar.jsx'
import Home from './Component/Home/Home.jsx'
import Solution from './Component/Solution/Solution.jsx'
import About from './Component/About/About.jsx'
import Login from './Pages/login'
import Features from './Component/Feautres/Feautres.jsx'
import Help from './Component/Help/Help.jsx'

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
        </Routes>
      </main>
    </div>
  )
}

export default App
