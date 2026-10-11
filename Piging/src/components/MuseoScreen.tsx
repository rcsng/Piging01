import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Landmark,
  Flame,
  Utensils,
  BookOpen,
  Search,
  Menu,
  ArrowUpRight,
} from 'lucide-react';
import { ALL_DISHES, DishData } from '../data/culinaryData';
import { AntiqueBrassPlaque, ResilientImage } from './CulturalMotifs';

interface MuseoScreenProps {
  onSelectDish: (dish: DishData) => void;
  onNavigateHome: () => void;
  onOpenMenuDrawer: () => void;
  activeScreen?: string;
  favoritesCount?: number;
  currentUser?: any;
  journalEntries?: any[];
  onNavigateFavorites?: () => void;
  onNavigateMuseo?: () => void;
  onOpenSubmitModal?: () => void;
  onOpenAuthModal?: () => void;
  onAddJournalEntry?: (entry: any) => void;
}

type MuseoBottomTab = 'history' | 'vessels' | 'preservation' | 'archive';

export const MuseoScreen: React.FC<MuseoScreenProps> = ({
  onSelectDish,
  onNavigateHome,
  onOpenMenuDrawer,
  activeScreen,
  favoritesCount,
  currentUser,
  journalEntries,
  onNavigateFavorites,
  onNavigateMuseo,
  onOpenSubmitModal,
  onOpenAuthModal,
  onAddJournalEntry,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [bottomTab, setBottomTab] = useState<MuseoBottomTab>('history');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const filteredDishes = searchQuery.trim()
    ? ALL_DISHES.filter(
        (d) =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.regionName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : ALL_DISHES;

  const activeDish =
    filteredDishes[currentIndex % Math.max(1, filteredDishes.length)] ||
    ALL_DISHES[0];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredDishes.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredDishes.length);
  };

  const getCuratorialText = (dish: DishData) => {
    if (bottomTab === 'history') return dish.ucspHistory.anthropologicalContext;
    if (bottomTab === 'vessels') return dish.ucspHistory.materialCulture;
    if (bottomTab === 'preservation')
      return dish.ucspHistory.preservationTechnique;
    return dish.philosophyPrompt.philosophicalLens;
  };

  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col justify-between bg-gradient-to-b from-[#3A332C] via-[#241F1B] to-[#120F0D] text-[#F5EFE6] overflow-hidden select-none border-2 border-[#9B8253]/60">
      {/* Top Bar (Matches Screenshot 7: Hamburger | The Museum | Search) */}
      <div className="relative z-20 px-5 pt-5 pb-2 flex items-center justify-between">
        <button
          type="button"
          onClick={onOpenMenuDrawer}
          aria-label="Open Menu"
          className="p-2 rounded-lg text-[#E6D7C3] hover:bg-white/10 cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={onNavigateHome}
          className="text-center cursor-pointer group"
        >
          <span className="block font-woodblock font-bold text-xs uppercase tracking-widest text-[#C8B082]">
            The Museum
          </span>
          <span className="block font-woodblock font-extrabold text-sm tracking-wide text-white group-hover:text-[#FFD24C] transition-colors">
            Piging Lasa-Suri
          </span>
        </button>

        <button
          type="button"
          onClick={() => setShowSearch((s) => !s)}
          aria-label="Search Exhibition"
          className="p-2 rounded-lg text-[#E6D7C3] hover:bg-white/10 cursor-pointer"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Collapsible Search Input */}
      {showSearch && (
        <div className="px-5 pb-2 z-20">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
            }}
            placeholder="Search dish, province, or region..."
            className="w-full rounded-xl bg-black/45 border border-[#C8B082]/50 px-3.5 py-2 text-xs text-white placeholder-white/45 focus:outline-none focus:border-[#FFD24C]"
          />
        </div>
      )}

      {/* Center Gallery Frame & Carousel (Matches Screenshot 7) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 py-2">
        <div className="relative w-full flex items-center justify-center">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Dish Exhibit"
            className="absolute left-0 z-30 w-10 h-10 rounded-full bg-black/55 border border-[#C8B082]/50 text-[#F5EFE6] flex items-center justify-center hover:bg-black/80 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Ornate Gold Museum Picture Frame */}
          <div
            onClick={() => onSelectDish(activeDish)}
            className="group relative w-56 h-68 sm:w-64 sm:h-76 p-3 rounded-lg bg-gradient-to-br from-[#C8A96E] via-[#7A5C2E] to-[#4A3516] border-4 border-[#E5C98B] shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="w-full h-full border-2 border-[#2A1B0A] overflow-hidden relative bg-[#1A1410]">
              <ResilientImage
                src={activeDish.imageUrl}
                alt={activeDish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

              {/* Interactive Hotspot Ring from Screenshot 7 */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs border border-white/50 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#fff]" />
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Dish Exhibit"
            className="absolute right-0 z-30 w-10 h-10 rounded-full bg-black/55 border border-[#C8B082]/50 text-[#F5EFE6] flex items-center justify-center hover:bg-black/80 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Exhibit Title, Province Attribution & Curatorial Caption */}
        <div className="mt-5 text-center max-w-[340px] flex flex-col items-center">
          <AntiqueBrassPlaque
            title={activeDish.plaqueTitle}
            subtitle={activeDish.plaqueSubtitle}
            size="md"
            className="mb-2.5 shadow-xl"
          />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C8B082]">
            Exhibit {currentIndex + 1} of {filteredDishes.length} ·{' '}
            {activeDish.regionName}
          </span>
          <h1 className="mt-0.5 font-woodblock font-bold text-2xl sm:text-3xl text-white tracking-tight">
            {activeDish.name}
          </h1>
          <p className="mt-0.5 text-xs font-medium text-[#C8B082]">
            {activeDish.province}
          </p>

          <p className="mt-3.5 font-editorial italic text-xs sm:text-[13px] leading-relaxed text-[#D8CFC4] line-clamp-4">
            {getCuratorialText(activeDish)}
          </p>

          <button
            type="button"
            onClick={() => onSelectDish(activeDish)}
            className="mt-4 inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#C8A96E] hover:bg-[#DFC184] text-[#1A1410] font-bold text-xs transition-colors cursor-pointer"
          >
            <span>Open Full 4-Tab SHS Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom 4-Icon Museum Bar (Matches Screenshot 7) */}
      <div className="px-6 py-4 bg-black/60 border-t border-white/10 grid grid-cols-4 gap-2">
        <button
          type="button"
          onClick={() => setBottomTab('history')}
          className={`flex flex-col items-center gap-1 py-1 cursor-pointer transition-colors ${
            bottomTab === 'history'
              ? 'text-white'
              : 'text-[#8C8275] hover:text-[#D8CFC4]'
          }`}
        >
          <Landmark className="w-5 h-5" />
          <span className="text-[10px] font-semibold">History</span>
        </button>

        <button
          type="button"
          onClick={() => setBottomTab('vessels')}
          className={`flex flex-col items-center gap-1 py-1 cursor-pointer transition-colors ${
            bottomTab === 'vessels'
              ? 'text-white'
              : 'text-[#8C8275] hover:text-[#D8CFC4]'
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Vessels</span>
        </button>

        <button
          type="button"
          onClick={() => setBottomTab('preservation')}
          className={`flex flex-col items-center gap-1 py-1 cursor-pointer transition-colors ${
            bottomTab === 'preservation'
              ? 'text-white'
              : 'text-[#8C8275] hover:text-[#D8CFC4]'
          }`}
        >
          <Flame className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Technique</span>
        </button>

        <button
          type="button"
          onClick={() => setBottomTab('archive')}
          className={`flex flex-col items-center gap-1 py-1 cursor-pointer transition-colors ${
            bottomTab === 'archive'
              ? 'text-white'
              : 'text-[#8C8275] hover:text-[#D8CFC4]'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Philosophy</span>
        </button>
      </div>
    </div>
  );
};
