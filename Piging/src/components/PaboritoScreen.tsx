import React from 'react';
import { ChevronRight, Heart, RotateCcw } from 'lucide-react';
import { ALL_DISHES, DishData } from '../data/culinaryData';
import {
  AntiqueBrassPlaque,
  BambooSlatBorder,
  ResilientImage,
  SiyanseSpatulaIcon,
} from './CulturalMotifs';
import { ActiveScreen, LeftSidebarNav } from './LeftSidebarNav';

interface PaboritoScreenProps {
  favoriteIds: string[];
  journalCount?: number;
  activeScreen: ActiveScreen;
  currentUser?: any;
  onSelectDish: (dish: DishData) => void;
  onToggleFavorite: (dishId: string) => void;
  onRestoreDefaults: () => void;
  onNavigateHome: () => void;
  onNavigateFavorites: () => void;
  onNavigateMuseo: () => void;
  onOpenSubmitModal?: () => void;
  onOpenAuthModal?: () => void;
  onOpenMenuDrawer: () => void;
}

export const PaboritoScreen: React.FC<PaboritoScreenProps> = ({
  favoriteIds,
  journalCount = 0,
  activeScreen,
  currentUser = null,
  onSelectDish,
  onToggleFavorite,
  onRestoreDefaults,
  onNavigateHome,
  onNavigateFavorites,
  onNavigateMuseo,
  onOpenSubmitModal,
  onOpenAuthModal,
  onOpenMenuDrawer,
}) => {
  const favoriteDishes = favoriteIds
    .map((id) => ALL_DISHES.find((d) => d.id === id))
    .filter((d): d is DishData => Boolean(d));

  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col justify-between bg-terracotta-carved overflow-hidden">
      {/* Top Vertical Bamboo Slat Border */}
      <BambooSlatBorder heightClass="h-8" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col pt-3 pb-4">
        {/* Top Header: PABORITO + Wooden Spatula Icon (Matches Screenshot 6) */}
        <div className="flex items-center justify-center gap-1.5 px-4 pb-2">
          <h1
            className="font-woodblock font-black uppercase text-4xl sm:text-[2.75rem] tracking-wider text-[#E8A238] drop-shadow-[0_3px_2px_rgba(35,20,13,0.65)]"
            style={{
              textShadow: '0 2px 0 #5C280E, 0 4px 10px rgba(0,0,0,0.35)',
            }}
          >
            PABORITO
          </h1>
          <SiyanseSpatulaIcon className="w-12 h-12 -mt-1" />
        </div>

        {/* Body Layout: Left Floating Sidebar + Right Stacked Paborito Dish Cards */}
        <div className="flex-1 flex items-start gap-2 pr-0 pl-0 pt-1">
          {/* Left Floating Sidebar */}
          <div className="pt-1 shrink-0">
            <LeftSidebarNav
              variant="floating"
              activeScreen={activeScreen}
              favoritesCount={favoriteIds.length}
              journalCount={journalCount}
              currentUser={currentUser}
              onNavigateHome={onNavigateHome}
              onNavigateFavorites={onNavigateFavorites}
              onNavigateMuseo={onNavigateMuseo}
              onOpenSubmitModal={onOpenSubmitModal}
              onOpenAuthModal={onOpenAuthModal}
              onOpenMenuDrawer={onOpenMenuDrawer}
            />
          </div>

          {/* Right Column: Favorite Dish Cards List */}
          <div className="flex-1 min-w-0 flex flex-col gap-3.5 pl-1 pr-2">
            {favoriteDishes.length === 0 ? (
              <div className="mr-2 rounded-2xl bg-parchment-tan border-2 border-[#4A2511] p-6 text-center text-[#1E110B] shadow-md my-auto">
                <Heart className="w-10 h-10 text-[#8B1122] mx-auto mb-2 opacity-80" />
                <h2 className="font-woodblock font-bold text-lg">
                  Wala Pang Paboritong Ulam
                </h2>
                <p className="mt-1 text-xs text-[#3D2314]">
                  Tap the [+] or Heart button on any regional dish card to save
                  it here in your Paborito collection.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={onRestoreDefaults}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#3D2314] text-[#FFD24C] text-xs font-bold hover:bg-[#4E2C18] cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restore Featured Paborito</span>
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="px-3.5 py-2 rounded-xl bg-[#8B1122] text-white text-xs font-bold hover:bg-[#A11528] cursor-pointer"
                  >
                    Explore Regions
                  </button>
                </div>
              </div>
            ) : (
              favoriteDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="relative rounded-l-[32px] rounded-r-xl bg-parchment-tan border-2 border-[#4A2511] p-2.5 sm:p-3 flex items-center gap-3 shadow-[0_6px_14px_rgba(0,0,0,0.32)] hover:border-[#FFD24C] transition-colors"
                >
                  {/* Dish Square Image on Woven Mat with Brass Plaque */}
                  <div
                    onClick={() => onSelectDish(dish)}
                    className="relative w-22 h-22 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#6B3B1E] shrink-0 cursor-pointer group bg-[#3D2314]"
                  >
                    <ResilientImage
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute bottom-1 inset-x-1 flex justify-center">
                      <AntiqueBrassPlaque
                        title={dish.plaqueTitle}
                        subtitle={dish.plaqueSubtitle}
                        size="sm"
                        className="w-full max-w-[90px]"
                      />
                    </div>
                  </div>

                  {/* Dish Title, Region & Actions */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between min-h-[86px] py-0.5 pr-1">
                    <div>
                      <h2
                        onClick={() => onSelectDish(dish)}
                        className="font-editorial font-bold text-base sm:text-lg text-[#1E110B] hover:text-[#6B1D11] cursor-pointer truncate"
                      >
                        {dish.name}
                      </h2>
                      <p className="text-[11px] font-medium text-[#3D2314]/85 truncate">
                        {dish.province} · {dish.regionName}
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      {/* [ (>) READ MORE ] Button */}
                      <button
                        type="button"
                        onClick={() => onSelectDish(dish)}
                        className="inline-flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-full bg-[#C68964] hover:bg-[#E8A238] border-[1.5px] border-[#1E110B] text-[#1E110B] transition-colors active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span className="w-4 h-4 rounded-full bg-[#0F0906] text-[#F9F3EA] flex items-center justify-center">
                          <ChevronRight className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase">
                          READ MORE
                        </span>
                      </button>

                      {/* Crimson Heart Remove/Toggle Button (Matches Screenshot 6) */}
                      <button
                        type="button"
                        onClick={() => onToggleFavorite(dish.id)}
                        title="Remove from Paborito"
                        aria-label={`Remove ${dish.name} from Paborito`}
                        className="p-2 rounded-full text-[#8B1122] hover:scale-110 active:scale-90 transition-transform cursor-pointer"
                      >
                        <Heart className="w-6 h-6 fill-[#8B1122] text-[#8B1122] drop-shadow-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom Vertical Bamboo Slat Border */}
      <BambooSlatBorder heightClass="h-8" />
    </div>
  );
};
