import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { ISLAND_GROUPS, IslandId, REGIONS_DATA, RegionData, DishData } from '../data/culinaryData';
import { InabelWeaveBorder, IslandSilhouette, RegionCardOrnament } from './CulturalMotifs';
import { ActiveScreen, LeftSidebarNav } from './LeftSidebarNav';
import { SearchBar } from './SearchBar';
import { User } from 'firebase/auth';

interface RegionSubGridScreenProps {
  selectedIslandId: IslandId;
  activeScreen: ActiveScreen;
  favoritesCount: number;
  currentUser: User | null;
  onSelectIsland: (islandId: IslandId) => void;
  onSelectRegion: (region: RegionData) => void;
  onSelectDish: (dish: DishData) => void;
  onNavigateHome: () => void;
  onNavigateFavorites: () => void;
  onNavigateMuseo: () => void;
  onOpenSubmitModal: () => void;
  onOpenAuthModal: () => void;
  onOpenMenuDrawer: () => void;
}

export const RegionSubGridScreen: React.FC<RegionSubGridScreenProps> = ({
  selectedIslandId,
  activeScreen,
  favoritesCount,
  currentUser,
  onSelectIsland,
  onSelectRegion,
  onSelectDish,
  onNavigateHome,
  onNavigateFavorites,
  onNavigateMuseo,
  onOpenSubmitModal,
  onOpenAuthModal,
  onOpenMenuDrawer,
}) => {
  const islandInfo =
    ISLAND_GROUPS.find((i) => i.id === selectedIslandId) || ISLAND_GROUPS[0];
  const regions = REGIONS_DATA.filter((r) => r.islandId === selectedIslandId);

  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col justify-between bg-terracotta-carved overflow-hidden select-none">
      <div
        className="absolute -top-6 -right-16 w-80 rotate-[22deg] pointer-events-none opacity-95 z-10 shadow-lg"
        aria-hidden="true"
      >
        <InabelWeaveBorder position="top" />
      </div>

      <div
        className="absolute -bottom-8 -right-20 w-72 rotate-[18deg] pointer-events-none opacity-95 z-10 shadow-lg"
        aria-hidden="true"
      >
        <InabelWeaveBorder position="bottom" />
      </div>

      {/* Top Search Bar */}
      <div className="px-4 pt-3 pb-1 z-30">
        <SearchBar onSelectDish={onSelectDish} />
      </div>

      {/* Main Content Layout with Left Floating Sidebar */}
      <div className="relative z-20 flex-1 flex items-start pt-3 pb-6 pr-4">
        <div className="pt-2">
          <LeftSidebarNav
            variant="floating"
            activeScreen={activeScreen}
            favoritesCount={favoritesCount}
            currentUser={currentUser}
            onNavigateHome={onNavigateHome}
            onNavigateFavorites={onNavigateFavorites}
            onNavigateMuseo={onNavigateMuseo}
            onOpenSubmitModal={onOpenSubmitModal}
            onOpenAuthModal={onOpenAuthModal}
            onOpenMenuDrawer={onOpenMenuDrawer}
          />
        </div>

        <div className="flex-1 pl-3 sm:pl-5 flex flex-col">
          <div className="flex items-center justify-between gap-2 mb-2">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D2314]/85 text-[#FFF5CC] text-xs font-medium border border-[#E8A238]/40 hover:border-[#E8A238] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Islands</span>
            </button>

            <div className="flex items-center gap-1 bg-[#3D2314]/80 p-1 rounded-lg border border-[#E8A238]/30">
              {ISLAND_GROUPS.map((isl) => (
                <button
                  key={isl.id}
                  type="button"
                  onClick={() => onSelectIsland(isl.id)}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    isl.id === selectedIslandId
                      ? 'bg-[#E8A238] text-[#2A150B]'
                      : 'text-[#F9F3EA]/80 hover:text-white'
                  }`}
                >
                  {isl.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 px-1 py-2">
            <div>
              <h1
                className="font-filipiniana font-black uppercase text-3xl sm:text-4xl tracking-wider text-[#FFE28A] drop-shadow-[0_0_14px_rgba(255,196,61,0.55)]"
                style={{
                  textShadow: '0 2px 0 #8C3B14, 0 0 18px rgba(255, 210, 76, 0.65)',
                }}
              >
                {islandInfo.name}
              </h1>
              <div className="mt-1 h-1 w-32 sm:w-40 rounded-full bg-gradient-to-r from-[#FFE28A] via-[#F5A623] to-transparent shadow-[0_0_10px_#FFD24C]" />
            </div>

            <IslandSilhouette
              islandId={selectedIslandId}
              className="w-20 h-24 sm:w-24 sm:h-28 shrink-0 drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* 2x2 Wooden Plaque Region Sub-Grid */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            {regions.map((region) => (
              <button
                key={region.id}
                type="button"
                onClick={() => onSelectRegion(region)}
                className="group relative min-h-[120px] rounded-lg bg-dark-wood border-2 border-[#2A160B] shadow-[0_8px_18px_rgba(0,0,0,0.45)] hover:border-[#FFD24C] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150 flex flex-col justify-center items-center p-2.5 text-center cursor-pointer overflow-visible"
              >
                <div
                  className="absolute inset-y-0 left-0 w-2.5 rounded-l-md bg-gradient-to-r from-[#6E4124] to-[#3A2010] border-r border-[#241208]"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-y-0 right-0 w-2 rounded-r-md bg-gradient-to-l from-[#5A341C] to-[#2E190C] border-l border-[#241208]"
                  aria-hidden="true"
                />

                <div className="absolute -top-4 -right-2 z-10 group-hover:scale-110 transition-transform duration-200">
                  <RegionCardOrnament type={region.ornamentType} />
                </div>

                <span
                  className="font-woodblock font-black text-xl tracking-wide text-[#FFE600] drop-shadow-[0_2px_2px_rgba(0,0,0,0.85)]"
                  style={{
                    WebkitTextStroke: '0.8px #D32F2F',
                  }}
                >
                  {region.shortTitle}
                </span>

                <span className="mt-1 text-[11px] font-medium text-[#F9F3EA]/90 line-clamp-1">
                  {region.subtitle}
                </span>

                <span className="mt-1.5 text-[10px] font-semibold tracking-wider uppercase text-[#E8A238] group-hover:underline">
                  {region.dishes.length} Heirloom {region.dishes.length === 1 ? 'Dish' : 'Dishes'} &rarr;
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
