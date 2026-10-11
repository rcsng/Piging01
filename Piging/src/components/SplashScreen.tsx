import React from 'react';
import { InabelWeaveBorder, KalachuchiFlower, SunburstRays } from './CulturalMotifs';

interface SplashScreenProps {
  onStart: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onStart }) => {
  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col justify-between bg-woven-bamboo overflow-hidden select-none">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(255, 224, 150, 0.18) 0%, rgba(61, 35, 20, 0.42) 100%)',
        }}
      />

      <div className="relative z-10 pt-3">
        <InabelWeaveBorder position="top" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
        <div className="relative w-full max-w-[360px] flex flex-col items-center">
          <SunburstRays className="w-60 h-28 -mb-5 z-10" />

          <KalachuchiFlower size={84} className="absolute left-1 top-8 -rotate-12 z-10" />
          <KalachuchiFlower size={44} className="absolute right-16 top-16 rotate-6 z-10" />
          <KalachuchiFlower size={92} className="absolute -right-1 top-14 rotate-12 z-10" />

          <h1
            className="relative z-20 font-filipiniana font-black tracking-wider text-[3.5rem] sm:text-[4.1rem] leading-none text-[#3D1459] drop-shadow-[0_3px_0_#F5B727]"
            style={{
              WebkitTextStroke: '1.5px #E8A238',
              textShadow: '0 4px 12px rgba(35, 20, 13, 0.55), 0 1px 0 #FFD66B',
            }}
          >
            PIGING
          </h1>
        </div>

        <div className="mt-4 max-w-[320px]">
          <p
            className="font-woodblock font-extrabold uppercase tracking-wide text-xl sm:text-2xl leading-snug bg-gradient-to-b from-[#FF5900] via-[#FF8C1A] to-[#FFD24C] bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(35,20,13,0.75)]"
            style={{ textWrap: 'balance' }}
          >
            TASTE THE CULTURE,
            <br />
            SHARE THE STORY
          </p>
          <p className="mt-1.5 text-xs font-medium tracking-widest uppercase text-[#FFF5CC]/90">
            Lasa-Suri &bull; Regional Culinary Heritage
          </p>
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={onStart}
            className="group relative min-h-[56px] px-10 py-3.5 rounded-2xl bg-[#260D2A] border-2 border-[#4A2052] shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:bg-[#321238] hover:border-[#E8A238] active:scale-[0.97] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[#FFD24C] cursor-pointer"
          >
            <span className="font-woodblock font-black text-2xl sm:text-[1.7rem] tracking-wider uppercase bg-gradient-to-r from-[#FF36E8] via-[#FFB8E6] to-[#FFE169] bg-clip-text text-transparent whitespace-nowrap">
              KAON NA!
            </span>
          </button>
          <p className="mt-2.5 text-[11px] font-medium text-[#FFF5CC]/80 tracking-wide">
            Tap to begin exploring Luzon, Visayas &amp; Mindanao
          </p>
        </div>
      </div>

      <div className="relative z-10 pb-3">
        <InabelWeaveBorder position="bottom" />
      </div>
    </div>
  );
};
