// Navigation Bar Component - Developed by Team
// Main navigation with responsive menu and routing
// Includes mobile hamburger menu with smooth animations
// Created: 2025 | Waste Management App

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserRound } from "lucide-react";
import './Navbar.css'

// Navigation links - manually configured routes
const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/features", label: "Features" },
  { path: "/solution", label: "Our Solution" },
  { path: "/help", label: "Help" },
  { path: "/about", label: "Contact Us" },
];

// Navbar component - responsive navigation with scroll detection
export default function Navbar() {
  // State management for menu and scroll behavior
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Detect scroll to toggle .scrolled class - improves UX
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside nav
  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  // reserved for anchor-based smooth scroll if needed in the future

  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main"
    >
      <div className="nav-left">
        <Link className="logo" to="/" aria-label="Logo">
          Waste ManagmentApp
        </Link>

        <div className="nav-links" role="menubar">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="nav-item"
              role="menuitem"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="nav-right">
        <Link className="cta-btn" to="/login">
          Login
        </Link>
        <Link className="profile-btn" to="/profile" aria-label="Profile">
          <UserRound size={18} />
          <span>Profile</span>
        </Link>

        <button
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((s) => !s)}
        >
          <span className="line" />
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} role="menu" id="mobileMenu">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.path}
            to={l.path}
            className="nav-item"
            role="menuitem"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}

        <div style={{ marginTop: 8 }}>
          <Link
            className="cta-btn"
            to="/login"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Login
          </Link>
          <Link
            className="profile-btn"
            to="/profile"
            onClick={() => {
              setMenuOpen(false);
            }}
            style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}
          >
            <UserRound size={18} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}