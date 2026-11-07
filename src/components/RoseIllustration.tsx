import React from 'react';

interface RoseProps {
  size?: number;
  className?: string;
  isBloomed?: boolean;
}

export const RoseIllustration: React.FC<RoseProps> = ({
  size = 180,
  className = '',
  isBloomed = false,
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 12px 24px rgba(73, 53, 60, 0.12))',
          overflow: 'visible',
        }}
      >
        <defs>
          {/* Deep Black Rose Velvety Gradients */}
          <radialGradient id="outerPetalGrad" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#4A1E2C" />
            <stop offset="50%" stopColor="#2D111C" />
            <stop offset="100%" stopColor="#15080E" />
          </radialGradient>

          <radialGradient id="midPetalGrad" cx="45%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#B85C78" />
            <stop offset="45%" stopColor="#6E263E" />
            <stop offset="100%" stopColor="#250B15" />
          </radialGradient>

          <radialGradient id="innerBudGrad" cx="40%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#E8A0B3" />
            <stop offset="40%" stopColor="#B85C78" />
            <stop offset="100%" stopColor="#3C101F" />
          </radialGradient>

          {/* Champagne Gold Filigree */}
          <linearGradient id="goldStem" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E6C8A5" />
            <stop offset="50%" stopColor="#D6B58C" />
            <stop offset="100%" stopColor="#9C774E" />
          </linearGradient>

          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7E8D77" />
            <stop offset="50%" stopColor="#556650" />
            <stop offset="100%" stopColor="#323D2E" />
          </linearGradient>
        </defs>

        {/* Stem & Leaves */}
        <g id="stem-layer">
          <path
            d="M100 135 C101 155 96 172 98 190"
            stroke="url(#goldStem)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Left Leaf */}
          <path
            d="M99 152 C82 145 68 152 64 162 C78 165 92 160 99 154 Z"
            fill="url(#leafGrad)"
            stroke="#D6B58C"
            strokeWidth="1"
            opacity="0.9"
          />
          <path
            d="M99 153 C85 152 72 158 64 162"
            stroke="#D6B58C"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Right Leaf */}
          <path
            d="M99 164 C116 156 128 162 134 174 C120 176 108 172 99 165 Z"
            fill="url(#leafGrad)"
            stroke="#D6B58C"
            strokeWidth="1"
            opacity="0.9"
          />
        </g>

        {/* Outer Petals Layer (scales & rotates if bloomed) */}
        <g
          id="outer-petals"
          style={{
            transformOrigin: '100px 95px',
            transform: isBloomed ? 'scale(1.18)' : 'scale(1)',
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Back Left Large Petal */}
          <path
            d="M100 95 C65 55 45 80 52 110 C58 132 85 140 100 142 C115 140 142 132 148 110 C155 80 135 55 100 95 Z"
            fill="url(#outerPetalGrad)"
            stroke="#D6B58C"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />

          {/* Left Wing Petal */}
          <path
            d="M100 95 C60 70 48 95 60 120 C72 136 90 140 100 140 C85 125 78 105 100 95 Z"
            fill="url(#outerPetalGrad)"
            stroke="#E8A0B3"
            strokeWidth="0.6"
            strokeOpacity="0.3"
            style={{
              transformOrigin: '100px 105px',
              transform: isBloomed ? 'rotate(-12deg) scale(1.08)' : 'none',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {/* Right Wing Petal */}
          <path
            d="M100 95 C140 70 152 95 140 120 C128 136 110 140 100 140 C115 125 122 105 100 95 Z"
            fill="url(#outerPetalGrad)"
            stroke="#E8A0B3"
            strokeWidth="0.6"
            strokeOpacity="0.3"
            style={{
              transformOrigin: '100px 105px',
              transform: isBloomed ? 'rotate(12deg) scale(1.08)' : 'none',
              transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </g>

        {/* Mid Petals Layer */}
        <g
          id="mid-petals"
          style={{
            transformOrigin: '100px 95px',
            transform: isBloomed ? 'scale(1.12)' : 'scale(1)',
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Cup Petal Left */}
          <path
            d="M100 90 C70 80 65 110 80 130 C90 138 100 138 100 138 C100 138 78 118 85 96 Z"
            fill="url(#midPetalGrad)"
            stroke="#B85C78"
            strokeWidth="0.75"
          />

          {/* Cup Petal Right */}
          <path
            d="M100 90 C130 80 135 110 120 130 C110 138 100 138 100 138 C100 138 122 118 115 96 Z"
            fill="url(#midPetalGrad)"
            stroke="#B85C78"
            strokeWidth="0.75"
          />

          {/* Front Center Base Petal */}
          <path
            d="M82 115 C90 132 110 132 118 115 C125 100 115 88 100 88 C85 88 75 100 82 115 Z"
            fill="url(#midPetalGrad)"
            stroke="#D6B58C"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
        </g>

        {/* Inner Heart / Bud Core */}
        <g
          id="core-bud"
          style={{
            transformOrigin: '100px 92px',
            transform: isBloomed ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Swirling Spiral Petals */}
          <path
            d="M93 84 C88 75 108 70 112 80 C116 88 106 96 98 94 C92 92 92 86 98 84 C102 82 106 85 104 88"
            fill="none"
            stroke="url(#innerBudGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M98 87 C96 82 105 80 106 85 C107 89 101 91 99 90"
            fill="none"
            stroke="#E8A0B3"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="100" cy="85" r="3" fill="#D6B58C" opacity="0.9" />
        </g>

        {/* Golden Starlight Sparkles */}
        <g opacity="0.85">
          <circle cx="62" cy="74" r="1.5" fill="#D6B58C" />
          <circle cx="138" cy="72" r="1.5" fill="#D6B58C" />
          <circle cx="145" cy="120" r="1.2" fill="#D6B58C" />
          <circle cx="55" cy="125" r="1.2" fill="#D6B58C" />
          <circle cx="100" cy="50" r="1.8" fill="#D6B58C" />
        </g>
      </svg>
    </div>
  );
};
