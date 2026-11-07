import React from 'react';
import { RoseIllustration } from './RoseIllustration';
import { ShieldCheck, Compass, HeartHandshake } from 'lucide-react';

export const PromiseSection: React.FC = () => {
  const promises = [
    {
      num: '01',
      icon: <ShieldCheck size={22} style={{ color: '#D6B58C' }} />,
      text: "I'll always have your back.",
    },
    {
      num: '02',
      icon: <Compass size={22} style={{ color: '#D6B58C' }} />,
      text: "I'll always support your dreams.",
    },
    {
      num: '03',
      icon: <HeartHandshake size={22} style={{ color: '#D6B58C' }} />,
      text: "You'll never have to wonder whether your brother cares.",
    },
  ];

  return (
    <section
      id="promise"
      className="section-wrapper"
      style={{
        padding: '100px 20px',
        backgroundColor: '#2E1A23',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184, 92, 120, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ maxWidth: '780px', zIndex: 3, textAlign: 'center' }}>
        {/* Subtle Decorative Rose Top */}
        <div style={{ marginBottom: '24px' }}>
          <RoseIllustration size={72} />
        </div>

        {/* Section Heading */}
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#D6B58C',
            fontWeight: 600,
            marginBottom: '12px',
          }}
        >
          A LIFETIME PACT
        </span>

        <h2
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 3.4rem)',
            color: '#FFFFFF',
            fontWeight: 500,
            marginBottom: '16px',
            lineHeight: 1.2,
          }}
        >
          One thing I want you to remember.
        </h2>

        <p
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            color: 'rgba(255, 245, 246, 0.75)',
            maxWidth: '560px',
            margin: '0 auto 50px auto',
            lineHeight: 1.6,
          }}
        >
          Life won't always be perfect, but I hope you never forget these three things.
        </p>

        {/* Promises List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            maxWidth: '620px',
            margin: '0 auto',
          }}
        >
          {promises.map((p) => (
            <div
              key={p.num}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '24px 28px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(214, 181, 140, 0.22)',
                backdropFilter: 'blur(10px)',
                textAlign: 'left',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  minWidth: '70px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.2rem',
                    color: '#D6B58C',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                  }}
                >
                  {p.num}
                </span>
                {p.icon}
              </div>

              <div
                style={{
                  height: '28px',
                  width: '1px',
                  background: 'rgba(214, 181, 140, 0.25)',
                }}
              />

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2.4vw, 1.25rem)',
                  fontFamily: 'var(--font-serif)',
                  color: '#FFFFFF',
                  letterSpacing: '0.01em',
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                &ldquo;{p.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
