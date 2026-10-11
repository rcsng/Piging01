import React, { useState } from 'react';
import { IslandId } from '../data/culinaryData';

/**
 * Splash Screen Top & Bottom Indigenous Geometric Weave Border (Screenshot 1)
 * Features dashed golden stitch line + cream/yellow triangles + purple/orange Yakan/Inabel diamonds
 */
export const InabelWeaveBorder: React.FC<{ position?: 'top' | 'bottom' }> = ({
  position = 'top',
}) => {
  const units = Array.from({ length: 8 });
  return (
    <div className="w-full select-none overflow-hidden" aria-hidden="true">
      {position === 'top' && (
        <div className="flex items-center justify-between gap-2 px-2 py-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full bg-[#F5A623] shadow-sm"
            />
          ))}
        </div>
      )}

      <div className="w-full bg-[#FF6B00] border-y-2 border-[#F5A623]">
        <svg
          viewBox="0 0 640 76"
          className="w-full h-12 sm:h-14 block"
          preserveAspectRatio="none"
        >
          {units.map((_, idx) => {
            const x = idx * 80;
            return (
              <g key={idx} transform={`translate(${x}, 0)`}>
                {/* Background orange & gold bands */}
                <rect x="0" y="0" width="80" height="76" fill="#FF6600" />
                <rect x="0" y="0" width="80" height="20" fill="#FAAC18" />
                <rect x="0" y="56" width="80" height="20" fill="#FAAC18" />

                {/* Top row cream & gold serrated triangles */}
                {[0, 16, 32, 48, 64].map((tx) => (
                  <polygon
                    key={`t-${tx}`}
                    points={`${tx},20 ${tx + 8},2 ${tx + 16},20`}
                    fill="#FFF5CC"
                  />
                ))}

                {/* Bottom row cream & gold serrated triangles */}
                {[0, 16, 32, 48, 64].map((bx) => (
                  <polygon
                    key={`b-${bx}`}
                    points={`${bx},56 ${bx + 8},74 ${bx + 16},56`}
                    fill="#FFF5CC"
                  />
                ))}

                {/* Upper purple diamonds */}
                {[0, 16, 32, 48, 64].map((dx) => (
                  <polygon
                    key={`ud-${dx}`}
                    points={`${dx + 8},18 ${dx + 16},27 ${dx + 8},36 ${dx},27`}
                    fill="#3D1356"
                  />
                ))}

                {/* Lower purple diamonds */}
                {[0, 16, 32, 48, 64].map((dx) => (
                  <polygon
                    key={`ld-${dx}`}
                    points={`${dx + 8},40 ${dx + 16},49 ${dx + 8},58 ${dx},49`}
                    fill="#3D1356"
                  />
                ))}

                {/* Center sacred Inabel diamond eye */}
                <polygon
                  points="40,26 52,38 40,50 28,38"
                  fill="#FFF5CC"
                  stroke="#3D1356"
                  strokeWidth="2"
                />
                <polygon points="40,31 47,38 40,45 33,38" fill="#E03C1F" />
                <circle cx="40" cy="38" r="2.2" fill="#FFF5CC" />
              </g>
            );
          })}
        </svg>
      </div>

      {position === 'bottom' && (
        <div className="flex items-center justify-between gap-2 px-2 py-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full bg-[#F5A623] shadow-sm"
            />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Vertical Bamboo Slat Top/Bottom Border (Screenshots 2, 4, 6)
 */
export const BambooSlatBorder: React.FC<{ heightClass?: string }> = ({
  heightClass = 'h-7',
}) => {
  return (
    <div
      className={`w-full ${heightClass} bg-bamboo-slats relative border-y-2 border-[#4A2511] select-none overflow-hidden shrink-0`}
      aria-hidden="true"
    >
      {/* Horizontal rattan lashing twine */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#E8C589]/80 border-y border-[#5A3014]" />
    </div>
  );
};

/**
 * Woven Tapestry Trim on the Luzon / Visayas / Mindanao Capiz Window Cards (Screenshot 2)
 */
export const WindowTapestryStrip: React.FC<{
  variant: 'inabel' | 'hablon' | 'yakan';
}> = ({ variant }) => {
  const palette =
    variant === 'inabel'
      ? { bg: '#8C3B2B', d1: '#E8D5B7', d2: '#4A6B5D', accent: '#E8A238' }
      : variant === 'hablon'
      ? { bg: '#4A5D23', d1: '#F4D03F', d2: '#2C3E50', accent: '#E67E22' }
      : { bg: '#921B1B', d1: '#D4AC0D', d2: '#1E8449', accent: '#F5EEF8' };

  return (
    <div className="w-full h-5 overflow-hidden border-y border-[#2A160B] select-none" aria-hidden="true">
      <svg viewBox="0 0 400 24" className="w-full h-full block" preserveAspectRatio="none">
        <rect width="400" height="24" fill={palette.bg} />
        {Array.from({ length: 10 }).map((_, i) => {
          const x = i * 40;
          return (
            <g key={i} transform={`translate(${x}, 0)`}>
              <polygon
                points="20,2 38,12 20,22 2,12"
                fill={palette.d1}
                stroke={palette.d2}
                strokeWidth="2"
              />
              <polygon points="20,6 30,12 20,18 10,12" fill={palette.d2} />
              <circle cx="20" cy="12" r="2.5" fill={palette.accent} />
              <polygon points="0,0 10,0 0,8" fill={palette.accent} opacity="0.7" />
              <polygon points="40,0 30,0 40,8" fill={palette.accent} opacity="0.7" />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/**
 * Yellow Kalachuchi (Frangipani) Flower Vector Accent (Screenshot 1)
 */
export const KalachuchiFlower: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 64,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    className={`select-none pointer-events-none drop-shadow-md ${className}`}
    aria-hidden="true"
  >
    {[0, 72, 144, 216, 288].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 50 50)`}>
        <path
          d="M50 48 C36 28, 35 8, 50 5 C65 8, 64 28, 50 48 Z"
          fill="#FAD02C"
          stroke="#E59819"
          strokeWidth="1.5"
        />
      </g>
    ))}
    <circle cx="50" cy="50" r="9" fill="#C91D22" />
    <circle cx="48" cy="48" r="3" fill="#FF6B6B" opacity="0.6" />
  </svg>
);

/**
 * Purple & Gold Sunburst Rays above PIGING (Screenshot 1)
 */
export const SunburstRays: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 260 120"
    className={`select-none pointer-events-none ${className}`}
    aria-hidden="true"
  >
    {/* Alternating purple and gold rays */}
    <polygon points="130,115 35,88 42,74" fill="#8B2FC9" />
    <polygon points="130,115 55,64 68,52" fill="#F6C453" />
    <polygon points="130,115 76,34 92,26" fill="#8B2FC9" />
    <polygon points="130,115 102,22 117,18" fill="#F6C453" />
    <polygon points="130,115 123,8 137,8" fill="#8B2FC9" />
    <polygon points="130,115 143,18 158,22" fill="#F6C453" />
    <polygon points="130,115 168,26 184,34" fill="#8B2FC9" />
    <polygon points="130,115 192,52 205,64" fill="#F6C453" />
    <polygon points="130,115 218,74 225,88" fill="#8B2FC9" />
    <polygon points="130,115 45,105 45,93" fill="#F6C453" />
    <polygon points="130,115 215,93 215,105" fill="#F6C453" />
  </svg>
);

/**
 * Island Map Silhouette for Screen 3 Header (Screenshot 3 shows black Luzon silhouette)
 */
export const IslandSilhouette: React.FC<{ islandId: IslandId; className?: string }> = ({
  islandId,
  className = 'w-20 h-24',
}) => {
  if (islandId === 'luzon') {
    return (
      <svg viewBox="0 0 120 140" className={`select-none ${className}`} aria-label="Luzon Island Silhouette">
        <path
          d="M36 10 L58 14 L64 10 L62 24 L67 36 L60 52 L57 66 L72 72 L86 68 L98 76 L92 86 L78 82 L68 88 L74 104 L88 112 L78 124 L66 114 L58 128 L52 122 L56 106 L44 94 L30 90 L22 78 L28 66 L26 48 L30 28 Z"
          fill="#0F0906"
          stroke="#E8A238"
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  if (islandId === 'visayas') {
    return (
      <svg viewBox="0 0 140 120" className={`select-none ${className}`} aria-label="Visayas Islands Silhouette">
        {/* Panay */}
        <path d="M20 42 L42 36 L46 58 L30 68 L18 56 Z" fill="#0F0906" stroke="#E8A238" strokeWidth="1.5" />
        {/* Negros */}
        <path d="M48 52 L62 48 L60 82 L46 88 L42 70 Z" fill="#0F0906" stroke="#E8A238" strokeWidth="1.5" />
        {/* Cebu */}
        <path d="M68 44 L76 42 L72 86 L64 86 Z" fill="#0F0906" stroke="#E8A238" strokeWidth="1.5" />
        {/* Bohol */}
        <path d="M78 72 L94 68 L96 82 L80 84 Z" fill="#0F0906" stroke="#E8A238" strokeWidth="1.5" />
        {/* Samar & Leyte */}
        <path d="M88 22 L114 26 L120 50 L102 54 L106 78 L94 78 L88 52 Z" fill="#0F0906" stroke="#E8A238" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 140 130" className={`select-none ${className}`} aria-label="Mindanao Island Silhouette">
      <path
        d="M54 24 L76 28 L96 20 L108 38 L118 64 L112 92 L96 88 L86 108 L68 102 L54 88 L44 72 L20 82 L12 72 L32 56 L46 52 L48 36 Z"
        fill="#0F0906"
        stroke="#E8A238"
        strokeWidth="1.5"
      />
    </svg>
  );
};

/**
 * Festive Ornaments on the Top-Right of the 2x2 Region Cards (Screenshot 3)
 */
export const RegionCardOrnament: React.FC<{
  type: 'mandala' | 'fans' | 'mask' | 'pinwheels';
}> = ({ type }) => {
  if (type === 'mandala') {
    return (
      <svg viewBox="0 0 90 50" className="w-16 h-10 select-none pointer-events-none" aria-hidden="true">
        {[
          { cx: 22, cy: 20, r: 12, c1: '#5B4B8A', c2: '#E8A238' },
          { cx: 45, cy: 16, r: 11, c1: '#D9534F', c2: '#F9F3EA' },
          { cx: 66, cy: 18, r: 10, c1: '#3B7A57', c2: '#F4D03F' },
          { cx: 35, cy: 34, r: 9, c1: '#E67E22', c2: '#3D2314' },
          { cx: 56, cy: 33, r: 10, c1: '#8E44AD', c2: '#F5B041' },
        ].map((m, i) => (
          <g key={i}>
            <circle cx={m.cx} cy={m.cy} r={m.r} fill={m.c1} stroke="#F5CBA7" strokeWidth="1.5" />
            <circle cx={m.cx} cy={m.cy} r={m.r * 0.6} fill={m.c2} />
            <circle cx={m.cx} cy={m.cy} r={m.r * 0.25} fill={m.c1} />
          </g>
        ))}
      </svg>
    );
  }
  if (type === 'fans') {
    return (
      <svg viewBox="0 0 70 80" className="w-12 h-14 select-none pointer-events-none" aria-hidden="true">
        {[
          { y: 4, fill: '#4A69BD', trim: '#F6B93B' },
          { y: 26, fill: '#78E08F', trim: '#E55039' },
          { y: 48, fill: '#F8A5C2', trim: '#B71540' },
        ].map((fan, i) => (
          <g key={i} transform={`translate(5, ${fan.y})`}>
            <path d="M5 24 A26 24 0 0 1 55 24 L30 28 Z" fill={fan.fill} stroke={fan.trim} strokeWidth="2" />
            <circle cx="30" cy="27" r="3" fill={fan.trim} />
          </g>
        ))}
      </svg>
    );
  }
  if (type === 'mask') {
    return (
      <svg viewBox="0 0 70 70" className="w-12 h-12 select-none pointer-events-none" aria-hidden="true">
        {/* Crown feathers */}
        {[15, 25, 35, 45, 55].map((x, idx) => (
          <ellipse
            key={idx}
            cx={x}
            cy={16}
            rx="4"
            ry="11"
            fill={idx % 2 === 0 ? '#FF5252' : '#40C4FF'}
            transform={`rotate(${(idx - 2) * 16} 35 35)`}
          />
        ))}
        <ellipse cx="35" cy="38" rx="14" ry="16" fill="#B2FF59" stroke="#FBC02D" strokeWidth="2" />
        <circle cx="29" cy="35" r="2.5" fill="#3D2314" />
        <circle cx="41" cy="35" r="2.5" fill="#3D2314" />
        <path d="M29 44 Q35 49 41 44" stroke="#D32F2F" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 80" className="w-14 h-14 select-none pointer-events-none" aria-hidden="true">
      {[
        { cx: 52, cy: 18, c1: '#9B59B6', c2: '#D2B4DE' },
        { cx: 28, cy: 36, c1: '#2ECC71', c2: '#A9DFBF' },
        { cx: 56, cy: 48, c1: '#E74C3C', c2: '#F9E79F' },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="13" fill={p.c1} stroke={p.c2} strokeWidth="1.5" />
          <path
            d={`M${p.cx - 10} ${p.cy} L${p.cx + 10} ${p.cy} M${p.cx} ${p.cy - 10} L${p.cx} ${p.cy + 10}`}
            stroke={p.c2}
            strokeWidth="2"
          />
          <circle cx={p.cx} cy={p.cy} r="3" fill="#FFF" />
        </g>
      ))}
    </svg>
  );
};

/**
 * Native Coconut Ladle (Sandok) Icon from Screenshot 4
 */
export const SandokLadleIcon: React.FC<{ className?: string }> = ({ className = 'w-14 h-14' }) => (
  <svg viewBox="0 0 80 80" className={`select-none pointer-events-none ${className}`} aria-hidden="true">
    <path
      d="M42 52 L66 12 C68 9 73 11 71 15 L47 55 Z"
      fill="#F4C563"
      stroke="#3D2314"
      strokeWidth="2"
    />
    <ellipse cx="32" cy="56" rx="18" ry="12" fill="#E8A238" stroke="#3D2314" strokeWidth="2" />
    <ellipse cx="32" cy="53" rx="15" ry="7" fill="#F9E090" stroke="#3D2314" strokeWidth="1.5" />
  </svg>
);

/**
 * Native Wooden Spatula (Siyanse) Icon next to PABORITO in Screenshot 6
 */
export const SiyanseSpatulaIcon: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 80 80" className={`select-none pointer-events-none ${className}`} aria-hidden="true">
    <g transform="rotate(40 40 40)">
      {/* Slotted turner head */}
      <path
        d="M26 10 L54 10 L50 34 L30 34 Z"
        fill="#F5D393"
        stroke="#5C3317"
        strokeWidth="2"
      />
      <line x1="33" y1="15" x2="35" y2="29" stroke="#8B4513" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="15" x2="40" y2="29" stroke="#8B4513" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="47" y1="15" x2="45" y2="29" stroke="#8B4513" strokeWidth="2.5" strokeLinecap="round" />
      {/* Handle */}
      <rect x="37" y="34" width="6" height="16" fill="#E5BA73" stroke="#5C3317" strokeWidth="1.5" />
      <rect x="35" y="48" width="10" height="24" rx="4" fill="#D38B43" stroke="#5C3317" strokeWidth="2" />
    </g>
  </svg>
);

/**
 * Woven Patch Sidebar Button matching Screenshots 2, 3, 5, 6
 */
export const WovenSidebarPatchButton: React.FC<{
  active?: boolean;
  onClick: () => void;
  label: string;
  badgeCount?: number;
  children: React.ReactNode;
}> = ({ active = false, onClick, label, badgeCount, children }) => (
  <button
    type="button"
    onClick={onClick}
    title={label}
    aria-label={label}
    className={`group relative w-12 h-14 rounded-md overflow-hidden transition-transform duration-150 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#E8A238] shadow-md ${
      active ? 'ring-2 ring-[#FFF5CC] scale-105' : 'opacity-95 hover:opacity-100 hover:scale-105'
    }`}
  >
    {/* Red/Blue Top Serrated Woven Trim */}
    <div className="w-full h-2.5 bg-[#E03C1F] flex items-end justify-between px-0.5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="w-1.5 h-2 bg-[#1B3B73]"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
      ))}
    </div>
    {/* Golden Orange Woven Body */}
    <div className="w-full h-9 bg-gradient-to-b from-[#FFA800] to-[#F28C00] border-x-2 border-[#E0531F] flex items-center justify-center relative">
      {children}
      {typeof badgeCount === 'number' && badgeCount > 0 && (
        <span className="absolute -top-0.5 right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-[#3D1356] text-[#FFF5CC] text-[10px] font-bold flex items-center justify-center tabular-nums">
          {badgeCount}
        </span>
      )}
    </div>
    {/* White Bottom Base Strip */}
    <div
      className={`w-full h-2.5 transition-colors ${
        active ? 'bg-[#FFF5CC]' : 'bg-white/90 group-hover:bg-white'
      }`}
    />
  </button>
);

/**
 * Antique Brass Plaque matching the user's uploaded food image design
 * Features two-line Roman capital dish name + italicized origin subtitle with rivets
 */
export const AntiqueBrassPlaque: React.FC<{
  title: string;
  subtitle?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ title, subtitle, className = '', size = 'md' }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div
      className={`relative select-none text-center rounded-sm bg-gradient-to-b from-[#7B613A] via-[#523E21] to-[#342410] border-2 border-[#A88C56] shadow-[0_4px_10px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,235,180,0.4)] ${
        isSm
          ? 'py-0.5 px-2'
          : isLg
          ? 'py-1.5 px-4'
          : 'py-1 px-3'
      } ${className}`}
    >
      {/* Left and Right Screws/Rivets */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 left-1.5 rounded-full bg-[#342410] border border-[#CDB580] flex items-center justify-center ${
          isSm ? 'w-1.5 h-1.5' : 'w-2 h-2'
        }`}
      >
        <span className="w-0.5 h-0.5 rounded-full bg-[#F3DEAB]" />
      </span>
      <span
        className={`absolute top-1/2 -translate-y-1/2 right-1.5 rounded-full bg-[#342410] border border-[#CDB580] flex items-center justify-center ${
          isSm ? 'w-1.5 h-1.5' : 'w-2 h-2'
        }`}
      >
        <span className="w-0.5 h-0.5 rounded-full bg-[#F3DEAB]" />
      </span>

      {/* Main Title (e.g. BAGNET, PANCIT CABAGAN, SINANTA, SISIG) */}
      <span
        className={`block font-serif font-black tracking-wider uppercase leading-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)] text-[#EAD8B2] ${
          isSm
            ? 'text-[8.5px]'
            : isLg
            ? 'text-sm sm:text-base tracking-widest'
            : 'text-[10px] sm:text-[11px] tracking-wider'
        }`}
        style={{
          fontFamily: "'Cinzel Decorative', 'Fraunces', Georgia, serif",
          textShadow: '0 1px 0 #2A1A0A',
        }}
      >
        {title}
      </span>

      {/* Subtitle (e.g. FROM ILOCOS, FROM ISABELA, FROM TUGUEGARAO) */}
      {subtitle && (
        <span
          className={`block font-editorial italic font-medium tracking-wide text-[#C7B080] leading-tight mt-0.5 ${
            isSm
              ? 'text-[6.5px]'
              : isLg
              ? 'text-[11px] sm:text-xs'
              : 'text-[8px] sm:text-[9px]'
          }`}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
};

export const ResilientImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = '' }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#8C4822] to-[#3D2314] text-[#F9F3EA] p-3 text-center ${className}`}
      >
        <div className="w-10 h-10 rounded-full border-2 border-[#E8A238] flex items-center justify-center mb-1">
          <span className="font-filipiniana text-xs text-[#E8A238]">PIGING</span>
        </div>
        <span className="text-[11px] font-medium line-clamp-2">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
