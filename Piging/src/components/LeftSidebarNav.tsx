import React from 'react';
import { Home, Heart, BookOpen, Menu, Landmark, PlusCircle, User as UserIcon } from 'lucide-react';
import { WovenSidebarPatchButton } from './CulturalMotifs';
import { User } from 'firebase/auth';

export type ActiveScreen =
  | 'splash'
  | 'home'
  | 'region-grid'
  | 'dish-list'
  | 'dish-detail'
  | 'favorites'
  | 'museo';

interface LeftSidebarNavProps {
  activeScreen: ActiveScreen;
  favoritesCount: number;
  currentUser?: User | null;
  onNavigateHome: () => void;
  onNavigateFavorites: () => void;
  onNavigateMuseo: () => void;
  onOpenSubmitModal?: () => void;
  onOpenAuthModal?: () => void;
  onOpenMenuDrawer: () => void;
  journalCount?: number;
  variant?: 'embedded' | 'floating';
}

export const LeftSidebarNav: React.FC<LeftSidebarNavProps> = ({
  activeScreen,
  favoritesCount,
  currentUser = null,
  onNavigateHome,
  onNavigateFavorites,
  onNavigateMuseo,
  onOpenSubmitModal,
  onOpenAuthModal,
  onOpenMenuDrawer,
  journalCount,
  variant = 'floating',
}) => {
  return (
    <aside
      aria-label="Primary Cultural Navigation"
      className={
        variant === 'embedded'
          ? 'w-16 shrink-0 flex flex-col items-center pt-4 pb-3 px-1.5 gap-2.5 select-none z-30'
          : 'w-14 sm:w-16 shrink-0 flex flex-col items-center py-2.5 px-1.5 gap-2.5 rounded-r-2xl bg-gradient-to-b from-[#9E7B56] via-[#7A5938] to-[#5E4227] border-y-2 border-r-2 border-[#3D2314] shadow-[4px_6px_16px_rgba(0,0,0,0.45)] select-none z-30'
      }
    >
      {/* Hamburger Menu Trigger (☰) */}
      <button
        type="button"
        onClick={onOpenMenuDrawer}
        aria-label="Open Navigation Menu"
        title="Menu & Quick Jump"
        className="w-10 h-10 rounded-lg flex items-center justify-center text-[#3D1459] hover:bg-black/15 active:scale-95 transition-all cursor-pointer"
      >
        <Menu className="w-6 h-6 stroke-[2.5] text-[#4A1525]" />
      </button>

      {/* Button 1: Home (Screen 2: Home Region Picker) */}
      <WovenSidebarPatchButton
        active={activeScreen === 'home' || activeScreen === 'region-grid'}
        onClick={onNavigateHome}
        label="Home Region Picker"
      >
        <Home className="w-5 h-5 text-[#8B1122] fill-[#8B1122]" />
      </WovenSidebarPatchButton>

      {/* Button 2: Museo Lasa-Suri / Curatorial Exhibition */}
      <WovenSidebarPatchButton
        active={activeScreen === 'museo'}
        onClick={onNavigateMuseo}
        label="Museo Lasa-Suri (Cultural Archive)"
      >
        <Landmark className="w-5 h-5 text-[#1B3B73] stroke-[2.3]" />
      </WovenSidebarPatchButton>

      {/* Button 3: Paborito / Favorites */}
      <WovenSidebarPatchButton
        active={activeScreen === 'favorites'}
        onClick={onNavigateFavorites}
        label="Paborito (Saved Favorites)"
        badgeCount={favoritesCount}
      >
        <Heart className="w-5 h-5 text-[#9B1126] fill-[#9B1126]" />
      </WovenSidebarPatchButton>

      {/* Button 4: Submit Recipe Modal */}
      <WovenSidebarPatchButton
        onClick={onOpenSubmitModal || (() => {})}
        label="Submit Recipe & Review Queue"
      >
        <PlusCircle className="w-5 h-5 text-[#3D1356] stroke-[2.4]" />
      </WovenSidebarPatchButton>

      {/* Button 5: User Profile / Auth Modal */}
      <button
        type="button"
        onClick={onOpenAuthModal || (() => {})}
        title={currentUser ? `Signed in as ${currentUser.displayName || currentUser.email}` : 'Sign In / Account Sync'}
        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-transform hover:scale-110 active:scale-95 cursor-pointer mt-1 ${
          currentUser
            ? 'bg-[#E8A238] border-white text-[#23140D] shadow-md ring-2 ring-[#86EFAC]'
            : 'bg-[#3D2314] border-[#E8A238] text-[#FFF5CC]'
        }`}
      >
        {currentUser ? (
          currentUser.displayName ? (
            currentUser.displayName[0].toUpperCase()
          ) : (
            'U'
          )
        ) : (
          <UserIcon className="w-4 h-4 text-[#FFF5CC]" />
        )}
      </button>
    </aside>
  );
};
