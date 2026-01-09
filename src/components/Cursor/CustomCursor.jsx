import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.scss';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return {
    showArrow: () => setIsVisible(true),
    hideArrow: () => setIsVisible(false),
    cursorComponent: (
      <motion.div
        className="project-cursor"
        animate={{ 
          x: mousePosition.x - 40, 
          y: mousePosition.y - 40,
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999 }}
      >
        <div className="arrow-wrapper">
          <span>VOIR</span>
          <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    )
  };
};

export default CustomCursor;