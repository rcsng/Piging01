import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import {
  collection,
  onSnapshot,
  query,
  where,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import {
  auth,
  db,
  syncFavoritesToCloud,
  fetchUserCloudFavorites,
} from './services/firebase';
import {
  ALL_DISHES,
  DishData,
  INITIAL_FAVORITE_IDS,
  INITIAL_JOURNAL_ENTRIES,
  INITIAL_RECIPE_SUBMISSIONS,
  INITIAL_REVIEWS,
  ISLAND_GROUPS,
  IslandId,
  JournalEntry,
  REGIONS_DATA,
  RegionData,
  DishReview,
  RecipeSubmission,
} from './data/culinaryData';
import { SplashScreen } from './components/SplashScreen';
import { HomeRegionPicker } from './components/HomeRegionPicker';
import { RegionSubGridScreen } from './components/RegionSubGridScreen';
import { DishListScreen } from './components/DishListScreen';
import { DishDetailScreen, ShsTabId } from './components/DishDetailScreen';
import { PaboritoScreen } from './components/PaboritoScreen';
import { MuseoScreen } from './components/MuseoScreen';
import { AuthModal } from './components/AuthModal';
import { RecipeSubmissionModal } from './components/RecipeSubmissionModal';
import { SearchBar } from './components/SearchBar';
import { ActiveScreen } from './components/LeftSidebarNav';
import {
  Compass,
  Heart,
  BookOpen,
  Sparkles,
  Landmark,
  PlusCircle,
  User as UserIcon,
  X,
  Home,
  Utensils,
  RotateCcw,
} from 'lucide-react';

const FAVORITES_STORAGE_KEY = 'piging_favorites_v2';
const JOURNAL_STORAGE_KEY = 'piging_journal_entries_v2';
const REVIEWS_STORAGE_KEY = 'piging_reviews_v2';
const SUBMISSIONS_STORAGE_KEY = 'piging_submissions_v2';

export default function App() {
  // Navigation State
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('splash');
  const [selectedIslandId, setSelectedIslandId] = useState<IslandId>('luzon');
  const [selectedRegion, setSelectedRegion] = useState<RegionData>(REGIONS_DATA[0]);
  const [selectedDish, setSelectedDish] = useState<DishData>(REGIONS_DATA[0].dishes[0]);
  const [activeShsTab, setActiveShsTab] = useState<ShsTabId>('verification');

  // Modals & Drawers
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // User Auth State
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Favorites (Paborito) State
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_FAVORITE_IDS;
  });

  // Journal Entries State
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem(JOURNAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_JOURNAL_ENTRIES;
  });

  // Reviews State
  const [reviews, setReviews] = useState<DishReview[]>(() => {
    try {
      const saved = localStorage.getItem(REVIEWS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_REVIEWS;
  });

  // Recipe Submissions & Review Queue State
  const [submissions, setSubmissions] = useState<RecipeSubmission[]>(() => {
    try {
      const saved = localStorage.getItem(SUBMISSIONS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_RECIPE_SUBMISSIONS;
  });

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        // Fetch cloud favorites and merge
        const cloudFavs = await fetchUserCloudFavorites(user.uid);
        if (cloudFavs && cloudFavs.length > 0) {
          setFavoriteIds((prev) => Array.from(new Set([...cloudFavs, ...prev])));
        } else {
          // Sync existing local favorites to cloud
          syncFavoritesToCloud(user.uid, favoriteIds);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  // Save favorites to storage and cloud
  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
    if (currentUser) {
      syncFavoritesToCloud(currentUser.uid, favoriteIds);
    }
  }, [favoriteIds, currentUser]);

  // Save local caches
  useEffect(() => {
    localStorage.setItem(JOURNAL_STORAGE_KEY, JSON.stringify(journalEntries));
  }, [journalEntries]);

  useEffect(() => {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(submissions));
  }, [submissions]);

  // Listen to Firestore reviews in real-time
  useEffect(() => {
    try {
      const q = collection(db, 'dish_reviews');
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const firestoreReviews: DishReview[] = snapshot.docs.map((docSnap) => ({
              id: docSnap.id,
              ...(docSnap.data() as any),
            }));
            setReviews((prev) => {
              const combined = [...firestoreReviews];
              prev.forEach((r) => {
                if (!combined.some((c) => c.id === r.id)) combined.push(r);
              });
              return combined;
            });
          }
        },
        () => {
          // Permission or offline fallback
        }
      );
      return () => unsubscribe();
    } catch {}
  }, []);

  // Handlers
  const handleSelectIsland = (islandId: IslandId) => {
    setSelectedIslandId(islandId);
    const firstRegion = REGIONS_DATA.find((r) => r.islandId === islandId);
    if (firstRegion) setSelectedRegion(firstRegion);
    setActiveScreen('region-grid');
  };

  const handleSelectRegion = (region: RegionData) => {
    setSelectedIslandId(region.islandId);
    setSelectedRegion(region);
    setActiveScreen('dish-list');
  };

  const handleSelectDish = (dish: DishData, tab?: ShsTabId) => {
    setSelectedDish(dish);
    const parentRegion = REGIONS_DATA.find((r) => r.id === dish.regionId);
    if (parentRegion) {
      setSelectedRegion(parentRegion);
      setSelectedIslandId(parentRegion.islandId);
    }
    if (tab) setActiveShsTab(tab);
    setActiveScreen('dish-detail');
  };

  const handleToggleFavorite = (dishId: string) => {
    setFavoriteIds((prev) =>
      prev.includes(dishId) ? prev.filter((id) => id !== dishId) : [dishId, ...prev]
    );
  };

  const handleAddJournalEntry = (
    dishId: string,
    dishName: string,
    regionName: string,
    familyVariation: string,
    culturalReflection: string
  ) => {
    const newEntry: JournalEntry = {
      id: `entry-${Date.now()}`,
      dishId,
      dishName,
      regionName,
      familyVariation,
      culturalReflection,
      createdAt: new Date().toLocaleDateString('en-PH', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      userId: currentUser?.uid,
      userDisplayName: currentUser?.displayName || 'Culinary Contributor',
    };
    setJournalEntries((prev) => [newEntry, ...prev]);

    // Also persist to Firestore if signed in
    if (currentUser) {
      try {
        addDoc(collection(db, 'cultural_reflections'), {
          ...newEntry,
          userEmail: currentUser.email || '',
        });
      } catch {}
    }
  };

  const handleDeleteJournalEntry = (entryId: string) => {
    setJournalEntries((prev) => prev.filter((e) => e.id !== entryId));
  };

  const handleAddReview = (dishId: string, rating: number, reviewText: string) => {
    const newReview: DishReview = {
      id: `rev-${Date.now()}`,
      dishId,
      userId: currentUser?.uid || 'guest-user',
      userDisplayName: currentUser?.displayName || 'Piging Taste Explorer',
      rating,
      reviewText,
      createdAt: new Date().toLocaleDateString('en-PH', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setReviews((prev) => [newReview, ...prev]);

    // Also persist to Firestore if signed in
    if (currentUser) {
      try {
        addDoc(collection(db, 'dish_reviews'), newReview);
      } catch {}
    }
  };

  const handleSubmitRecipe = (
    recipe: Omit<RecipeSubmission, 'id' | 'createdAt' | 'status'>
  ) => {
    const newSubmission: RecipeSubmission = {
      ...recipe,
      id: `sub-${Date.now()}`,
      status: 'pending',
      createdAt: new Date().toLocaleDateString('en-PH', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setSubmissions((prev) => [newSubmission, ...prev]);

    // Persist to Firestore
    if (currentUser) {
      try {
        addDoc(collection(db, 'recipe_submissions'), newSubmission);
      } catch {}
    }
  };

  const handleUpdateSubmissionStatus = (
    id: string,
    newStatus: 'pending' | 'approved' | 'rejected'
  ) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  return (
    <div className="min-h-screen bg-[#1A0E08] text-[#F9F3EA] flex flex-col">
      {/* Top Bar Contract (Desktop Header: 3 Zones separated by gap-8) */}
      <header className="hidden lg:flex items-center justify-between gap-8 px-8 py-3.5 bg-[#24130B] border-b border-[#4E2C18]">
        {/* Zone 1: Single text element wordmark */}
        <button
          type="button"
          onClick={() => setActiveScreen('splash')}
          className="font-filipiniana font-black text-xl tracking-wider text-[#FFD24C] whitespace-nowrap shrink-0 cursor-pointer"
        >
          PIGING
        </button>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Screen Switcher"
          className="flex items-center gap-6 text-sm font-medium text-[#F9F3EA]/80"
        >
          <button
            type="button"
            onClick={() => setActiveScreen('home')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'home' ? 'text-[#FFD24C] underline underline-offset-4' : ''
            }`}
          >
            Islands
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('region-grid')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'region-grid' ? 'text-[#FFD24C] underline underline-offset-4' : ''
            }`}
          >
            Regions
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('museo')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
              activeScreen === 'museo' ? 'text-[#FFD24C] underline underline-offset-4' : ''
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span>Museo Lasa-Suri</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('dish-list')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'dish-list' ? 'text-[#FFD24C] underline underline-offset-4' : ''
            }`}
          >
            Dishes
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('favorites')}
            className={`hover:text-[#FFD24C] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeScreen === 'favorites' ? 'text-[#FFD24C] underline underline-offset-4' : ''
            }`}
          >
            Paborito ({favoriteIds.length})
          </button>
        </nav>

        {/* Zone 3: 1 primary action & Account button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#3D2314] hover:bg-[#4E2C18] text-[#FFD24C] border border-[#8C5832] cursor-pointer whitespace-nowrap"
          >
            + Submit Recipe
          </button>

          <button
            type="button"
            onClick={() => setIsAuthModalOpen(true)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#E8A238] hover:bg-[#FFD24C] text-[#23140D] font-bold text-xs transition-colors cursor-pointer whitespace-nowrap shadow-sm"
          >
            <UserIcon className="w-3.5 h-3.5" />
            <span>
              {currentUser
                ? currentUser.displayName || 'My Cloud Account'
                : 'Sign In / Sync'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Responsive Layout */}
      <main className="flex-1 w-full max-w-7xl mx-auto lg:px-8 lg:py-6 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
        {/* Interactive Mobile Device Canvas */}
        <div className="w-full max-w-[430px] lg:shrink-0 relative rounded-none sm:rounded-[34px] overflow-hidden sm:border-[6px] sm:border-[#3D2314] shadow-[0_24px_60px_rgba(0,0,0,0.75)] bg-[#23140D]">
          {activeScreen === 'splash' && (
            <SplashScreen onStart={() => setActiveScreen('home')} />
          )}

          {activeScreen === 'home' && (
            <HomeRegionPicker
              activeScreen={activeScreen}
              favoritesCount={favoriteIds.length}
              currentUser={currentUser}
              onSelectIsland={handleSelectIsland}
              onSelectDish={(dish) => handleSelectDish(dish)}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
            />
          )}

          {activeScreen === 'region-grid' && (
            <RegionSubGridScreen
              selectedIslandId={selectedIslandId}
              activeScreen={activeScreen}
              favoritesCount={favoriteIds.length}
              currentUser={currentUser}
              onSelectIsland={handleSelectIsland}
              onSelectRegion={handleSelectRegion}
              onSelectDish={(dish) => handleSelectDish(dish)}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
            />
          )}

          {activeScreen === 'dish-list' && (
            <DishListScreen
              region={selectedRegion}
              favoriteIds={favoriteIds}
              onBackToRegions={() => setActiveScreen('region-grid')}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onSelectDish={(dish) => handleSelectDish(dish)}
              onToggleFavorite={handleToggleFavorite}
            />
          )}

          {activeScreen === 'dish-detail' && (
            <DishDetailScreen
              dish={selectedDish}
              activeTab={activeShsTab}
              onTabChange={setActiveShsTab}
              isFavorite={favoriteIds.includes(selectedDish.id)}
              favoritesCount={favoriteIds.length}
              currentUser={currentUser}
              journalEntries={journalEntries}
              reviews={reviews}
              onToggleFavorite={handleToggleFavorite}
              onAddJournalEntry={handleAddJournalEntry}
              onDeleteJournalEntry={handleDeleteJournalEntry}
              onAddReview={handleAddReview}
              onBackToList={() => setActiveScreen('dish-list')}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
              activeScreen={activeScreen}
            />
          )}

          {activeScreen === 'favorites' && (
            <PaboritoScreen
              favoriteIds={favoriteIds}
              currentUser={currentUser}
              activeScreen={activeScreen}
              onSelectDish={(dish) => handleSelectDish(dish)}
              onToggleFavorite={handleToggleFavorite}
              onRestoreDefaults={() => setFavoriteIds(INITIAL_FAVORITE_IDS)}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
            />
          )}

          {activeScreen === 'museo' && (
            <MuseoScreen
              activeScreen={activeScreen}
              favoritesCount={favoriteIds.length}
              currentUser={currentUser}
              journalEntries={journalEntries}
              onSelectDish={(dish) => handleSelectDish(dish)}
              onNavigateHome={() => setActiveScreen('home')}
              onNavigateFavorites={() => setActiveScreen('favorites')}
              onNavigateMuseo={() => setActiveScreen('museo')}
              onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
              onOpenAuthModal={() => setIsAuthModalOpen(true)}
              onOpenMenuDrawer={() => setIsDrawerOpen(true)}
              onAddJournalEntry={(entry: JournalEntry) =>
                handleAddJournalEntry(
                  entry.dishId,
                  entry.dishName,
                  entry.regionName,
                  entry.familyVariation,
                  entry.culturalReflection
                )
              }
            />
          )}

          {/* Mobile Drawer */}
          {isDrawerOpen && (
            <div className="absolute inset-0 z-50 bg-black/75 backdrop-blur-xs flex">
              <div className="w-72 h-full bg-[#2B170E] border-r-2 border-[#E8A238] p-5 flex flex-col justify-between text-[#FFF5CC] shadow-2xl">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#5C351E]">
                    <div>
                      <span className="font-filipiniana font-black text-xl text-[#FFD24C]">
                        PIGING
                      </span>
                      <p className="text-[11px] text-[#F9F3EA]/75">
                        Cultural Heritage Menu
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsDrawerOpen(false)}
                      className="p-1 rounded-lg text-[#FFF5CC]/70 hover:text-white cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('splash');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#FFD24C]" />
                      <span>Welcome (Kaon Na!)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('home');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Home className="w-4 h-4 text-[#FFD24C]" />
                      <span>Island Group Picker</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('museo');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Landmark className="w-4 h-4 text-[#FFD24C]" />
                      <span>Museo Lasa-Suri</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('region-grid');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Compass className="w-4 h-4 text-[#FFD24C]" />
                      <span>Region Sub-Grid</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveScreen('favorites');
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <Heart className="w-4 h-4 text-[#FF4D6D] fill-[#FF4D6D]" />
                      <span>Paborito ({favoriteIds.length})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitModalOpen(true);
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <PlusCircle className="w-4 h-4 text-[#FFD24C]" />
                      <span>Submit Recipe / Review Queue</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsAuthModalOpen(true);
                        setIsDrawerOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#3D2314] text-left cursor-pointer"
                    >
                      <UserIcon className="w-4 h-4 text-[#86EFAC]" />
                      <span>
                        {currentUser
                          ? `Profile: ${currentUser.displayName || currentUser.email}`
                          : 'Sign In / Account Sync'}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#5C351E] text-[10px] text-[#F9F3EA]/70">
                  Firebase Authentication &bull; Firestore Persistent Sync
                </div>
              </div>
              <div className="flex-1" onClick={() => setIsDrawerOpen(false)} />
            </div>
          )}
        </div>

        {/* Right Desktop Companion Panel */}
        <div className="hidden lg:flex flex-1 flex-col gap-6 pt-1">
          {/* Quick Search & Feature Spotlight */}
          <section className="rounded-2xl bg-[#27150C] border border-[#4E2C18] p-6 space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E8A238]">
                Interactive Culinary Documentation Hub
              </span>
              <h2 className="mt-1 font-woodblock font-bold text-2xl text-[#FFF5CC]">
                Search &amp; Explore Heritage Flavors
              </h2>
            </div>

            <SearchBar onSelectDish={(dish) => handleSelectDish(dish)} />

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveScreen('museo')}
                className="p-3.5 rounded-xl bg-[#1E1009] hover:bg-[#3D2314] border border-[#5C351E] text-left cursor-pointer transition-colors"
              >
                <Landmark className="w-5 h-5 text-[#FFD24C] mb-1" />
                <span className="block text-xs font-bold text-white">Museo Lasa-Suri</span>
                <span className="text-[11px] text-[#FFF5CC]/70">Exhibits &amp; Vessels</span>
              </button>

              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(true)}
                className="p-3.5 rounded-xl bg-[#1E1009] hover:bg-[#3D2314] border border-[#5C351E] text-left cursor-pointer transition-colors"
              >
                <PlusCircle className="w-5 h-5 text-[#86EFAC] mb-1" />
                <span className="block text-xs font-bold text-white">Recipe Submission</span>
                <span className="text-[11px] text-[#FFF5CC]/70">Review Queue</span>
              </button>

              <button
                type="button"
                onClick={() => setIsAuthModalOpen(true)}
                className="p-3.5 rounded-xl bg-[#1E1009] hover:bg-[#3D2314] border border-[#5C351E] text-left cursor-pointer transition-colors"
              >
                <UserIcon className="w-5 h-5 text-[#FF8888] mb-1" />
                <span className="block text-xs font-bold text-white">User Accounts</span>
                <span className="text-[11px] text-[#FFF5CC]/70">
                  {currentUser ? 'Cloud Synced' : 'Cross-Device'}
                </span>
              </button>
            </div>
          </section>

          {/* SHS 4-Tab Academic Integration Quick Jump */}
          <section className="rounded-2xl bg-[#27150C] border border-[#4E2C18] p-6 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-woodblock font-bold text-lg text-white">
                4-Tab SHS Academic Exploration ({selectedDish.name})
              </h3>
              <span className="text-xs text-[#E8A238] font-medium">
                {selectedDish.province}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { tab: 'history' as ShsTabId, name: '1. History & Origins (UCSP)', desc: 'Pre-colonial sangkutsa & salt preservation' },
                { tab: 'verification' as ShsTabId, name: '2. Recipe Verification (MIL)', desc: 'Fact-checker, shortcuts & tutorials' },
                { tab: 'philosophy' as ShsTabId, name: '3. Philosophy & Journal', desc: 'Safeguarding flavor vs trends' },
                { tab: 'fpl' as ShsTabId, name: '4. FPL (Larawang-Sanaysay)', desc: 'Academic essay on modern shortcuts' },
              ].map((item) => (
                <button
                  key={item.tab}
                  type="button"
                  onClick={() => {
                    setActiveShsTab(item.tab);
                    setActiveScreen('dish-detail');
                  }}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-colors ${
                    activeScreen === 'dish-detail' && activeShsTab === item.tab
                      ? 'bg-[#3D2314] border-[#FFD24C]'
                      : 'bg-[#1E1009] border-[#5C351E] hover:border-[#8C5832]'
                  }`}
                >
                  <span className="block text-xs font-bold text-[#FFD24C]">{item.name}</span>
                  <span className="block text-[11px] text-[#FFF5CC]/75 mt-0.5">{item.desc}</span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        syncedFavoritesCount={favoriteIds.length}
      />

      {/* Recipe Submission & Review Queue Modal */}
      <RecipeSubmissionModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        currentUser={currentUser}
        submissions={submissions}
        onSubmitRecipe={handleSubmitRecipe}
        onUpdateStatus={handleUpdateSubmissionStatus}
      />
    </div>
  );
}
