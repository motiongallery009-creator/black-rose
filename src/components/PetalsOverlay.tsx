import React, { useMemo } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  rotation: number;
}

export const PetalsOverlay: React.FC = () => {
  // Generate a lightweight, deterministic set of 12 delicate petals
  const petals: Petal[] = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: (i * 7.5 + (i % 3) * 4) % 100,
      size: 14 + (i % 4) * 5,
      duration: 14 + (i % 5) * 3,
      delay: (i * 1.8) % 12,
      opacity: 0.35 + (i % 3) * 0.15,
      rotation: (i * 47) % 360,
    }));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 2,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <svg
          key={p.id}
          className="falling-petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.3}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
          viewBox="0 0 30 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0C25 10 30 25 20 38C10 35 0 25 5 10C8 3 12 0 15 0Z"
            fill="url(#petalGradient)"
          />
          <defs>
            <linearGradient id="petalGradient" x1="5" y1="0" x2="25" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E8A0B3" />
              <stop offset="0.65" stopColor="#B85C78" />
              <stop offset="1" stopColor="#5E2235" />
            </linearGradient>
          </defs>
        </svg>
      ))}
    </div>
  );
};
