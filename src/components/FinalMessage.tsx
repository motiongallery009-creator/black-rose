import React from 'react';
import { RoseIllustration } from './RoseIllustration';
import { ArrowUp, Heart } from 'lucide-react';

interface FinalMessageProps {
  onBackToTop: () => void;
}

export const FinalMessage: React.FC<FinalMessageProps> = ({ onBackToTop }) => {
  return (
    <section
      id="final"
      className="section-wrapper"
      style={{
        minHeight: '100vh',
        padding: '110px 20px 80px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(255, 245, 246, 0.4) 0%, rgba(255, 249, 241, 0.95) 100%)',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '740px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 3,
        }}
      >
        {/* Large Rose Illustration */}
        <div
          style={{
            marginBottom: '40px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232, 160, 179, 0.3) 0%, rgba(214, 181, 140, 0.12) 60%, transparent 75%)',
              filter: 'blur(12px)',
              zIndex: -1,
            }}
          />
          <RoseIllustration size={200} />
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(2.3rem, 6vw, 3.8rem)',
            color: '#49353C',
            fontWeight: 500,
            lineHeight: 1.22,
            marginBottom: '24px',
            letterSpacing: '-0.015em',
          }}
        >
          Some people are like roses.
          <br />
          <span style={{ fontStyle: 'italic', color: '#B85C78' }}>
            Rare, beautiful, and impossible to replace.
          </span>
        </h2>

        {/* Supporting Message */}
        <p
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: '#6F5961',
            maxWidth: '560px',
            lineHeight: 1.65,
            marginBottom: '36px',
          }}
        >
          Whatever life brings, you'll always have your brother in your corner.
        </p>

        {/* Happy Birthday, Mahiya */}
        <div
          style={{
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)',
              color: '#B85C78',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            Happy Birthday, Mahiya.
          </div>
        </div>

        {/* Signature */}
        <div
          style={{
            marginBottom: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span
            className="handwritten"
            style={{
              fontSize: '2rem',
              color: '#49353C',
              fontWeight: 600,
            }}
          >
            Forever your brother,
          </span>
          <span
            className="handwritten"
            style={{
              fontSize: '2.2rem',
              color: '#B85C78',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontWeight: 700,
            }}
          >
            Zenpai ♡
          </span>
        </div>

        {/* Back to the Beginning Button */}
        <button
          onClick={onBackToTop}
          className="luxury-btn-secondary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 28px',
            fontSize: '0.95rem',
          }}
        >
          <span>Back to the Beginning</span>
          <ArrowUp size={16} />
        </button>

        {/* Delicate copyright / footer footnote */}
        <div
          style={{
            marginTop: '48px',
            fontSize: '0.82rem',
            color: '#A8949B',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <span>BLACK ROSE — A Handmade Birthday Gift</span>
          <Heart size={12} style={{ fill: '#E8A0B3', color: '#E8A0B3' }} />
        </div>
      </div>
    </section>
  );
};
