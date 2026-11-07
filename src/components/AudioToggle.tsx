import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const AudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Soothing music-box pentatonic / sentimental lullaby notes (Frequencies in Hz)
  const notes = [
    523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, // C5, D5, E5, G5, A5, C6
    659.25, 587.33, 523.25, 440.0, 523.25, 659.25,
    783.99, 880.0, 1046.5, 880.0, 783.99, 659.25,
    587.33, 523.25, 440.0, 392.0, 440.0, 523.25
  ];

  const playChime = (ctx: AudioContext, freq: number, time: number) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Sine wave with slight harmonics for a gentle music box / celesta tone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      // Attack and gentle decay
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.08, time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(time);
      osc.stop(time + 1.8);
    } catch {
      // Audio context cleanup fallback
    }
  };

  const startMusicBox = () => {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContextClass();
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    const ctx = audioCtxRef.current;
    let noteIndex = 0;

    const scheduleNext = () => {
      if (!ctx || ctx.state === 'closed') return;
      const freq = notes[noteIndex % notes.length];
      playChime(ctx, freq, ctx.currentTime);
      noteIndex++;
      // Music box tempo ~400ms per note
      timerRef.current = window.setTimeout(scheduleNext, 460);
    };

    scheduleNext();
  };

  const stopMusicBox = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopMusicBox();
      setIsPlaying(false);
    } else {
      startMusicBox();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 90,
      }}
    >
      <button
        onClick={toggleSound}
        aria-label={isPlaying ? 'Mute ambient melody' : 'Play ambient music-box melody'}
        title={isPlaying ? 'Mute Music Box' : 'Play Music Box'}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 16px',
          borderRadius: '9999px',
          background: isPlaying ? 'rgba(184, 92, 120, 0.95)' : 'rgba(255, 255, 255, 0.88)',
          color: isPlaying ? '#FFFFFF' : '#49353C',
          border: '1px solid rgba(214, 181, 140, 0.45)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 4px 16px rgba(73, 53, 60, 0.08)',
          fontSize: '0.82rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} />
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Music Box On <Sparkles size={12} />
            </span>
          </>
        ) : (
          <>
            <VolumeX size={16} style={{ color: '#927D84' }} />
            <span style={{ color: '#685058' }}>Play Melody</span>
          </>
        )}
      </button>
    </div>
  );
};
