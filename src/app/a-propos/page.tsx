import Link from 'next/link';
import { aboutData } from '@/data/about';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      {/* En-tête */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-4 md:mb-6">
          {aboutData.title}
        </h1>
        <p className="text-lg sm:text-xl text-[var(--primary)] font-medium mb-6 md:mb-8">
          {aboutData.subtitle}
        </p>
        <p className="text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed">
          {aboutData.vision}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mb-16 md:mb-24">
        {/* Photo de profil */}
        <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl bg-[var(--card)] group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/emmanuel-photo.jpg"
            alt="Emmanuel Okou N'guessan"
            className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-black/40 border border-white/10 text-white">
            <p className="text-xs uppercase tracking-widest text-[var(--primary)] font-bold">Emmanuel Okou N&apos;guessan</p>
            <p className="text-sm font-medium text-white/90">Entrepreneur & Prestataire Digital</p>
          </div>
        </div>

        {/* Parcours */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-[var(--foreground)]">Mon Parcours</h2>
          <div className="prose prose-invert max-w-none text-[var(--muted-foreground)] text-lg leading-relaxed bg-[var(--card)] p-6 rounded-xl border border-[var(--border)] border-dashed">
            {aboutData.bio}
          </div>
          
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
            >
              Me contacter directement &rarr;
            </Link>
            <a 
              href="https://www.linkedin.com/in/emmanuel-okou-2719b0406/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--border)] hover:border-[var(--primary)] text-[var(--foreground)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--card)] transition-colors"
            >
              <svg className="w-5 h-5 fill-current text-[var(--primary)]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
              </svg>
              Voir mon profil LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Méthodologie */}
      <div className="border-t border-[var(--border)] pt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">Ma Méthode de Travail</h2>
          <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
            Une approche structurée pour garantir des résultats à la hauteur de vos ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.methodology.map((step, index) => (
            <div key={index} className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)] hover:border-[var(--primary)]/50 transition-colors">
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 text-[var(--primary)]">
                {step.title}
              </h3>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
