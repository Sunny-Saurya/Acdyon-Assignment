"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ModernButton } from "./landing"
import GlassSurface from "@/components/ui/glass-surface"
import "./navbar.css"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <GlassSurface
        className="header"
        width="min(1200px, 90%)"
        height="10%"
        borderRadius={50}
        borderWidth={0}
        opacity={0.85}
        blur={12}
        displace={0.3}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        mixBlendMode="screen" 
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          // border: "0
          boxShadow: "0 0 20px #3b3632ff", 
        }}
      >
        <div className="nav">
          <Link href="/" className="logo-link" onClick={handleNavClick}>
            <span className="logo-text text-[">
              CRON<span className="text-[#fff]">GUARD</span>
            </span>
          </Link>

          <div className="nav-center">
            <ul className="nav-links">
              <li>
                <Link href="#features" className="nav-link">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="nav-link">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#vision" className="nav-link">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="nav-link">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            {/* <span className="nav-status">
              <span className="status-dot"></span>
              <span className="mono">Online</span>
            </span> */}
            <ModernButton href="/sign-up" variant="primary" size="sm">
              Start Free
            </ModernButton>
          </div>

          <button
            className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </GlassSurface>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            <li>
              <Link href="#features" className="mobile-nav-link" onClick={handleNavClick}>
                <span className="mobile-nav-number">01</span>
                Features
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="mobile-nav-link" onClick={handleNavClick}>
                <span className="mobile-nav-number">02</span>
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#vision" className="mobile-nav-link" onClick={handleNavClick}>
                <span className="mobile-nav-number">03</span>
                Vision
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="mobile-nav-link" onClick={handleNavClick}>
                <span className="mobile-nav-number">04</span>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="mobile-nav-link" onClick={handleNavClick}>
                <span className="mobile-nav-number">05</span>
                Pricing
              </Link>
            </li>
          </ul>

          <div className="mobile-menu-footer">
            <div className="mobile-status">
              <span className="status-dot"></span>
              {/* <span className="mono">System Online</span> */}
            </div>
            <ModernButton
              href="/sign-up"
              variant="primary"
              onClick={handleNavClick}
              className="w-full justify-center"
            >
              Start Free
            </ModernButton>
          </div>
        </nav>
      </div>
    </>
  )
}
