"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span" | "article" | "section";
  className?: string;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLDivElement | null>;
  customVariants?: Variants;
}

export const TimelineContent = ({
  children,
  as = "div",
  className = "",
  animationNum = 0,
  timelineRef,
  customVariants,
}: TimelineContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Trigger animation when the timelineRef (parent container) or the element itself enters the viewport
  const activeRef = timelineRef || ref;
  const isInView = useInView(activeRef, { once: true, margin: "-100px 0px" });

  const MotionComponent = motion[as as keyof typeof motion] || motion.div;

  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const variants = customVariants || defaultVariants;

  return (
    <MotionComponent
      ref={ref}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
