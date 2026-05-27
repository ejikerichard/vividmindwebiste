'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export default function FourElementParallax() {
  const containerRef = useRef(null);

  // Single base source of truth for mouse position (-1 to 1 range)
  const basePositionX = useMotionValue(0);
  const basePositionY = useMotionValue(0);

  // Smooth spring physics configuration
  const springConfig = { damping: 25, stiffness: 180 };
  const smoothX = useSpring(basePositionX, springConfig);
  const smoothY = useSpring(basePositionY, springConfig);

  // 4 Distinct Speeds (Negative values move opposite to the mouse)
  // Layer 1 (Backpoint) -> Layer 4 (Frontpoint)
  const layer1X = useTransform(smoothX, [-1, 1], [15, -15]);
  const layer1Y = useTransform(smoothY, [-1, 1], [15, -15]);

  const layer2X = useTransform(smoothX, [-1, 1], [35, -35]);
  const layer2Y = useTransform(smoothY, [-1, 1], [35, -35]);

  const layer3X = useTransform(smoothX, [-1, 1], [60, -60]);
  const layer3Y = useTransform(smoothY, [-1, 1], [60, -60]);

  const layer4X = useTransform(smoothX, [-1, 1], [90, -90]);
  const layer4Y = useTransform(smoothY, [-1, 1], [90, -90]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize coordinates to a clean -1 to 1 range
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    basePositionX.set(normX);
    basePositionY.set(normY);
  };

  const handleMouseLeave = () => {
    // Return all 4 layers smoothly to dead-center
    basePositionX.set(0);
    basePositionY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '550px',
        height: '400px',
        backgroundColor: '#0b0f19',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* LAYER 1: Background Grid/Card (Moves 15px max) */}
      <motion.div
        style={{
          x: layer1X,
          y: layer1Y,
          position: 'absolute',
          width: '400px',
          height: '280px',
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          opacity: 0.5,
        }}
      />

      {/* LAYER 2: Large Decorative Ring (Moves 35px max) */}
      <motion.div
        style={{
          x: layer2X,
          y: layer2Y,
          position: 'absolute',
          width: '180px',
          height: '180px',
          border: '4px dashed #475569',
          borderRadius: '50%',
        }}
      />

      {/* LAYER 3: Midground Solid Accent (Moves 60px max) */}
      <motion.div
        style={{
          x: layer3X,
          y: layer3Y,
          position: 'absolute',
          width: '100px',
          height: '100px',
          backgroundColor: '#3b82f6',
          borderRadius: '24px',
          transform: 'rotate(45deg)', // Static rotation baseline
        }}
      />

      {/* LAYER 4: Foreground High-Contrast Object (Moves 90px max) */}
      <motion.div
        style={{
          x: layer4X,
          y: layer4Y,
          position: 'absolute',
          width: '50px',
          height: '50px',
          backgroundColor: '#60a5fa',
          borderRadius: '50%',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        }}
      />
    </div>
  );
}
