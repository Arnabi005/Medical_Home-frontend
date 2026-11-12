import React from 'react';

/**
 * Global 3D Cyan-Teal & White Medical Capsules Background
 * Uses the photorealistic 3D studio render (/capsules-3d-bg.jpg) paired with
 * subtle floating glossy capsule accents and a light-preserving readability veil.
 */
export default function Background3D() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#d8eff4]"
    >
      {/* Photorealistic 3D Cyan & White Capsules Studio Render */}
      <img
        src="/capsules-3d-bg.jpg"
        alt=""
        className="w-full h-full object-cover object-bottom sm:object-center opacity-95 scale-[1.01]"
      />

      {/* Soft Studio Luminance Veil to keep UI cards & dark text crisp */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(235, 249, 252, 0.36) 0%, rgba(235, 249, 252, 0.14) 55%, rgba(215, 242, 248, 0.22) 100%)',
        }}
      />

      {/* Subtle Animated Floating Glossy Capsule Accent (Upper Right) */}
      <div className="hidden md:block absolute top-[11%] right-[4%] w-28 lg:w-32 h-16 animate-float-capsule-a opacity-70">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full overflow-visible">
          <defs>
            <filter id="cyanCapShadowA" x="-30%" y="-30%" width="170%" height="180%">
              <feDropShadow dx="0" dy="14" stdDeviation="10" floodColor="#0e7490" floodOpacity="0.22" />
            </filter>
            <linearGradient id="cyanCapHalf" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="45%" stopColor="#22b8cf" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
            <linearGradient id="pearlCapHalf" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="65%" stopColor="#eef6f8" />
              <stop offset="100%" stopColor="#cbdce2" />
            </linearGradient>
          </defs>
          <g filter="url(#cyanCapShadowA)">
            <path d="M45 20 H100 V72 H45 A26 26 0 0 1 45 20 Z" fill="url(#pearlCapHalf)" />
            <path d="M99 20 H152 A26 26 0 0 1 152 72 H99 V20 Z" fill="url(#cyanCapHalf)" />
            <rect x="38" y="26" width="116" height="8" rx="4" fill="#ffffff" fillOpacity="0.78" />
          </g>
        </svg>
      </div>

      {/* Subtle Animated Floating Glossy Capsule Accent (Mid-Left) */}
      <div className="hidden lg:block absolute top-[32%] left-[2%] w-24 h-14 animate-float-capsule-b opacity-60">
        <svg viewBox="0 0 200 100" fill="none" className="w-full h-full overflow-visible">
          <defs>
            <filter id="cyanCapShadowB" x="-30%" y="-30%" width="170%" height="180%">
              <feDropShadow dx="0" dy="12" stdDeviation="9" floodColor="#0e7490" floodOpacity="0.18" />
            </filter>
          </defs>
          <g filter="url(#cyanCapShadowB)">
            <path d="M45 20 H100 V72 H45 A26 26 0 0 1 45 20 Z" fill="url(#cyanCapHalf)" />
            <path d="M99 20 H152 A26 26 0 0 1 152 72 H99 V20 Z" fill="url(#pearlCapHalf)" />
            <rect x="38" y="26" width="114" height="8" rx="4" fill="#ffffff" fillOpacity="0.72" />
          </g>
        </svg>
      </div>
    </div>
  );
}
