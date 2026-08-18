"use client"

import { useEffect, useState, useRef } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    // Disable custom cursor on touch devices / mobile screen sizes
    const isTouchDevice = 
      "ontouchstart" in window || 
      navigator.maxTouchPoints > 0 || 
      window.matchMedia("(max-width: 768px)").matches

    if (isTouchDevice) {
      return
    }

    setIsHidden(false)

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseEnter = () => setIsHidden(false)
    const onMouseLeave = () => setIsHidden(true)

    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)

    const updatePosition = () => {
      // Instant positioning for the pointer dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }

      // Smooth trailing physics for the outer ring
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }

      requestAnimationFrame(updatePosition)
    }

    const animationFrameId = requestAnimationFrame(updatePosition)

    // Interactive element hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") || 
        target.closest('[role="button"]') ||
        target.classList.contains("cursor-pointer")

      setIsHovered(!!isInteractive)
    }

    window.addEventListener("mouseover", handleMouseOver)

    // Hide default system cursor using dynamic style injection
    const style = document.createElement("style")
    style.innerHTML = `
      body, a, button, [role="button"], input, textarea, select {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      window.removeEventListener("mouseover", handleMouseOver)
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (isHidden) return null

  return (
    <>
      {/* Outer fluid trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-white pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-difference"
        style={{
          transform: "translate3d(0px, 0px, 0)",
          scale: isHovered ? "1.6" : "1",
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
          borderWidth: isHovered ? "1.5px" : "1px",
        }}
      />
      {/* Inner lens pointer dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-white pointer-events-none z-[9999] transition-transform duration-200 ease-out mix-blend-difference"
        style={{
          transform: "translate3d(0px, 0px, 0)",
          scale: isHovered ? "4" : "1",
        }}
      />
    </>
  )
}
