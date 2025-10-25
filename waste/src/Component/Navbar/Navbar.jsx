import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const NAV_LINKS = [
  { id: "#home", label: "Home" },
  { id: "#features", label: "Features" },
  { id: "#solution", label: "Our Solution" },
  { id: "#pricing", label: "Help" },
  { id: "#about", label: "About Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  // Detect scroll to toggle .scrolled class
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

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      const navHeight = (navRef.current && navRef.current.offsetHeight) || 68;
      const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

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
          <a
            className="cta-btn"
            href="/login"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}