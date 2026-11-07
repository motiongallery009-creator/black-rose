import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { RoseIllustration } from './RoseIllustration';
import { Sparkles, ChevronDown } from 'lucide-react';

interface BirthdayRevealProps {
  onScrollNext: () => void;
  triggerConfettiOnView?: boolean;
}

export const BirthdayReveal: React.FC<BirthdayRevealProps> = ({
  onScrollNext,
  triggerConfettiOnView = true,
}) => {
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (triggerConfettiOnView && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      // Elegant, refined celebratory confetti with palette colors
      try {
        confetti({
          particleCount: 45,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#E8A0B3', '#B85C78', '#D6B58C', '#FFFFFF', '#49353C'],
          ticks: 200,
          gravity: 0.8,
          scalar: 0.9,
        });

        const timer = setTimeout(() => {
          try {
            confetti({
              particleCount: 30,
              angle: 60,
              spread: 45,
              origin: { x: 0.2, y: 0.7 },
              colors: ['#E8A0B3', '#D6B58C'],
            });
            confetti({
              particleCount: 30,
              angle: 120,
              spread: 45,
              origin: { x: 0.8, y: 0.7 },
              colors: ['#B85C78', '#FFFFFF'],
            });
          } catch {
            // fallback
          }
        }, 400);

        return () => clearTimeout(timer);
      } catch {
        // fallback
      }
    }
  }, [triggerConfettiOnView]);

  return (
    <section
      id="reveal"
      className="section-wrapper"
      style={{
        minHeight: '100vh',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '720px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 3,
        }}
      >
        {/* Subtle decorative arch ribbon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: '20px',
            color: '#B85C78',
            fontSize: '0.9rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}
        >
          <Sparkles size={16} />
          <span>A Special Day • For A Special Soul</span>
          <Sparkles size={16} />
        </div>

        {/* Main Heading */}
        <h2
          style={{
            fontSize: 'clamp(2.6rem, 7vw, 4.2rem)',
            fontWeight: 600,
            lineHeight: 1.15,
            color: '#49353C',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}
        >
          Happy Birthday,
          <br />
          <span
            style={{
              color: '#B85C78',
              fontStyle: 'italic',
              textShadow: '0 2px 10px rgba(184, 92, 120, 0.15)',
            }}
          >
            Mahiya!
          </span>
        </h2>

        {/* Secondary Heading */}
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1.15rem, 2.8vw, 1.45rem)',
            fontWeight: 500,
            color: '#7A626A',
            letterSpacing: '0.04em',
            marginBottom: '28px',
          }}
        >
          To my favourite Black Rose.
        </h3>

        {/* Rose with Champagne Gold Decorative Ring */}
        <div
          style={{
            position: 'relative',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '50%',
              border: '1px solid rgba(214, 181, 140, 0.45)',
              borderStyle: 'dashed',
              pointerEvents: 'none',
            }}
          />
          <RoseIllustration size={175} />
        </div>

        {/* Supporting Text */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2.4vw, 1.25rem)',
            lineHeight: 1.7,
            color: '#5E4A51',
            maxWidth: '540px',
            marginBottom: '28px',
          }}
        >
          Today is all about you. Your smile, your happiness and all the beautiful things waiting ahead.
        </p>

        {/* Signature */}
        <div
          style={{
            marginBottom: '48px',
            padding: '8px 24px',
            borderRadius: '9999px',
            background: 'rgba(255, 255, 255, 0.7)',
            border: '1px solid rgba(214, 181, 140, 0.35)',
            boxShadow: '0 2px 12px rgba(73, 53, 60, 0.04)',
          }}
        >
          <span className="handwritten" style={{ fontSize: '1.35rem', color: '#49353C' }}>
            Made with love by your brother —{' '}
            <strong style={{ color: '#B85C78', fontWeight: 600 }}>Zenpai</strong>.
          </span>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={onScrollNext}
          style={{
            background: 'transparent',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            color: '#927D84',
            fontSize: '0.88rem',
            letterSpacing: '0.05em',
            padding: '8px 16px',
            borderRadius: '20px',
            transition: 'color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#B85C78')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#927D84')}
        >
          <span>There&apos;s a little more waiting for you</span>
          <ChevronDown size={18} style={{ animation: 'bounce 2s infinite' }} />
        </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
};
