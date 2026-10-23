'use client';

import React, { useState, useEffect } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  size?: 'medium' | 'large';
  showBadge?: boolean;
}

export default function ProfileImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  size = 'medium',
  showBadge = true,
}: ProfileImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Fermer la modal avec Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setIsZoomed(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const sizeClasses =
    size === 'large'
      ? 'w-44 h-44 sm:w-56 sm:h-56'
      : 'w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48';

  return (
    <>
      {/* Conteneur Photo Moyen avec interaction Zoom */}
      <div className={`relative group ${containerClassName}`}>
        {/* Halo lumineux d'accentuation or */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[var(--primary)] via-amber-300 to-[var(--primary)] opacity-70 blur-md group-hover:opacity-100 transition-all duration-500 animate-pulse" />
        
        {/* Cadre de l'image cliquable */}
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
            setIsZoomed(false);
          }}
          className={`relative ${sizeClasses} rounded-full p-1.5 border-2 border-[var(--primary)] overflow-hidden bg-[var(--card)] shadow-[0_10px_35px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-4 focus:ring-[var(--primary)]/50 transition-all duration-300 transform group-hover:scale-[1.03] cursor-zoom-in block`}
          aria-label="Agrandir la photo de profil"
          title="Cliquer pour agrandir la photo"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover object-top rounded-full filter contrast-[1.06] brightness-[0.98] transition-transform duration-500 group-hover:scale-105 ${className}`}
          />

          {/* Overlay discret au survol avec icône loupe */}
          <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="p-2.5 rounded-full bg-black/70 text-[var(--primary)] border border-[var(--primary)]/50 shadow-lg">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </span>
          </div>
        </button>

        {/* Badge indicateur de zoom pour l'utilisateur */}
        {showBadge && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[var(--background)]/90 border border-[var(--primary)]/40 text-[var(--primary)] shadow-md backdrop-blur-md">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Zoom
            </span>
          </div>
        )}
      </div>

      {/* Lightbox Modal Plein Écran */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-fade-in"
          onClick={() => {
            setIsOpen(false);
            setIsZoomed(false);
          }}
        >
          {/* Barre d'outils supérieure */}
          <div 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton bascule Zoom 1x / 2x */}
            <button
              type="button"
              onClick={() => setIsZoomed(!isZoomed)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 backdrop-blur-md transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isZoomed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                )}
              </svg>
              {isZoomed ? 'Dézoomer' : 'Zoom 2x'}
            </button>

            {/* Bouton Fermer */}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setIsZoomed(false);
              }}
              className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-colors"
              aria-label="Fermer la vue agrandie"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cadre de l'image agrandie */}
          <div
            className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-[var(--primary)]/40 shadow-[0_0_60px_rgba(184,149,82,0.3)] bg-black/60 flex items-center justify-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(!isZoomed);
            }}
            title={isZoomed ? 'Cliquer pour réduire' : 'Cliquer pour zoomer davantage'}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className={`max-w-full max-h-[82vh] w-auto h-auto object-contain transition-transform duration-300 ease-out select-none ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
              }`}
            />
          </div>

          {/* Légende en bas */}
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/70 border border-white/15 text-center text-xs text-white/80 backdrop-blur-md pointer-events-none"
          >
            {alt} &bull; Cliquez sur l&apos;image pour alterner le zoom (ou Échap pour fermer)
          </div>
        </div>
      )}
    </>
  );
}
