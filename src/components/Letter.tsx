import React from 'react';
import { RoseIllustration } from './RoseIllustration';

export const Letter: React.FC = () => {
  return (
    <section
      id="letter"
      className="section-wrapper"
      style={{
        padding: '80px 20px',
        backgroundColor: 'rgba(255, 249, 241, 0.65)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '780px', zIndex: 3 }}>
        {/* Section title */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            FROM THE HEART
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              color: '#49353C',
              fontWeight: 500,
            }}
          >
            A letter for you...
          </h2>
          <div className="gold-divider">
            <span style={{ color: '#D6B58C', fontSize: '0.9rem' }}>❧</span>
          </div>
        </div>

        {/* Real Handwritten Stationery Card */}
        <div
          className="luxury-card"
          style={{
            backgroundColor: '#FCFAF6',
            padding: 'clamp(28px, 6vw, 56px)',
            borderRadius: '16px',
            boxShadow: '0 16px 40px rgba(73, 53, 60, 0.08), 0 2px 8px rgba(184, 92, 120, 0.04)',
            border: '1px solid rgba(214, 181, 140, 0.55)',
            position: 'relative',
          }}
        >
          {/* Subtle Postmark Stamp / Wax Seal watermark */}
          <div
            style={{
              position: 'absolute',
              top: '28px',
              right: '28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              opacity: 0.85,
            }}
          >
            <RoseIllustration size={44} />
          </div>

          {/* Letter Opening */}
          <div style={{ marginBottom: '28px' }}>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                color: '#B85C78',
                fontWeight: 600,
                fontStyle: 'italic',
                lineHeight: 1.3,
              }}
            >
              Dear Mahiya, My Black Rose,
            </h3>
          </div>

          {/* Letter Paragraphs */}
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.28rem)',
              lineHeight: '1.9',
              color: '#45333A',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <p style={{ color: '#45333A', fontWeight: 600 }}>
              Happy Birthday, Mahiya! ❤️
            </p>

            <p style={{ color: '#45333A' }}>
              First of all, I hope you always have a reason to smile, even on the days when life doesn't go exactly as planned.
            </p>

            <p style={{ color: '#45333A' }}>
              I don't know if I say it enough, but you're genuinely special. And as your brother, there's something I want you to remember.
            </p>

            <p style={{ color: '#45333A' }}>
              No matter what happens, you don't have to face everything alone. I'll always be there to support you, stand beside you, listen to your endless stories, annoy you whenever I get the chance, and remind you that you're stronger than you think.
            </p>

            <p style={{ color: '#45333A' }}>
              I might not be able to solve every problem, but I'll always try my best to make things a little easier for you.
            </p>

            <p style={{ color: '#45333A' }}>
              If the world ever feels too difficult, remember that you have a brother who will always have your back.
            </p>

            <p style={{ color: '#45333A' }}>
              I'll protect you, support your dreams, celebrate your victories and never stop believing in you.
            </p>

            <p style={{ color: '#45333A' }}>
              Keep being yourself. Keep smiling. Never let anyone make you feel like you're less than you are.
            </p>

            <p style={{ color: '#45333A' }}>
              And please, don't change that beautiful personality of yours.
            </p>

            {/* Inner Promise Highlight Box */}
            <div
              style={{
                margin: '16px 0',
                padding: '20px 24px',
                borderRadius: '12px',
                background: 'rgba(232, 160, 179, 0.12)',
                borderLeft: '3px solid #B85C78',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.18em',
                  color: '#B85C78',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                A Little Promise from Zenpai:
              </div>
              <p
                style={{
                  color: '#49353C',
                  fontStyle: 'italic',
                  fontSize: '1.18rem',
                  lineHeight: '1.7',
                }}
              >
                &ldquo;I'll always be your brother, your supporter, your occasional headache and one of the people you can count on.&rdquo;
              </p>
            </div>

            <p style={{ color: '#45333A', fontWeight: 600 }}>
              Happy Birthday, Black Rose. 🌹
            </p>

            <div style={{ marginTop: '20px' }}>
              <p style={{ color: '#685058', marginBottom: '6px' }}>With lots of love,</p>
              <div
                style={{
                  display: 'inline-block',
                  borderBottom: '1px solid rgba(214, 181, 140, 0.5)',
                  paddingBottom: '4px',
                }}
              >
                <span
                  className="handwritten"
                  style={{
                    fontSize: '1.9rem',
                    color: '#B85C78',
                    fontWeight: 700,
                  }}
                >
                  Your Brother, Zenpai ❤️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
