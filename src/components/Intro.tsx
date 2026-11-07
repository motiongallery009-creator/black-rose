import React from 'react';
import { RoseIllustration } from './RoseIllustration';
import { Heart } from 'lucide-react';

interface IntroProps {
  onOpen: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onOpen }) => {
  return (
    <section
      id="intro"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '680px',
          zIndex: 3,
        }}
      >
        {/* Top subtle badge */}
        <div style={{ marginBottom: '24px' }}>
          <span className="badge-tag">A LITTLE EFFORT FROM YOUR BROTHER</span>
        </div>

        {/* Central Rose Composition */}
        <div
          style={{
            marginBottom: '32px',
            position: 'relative',
            cursor: 'pointer',
          }}
          onClick={onOpen}
          role="button"
          tabIndex={0}
          aria-label="Black Rose Icon"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') onOpen();
          }}
        >
          {/* Subtle glowing aura */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '210px',
              height: '210px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232, 160, 179, 0.35) 0%, rgba(214, 181, 140, 0.15) 50%, transparent 70%)',
              zIndex: -1,
              filter: 'blur(10px)',
            }}
          />
          <RoseIllustration size={160} />
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: 'clamp(2.1rem, 5.5vw, 3.4rem)',
            fontWeight: 600,
            lineHeight: 1.2,
            color: '#49353C',
            marginBottom: '20px',
            letterSpacing: '-0.015em',
          }}
        >
          Some days are special.
          <br />
          <span style={{ fontStyle: 'italic', color: '#B85C78' }}>
            And then there’s your birthday.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            color: '#7C676E',
            maxWidth: '520px',
            lineHeight: 1.6,
            marginBottom: '28px',
          }}
        >
          Made for someone who deserves all the happiness in the world.
        </p>

        {/* Primary Button */}
        <button
          onClick={onOpen}
          className="luxury-btn"
          style={{
            fontSize: '1.05rem',
            padding: '16px 36px',
            marginBottom: '32px',
          }}
        >
          <span>Open Your Surprise ♡</span>
        </button>

        {/* Handwritten signature */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span className="handwritten" style={{ fontSize: '1.4rem' }}>
            With love, from Zenpai.
          </span>
          <Heart size={15} style={{ fill: '#B85C78', color: '#B85C78' }} />
        </div>
      </div>
    </section>
  );
};
