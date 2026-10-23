import { IProject } from "../types";

export const projectsData: IProject[] = [
  {
    id: "hub-livraison",
    slug: "hub-livraison",
    title: "HUB LIVRAISON",
    type: "Client",
    date: "2026",
    role: "Direction Artistique & Conception Visuelle",
    category: "Affiches",
    clientName: "HUB LIVRAISON",
    needs: "Créations de visuel publicitaire percutante et moderne pour une entreprise de livraison basée à Abidjan, valorisant la fiabilité, la rapidité et l'accessibilité des tarifs pour les courses, colis et documents.",
    solution: "Conceptions de visuel publicitaire à fort impact combinant un personnage livreur chaleureux et professionnel, un arrière-plan urbain dynamique aux couleurs de la marque, un encart épuré effet glassmorphism et une hiérarchie typographique orientée conversion.",
    contribution: "Direction artistique complète, composition visuelle, retouches graphiques, intégration de la charte de marque (Orange & Bleu) et mise en avant stratégique de l'offre d'appel « À partir de 1 500 FCFA ».",
    tools: ["Photoshop", "Direction Artistique", "Design Publicitaire", "Photomontage"],
    results: [
      "Visuel professionnel et dynamique renforçant la confiance des clients",
      "Message commercial percutant avec offre d'appel bien visible et contact direct",
      "Format haute définition adapté aux campagnes publicitaires et réseaux sociaux (TikTok, WhatsApp, Facebook)"
    ],
    images: ["/projects/hub-livraison.jpg"],
    featuredImage: "/projects/hub-livraison.jpg",
    demoLinks: [
      { label: "Page TikTok (Lien à venir)", url: "#" }
    ]
  },
  {
    id: "ram-construction",
    slug: "ram-constructions",
    title: "RAM CONSTRUCTION",
    type: "Client",
    date: "2026",
    role: "Concepteur & Pilote IA",
    category: "Web",
    clientName: "RAM CONSTRUCTION",
    needs: "Concevoir un site web adapté aux réalités de l'entreprise : présentation claire des services, valorisation des réalisations et simplification de la prise de contact.",
    solution: "Développement d'un site web performant, conçu et structuré en pilotant un agent IA, démontrant l'usage de l'intelligence artificielle comme levier de développement.",
    contribution: "Responsabilité de la conception, des choix fonctionnels, vérifications du projet, pilotage de l'IA et mise en ligne.",
    tools: ["IA", "Développement Web", "Déploiement"],
    images: ["/projects/ram-construction.png"],
    featuredImage: "/projects/ram-construction.png",
    demoLinks: [
      { label: "Visiter le site", url: "https://ram-constructions.netlify.app/" }
    ]
  },
  {
    id: "tontine",
    slug: "tontine",
    title: "Tontine+ — Épargne Collective Digitale",
    type: "Démo",
    demoNote: "Application web PWA moderne développée et déployée en production sur Vercel, accessible et testable en direct.",
    date: "2026",
    role: "Conception Complète & Développeur Web",
    category: "Web",
    needs: "Digitaliser et sécuriser la pratique de la tontine rotative en Côte d'Ivoire. Le défi était d'offrir une interface moderne, transparente et intuitive pour suivre les cotisations collectives en FCFA sans les risques de la gestion manuelle sur carnet.",
    solution: "Développement d'une Progressive Web App (PWA) fluide avec tableau de bord complet : gestion des groupes de tontine, calcul des cycles et des tours de redistribution, visualisation des cotisations en FCFA et expérience installable sur smartphone sans store.",
    contribution: "Conception complète de l'application, architecture frontend, ergonomie UX/UI mobile-first, gestion de la logique d'épargne collective et déploiement continu sur Vercel.",
    tools: ["React", "TypeScript", "PWA (Progressive Web App)", "Tailwind CSS", "Vite", "Vercel"],
    results: [
      "Application web installable sur smartphone (PWA) avec expérience fluide",
      "Tableau de bord intuitif assurant une transparence totale des flux d'épargne",
      "Projet disponible et testable en direct en ligne sur tontinenoe.vercel.app"
    ],
    images: ["/projects/tontine.jpg"],
    featuredImage: "/projects/tontine.jpg",
    demoLinks: [
      { label: "Tester l'application en direct", url: "https://tontinenoe.vercel.app" }
    ]
  },
  {
    id: "natural-growth",
    slug: "natural-growth",
    title: "Natural Growth — E-commerce Soins Capillaires",
    type: "Démo",
    demoNote: "Maquette et interface e-commerce mobile-first conçue pour une marque de soins et produits capillaires naturels.",
    date: "2026",
    role: "Direction Artistique & Conception UI/UX E-commerce",
    category: "Web",
    needs: "Créer une boutique en ligne haut de gamme et ultra-séduisante pour une marque de produits capillaires naturels (« La santé de vos cheveux »). L'objectif était de valoriser les routines de soins, susciter la confiance avec des résultats avant/après tangibles et simplifier le parcours d'achat en FCFA.",
    solution: "Conception d'une boutique mobile-first fluide avec charte visuelle élégante (framboise, vert d'eau, touches dorées) : fiches produits détaillées avec coffrets complets (« Pack Routine Complète Croissance » à 25 000 FCFA), élixir concentré de pousse (7 500 FCFA), avis clientes vérifiés (+350 avis), preuve sociale avant/après 90 jours et canal de commande rapide via WhatsApp.",
    contribution: "Direction artistique globale, architecture UX mobile-first, mise en valeur des rituels et packs promotionnels, scénarisation de la preuve sociale et intégration des mécanismes de conversion (tarifs FCFA, badges best-seller, bouton WhatsApp flottant).",
    tools: ["UI/UX Design", "E-commerce Mobile-First", "Next.js / React", "Direction Artistique", "Conversion & Copywriting"],
    results: [
      "Expérience mobile-first fluide et premium mettant en valeur l'efficacité des soins",
      "Mise en avant claire des offres packs (économie de 7 000 FCFA) et routines pas-à-pas",
      "Section de réassurance puissante (avis clientes 4.9/5 et comparatifs Avant/Après en 90 jours)"
    ],
    images: [
      "/projects/natural-growth-hero.jpeg",
      "/projects/natural-growth-pack.jpeg",
      "/projects/natural-growth-elixir.jpeg",
      "/projects/natural-growth-results.jpeg"
    ],
    featuredImage: "/projects/natural-growth-hero.jpeg",
    demoLinks: [
      { label: "Boutique Démo (Localhost)", url: "#" }
    ]
  },
  {
    id: "p2",
    slug: "campagne-video-ia",
    title: "Créations & Spots Publicitaires Générés par IA",
    type: "Démo",
    demoNote: "Deux spots vidéos générés par intelligence artificielle démontrant la puissance du storytelling et de la direction artistique numérique.",
    date: "2026",
    role: "Directeur Artistique & Prompt Engineer IA",
    category: "IA",
    needs: "Démontrer comment les technologies d'IA générative permettent de produire des vidéos publicitaires captivantes, ultra-réalistes et cinématiques, sans les coûts et les contraintes logistiques colossales d'un tournage traditionnel.",
    solution: "Scénarisation, ingénierie de prompts vidéo poussée (Google Veo / Runway / Sora), génération de scènes photoréalistes avec rendu de caméra cinématographique et intégration de formats verticaux adaptés aux réseaux sociaux (Reels, TikTok, Shorts).",
    contribution: "Direction artistique, écriture des prompts et du storyboard, génération et sélection des meilleures itérations IA, post-traitement et intégration optimisée.",
    tools: ["IA Générative Vidéo", "Prompt Engineering", "Storyboarding", "Direction Artistique"],
    results: [
      "2 vidéos publicitaires IA immersives intégrées directement en lecture fluide",
      "Qualité visuelle cinématographique avec mouvements de caméra dynamiques",
      "Format vertical et haute définition optimisé pour les campagnes publicitaires mobiles"
    ],
    images: [],
    videos: [
      "/videos/video-ia-1.mp4",
      "/videos/video-ia-2.mp4"
    ],
    featuredImage: "/videos/video-ia-1.mp4"
  },
  {
    id: "p3",
    slug: "abidjan-tech-business-forum",
    title: "Abidjan Tech & Business Forum 2026",
    type: "Démo",
    demoNote: "Affiche promotionnelle et événementielle conçue pour un sommet international d'affaires et de technologie à Abidjan.",
    date: "2026",
    role: "Directeur Artistique & Graphiste Publicitaire",
    category: "Affiches",
    needs: "Concevoir une identité visuelle et une affiche événementielle de standing international pour un sommet économique et technologique africain à Abidjan. Le visuel devait incarner le leadership africain, l'élégance contemporaine et la dynamique d'innovation technologique du continent.",
    solution: "Direction artistique haut de gamme combinant la photographie réaliste d'un cadre dirigeant africain charismatique, un environnement d'affaires vitré et lumineux aux reflets dorés, des trames de réseaux interconnectés et une typographie claire orientée corporate B2B.",
    contribution: "Création complète de l'univers visuel, travail de composition et éclairage cinématographique, hiérarchisation de l'information (date, lieu, thématique) et adaptation aux formats print grand format et affichage digital.",
    tools: ["Direction Artistique", "Design Publicitaire", "Photoshop", "Photomontage & Éclairage"],
    results: [
      "Visuel percutant et valorisant pour les partenaires et sponsors institutionnels",
      "Esthétique afro-futuriste et corporate parfaitement alignée avec le dynamisme économique ivoirien",
      "Format haute définition déclinable en 4x3, kakémono, affichage abribus et bannières web"
    ],
    images: ["/projects/abidjan-tech-forum.jpg"],
    featuredImage: "/projects/abidjan-tech-forum.jpg"
  },
  {
    id: "spots-publicitaires-video",
    slug: "spots-publicitaires-video",
    title: "Spots Publicitaires & Créations Vidéo",
    type: "Client",
    date: "2026",
    role: "Montage Vidéo, Motion Design & Direction Artistique",
    category: "Vidéo",
    needs: "Créer des formats publicitaires dynamiques, percutants et engageants pour booster la visibilité et l'impact commercial sur les plateformes numériques (TikTok, Instagram Reels, WhatsApp).",
    solution: "Production et montage de spots vidéo rythmés combinant un travail précis sur le son, le découpage, les transitions dynamiques et l'intégration de sous-titres et call-to-actions percutants.",
    contribution: "Scénarisation, sélection des plans, montage dynamique, sound design, colorimétrie et adaptation aux formats verticaux haute définition.",
    tools: ["Montage Vidéo", "Direction Artistique", "Sound Design", "Formats Verticaux (Reels/TikTok)"],
    results: [
      "Vidéos haute définition avec rendu fluide et dynamique",
      "Format vertical optimisé pour la viralité et la conversion sur mobile",
      "Rythme énergique captant l'attention dès les 3 premières secondes"
    ],
    images: [],
    videos: [
      "/videos/spot-publicitaire-1.mp4",
      "/videos/spot-publicitaire-2.mp4"
    ],
    featuredImage: "/videos/spot-publicitaire-1.mp4"
  }
];
