import React, { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin, Sparkles, ChefHat } from 'lucide-react';
import { ALL_DISHES, DishData } from '../data/culinaryData';

interface SearchBarProps {
  onSelectDish: (dish: DishData) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSelectDish,
  className = '',
}) => {
  const [query, setQuery] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cleanQuery = query.trim().toLowerCase();

  const results = cleanQuery
    ? ALL_DISHES.filter((dish) => {
        const matchName = dish.name.toLowerCase().includes(cleanQuery);
        const matchRegion = dish.regionName.toLowerCase().includes(cleanQuery);
        const matchProvince = dish.province.toLowerCase().includes(cleanQuery);
        const ingredients =
          dish.keyIngredients || dish.milVerification?.heirloomIngredients || [];
        const matchIngredients = ingredients.some((ing: string) =>
          ing.toLowerCase().includes(cleanQuery)
        );
        const techniques =
          dish.cookingTechniques || dish.milVerification?.authenticKeywords || [];
        const matchTechniques = techniques.some((tech: string) =>
          tech.toLowerCase().includes(cleanQuery)
        );
        return matchName || matchRegion || matchProvince || matchIngredients || matchTechniques;
      })
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <Search className="w-4 h-4 absolute left-3.5 text-[#E8A238] pointer-events-none" />
        <input
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder="Search dish (e.g. Bagnet), ingredient (bagoong, gata), or region..."
          className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#2D180C] border-2 border-[#5C351E] text-xs text-[#FFF5CC] placeholder-[#FFF5CC]/50 focus:outline-none focus:border-[#FFD24C] shadow-inner transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 text-[#FFF5CC]/60 hover:text-white p-0.5 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Instant Dropdown Results */}
      {isOpen && query.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-[#28140B] border-2 border-[#E8A238] shadow-2xl p-2 max-h-80 overflow-y-auto">
          <div className="px-2 py-1 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#FFD24C]">
            <span>Search Results ({results.length})</span>
            <span className="text-[10px] text-[#FFF5CC]/60">Dishes &amp; Ingredients</span>
          </div>

          {results.length === 0 ? (
            <div className="p-4 text-center text-xs text-[#FFF5CC]/70">
              No matching heirloom dishes found for &ldquo;{query}&rdquo;. Try searching for &ldquo;pork&rdquo;, &ldquo;bagoong&rdquo;, &ldquo;Ilocos&rdquo;, or &ldquo;tuna&rdquo;.
            </div>
          ) : (
            <div className="space-y-1 mt-1">
              {results.map((dish) => (
                <button
                  key={dish.id}
                  type="button"
                  onClick={() => {
                    onSelectDish(dish);
                    setIsOpen(false);
                    setQuery('');
                  }}
                  className="w-full p-2.5 rounded-xl text-left hover:bg-[#3D2314] flex items-center gap-3 transition-colors cursor-pointer group"
                >
                  <img
                    src={dish.imageUrl}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover border border-[#8C5832] shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-editorial font-bold text-sm text-white group-hover:text-[#FFD24C] truncate">
                        {dish.name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#A03820] text-white font-semibold shrink-0">
                        ★ {dish.averageRating ?? 4.9}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#FFF5CC]/80 flex items-center gap-1 truncate mt-0.5">
                      <MapPin className="w-3 h-3 text-[#E8A238] shrink-0" />
                      <span>{dish.province} · {dish.regionName}</span>
                    </p>

                    <p className="text-[10px] text-[#FFF5CC]/60 truncate mt-0.5">
                      Key Ingredients: {(dish.keyIngredients || dish.milVerification?.heirloomIngredients || []).slice(0, 3).join(', ')}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
