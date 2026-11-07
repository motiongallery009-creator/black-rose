import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { RoseIllustration } from './RoseIllustration';
import { Sparkles, X, Gift, Flower2, MessageSquareHeart } from 'lucide-react';

export const Surprises: React.FC = () => {
  // Surprise A: Secret Message
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  // Surprise B: Blooming Rose
  const [isRoseBloomed, setIsRoseBloomed] = useState(false);

  // Surprise C: Gift Box
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  const handleOpenGift = () => {
    setIsGiftOpen(!isGiftOpen);
    if (!isGiftOpen) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.75 },
        colors: ['#E8A0B3', '#D6B58C', '#B85C78', '#FFFFFF'],
      });
    }
  };

  const handleBloomRose = () => {
    setIsRoseBloomed(!isRoseBloomed);
    if (!isRoseBloomed) {
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.75 },
        colors: ['#B85C78', '#E8A0B3'],
      });
    }
  };

  return (
    <section
      id="surprises"
      className="section-wrapper"
      style={{
        padding: '90px 20px',
        position: 'relative',
      }}
    >
      <div className="container" style={{ maxWidth: '880px', zIndex: 3 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="badge-tag" style={{ marginBottom: '12px' }}>
            SPECIAL SURPRISES
          </span>
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
              color: '#49353C',
              fontWeight: 500,
              marginBottom: '10px',
            }}
          >
            Okay, a few little surprises...
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.05rem, 2.2vw, 1.2rem)',
              color: '#7A626A',
            }}
          >
            Because one birthday wish isn't enough.
          </p>
          <div className="gold-divider">
            <span style={{ color: '#D6B58C' }}>✧</span>
          </div>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
            width: '100%',
          }}
        >
          {/* ===================================================
              SURPRISE A: THE SECRET MESSAGE
             =================================================== */}
          <div
            className="luxury-card"
            style={{
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'space-between',
              minHeight: '380px',
            }}
          >
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(232, 160, 179, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B85C78',
                  marginBottom: '18px',
                }}
              >
                <MessageSquareHeart size={26} />
              </div>

              <span
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#927D84',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                Surprise 01
              </span>

              <h3
                style={{
                  fontSize: '1.45rem',
                  color: '#49353C',
                  marginBottom: '14px',
                }}
              >
                The Secret Note
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#7E686F', marginBottom: '20px' }}>
                A hidden thought tucked away just between us.
              </p>
            </div>

            <div style={{ width: '100%' }}>
              <button
                onClick={() => setIsSecretOpen(true)}
                className="luxury-btn-secondary"
                style={{
                  width: '100%',
                  fontSize: '0.92rem',
                }}
              >
                <span>Don't click this...</span>
              </button>
            </div>

            {/* Secret Message Modal Card */}
            {isSecretOpen && (
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  backgroundColor: 'rgba(73, 53, 60, 0.5)',
                  backdropFilter: 'blur(6px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 100,
                  padding: '20px',
                }}
                onClick={() => setIsSecretOpen(false)}
              >
                <div
                  className="luxury-card"
                  style={{
                    backgroundColor: '#FFF9F1',
                    maxWidth: '460px',
                    width: '100%',
                    padding: '36px 30px',
                    textAlign: 'center',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.2)',
                    position: 'relative',
                    animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsSecretOpen(false)}
                    aria-label="Close note"
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'transparent',
                      color: '#927D84',
                      padding: '6px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <X size={20} />
                  </button>

                  <div style={{ color: '#B85C78', marginBottom: '14px' }}>
                    <Sparkles size={24} style={{ margin: '0 auto' }} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.75rem',
                      color: '#B85C78',
                      marginBottom: '16px',
                      fontFamily: 'var(--font-serif)',
                    }}
                  >
                    Okay, you found it!
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.18rem',
                      lineHeight: '1.75',
                      color: '#49353C',
                      marginBottom: '16px',
                    }}
                  >
                    Just another reminder that your brother is always rooting for you.
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.18rem',
                      lineHeight: '1.75',
                      color: '#49353C',
                      marginBottom: '24px',
                    }}
                  >
                    Never stop smiling, never stop dreaming, and never forget how special you are.
                  </p>

                  <div
                    className="handwritten"
                    style={{
                      fontSize: '1.5rem',
                      color: '#B85C78',
                    }}
                  >
                    With love,
                    <br />
                    Zenpai ❤️
                  </div>

                  <button
                    onClick={() => setIsSecretOpen(false)}
                    className="luxury-btn"
                    style={{
                      marginTop: '24px',
                      padding: '10px 24px',
                      fontSize: '0.88rem',
                    }}
                  >
                    Close Note
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ===================================================
              SURPRISE B: A ROSE FOR YOU
             =================================================== */}
          <div
            className="luxury-card"
            style={{
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'space-between',
              minHeight: '380px',
            }}
          >
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(232, 160, 179, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B85C78',
                  marginBottom: '18px',
                }}
              >
                <Flower2 size={26} />
              </div>

              <span
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#927D84',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                Surprise 02
              </span>

              <h3
                style={{
                  fontSize: '1.45rem',
                  color: '#49353C',
                  marginBottom: '8px',
                }}
              >
                A Rose for You
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#7E686F', marginBottom: '14px' }}>
                Something that blooms just for you.
              </p>

              {/* Closed / Bloomed Rose Graphic */}
              <div style={{ margin: '6px 0', minHeight: '110px', display: 'flex', alignItems: 'center' }}>
                <RoseIllustration size={105} isBloomed={isRoseBloomed} />
              </div>

              {isRoseBloomed && (
                <div
                  style={{
                    background: 'rgba(232, 160, 179, 0.15)',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(232, 160, 179, 0.4)',
                    marginTop: '10px',
                    animation: 'fadeIn 0.6s ease',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontStyle: 'italic',
                      color: '#49353C',
                      lineHeight: '1.5',
                    }}
                  >
                    &ldquo;Even the prettiest flowers deserve to be reminded how special they are.&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div style={{ width: '100%', marginTop: '16px' }}>
              <button
                onClick={handleBloomRose}
                className="luxury-btn-secondary"
                style={{
                  width: '100%',
                  fontSize: '0.92rem',
                  borderColor: isRoseBloomed ? '#B85C78' : undefined,
                }}
              >
                <span>{isRoseBloomed ? 'Bloom Again ✨' : 'Make it Bloom 🌹'}</span>
              </button>
            </div>
          </div>

          {/* ===================================================
              SURPRISE C: YOUR BIRTHDAY GIFT
             =================================================== */}
          <div
            className="luxury-card"
            style={{
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'space-between',
              minHeight: '380px',
            }}
          >
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'rgba(232, 160, 179, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#B85C78',
                  marginBottom: '18px',
                }}
              >
                <Gift size={26} />
              </div>

              <span
                style={{
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#927D84',
                  fontWeight: 600,
                  marginBottom: '8px',
                }}
              >
                Surprise 03
              </span>

              <h3
                style={{
                  fontSize: '1.45rem',
                  color: '#49353C',
                  marginBottom: '8px',
                }}
              >
                Your Birthday Gift
              </h3>

              <p style={{ fontSize: '0.95rem', color: '#7E686F', marginBottom: '14px' }}>
                One last little gift.
              </p>

              {/* Pastel Gift Box SVG */}
              <div
                style={{
                  margin: '8px 0',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="95"
                  height="95"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    filter: 'drop-shadow(0 6px 16px rgba(184, 92, 120, 0.15))',
                    cursor: 'pointer',
                  }}
                  onClick={handleOpenGift}
                >
                  {/* Gift Box Base */}
                  <rect x="20" y="44" width="60" height="46" rx="6" fill="#FFF0F3" stroke="#D6B58C" strokeWidth="1.5" />
                  <rect x="45" y="44" width="10" height="46" fill="#E8A0B3" />

                  {/* Gift Box Lid (animates upwards when open) */}
                  <g
                    style={{
                      transformOrigin: '50px 42px',
                      transform: isGiftOpen ? 'translateY(-16px) rotate(-8deg)' : 'none',
                      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <rect x="15" y="32" width="70" height="15" rx="4" fill="#B85C78" stroke="#D6B58C" strokeWidth="1.5" />
                    {/* Ribbon knot */}
                    <path
                      d="M50 32 C42 20 30 24 45 32 C55 24 58 20 50 32 Z"
                      fill="#D6B58C"
                      stroke="#A57D4F"
                      strokeWidth="1"
                    />
                    <circle cx="50" cy="32" r="4.5" fill="#F1E5D5" stroke="#A57D4F" strokeWidth="1" />
                  </g>
                </svg>
              </div>

              {/* Revealed Gift Message */}
              {isGiftOpen && (
                <div
                  style={{
                    background: '#FFF9F1',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid rgba(214, 181, 140, 0.6)',
                    marginTop: '12px',
                    textAlign: 'left',
                    animation: 'fadeIn 0.5s ease',
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      color: '#B85C78',
                      fontSize: '1rem',
                      marginBottom: '8px',
                    }}
                  >
                    Congratulations! 🎁
                  </p>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: '1.5',
                      color: '#49353C',
                      marginBottom: '10px',
                    }}
                  >
                    You've officially received a lifetime subscription to annoying your brother.
                  </p>
                  <div
                    style={{
                      fontSize: '0.82rem',
                      color: '#7E686F',
                      lineHeight: '1.4',
                      paddingLeft: '8px',
                      borderLeft: '2px solid #E8A0B3',
                      marginBottom: '10px',
                    }}
                  >
                    • No cancellation.<br />
                    • No refunds.<br />
                    • No exchanges.
                  </div>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      fontStyle: 'italic',
                      color: '#927D84',
                      marginBottom: '8px',
                    }}
                  >
                    Terms and conditions apply. 😂
                  </p>
                  <p
                    className="handwritten"
                    style={{
                      fontSize: '1.25rem',
                      color: '#B85C78',
                      textAlign: 'right',
                    }}
                  >
                    — Zenpai ❤️
                  </p>
                </div>
              )}
            </div>

            <div style={{ width: '100%', marginTop: '16px' }}>
              <button
                onClick={handleOpenGift}
                className="luxury-btn-secondary"
                style={{
                  width: '100%',
                  fontSize: '0.92rem',
                  borderColor: isGiftOpen ? '#B85C78' : undefined,
                }}
              >
                <span>{isGiftOpen ? 'Close Gift Box' : 'Open Your Gift 🎁'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
