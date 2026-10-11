import React, { useState } from 'react';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Flame,
  ChefHat,
  Compass,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import {
  MAP_REGIONS,
  MapRegionInfo,
  ALL_DISHES,
  DishData,
  IslandId,
} from '../data/culinaryData';
import { BambooSlatBorder, InabelWeaveBorder } from './CulturalMotifs';

interface InteractiveMapScreenProps {
  onSelectDish: (dish: DishData) => void;
  onBack: () => void;
}

export const InteractiveMapScreen: React.FC<InteractiveMapScreenProps> = ({
  onSelectDish,
  onBack,
}) => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('region-1');
  const [islandFilter, setIslandFilter] = useState<'all' | IslandId>('all');

  const selectedRegion =
    MAP_REGIONS.find((r) => r.id === selectedRegionId) || MAP_REGIONS[0];

  const filteredRegions =
    islandFilter === 'all'
      ? MAP_REGIONS
      : MAP_REGIONS.filter((r) => r.islandId === islandFilter);

  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col justify-between bg-terracotta-carved overflow-hidden select-none">
      <BambooSlatBorder heightClass="h-7" />

      <div className="flex-1 px-4 py-3 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header & Back Button */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D2314]/90 text-[#FFF5CC] text-xs font-medium border border-[#E8A238]/40 hover:border-[#E8A238] transition-colors cursor-pointer whitespace-nowrap"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-1 bg-[#2D180C] p-1 rounded-lg border border-[#E8A238]/30">
              {(['all', 'luzon', 'visayas', 'mindanao'] as const).map((isl) => (
                <button
                  key={isl}
                  type="button"
                  onClick={() => setIslandFilter(isl)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase transition-colors cursor-pointer ${
                    islandFilter === isl
                      ? 'bg-[#E8A238] text-[#241208]'
                      : 'text-[#FFF5CC]/70 hover:text-white'
                  }`}
                >
                  {isl}
                </button>
              ))}
            </div>
          </div>

          <div className="text-left mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD24C]">
              Interactive Heritage Map
            </span>
            <h1 className="font-woodblock font-bold text-2xl text-white">
              Philippine Regional Ingredients &amp; Techniques
            </h1>
            <p className="text-xs text-[#FFF5CC]/80 mt-0.5">
              Click any regional marker below to reveal its endemic ingredients, ancestral cooking methods, and heirloom dishes.
            </p>
          </div>

          {/* Interactive Visual Map Viewport */}
          <div className="relative w-full h-72 sm:h-80 rounded-2xl bg-[#22130A] border-2 border-[#E8A238]/60 p-3 shadow-inner overflow-hidden flex items-center justify-center">
            {/* Background Grid & Topography Contour Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid"
                  width="24"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 24 0 L 0 0 0 24"
                    fill="none"
                    stroke="#E8A238"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Stylized Archipelago Landmasses */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full p-2 select-none pointer-events-none opacity-40"
            >
              {/* Luzon */}
              <path
                d="M 32 10 Q 42 12 50 14 Q 54 22 48 32 Q 44 42 38 40 Q 30 36 28 24 Z"
                fill="#8C5832"
                stroke="#E8A238"
                strokeWidth="0.8"
              />
              {/* Visayas */}
              <path
                d="M 44 48 Q 58 46 62 56 Q 52 64 42 58 Z"
                fill="#8C5832"
                stroke="#E8A238"
                strokeWidth="0.8"
              />
              <path
                d="M 54 52 Q 62 50 64 62 Q 58 66 52 58 Z"
                fill="#8C5832"
                stroke="#E8A238"
                strokeWidth="0.8"
              />
              {/* Mindanao */}
              <path
                d="M 46 68 Q 66 66 72 78 Q 66 92 48 88 Q 38 80 44 70 Z"
                fill="#8C5832"
                stroke="#E8A238"
                strokeWidth="0.8"
              />
            </svg>

            {/* Interactive Regional Pins on the Map */}
            {filteredRegions.map((region) => {
              const isSelected = region.id === selectedRegionId;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => setSelectedRegionId(region.id)}
                  style={{
                    left: `${region.coordinates.x}%`,
                    top: `${region.coordinates.y}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 focus:outline-none"
                  aria-label={`Select ${region.name}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring when active */}
                    {isSelected && (
                      <span className="absolute w-8 h-8 rounded-full bg-[#FFD24C]/40 animate-ping pointer-events-none" />
                    )}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                        isSelected
                          ? 'bg-[#FFD24C] text-[#241208] scale-125 shadow-lg border-2 border-white'
                          : 'bg-[#A03820] text-white hover:scale-110 border border-[#FFD24C]/60 shadow'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Marker Tooltip Label */}
                  <span
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded text-[9px] font-bold tracking-tight whitespace-nowrap shadow-md pointer-events-none ${
                      isSelected
                        ? 'bg-[#FFD24C] text-[#23140D]'
                        : 'bg-[#1E110B]/90 text-[#FFF5CC] border border-[#8C5832]'
                    }`}
                  >
                    {region.name.split(' (')[0]}
                  </span>
                </button>
              );
            })}

            {/* Compass Rose in top-right */}
            <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-[#FFD24C]/70">
              <Compass className="w-4 h-4 text-[#FFD24C]" />
              <span>NORTH</span>
            </div>
          </div>

          {/* Detailed Selected Region Profile Card */}
          <div className="mt-3.5 rounded-2xl bg-parchment-tan border-2 border-[#4A2511] p-4 text-[#1E110B] shadow-lg animate-fadeIn">
            <div className="flex items-start justify-between gap-2 pb-2 border-b border-[#4A2511]/25">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A1F0D]">
                  {selectedRegion.islandId.toUpperCase()} · {selectedRegion.capitalOrHub}
                </span>
                <h3 className="font-woodblock font-bold text-lg text-[#1E110B] leading-tight">
                  {selectedRegion.name}
                </h3>
                <p className="text-xs font-semibold text-[#4A2511] mt-0.5">
                  &ldquo;{selectedRegion.tagline}&rdquo;
                </p>
              </div>

              <div className="px-2 py-1 rounded-lg bg-[#3D2314] text-[#FFD24C] text-[10px] font-bold shrink-0">
                Active Region
              </div>
            </div>

            {/* Associated Ingredients */}
            <div className="mt-3">
              <h4 className="font-woodblock font-bold text-xs uppercase tracking-wider text-[#5A180C] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#A03820]" />
                <span>Associated Native Ingredients:</span>
              </h4>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {selectedRegion.keyIngredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-[#F4E4C6] text-[#2C180B] text-[11px] font-semibold border border-[#D1B890]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Cooking Techniques */}
            <div className="mt-3">
              <h4 className="font-woodblock font-bold text-xs uppercase tracking-wider text-[#5A180C] flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-[#A03820]" />
                <span>Heirloom Cooking Techniques:</span>
              </h4>
              <ul className="mt-1 space-y-1 font-editorial text-xs pl-2">
                {selectedRegion.cookingTechniques.map((tech, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#A03820] font-bold">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Representative Dishes Quick Links */}
            <div className="mt-3.5 pt-2.5 border-t border-[#4A2511]/25">
              <h4 className="font-woodblock font-bold text-xs uppercase tracking-wider text-[#5A180C] flex items-center gap-1.5">
                <ChefHat className="w-3.5 h-3.5 text-[#A03820]" />
                <span>Explore Region&apos;s Featured Dishes:</span>
              </h4>

              <div className="mt-2 flex flex-wrap gap-2">
                {selectedRegion.representativeDishes.map((dishName, idx) => {
                  const matched = ALL_DISHES.find(
                    (d) =>
                      d.name.toLowerCase() === dishName.toLowerCase() ||
                      d.name.toLowerCase().includes(dishName.toLowerCase())
                  );
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        if (matched) onSelectDish(matched);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#3D2314] hover:bg-[#5A341C] text-[#FFF5CC] text-xs font-bold transition-colors cursor-pointer"
                    >
                      <span>{dishName}</span>
                      <ArrowRight className="w-3 h-3 text-[#FFD24C]" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BambooSlatBorder heightClass="h-7" />
    </div>
  );
};
