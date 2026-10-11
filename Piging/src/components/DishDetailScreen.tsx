import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Heart,
  PlayCircle,
  Sparkles,
  Trash2,
  BookMarked,
  ShieldCheck,
  X,
} from 'lucide-react';
import { DishData, DishReview, JournalEntry, VerifiedTutorial } from '../data/culinaryData';
import { AntiqueBrassPlaque, ResilientImage } from './CulturalMotifs';
import { ActiveScreen, LeftSidebarNav } from './LeftSidebarNav';

export type ShsTabId = 'history' | 'verification' | 'philosophy' | 'fpl';

interface DishDetailScreenProps {
  dish: DishData;
  activeTab: ShsTabId;
  onTabChange: (tab: ShsTabId) => void;
  isFavorite: boolean;
  favoritesCount: number;
  journalEntries: JournalEntry[];
  onToggleFavorite: (dishId: string) => void;
  onAddJournalEntry: (
    dishId: string,
    dishName: string,
    regionName: string,
    familyVariation: string,
    culturalReflection: string
  ) => void;
  onDeleteJournalEntry: (entryId: string) => void;
  onBackToList: () => void;
  onNavigateHome: () => void;
  onNavigateFavorites: () => void;
  onNavigateMuseo: () => void;
  onOpenMenuDrawer: () => void;
  activeScreen: ActiveScreen;
  currentUser?: any;
  reviews?: DishReview[];
  onAddReview?: (dishId: string, rating: number, text: string) => void;
  onOpenSubmitModal?: () => void;
  onOpenAuthModal?: () => void;
}

