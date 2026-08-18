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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[190] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[450px] bg-[#D4D4D8] z-[200] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between p-8 text-black ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header inside drawer */}
        <div className="flex justify-between items-center w-full">
          {/* Cursive "click me" text */}
          <span className="font-[cursive] italic text-lg text-black/60 lowercase pl-2 select-none">
            click me
          </span>

          {/* Close button with text */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 text-black hover:opacity-75 transition-opacity cursor-pointer group"
          >
            <span className="font-heading font-extrabold text-xl tracking-tight">Close</span>
            <svg
              className="size-6 transition-transform group-hover:rotate-90 duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Big Bold Menu Items */}
        <nav className="flex-1 flex flex-col justify-center py-12">
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="#features"
                onClick={handleNavClick}
                className="block text-[clamp(2.5rem,7.5vw,3.8rem)] font-extrabold tracking-tighter uppercase leading-[0.85] text-black hover:opacity-70 transition-opacity font-heading"
              >
                FEATURES
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                onClick={handleNavClick}
                className="block text-[clamp(2.5rem,7.5vw,3.8rem)] font-extrabold tracking-tighter uppercase leading-[0.85] text-black hover:opacity-70 transition-opacity font-heading"
              >
                INTEGRATIONS
              </Link>
            </li>
            <li>
              <Link
                href="#vision"
                onClick={handleNavClick}
                className="block text-[clamp(2.5rem,7.5vw,3.8rem)] font-extrabold tracking-tighter uppercase leading-[0.85] text-black hover:opacity-70 transition-opacity font-heading"
              >
                VISION
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                onClick={handleNavClick}
                className="block text-[clamp(2.5rem,7.5vw,3.8rem)] font-extrabold tracking-tighter uppercase leading-[0.85] text-black hover:opacity-70 transition-opacity font-heading"
              >
                TESTIMONIALS
              </Link>
            </li>
            <li>
              <Link
                href="#pricing"
                onClick={handleNavClick}
                className="block text-[clamp(2.5rem,7.5vw,3.8rem)] font-extrabold tracking-tighter uppercase leading-[0.85] text-black hover:opacity-70 transition-opacity font-heading"
              >
                PRICING
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer info or minimal note */}
        <div className="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-black/40 border-t border-black/10 pt-4 w-full select-none">
          <span>CRONGUARD &copy; 2026</span>
          <span>✦ LIVE EVENTS</span>
        </div>
      </div>
    </>
  )
}
