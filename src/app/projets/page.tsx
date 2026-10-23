"use client";

import { useState } from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';

const CATEGORIES: (ProjectCategory | 'Tous')[] = ['Tous', 'Web', 'Vidéo', 'Affiches', 'IA'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'Tous'>('Tous');

  const filteredProjects = projectsData.filter(project => 
    activeCategory === 'Tous' ? true : project.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-3xl mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4">
          Mes Réalisations
        </h1>
        <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
          Découvrez une sélection de projets professionnels et de démonstrations techniques illustrant mon expertise.
        </p>
      </div>

      {/* Filtres */}
      <div className="flex flex-wrap gap-4 mb-12">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category 
                ? 'bg-[var(--primary)] text-[var(--primary-foreground)]' 
                : 'border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Link 
              href={`/projets/${project.slug}`} 
              key={project.id}
              className="group flex flex-col bg-[var(--card)] rounded-xl overflow-hidden border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all hover:shadow-[0_0_30px_rgba(184,149,82,0.1)]"
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
                {project.type === 'Démo' ? (
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded border border-white/10 uppercase tracking-wider">
                    Démo
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 bg-[var(--primary)] text-[var(--primary-foreground)] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-md">
                    Projet Client
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs text-[var(--primary)] font-semibold tracking-wider uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] line-clamp-2 mt-auto">
                  {project.needs}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* État vide */
        <div className="py-24 text-center border border-dashed border-[var(--border)] rounded-xl bg-[var(--card)]/50">
          <p className="text-lg text-[var(--muted-foreground)]">
            Aucun projet ne correspond à cette catégorie pour le moment.
          </p>
          <button 
            onClick={() => setActiveCategory('Tous')}
            className="mt-6 text-[var(--primary)] hover:underline font-medium"
          >
            Voir tous les projets
          </button>
        </div>
      )}
    </div>
  );
}
