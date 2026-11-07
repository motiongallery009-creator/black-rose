import React, { useState } from 'react';
import { PetalsOverlay } from './components/PetalsOverlay';
import { AudioToggle } from './components/AudioToggle';
import { Intro } from './components/Intro';
import { BirthdayReveal } from './components/BirthdayReveal';
import { Letter } from './components/Letter';
import { Surprises } from './components/Surprises';
import { PromiseSection } from './components/Promise';
import { FinalMessage } from './components/FinalMessage';

export const App: React.FC = () => {
  const [hasOpenedSurprise, setHasOpenedSurprise] = useState<boolean>(false);

  const handleOpenIntro = () => {
    setHasOpenedSurprise(true);
    const revealEl = document.getElementById('reveal');
    if (revealEl) {
      revealEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToLetter = () => {
    const letterEl = document.getElementById('letter');
    if (letterEl) {
      letterEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative min-h-screen">
      {/* Delicate floating rose petals */}
      <PetalsOverlay />

      {/* Discreet Audio Music Box Player */}
      <AudioToggle />

      <main>
        {/* Section 1: Intro / Entrance */}
        <Intro onOpen={handleOpenIntro} />

        {/* Section 2: Birthday Reveal */}
        <BirthdayReveal
          onScrollNext={handleScrollToLetter}
          triggerConfettiOnView={hasOpenedSurprise}
        />

        {/* Section 3: The Personal Letter */}
        <Letter />

        {/* Section 4: Little Surprises (A, B, C) */}
        <Surprises />

        {/* Section 5: The Brother's Promise */}
        <PromiseSection />

        {/* Section 6: Final Birthday Message */}
        <FinalMessage onBackToTop={handleBackToTop} />
      </main>
    </div>
  );
};

export default App;
