import React from 'react';
import { ArrowLeft, ChevronRight, Heart, Plus, Home } from 'lucide-react';
import { DishData, RegionData } from '../data/culinaryData';
import {
  AntiqueBrassPlaque,
  BambooSlatBorder,
  ResilientImage,
  SandokLadleIcon,
} from './CulturalMotifs';

interface DishListScreenProps {
  region: RegionData;
  favoriteIds: string[];
  onBackToRegions: () => void;
  onNavigateHome: () => void;
  onNavigateFavorites: () => void;
  onSelectDish: (dish: DishData) => void;
  onToggleFavorite: (dishId: string) => void;
}

export const DishListScreen: React.FC<DishListScreenProps> = ({
  region,
  favoriteIds,
  onBackToRegions,
  onNavigateHome,
  onNavigateFavorites,
  onSelectDish,
  onToggleFavorite,
}) => {
  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col justify-between bg-terracotta-carved overflow-hidden">
      {/* Top Vertical Bamboo Slat Border */}
      <BambooSlatBorder heightClass="h-8" />

      {/* Main Scrollable Content Area */}
      <div className="flex-1 px-4 sm:px-5 py-4 flex flex-col justify-between">
        <div>
          {/* Compact Navigation Utility Row */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <button
              type="button"
              onClick={onBackToRegions}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D2314]/85 text-[#FFF5CC] text-xs font-medium border border-[#E8A238]/40 hover:border-[#E8A238] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Regions</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onNavigateHome}
                title="Home Region Picker"
                className="p-2 rounded-lg bg-[#3D2314]/85 text-[#FFF5CC] border border-[#E8A238]/30 hover:border-[#E8A238] transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onNavigateFavorites}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D2314]/85 text-[#FFF5CC] text-xs font-medium border border-[#E8A238]/40 hover:border-[#E8A238] transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <Heart className="w-3.5 h-3.5 text-[#FF4D6D] fill-[#FF4D6D]" />
                <span>Paborito ({favoriteIds.length})</span>
              </button>
            </div>
          </div>

          {/* Region Title Header (Matches Screenshot 4 "Region 1") */}
          <div className="mt-1 mb-3 flex items-baseline justify-between">
            <div>
              <h1 className="font-woodblock font-black text-4xl sm:text-[2.65rem] tracking-tight text-[#F3B13E] drop-shadow-[0_3px_2px_rgba(35,20,13,0.6)]">
                {region.shortTitle}
              </h1>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FFF5CC]/85">
                {region.fullName}
              </p>
            </div>
          </div>

          {/* Regional Summary Banner Box with Flourish, Steam Doodle & Sandok Ladle */}
          <div className="relative mt-2 mb-5 rounded-[26px] bg-parchment-tan border-2 border-[#4A2511] px-4 py-3.5 shadow-[0_6px_16px_rgba(0,0,0,0.3)]">
            {/* Top-Right Cream Loop Flourish (from Screenshot 4) */}
            <svg
              viewBox="0 0 90 50"
              className="w-16 h-9 absolute -top-5 right-3 pointer-events-none select-none"
              aria-hidden="true"
            >
              <path
                d="M10 40 C28 38, 34 10, 22 10 C12 10, 18 35, 42 32 C62 29, 66 8, 54 8 C44 8, 52 32, 82 18"
                fill="none"
                stroke="#F9E5B4"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* Summary Paragraph */}
            <p className="font-editorial font-semibold text-[13px] sm:text-sm leading-relaxed text-[#1B0F08]">
              {region.summaryBanner}
            </p>

            {/* Bottom-Left Cream Cloud/Steam Doodle (from Screenshot 4) */}
            <svg
              viewBox="0 0 60 40"
              className="w-11 h-7 absolute -bottom-3.5 left-2 pointer-events-none select-none"
              aria-hidden="true"
            >
              <path
                d="M15 26 C8 26, 6 18, 13 15 C14 8, 25 6, 30 12 C37 8, 48 13, 45 21 C52 24, 48 33, 39 31 C34 36, 22 35, 19 29 Z"
                fill="#C4774B"
                stroke="#F9E5B4"
                strokeWidth="2.5"
              />
            </svg>

            {/* Bottom-Right Native Wooden Ladle (Sandok) */}
            <SandokLadleIcon className="w-14 h-14 absolute -bottom-5 right-2 drop-shadow-md" />
          </div>

          {/* Dish Cards Array */}
          <div className="flex flex-col gap-3.5 pb-2">
            {region.dishes.map((dish) => {
              const isFav = favoriteIds.includes(dish.id);
              return (
                <div
                  key={dish.id}
                  className="relative rounded-[28px] bg-parchment-tan border-2 border-[#4A2511] p-3 flex items-center gap-3.5 shadow-[0_6px_14px_rgba(0,0,0,0.32)] hover:border-[#FFD24C] transition-colors"
                >
                  {/* Left Dish Thumbnail on Woven Mat with Brass Plaque */}
                  <div
                    onClick={() => onSelectDish(dish)}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#6B3B1E] shrink-0 cursor-pointer group bg-[#3D2314] shadow-inner"
                  >
                    <ResilientImage
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    {/* Antique Brass Plaque Label at bottom of thumbnail */}
                    <div className="absolute bottom-1 inset-x-1.5 flex justify-center">
                      <AntiqueBrassPlaque
                        title={dish.plaqueTitle}
                        subtitle={dish.plaqueSubtitle}
                        size="sm"
                        className="w-full max-w-[100px]"
                      />
                    </div>
                  </div>

                  {/* Right Dish Title & Action Buttons */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between min-h-[96px] py-0.5">
                    <div>
                      <h2
                        onClick={() => onSelectDish(dish)}
                        className="font-editorial font-bold text-lg sm:text-xl text-[#1E110B] hover:text-[#6B1D11] transition-colors cursor-pointer truncate"
                      >
                        {dish.name}
                      </h2>
                      <p className="mt-0.5 text-xs text-[#3D2314]/90 line-clamp-2 leading-snug">
                        {dish.shortTagline}
                      </p>
                    </div>

                    {/* Bottom Controls Row: [ (>) READ MORE ] and [ + / Heart ] */}
                    <div className="mt-2.5 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectDish(dish)}
                        className="inline-flex items-center gap-1.5 pl-1 pr-3 py-1 rounded-full bg-[#C68964] hover:bg-[#E8A238] border-[1.5px] border-[#1E110B] text-[#1E110B] transition-colors active:scale-95 cursor-pointer whitespace-nowrap shrink-0 shadow-xs"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#0F0906] text-[#F9F3EA] flex items-center justify-center">
                          <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className="text-[10px] font-extrabold tracking-wider uppercase">
                          READ MORE
                        </span>
                      </button>

                      {/* Favorite (+ / Heart) Button */}
                      <button
                        type="button"
                        onClick={() => onToggleFavorite(dish.id)}
                        aria-label={
                          isFav
                            ? `Remove ${dish.name} from Paborito`
                            : `Save ${dish.name} to Paborito`
                        }
                        title={
                          isFav
                            ? 'Saved in Paborito (Tap to remove)'
                            : 'Save to Paborito'
                        }
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all active:scale-90 cursor-pointer ${
                          isFav
                            ? 'bg-[#8B1122] border-2 border-[#FFF5CC] text-white shadow-md'
                            : 'bg-transparent border-2 border-[#1E110B] text-[#1E110B] hover:bg-[#1E110B]/10'
                        }`}
                      >
                        {isFav ? (
                          <Heart className="w-4 h-4 fill-white text-white" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[2.2]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Vertical Bamboo Slat Border */}
      <BambooSlatBorder heightClass="h-8" />
    </div>
  );
};
