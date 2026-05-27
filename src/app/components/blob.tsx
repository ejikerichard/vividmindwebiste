'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function VanillaMouseTracker() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        const x = e.clientX - 20;
        const y = e.clientY - 20;

        blobRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={blobRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '40px',
        height: '40px',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <Image src="/images/hero-1.png" height={100} width={120} alt="blob" />
    </div>
  );
}
