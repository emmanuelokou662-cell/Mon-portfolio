import Link from 'next/link';
import { projectsData } from '@/data/projects';
import ProfileImage from '@/components/ProfileImage';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="relative flex flex-col items-center justify-center pt-16 sm:pt-24 pb-20 px-4 overflow-hidden">
      {/* Halos Lumineux Décoratifs d'Arrière-Plan */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--primary)]/15 rounded-full blur-[130px] animate-float-slow -z-10" />
      <div className="pointer-events-none absolute top-[550px] -right-32 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] animate-float-reverse -z-10" />
      <div className="pointer-events-none absolute top-[1200px] -left-32 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[140px] animate-float-slow -z-10" />

      {/* Hero Section */}
      <div className="max-w-4xl w-full text-center space-y-6 animate-fade-in-up">
        {/* Photo & Badge Statut */}
        <div className="flex flex-col items-center gap-4">
          <ProfileImage
            src="/emmanuel-photo.jpg"
            alt="Emmanuel Okou N'guessan"
            size="medium"
          />

          {/* Badges d'accroche */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-radar" />
              Disponible pour de nouveaux projets
            </div>
            <div className="inline-block text-xs font-bold tracking-widest uppercase text-[var(--primary)] bg-[var(--primary)]/10 px-4 py-1.5 rounded-full border border-[var(--primary)]/20 backdrop-blur-md">
              EMMANUEL OKOU N&apos;GUESSAN
            </div>
          </div>
        </div>

        {/* Titre Principal avec effet text-gradient */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.15]">
          Le <span className="text-gold-gradient">numérique</span> au service de vos plus grandes ambitions.
        </h1>

        <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto leading-relaxed font-normal">
          J&apos;accompagne les entreprises, marques et entrepreneurs dans la conception d&apos;architectures web modernes, la production de contenus publicitaires captivants et l&apos;intégration des technologies d&apos;IA générative.
        </p>

        {/* Boutons d'Action avec Shimmer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link 
            href="/contact" 
            className="btn-shimmer w-full sm:w-auto bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-4 rounded-xl text-base font-bold hover:opacity-95 transition-all shadow-[0_0_30px_rgba(184,149,82,0.3)] hover:shadow-[0_0_40px_rgba(184,149,82,0.5)] hover:-translate-y-0.5"
          >
            Discutons de votre projet &rarr;
          </Link>
          <Link 
            href="/projets" 
            className="w-full sm:w-auto border border-[var(--border)] hover:border-[var(--primary)] text-[var(--foreground)] px-8 py-4 rounded-xl text-base font-medium hover:bg-[var(--card)] transition-all hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Explorer les réalisations
          </Link>
        </div>
      </div>

      {/* Bandeau Chiffres Clés & Crédibilité */}
      <div className="mt-20 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[var(--card)]/60 border border-[var(--border)] backdrop-blur-md shadow-xl">
        <div className="text-center p-3">
          <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)]">100%</div>
          <div className="text-xs text-[var(--muted-foreground)] font-medium mt-1 uppercase tracking-wider">Engagement & Suivi</div>
        </div>
        <div className="text-center p-3 border-l border-[var(--border)]">
          <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)]">4+</div>
          <div className="text-xs text-[var(--muted-foreground)] font-medium mt-1 uppercase tracking-wider">Pôles d&apos;Expertise</div>
        </div>
        <div className="text-center p-3 border-l border-[var(--border)] max-sm:border-l-0 max-sm:border-t">
          <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)]">&lt; 24h</div>
          <div className="text-xs text-[var(--muted-foreground)] font-medium mt-1 uppercase tracking-wider">Délai Devis Réactif</div>
        </div>
        <div className="text-center p-3 border-l border-[var(--border)] max-sm:border-t">
          <div className="text-2xl sm:text-3xl font-extrabold text-[var(--primary)]">IA & Web</div>
          <div className="text-xs text-[var(--muted-foreground)] font-medium mt-1 uppercase tracking-wider">Technologies 2026</div>
        </div>
      </div>

      {/* Section Réalisations Récentes */}
      <div className="mt-28 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Portfolio & Travaux</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mt-1">Réalisations récentes</h2>
          </div>
          <Link href="/projets" className="text-sm font-semibold text-[var(--primary)] hover:underline flex items-center gap-1 group">
            Découvrir tous les projets <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projets/${project.slug}`}
              className="group flex flex-col bg-[var(--card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(184,149,82,0.18)] hover:-translate-y-1.5 backdrop-blur-sm relative"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--muted)]">
                {project.videos && project.videos.length > 0 ? (
                  <video
                    src={project.videos[0]}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                {project.type === 'Client' ? (
                  <div className="absolute top-4 right-4 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow">
                    Projet Client
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded border border-white/10 uppercase tracking-wider">
                    Démo
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-[var(--primary)] font-semibold tracking-wider uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mt-auto">
                  {project.needs}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Bandeau de Confiance (Outils & Méthode) */}
      <div className="mt-32 w-full max-w-5xl border-t border-[var(--border)] pt-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Stack & Compétences</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mt-1">
            Technologies maîtrisées & Méthodologie
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
          <div className="group p-6 rounded-xl bg-[var(--card)]/40 hover:bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(184,149,82,0.12)]">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">⚡</div>
            <div className="font-bold text-[var(--foreground)] text-base">Next.js & React</div>
            <p className="text-xs text-[var(--muted-foreground)] mt-1.5">Performances, SEO & Architecture moderne</p>
          </div>
          
          <div className="group p-6 rounded-xl bg-[var(--card)]/40 hover:bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(184,149,82,0.12)]">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🛡️</div>
            <div className="font-bold text-[var(--foreground)] text-base">TypeScript</div>
            <p className="text-xs text-[var(--muted-foreground)] mt-1.5">Code robuste, typé et maintenable</p>
          </div>
          
          <div className="group p-6 rounded-xl bg-[var(--card)]/40 hover:bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(184,149,82,0.12)]">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🤖</div>
            <div className="font-bold text-[var(--foreground)] text-base">Agents & Outils IA</div>
            <p className="text-xs text-[var(--muted-foreground)] mt-1.5">Automatisation & Workflows génératifs</p>
          </div>
          
          <div className="group p-6 rounded-xl bg-[var(--card)]/40 hover:bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(184,149,82,0.12)]">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">🎨</div>
            <div className="font-bold text-[var(--foreground)] text-base">Direction Artistique</div>
            <p className="text-xs text-[var(--muted-foreground)] mt-1.5">Visuels publicitaires & Vidéo engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
}
