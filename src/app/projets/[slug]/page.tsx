import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export const instant = false;

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header du projet */}
      <div className="max-w-4xl mb-12">
        <Link href="/projets" className="text-[var(--primary)] hover:underline flex items-center gap-2 mb-8 text-sm font-medium">
          &larr; Retour aux projets
        </Link>
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <span className="text-sm font-bold tracking-wider uppercase text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded">
            {project.category}
          </span>
          <span className="text-sm text-[var(--muted-foreground)]">
            {project.date}
          </span>
          {project.type === 'Démo' && (
            <span className="text-sm border border-[var(--primary)] text-[var(--primary)] px-3 py-1 rounded bg-[var(--primary)]/5">
              Projet de Démonstration
            </span>
          )}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          {project.title}
        </h1>
        {project.type === 'Démo' && project.demoNote && (
          <div className="bg-[var(--card)] p-4 border-l-4 border-[var(--primary)] rounded text-sm text-[var(--muted-foreground)] mb-8">
            <strong>Note :</strong> {project.demoNote}
          </div>
        )}
      </div>

      {/* Média principal (Vidéo ou Image) */}
      {project.videos && project.videos.length > 0 ? (
        <div className="space-y-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.videos.map((vid, idx) => (
              <div key={idx} className="flex flex-col items-center bg-[var(--card)] border border-[var(--border)] rounded-2xl p-4 shadow-2xl">
                <div className="w-full flex justify-between items-center mb-3 px-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[var(--primary)]">
                    Spot IA #{idx + 1}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)]">Format Vertical / Reels</span>
                </div>
                <div className="w-full max-w-[340px] aspect-[9/16] rounded-xl overflow-hidden bg-black shadow-inner">
                  <video
                    src={vid}
                    controls
                    playsInline
                    loop
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-h-[750px] rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] mb-16 relative flex items-center justify-center p-3 sm:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.featuredImage} 
            alt={`Aperçu du projet ${project.title}`}
            className="max-h-[700px] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}

      {/* Détails du projet */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Colonne principale */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Le Besoin (Le Défi)</h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {project.needs}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">La Solution</h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {project.solution}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">Ma Contribution</h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              {project.contribution}
            </p>
          </section>

          {project.results && project.results.length > 0 && (
            <section className="bg-[var(--card)] p-8 rounded-xl border border-[var(--border)]">
              <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Résultats obtenus</h2>
              <ul className="space-y-4">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg text-[var(--foreground)]">
                    <span className="text-[var(--primary)] text-xl mt-1">✓</span>
                    {result}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.images && project.images.length > 1 && (
            <section>
              <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">Aperçus de la plateforme</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.slice(1).map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden bg-[var(--card)] border border-[var(--border)] p-3 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={img} 
                      alt={`Capture d'écran ${idx + 2} - ${project.title}`} 
                      className="max-h-[550px] w-auto max-w-full rounded-lg object-contain shadow-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">Rôle</h3>
            <p className="text-[var(--foreground)] font-medium text-lg">{project.role}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">Outils & Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(tool => (
                <span key={tool} className="bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] px-3 py-1.5 rounded-md text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {project.demoLinks && project.demoLinks.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">Liens</h3>
              <div className="space-y-3">
                {project.demoLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[var(--secondary)] hover:bg-[var(--border)] text-[var(--foreground)] transition-colors py-3 rounded-md font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* CTA Contextuel */}
          <div className="mt-12 p-6 border-2 border-[var(--primary)] rounded-xl text-center bg-black/50">
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">Un besoin similaire ?</h3>
            <p className="text-[var(--muted-foreground)] text-sm mb-6">
              Discutons de la manière dont je peux vous aider à atteindre vos objectifs.
            </p>
            <Link 
              href="/contact"
              className="inline-block w-full bg-[var(--primary)] text-[var(--primary-foreground)] py-3 rounded font-bold hover:opacity-90 transition-opacity"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
