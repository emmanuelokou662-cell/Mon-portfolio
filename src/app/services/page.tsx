import Link from 'next/link';
import { servicesData } from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
      <div className="max-w-3xl mb-12 md:mb-20">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-4 md:mb-6">
          Mes <span className="text-[var(--primary)]">Services</span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--muted-foreground)]">
          Des solutions numériques sur-mesure pour développer votre activité, accroître votre visibilité et automatiser vos processus créatifs.
        </p>
      </div>

      <div className="space-y-16 md:space-y-28">
        {servicesData.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
            
            {/* Colonne Contenu */}
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl font-bold text-[var(--foreground)]">{service.title}</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">Le Problème</h3>
                  <p className="text-lg text-[var(--foreground)]/80 leading-relaxed border-l-2 border-red-900/50 pl-4">{service.problem}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">La Solution</h3>
                  <p className="text-lg text-[var(--foreground)] leading-relaxed border-l-2 border-[var(--primary)] pl-4">{service.solution}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-4">Livrables</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((deliverable, i) => (
                    <li key={i} className="flex items-start gap-2 text-[var(--muted-foreground)] bg-[var(--card)] px-4 py-3 rounded-md border border-[var(--border)] text-sm font-medium">
                      <span className="text-[var(--primary)] shrink-0">✓</span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link 
                  href={`/contact?service=${service.id}`}
                  className="inline-flex items-center justify-center bg-[var(--primary)] text-[var(--primary-foreground)] px-8 py-3 rounded font-bold hover:opacity-90 transition-opacity w-full sm:w-auto"
                >
                  {service.ctaText}
                </Link>
              </div>
            </div>

            {/* Colonne Visuel Réaliste */}
            <div className="w-full lg:w-5/12 aspect-[4/5] rounded-2xl border border-[var(--border)] relative overflow-hidden group shadow-2xl bg-[var(--card)]">
              {service.image ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={`Expertise : ${service.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-black/40 border border-white/10">
                    <span className="text-xs uppercase tracking-widest text-[var(--primary)] font-bold block mb-1">
                      Expertise {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-white block">
                      {service.title}
                    </span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--muted-foreground)]/50 space-y-4">
                  <span className="text-6xl">✨</span>
                  <span className="text-sm uppercase tracking-widest font-bold">{service.title}</span>
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
      
      {/* CTA Final global */}
      <div className="mt-20 md:mt-32 p-6 sm:p-12 border border-[var(--border)] rounded-2xl bg-[var(--card)] text-center max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">Prêt à collaborer ?</h3>
        <p className="text-[var(--muted-foreground)] text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Quelle que soit la complexité de votre besoin, nous pouvons concevoir ensemble une solution qui répondra parfaitement à vos objectifs.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded font-bold hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-colors"
        >
          Demander une consultation gratuite
        </Link>
      </div>

    </div>
  );
}
