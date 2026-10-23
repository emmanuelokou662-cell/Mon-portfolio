"use client";

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/config';

const emptySubscribe = () => () => {};
const getClientYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export function Footer() {
  const currentYear = useSyncExternalStore(emptySubscribe, getClientYear, getServerYear);

  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--card)]/50 mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Marque & Mission */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-[var(--primary)] block">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] max-w-sm leading-relaxed">
              Création de présence en ligne haut de gamme, production de visuels publicitaires percutants et conception de solutions numériques intelligentes.
            </p>
            <div className="pt-2 flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
              <span>📍 Abidjan, Côte d&apos;Ivoire</span>
              <span>•</span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Disponible pour nouveaux projets
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--muted-foreground)]">
              <li>
                <Link href="/" className="hover:text-[var(--primary)] transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--primary)] transition-colors">Expertises & Services</Link>
              </li>
              <li>
                <Link href="/projets" className="hover:text-[var(--primary)] transition-colors">Portfolio & Réalisations</Link>
              </li>
              <li>
                <Link href="/a-propos" className="hover:text-[var(--primary)] transition-colors">À propos</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact & Devis</Link>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Réseaux */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--foreground)] mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--muted-foreground)]">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--primary)] transition-colors break-all">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[var(--primary)] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="pt-2 flex gap-4">
                <a 
                  href={siteConfig.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors underline underline-offset-4 text-xs font-medium"
                >
                  LinkedIn
                </a>
                <a 
                  href={siteConfig.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors underline underline-offset-4 text-xs font-medium"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Ligne inférieure */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted-foreground)]">
          <p>© {currentYear} {siteConfig.name}. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <span>Conçu avec précision • Next.js & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
