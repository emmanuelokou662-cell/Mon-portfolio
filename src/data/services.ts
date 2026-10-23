import { IService } from '../types';

export const servicesData: IService[] = [
  {
    id: "web",
    title: "Création de Sites Web & Applications",
    problem: "Les entreprises peinent souvent à posséder une plateforme en ligne qui reflète la qualité de leur offre, convertit leurs visiteurs et se charge rapidement sur tous les supports.",
    solution: "Je conçois des architectures web modernes, optimisées pour le référencement (SEO) et centrées sur l'expérience utilisateur, afin de transformer vos visiteurs en clients fidèles.",
    deliverables: ["Sites vitrines premium", "Applications Web (SaaS, Plateformes)", "Optimisation des performances et SEO", "Design responsive et accessible"],
    ctaText: "Créer votre plateforme web",
    image: "/services/service-web.jpg"
  },
  {
    id: "video",
    title: "Montage Vidéo Publicitaire",
    problem: "Capter l'attention sur les réseaux sociaux et plateformes publicitaires est devenu extrêmement complexe face à la surabondance de contenus.",
    solution: "Je réalise des montages dynamiques et percutants, calibrés pour l'engagement, afin de mettre en valeur vos produits, vos services ou votre marque de manière mémorable.",
    deliverables: ["Publicités courtes (Formats verticaux TikTok/Reels)", "Vidéos de présentation d'entreprise", "Colorimétrie professionnelle et Sound Design", "Vidéos promotionnelles de lancement"],
    ctaText: "Créer une vidéo impactante",
    image: "/services/service-video.jpg"
  },
  {
    id: "visuals",
    title: "Affiches & Communication Visuelle",
    problem: "Une image de marque incohérente ou au design daté dessert lourdement la crédibilité d'un événement, d'un produit ou d'une entreprise.",
    solution: "Je crée des visuels distinctifs, élégants et alignés avec les codes actuels du premium pour garantir l'impact de vos campagnes et supports de communication.",
    deliverables: ["Affiches événementielles", "Identité visuelle (Typographies, Logotypes)", "Créas pour campagnes d'acquisition (Ads)", "Bannières et posts réseaux sociaux"],
    ctaText: "Renforcer votre image de marque",
    image: "/services/service-visuals.jpg"
  },
  {
    id: "ai",
    title: "Solutions Numériques & Intégration IA",
    problem: "Les processus manuels répétitifs et l'absence d'outils modernes ralentissent fortement la productivité et la capacité d'innovation des entreprises.",
    solution: "J'audite vos besoins et j'intègre les dernières technologies d'Intelligence Artificielle pour automatiser vos flux de travail et augmenter votre production de contenu.",
    deliverables: ["Génération d'images et vidéos par IA", "Automatisation de processus métiers (Workflows)", "Outils conversationnels sur-mesure", "Audit et conseil technologique"],
    ctaText: "Explorer le potentiel de l'IA",
    image: "/services/service-ai.jpg"
  }
];