export const DishDetailScreen: React.FC<DishDetailScreenProps> = ({
  dish,
  activeTab,
  onTabChange,
  isFavorite,
  favoritesCount,
  journalEntries,
  onToggleFavorite,
  onAddJournalEntry,
  onDeleteJournalEntry,
  onBackToList,
  onNavigateHome,
  onNavigateFavorites,
  onNavigateMuseo,
  onOpenMenuDrawer,
  activeScreen,
  currentUser = null,
  reviews = [],
  onAddReview,
  onOpenSubmitModal,
  onOpenAuthModal,
}) => {
  // Tab 2 (MIL): Interactive Recipe Checker State
  const [recipeInput, setRecipeInput] = useState<string>('');
  const [hasCheckedRecipe, setHasCheckedRecipe] = useState<boolean>(false);
  const [selectedTutorial, setSelectedTutorial] =
    useState<VerifiedTutorial | null>(null);

  // Tab 3 (Philosophy): Cultural Journal Form State
  const [familyRecipeText, setFamilyRecipeText] = useState<string>('');
  const [reflectionText, setReflectionText] = useState<string>('');
  const [saveFeedback, setSaveFeedback] = useState<boolean>(false);

  // Perform MIL Recipe Fact-Check analysis
  const analyzeRecipe = () => {
    const text = recipeInput.toLowerCase();
    const matchedAuthentic = dish.milVerification.authenticKeywords.filter(
      (kw) => text.includes(kw.toLowerCase())
    );
    const matchedFlags = dish.milVerification.shortcutFlags.filter((flag) =>
      text.includes(flag.keyword.toLowerCase())
    );

    // Additional generic commercial shortcut detection
    const genericShortcuts = [
      {
        keyword: 'msg',
        reason:
          'Added commercial monosodium glutamate replaces slow natural stock/salt extraction.',
      },
      {
        keyword: 'magic sarap',
        reason:
          'Commercial all-in-one seasoning granules mask subtle regional aromatics.',
      },
      {
        keyword: 'baking soda',
        reason:
          'Chemical leavening rubbed on skin forces blistering instead of traditional overnight air-drying.',
      },
      {
        keyword: 'instant mix',
        reason:
          'Dehydrated commercial powder substitutes fresh indigenous souring or spice ingredients.',
      },
    ];

    genericShortcuts.forEach((g) => {
      if (
        text.includes(g.keyword) &&
        !matchedFlags.some((f) => f.keyword.toLowerCase() === g.keyword)
      ) {
        matchedFlags.push(g);
      }
    });

    return {
      matchedAuthentic,
      matchedFlags,
      isAuthentic: matchedFlags.length === 0 && matchedAuthentic.length >= 2,
    };
  };

  const analysisResult = hasCheckedRecipe ? analyzeRecipe() : null;

  const handleSaveJournal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!familyRecipeText.trim() && !reflectionText.trim()) return;
    onAddJournalEntry(
      dish.id,
      dish.name,
      dish.regionName,
      familyRecipeText.trim() ||
        `Tradisyonal na timpla ng ${dish.name} na ipinasa sa aming pamilya.`,
      reflectionText.trim() ||
        'Mahalagang pangalagaan ang orihinal na sangkap at paraan ng pagluluto bilang bahagi ng ating pagkakakilanlan.'
    );
    setFamilyRecipeText('');
    setReflectionText('');
    setSaveFeedback(true);
    setTimeout(() => setSaveFeedback(false), 3000);
  };

  return (
    <div className="relative w-full min-h-[760px] h-full flex flex-col bg-terracotta-carved overflow-hidden">
      {/* Top Utility & Back Bar */}
      <div className="px-3.5 pt-3 pb-2 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={onBackToList}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#3D2314]/90 text-[#FFF5CC] text-xs font-medium border border-[#E8A238]/40 hover:border-[#E8A238] transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{dish.regionName}</span>
        </button>

        <button
          type="button"
          onClick={() => onToggleFavorite(dish.id)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
            isFavorite
              ? 'bg-[#8B1122] text-white border-[#FFF5CC]'
              : 'bg-[#3D2314]/90 text-[#FFF5CC] border-[#E8A238]/40 hover:border-[#E8A238]'
          }`}
        >
          <Heart
            className={`w-3.5 h-3.5 ${
              isFavorite ? 'fill-white text-white' : 'text-[#FF4D6D]'
            }`}
          />
          <span>{isFavorite ? 'Saved in Paborito' : '+ Add to Paborito'}</span>
        </button>
      </div>

      {/* Hero Dish Image Banner (Matches Screenshot 5) */}
      <div className="px-3.5">
        <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border-[3px] border-[#C68964] shadow-[0_8px_20px_rgba(0,0,0,0.45)] bg-[#2D180C]">
          <ResilientImage
            src={dish.imageUrl}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-3.5">
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FFD24C] block truncate">
                  {dish.province} · {dish.regionName}
                </span>
                <h1 className="font-woodblock font-bold text-2xl sm:text-3xl text-white drop-shadow truncate">
                  {dish.name}
                </h1>
              </div>
              <AntiqueBrassPlaque
                title={dish.plaqueTitle}
                subtitle={dish.plaqueSubtitle}
                size="md"
                className="shrink-0 hidden xs:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4-Tab SHS Academic Navigation Bar (Dark Wood Plaques matching Screenshot 5) */}
      <div className="px-3.5 mt-3">
        <div
          role="tablist"
          aria-label="Senior High School Academic Integration Tabs"
          className="grid grid-cols-4 gap-1.5"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'history'}
            onClick={() => onTabChange('history')}
            className={`min-h-[42px] px-1.5 py-1.5 rounded bg-dark-wood border-2 transition-all flex items-center justify-center text-center cursor-pointer ${
              activeTab === 'history'
                ? 'border-[#FFD24C] text-white shadow-[0_0_10px_rgba(255,210,76,0.45)] scale-[1.02]'
                : 'border-[#221108] text-[#F9F3EA]/80 hover:text-white hover:border-[#8C5832]'
            }`}
          >
            <span className="font-woodblock font-bold text-xs sm:text-sm tracking-tight whitespace-nowrap">
              History
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'verification'}
            onClick={() => onTabChange('verification')}
            className={`min-h-[42px] px-1.5 py-1.5 rounded bg-dark-wood border-2 transition-all flex items-center justify-center text-center cursor-pointer ${
              activeTab === 'verification'
                ? 'border-[#FFD24C] text-[#F5A623] shadow-[0_0_10px_rgba(255,210,76,0.45)] scale-[1.02]'
                : 'border-[#221108] text-[#E8A238]/90 hover:text-[#FFD24C] hover:border-[#8C5832]'
            }`}
          >
            <span className="font-woodblock font-bold text-xs sm:text-sm tracking-tight whitespace-nowrap">
              Verification
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'philosophy'}
            onClick={() => onTabChange('philosophy')}
            className={`min-h-[42px] px-1.5 py-1.5 rounded bg-dark-wood border-2 transition-all flex items-center justify-center text-center cursor-pointer ${
              activeTab === 'philosophy'
                ? 'border-[#FFD24C] text-white shadow-[0_0_10px_rgba(255,210,76,0.45)] scale-[1.02]'
                : 'border-[#221108] text-[#F9F3EA]/80 hover:text-white hover:border-[#8C5832]'
            }`}
          >
            <span className="font-woodblock font-bold text-xs sm:text-sm tracking-tight whitespace-nowrap">
              Philosophy
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'fpl'}
            onClick={() => onTabChange('fpl')}
            className={`min-h-[42px] px-1 py-1 rounded bg-dark-wood border-2 transition-all flex items-center justify-center text-center cursor-pointer ${
              activeTab === 'fpl'
                ? 'border-[#FFD24C] text-white shadow-[0_0_10px_rgba(255,210,76,0.45)] scale-[1.02]'
                : 'border-[#221108] text-[#F9F3EA]/80 hover:text-white hover:border-[#8C5832]'
            }`}
          >
            <span className="font-woodblock font-bold text-[10px] sm:text-[11px] leading-tight">
              Filipino sa Piling Larangan
            </span>
          </button>
        </div>
      </div>

      {/* Tab Content Area + Bottom-Left Floating Sidebar (Matches Screenshot 5) */}
      <div className="relative flex-1 px-3.5 pt-3 pb-6 overflow-y-auto">
        {/* ==================== TAB 1: HISTORY & ORIGINS (UCSP) ==================== */}
        {activeTab === 'history' && (
          <div className="space-y-3.5 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="font-woodblock font-bold italic text-xl sm:text-2xl text-[#F5B727] drop-shadow">
                History &amp; Cultural Origins (UCSP):
              </h2>
              <span className="text-[11px] font-semibold text-[#FFF5CC]/80">
                Anthropology &amp; Heritage
              </span>
            </div>

            {/* Traditional Heirloom Recipe Card (If present in Curriculum document) */}
            {dish.traditionalRecipe && (
              <div className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-4 text-[#1E110B] shadow-md space-y-3">
                <div className="flex items-center justify-between border-b border-[#4A2511]/25 pb-2">
                  <h3 className="font-woodblock font-bold text-sm uppercase tracking-wider text-[#4A1C0B]">
                    {dish.traditionalRecipe.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#4A1C0B] text-[#FFF5CC]">
                    Heirloom Formula
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-relaxed">
                  <div>
                    <h4 className="font-editorial font-bold text-xs uppercase text-[#5A210E] mb-1">
                      Traditional Ingredients:
                    </h4>
                    <ul className="space-y-1 pl-3.5 list-disc font-editorial text-xs">
                      {dish.traditionalRecipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-editorial font-bold text-xs uppercase text-[#5A210E] mb-1">
                      Traditional Procedure:
                    </h4>
                    <ol className="space-y-1.5 pl-3 list-decimal font-editorial text-xs">
                      {dish.traditionalRecipe.procedure.map((step, sIdx) => (
                        <li key={sIdx}>{step.replace(/^\d+\.\s*/, '')}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {/* Primary Anthropological Narrative Card */}
            <div className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-4 text-[#1E110B] shadow-md space-y-3">
              <div>
                <h3 className="font-woodblock font-bold text-sm uppercase tracking-wider text-[#4A1C0B]">
                  Anthropological Context &amp; Pre-Colonial Roots
                </h3>
                <p className="mt-1 font-editorial text-sm leading-relaxed">
                  {dish.ucspHistory.anthropologicalContext}
                </p>
              </div>

              <div className="border-t border-[#4A2511]/25 pt-2.5">
                <h3 className="font-woodblock font-bold text-sm uppercase tracking-wider text-[#4A1C0B]">
                  Cultural Evolution &amp; Culinary Adaptation
                </h3>
                <p className="mt-1 font-editorial text-sm leading-relaxed">
                  {dish.evolutionNote || dish.ucspHistory.culturalEvolution}
                </p>
              </div>
            </div>

            {/* 2-Column Material Culture & Preservation Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-3.5 text-[#1E110B] shadow-md">
                <h4 className="font-woodblock font-bold text-xs uppercase tracking-wider text-[#5A210E]">
                  Indigenous Preservation Science
                </h4>
                <p className="mt-1 font-editorial text-xs sm:text-[13px] leading-relaxed">
                  {dish.ucspHistory.preservationTechnique}
                </p>
              </div>

              <div className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-3.5 text-[#1E110B] shadow-md">
                <h4 className="font-woodblock font-bold text-xs uppercase tracking-wider text-[#5A210E]">
                  Vessels &amp; Material Culture
                </h4>
                <p className="mt-1 font-editorial text-xs sm:text-[13px] leading-relaxed">
                  {dish.ucspHistory.materialCulture}
                </p>
              </div>
            </div>

            {/* Social Significance Banner */}
            <div className="rounded-xl bg-[#3D2314]/90 border border-[#E8A238]/50 p-3.5 text-[#FFF5CC]">
              <h4 className="font-woodblock font-bold text-xs uppercase tracking-wider text-[#FFD24C]">
                Social Significance in Communal Feasts (Piging)
              </h4>
              <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[#F9F3EA]/90">
                {dish.ucspHistory.socialSignificance}
              </p>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: VERIFICATION & FACT-CHECK (MIL) ==================== */}
        {activeTab === 'verification' && (
          <div className="space-y-3.5 animate-fadeIn">
            {/* Section Header: Modern / Heirloom Recipe Split View (Matches Screenshot 5) */}
            <h2 className="font-woodblock font-bold italic text-xl sm:text-2xl text-[#F5B727] drop-shadow">
              Modern &amp; Heirloom Recipe:
            </h2>

            {/* Split View Parchment Boxes (Ingredients on Left, Steps on Right - Matches Screenshot 5) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-start">
              {/* Left Column: Ingredients Box + Source Links below */}
              <div>
                <div className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-3 text-[#1B0F08] shadow-md">
                  <h3 className="font-editorial font-bold text-xs sm:text-[13px] text-[#1B0F08]">
                    {dish.milVerification.boilingAndCuringTitle}
                  </h3>
                  <ul className="mt-1 space-y-1 pl-3.5 list-disc font-editorial text-xs leading-snug">
                    {dish.milVerification.heirloomIngredients.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="mt-3 font-editorial font-bold text-xs sm:text-[13px] text-[#1B0F08]">
                    {dish.milVerification.fryingOrSecondaryTitle}
                  </h3>
                  <ul className="mt-1 space-y-1 pl-3.5 list-disc font-editorial text-xs leading-snug">
                    {dish.milVerification.secondaryIngredients.map(
                      (item, i) => (
                        <li key={i}>{item}</li>
                      )
                    )}
                  </ul>
                </div>

                {/* Source citation directly under left box (Matches Screenshot 5) */}
                <div className="mt-1.5 px-1">
                  <span className="font-woodblock italic font-bold text-xs text-[#F5B727]">
                    Source:{' '}
                  </span>
                  {dish.milVerification.sources.map((src, idx) => (
                    <p
                      key={idx}
                      className="text-[10px] text-[#1B0F08] font-semibold break-all leading-tight"
                    >
                      {src}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Column: Method Steps Box */}
              <div className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-3 text-[#1B0F08] shadow-md space-y-2.5">
                {dish.milVerification.methodSteps.map((sec, idx) => (
                  <div key={idx}>
                    <h3 className="font-editorial font-bold text-[11px] sm:text-xs text-[#1B0F08]">
                      {sec.sectionTitle}
                    </h3>
                    <div className="mt-1 space-y-1 pl-2 font-editorial text-[11px] leading-snug">
                      {sec.steps.map((st, sIdx) => (
                        <p key={sIdx}>{st}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive MIL Recipe Fact-Checker */}
            <div className="rounded-xl bg-[#3D2314]/95 border-2 border-[#E8A238]/60 p-3.5 text-[#FFF5CC] shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FFD24C]" />
                  <h3 className="font-woodblock font-bold text-sm text-[#FFD24C]">
                    Interactive MIL Recipe Fact-Checker
                  </h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      setRecipeInput(dish.milVerification.sampleOnlineRecipe);
                      setHasCheckedRecipe(true);
                    }}
                    className="px-2 py-1 rounded bg-[#A03820] hover:bg-[#B84328] text-[10px] font-semibold text-white cursor-pointer whitespace-nowrap"
                  >
                    Test Viral Shortcut
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setRecipeInput(
                        dish.milVerification.sampleAuthenticRecipe
                      );
                      setHasCheckedRecipe(true);
                    }}
                    className="px-2 py-1 rounded bg-[#2E5A36] hover:bg-[#396E43] text-[10px] font-semibold text-white cursor-pointer whitespace-nowrap"
                  >
                    Test Heirloom Recipe
                  </button>
                </div>
              </div>

              <p className="mt-1 text-[11px] text-[#F9F3EA]/80">
                Paste an online recipe below to scan for unauthentic commercial
                shortcuts or missing native heirloom ingredients:
              </p>

              <textarea
                rows={3}
                value={recipeInput}
                onChange={(e) => {
                  setRecipeInput(e.target.value);
                  setHasCheckedRecipe(false);
                }}
                placeholder={`Paste an online ${dish.name} recipe here to verify its cultural authenticity...`}
                className="mt-2 w-full rounded-lg bg-[#23140D] border border-[#8C5832] p-2.5 text-xs text-[#FFF5CC] placeholder-[#FFF5CC]/40 focus:outline-none focus:border-[#FFD24C]"
              />

              <div className="mt-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setHasCheckedRecipe(true)}
                  disabled={!recipeInput.trim()}
                  className="px-4 py-1.5 rounded-lg bg-[#E8A238] hover:bg-[#F5B727] disabled:opacity-40 text-[#23140D] font-bold text-xs transition-colors cursor-pointer whitespace-nowrap"
                >
                  Scan &amp; Verify Recipe
                </button>
                {recipeInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setRecipeInput('');
                      setHasCheckedRecipe(false);
                    }}
                    className="text-[11px] text-[#FFF5CC]/70 hover:text-white underline cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Fact-Check Analysis Output */}
              {analysisResult && (
                <div className="mt-3 rounded-lg bg-[#23140D] border border-[#E8A238]/40 p-3 space-y-2">
                  <div className="flex items-center gap-2">
                    {analysisResult.isAuthentic ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#4ADE80] shrink-0" />
                        <span className="text-xs font-bold text-[#4ADE80]">
                          VERIFIED HEIRLOOM METHOD: High Cultural Authenticity
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-4 h-4 text-[#FBBF24] shrink-0" />
                        <span className="text-xs font-bold text-[#FBBF24]">
                          COMMERCIAL SHORTCUTS / DISCREPANCIES DETECTED
                        </span>
                      </>
                    )}
                  </div>

                  {analysisResult.matchedFlags.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-[11px] font-semibold text-[#FCA5A5]">
                        Flagged Non-Traditional Ingredients / Shortcuts:
                      </p>
                      <ul className="space-y-1 pl-1">
                        {analysisResult.matchedFlags.map((flag, i) => (
                          <li
                            key={i}
                            className="text-[11px] text-[#FFF5CC]/90 leading-snug"
                          >
                            <strong className="text-[#FBBF24] uppercase">
                              [{flag.keyword}]
                            </strong>
                            : {flag.reason}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {analysisResult.matchedAuthentic.length > 0 && (
                    <p className="text-[11px] text-[#86EFAC]">
                      ✓ Authentic Elements Present:{' '}
                      <span className="text-[#FFF5CC]">
                        {analysisResult.matchedAuthentic.join(', ')}
                      </span>
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Section: Verified Online Tutorial + Floating Sidebar (Matches Screenshot 5) */}
            <div className="flex items-end gap-2.5 pt-1">
              {/* Left Floating Sidebar Pill (as shown in bottom-left of Screenshot 5) */}
              <div className="-ml-3.5 shrink-0">
                <LeftSidebarNav
                  variant="floating"
                  activeScreen={activeScreen}
                  favoritesCount={favoritesCount}
                  journalCount={journalEntries.length}
                  currentUser={currentUser}
                  onNavigateHome={onNavigateHome}
                  onNavigateFavorites={onNavigateFavorites}
                  onNavigateMuseo={onNavigateMuseo}
                  onOpenSubmitModal={onOpenSubmitModal}
                  onOpenAuthModal={onOpenAuthModal}
                  onOpenMenuDrawer={onOpenMenuDrawer}
                />
              </div>

              {/* Right Verified Online Tutorial Parchment Box */}
              <div className="flex-1 min-w-0">
                <h3 className="font-woodblock font-bold italic text-xl sm:text-2xl text-[#F5B727] drop-shadow mb-1.5">
                  Verified Online Tutorial:
                </h3>
                <div className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-3 text-[#1B0F08] shadow-md space-y-2.5">
                  {dish.milVerification.verifiedTutorials.map((vid, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between gap-2 pb-1.5 last:pb-0 border-b border-[#4A2511]/20 last:border-none"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedTutorial(vid)}
                        className="text-left min-w-0 flex-1 cursor-pointer group-hover:text-[#5A180C]"
                      >
                        <p className="font-sans font-bold text-[11px] sm:text-xs text-[#1B0F08] underline break-all leading-tight">
                          {vid.url}
                        </p>
                        <p className="text-[10px] text-[#3D2314] font-medium truncate mt-0.5">
                          {vid.title} · {vid.channel} ({vid.duration})
                        </p>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedTutorial(vid)}
                        title="Preview Verified Documentary"
                        className="p-1.5 rounded-lg bg-[#3D2314] text-[#FFD24C] hover:bg-[#5A341C] shrink-0 cursor-pointer"
                      >
                        <PlayCircle className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: PHILOSOPHY & CULTURAL JOURNAL ==================== */}
        {activeTab === 'philosophy' && (
          <div className="space-y-4 animate-fadeIn">
            <h2 className="font-woodblock font-bold italic text-xl sm:text-2xl text-[#F5B727] drop-shadow">
              Philosophy &amp; Cultural Journal:
            </h2>

            {/* Reflection Prompt Card */}
            <div className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-4 text-[#1E110B] shadow-md">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#6B1D11]">
                Pilosopikal na Tanong · Food Identity &amp; Heritage
              </span>
              <blockquote className="mt-1.5 font-woodblock font-bold text-base sm:text-lg leading-snug text-[#1E110B]">
                “{dish.philosophyPrompt.question}”
              </blockquote>
              <p className="mt-1 text-xs italic text-[#3D2314]/90">
                ({dish.philosophyPrompt.englishTranslation})
              </p>
              <p className="mt-2.5 pt-2.5 border-t border-[#4A2511]/25 font-editorial text-xs sm:text-[13px] leading-relaxed text-[#2A150B]">
                {dish.philosophyPrompt.philosophicalLens}
              </p>
            </div>

            {/* Interactive Journal Entry Form */}
            <form
              onSubmit={handleSaveJournal}
              className="rounded-xl bg-[#3D2314]/95 border-2 border-[#E8A238]/60 p-4 space-y-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-[#FFD24C]" />
                <h3 className="font-woodblock font-bold text-sm text-[#FFD24C]">
                  Isulat ang Iyong Tala para sa {dish.name}
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                  1. Family Recipe Version (Bersyon ng Aming Pamilya):
                </label>
                <textarea
                  rows={2}
                  value={familyRecipeText}
                  onChange={(e) => setFamilyRecipeText(e.target.value)}
                  placeholder="Halimbawa: Sa aming bahay, nilalagyan ni Lola ng tanglad at hinahayaang matuyo sa hangin..."
                  className="w-full rounded-lg bg-[#23140D] border border-[#8C5832] p-2.5 text-xs text-[#FFF5CC] placeholder-[#FFF5CC]/40 focus:outline-none focus:border-[#FFD24C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#FFF5CC] mb-1">
                  2. Personal Cultural Reflection (Pagninilay sa Kultura):
                </label>
                <textarea
                  rows={3}
                  value={reflectionText}
                  onChange={(e) => setReflectionText(e.target.value)}
                  placeholder="Sagutin ang tanong: Bakit mahalagang ingatan ang orihinal na lasa ng ating bayan..."
                  className="w-full rounded-lg bg-[#23140D] border border-[#8C5832] p-2.5 text-xs text-[#FFF5CC] placeholder-[#FFF5CC]/40 focus:outline-none focus:border-[#FFD24C]"
                />
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E8A238] to-[#F5B727] hover:from-[#F5B727] hover:to-[#FFD24C] text-[#23140D] font-woodblock font-extrabold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  ISAVE SA AKING TALA / SAVE ENTRY
                </button>

                {saveFeedback && (
                  <span className="text-xs font-semibold text-[#86EFAC] flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Nai-save sa Aking Tala!
                  </span>
                )}
              </div>
            </form>

            {/* Saved Reflections List: "Aking Tala ng Pamana" */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-woodblock font-bold text-base text-[#FFE28A]">
                  Aking Tala ng Pamana ({journalEntries.length})
                </h3>
                <span className="text-[11px] text-[#FFF5CC]/75">
                  Saved locally in TinyDB / Storage
                </span>
              </div>

              {journalEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-xl bg-parchment-tan border-2 border-[#2A160B] p-3.5 text-[#1E110B] shadow-md"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="font-woodblock font-bold text-sm text-[#4A1508]">
                        {entry.dishName}
                      </span>
                      <span className="mx-1.5 text-[#3D2314]">·</span>
                      <span className="text-[11px] font-medium text-[#3D2314]">
                        {entry.regionName}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onDeleteJournalEntry(entry.id)}
                      title="Delete Journal Entry"
                      className="p-1 rounded text-[#5A180C] hover:bg-black/10 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="mt-1.5 font-editorial text-xs leading-relaxed text-[#1E110B]">
                    <strong>Bersyon ng Pamilya:</strong> {entry.familyVariation}
                  </p>
                  <p className="mt-1 font-editorial text-xs leading-relaxed text-[#1E110B]">
                    <strong>Pagninilay:</strong> “{entry.culturalReflection}”
                  </p>
                  <p className="mt-1.5 text-[10px] font-semibold text-[#4A2511]/80">
                    {entry.createdAt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================== TAB 4: FILIPINO SA PILING LARANG (FPL) ==================== */}
        {activeTab === 'fpl' && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD24C]">
                Filipino sa Piling Larang (Akademik) · Larawang-Sanaysay
              </span>
              <h2 className="font-woodblock font-bold text-lg sm:text-xl text-[#FFF5CC] leading-snug mt-0.5">
                {dish.fplLarawangSanaysay.essayTitle}
              </h2>
              <p className="mt-1 text-xs text-[#F9F3EA]/85 leading-relaxed">
                {dish.fplLarawangSanaysay.abstract}
              </p>
            </div>

            {/* Step-by-Step Larawang-Sanaysay Photo Cards */}
            <div className="space-y-3.5">
              {dish.fplLarawangSanaysay.steps.map((step) => (
                <article
                  key={step.stepNumber}
                  className="rounded-2xl bg-parchment-tan border-2 border-[#2A160B] overflow-hidden text-[#1E110B] shadow-md"
                >
                  <div className="relative h-36 sm:h-40 w-full bg-[#2D180C]">
                    <ResilientImage
                      src={step.imageUrl}
                      alt={step.tagalogTitle}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD24C]">
                        Hakbang {step.stepNumber} · {step.hackMethod}
                      </span>
                      <h3 className="font-woodblock font-bold text-sm sm:text-base text-white">
                        {step.tagalogTitle}
                      </h3>
                    </div>
                  </div>

                  <div className="p-3.5 space-y-2">
                    <p className="font-editorial text-xs sm:text-[13px] leading-relaxed text-[#1B0F08]">
                      {step.academicCaption}
                    </p>
                    <div className="pt-2 border-t border-[#4A2511]/25 flex items-start gap-1.5 text-[11px] font-semibold text-[#5A180C]">
                      <Sparkles className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>Tala sa Pagsusuri: {step.comparisonNote}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Verified Documentary Preview Modal */}
      {selectedTutorial && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#2D180C] border-2 border-[#E8A238] p-4 text-[#FFF5CC] shadow-2xl">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFD24C]">
                  MIL Verified Culinary Documentary
                </span>
                <h4 className="font-woodblock font-bold text-base text-white mt-0.5">
                  {selectedTutorial.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTutorial(null)}
                className="p-1 rounded-lg text-[#FFF5CC]/70 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-3 relative h-44 rounded-xl overflow-hidden border border-[#8C5832]">
              <ResilientImage
                src={dish.imageUrl}
                alt={selectedTutorial.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center p-4 text-center">
                <PlayCircle className="w-12 h-12 text-[#FFD24C] mb-1.5" />
                <p className="text-xs font-semibold text-white">
                  {selectedTutorial.channel} · {selectedTutorial.duration}
                </p>
                <p className="text-[11px] text-[#FFF5CC]/80 mt-0.5 break-all">
                  {selectedTutorial.url}
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-end gap-2">
              <a
                href={selectedTutorial.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E8A238] hover:bg-[#F5B727] text-[#23140D] font-bold text-xs transition-colors"
              >
                <span>Open YouTube Video</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedTutorial(null)}
                className="px-3.5 py-2 rounded-lg bg-[#3D2314] text-xs font-semibold text-[#FFF5CC] hover:bg-[#4E2C18] cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
