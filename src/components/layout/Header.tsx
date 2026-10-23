"use client";

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/config';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo */}
        <Link 
          href="/" 
          onClick={closeMenu}
          className="text-lg sm:text-xl font-bold tracking-tight text-[var(--primary)] hover:opacity-90 transition-opacity"
        >
          {siteConfig.name}
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--foreground)]/80">
          <Link href="/services" className="hover:text-[var(--primary)] transition-colors">
            Expertises
          </Link>
          <Link href="/projets" className="hover:text-[var(--primary)] transition-colors">
            Projets
          </Link>
          <Link href="/a-propos" className="hover:text-[var(--primary)] transition-colors">
            À propos
          </Link>
          <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/contact" 
            className="bg-[var(--primary)] text-[var(--primary-foreground)] px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-sm"
          >
            Demander un devis
          </Link>
        </div>

        {/* Bouton Hamburger Mobile */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[var(--foreground)] hover:bg-[var(--card)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-colors"
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            /* Icône Fermer (X) */
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Icône Hamburger */
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Déroulant Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--card)] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            <Link 
              href="/" 
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--primary)] transition-colors"
            >
              Accueil
            </Link>
            <Link 
              href="/services" 
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--primary)] transition-colors"
            >
              Expertises & Services
            </Link>
            <Link 
              href="/projets" 
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--primary)] transition-colors"
            >
              Projets & Réalisations
            </Link>
            <Link 
              href="/a-propos" 
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--primary)] transition-colors"
            >
              À propos de moi
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--primary)] transition-colors"
            >
              Contact direct
            </Link>

            <div className="pt-3 border-t border-[var(--border)]">
              <Link 
                href="/contact" 
                onClick={closeMenu}
                className="w-full block text-center bg-[var(--primary)] text-[var(--primary-foreground)] py-3 rounded-lg text-base font-bold shadow-md hover:opacity-90 transition-opacity"
              >
                Demander un devis
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
