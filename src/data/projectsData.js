import mockup1 from "../assets/img/Oh my food/mockup-oh-my-food.webp";
import mockup2 from "../assets/img/ArgentBank/mockup-argent-bank.webp";
import mockup3 from "../assets/img/Yesss/mockup-yesss.webp";
import mockup4 from "../assets/img/CRCM/mockup-crcm.webp";
import accueilOhmyfood from "../assets/img/Oh my food/page-accueil-anim-btn-oh-my-food.webp";
import restauOhmyfood from "../assets/img/Oh my food/page-restaurant-oh-my-food.webp";
import restauAnime1Ohmyfood from "../assets/img/Oh my food/page-restaurant-animation-oh-my-food.webp";
import restauAnime2Ohmyfood from "../assets/img/Oh my food/page-restaurant-animation-2-oh-my-food.webp";
import videoArgentBank from "../assets/img/ArgentBank/capture-video-argent-bank.mp4";
import Projet1Yesss from "../assets/img/Yesss/page-projet-individuel-yesss.webp";
import Projet2Yesss from "../assets/img/Yesss/page-projet-individeul-2-yesss.webp";
import VideoAccueilYesss from "../assets/img/Yesss/capture-vidéo-accueil-yesss.mp4";
import VideoProjetYesss from "../assets/img/Yesss/capture-videos-projet-yesss.mp4";
import VideoCrcm from "../assets/img/CRCM/capture-video-accueil-crcm.mp4";

export const projects = [
  {
    id: 1,
    title: "Projet formation : OhmyFood",
    tech: "HTML/SCSS",
    color: "#e389df",
    img: mockup1,
    link: "/project/1",
    // --- PAGE DÉTAIL ---
    subtitle: "Mobile first / Animation CSS",
    context:
      "Oh My Food est un site web de réservation innovant permettant aux clients de composer leur menu en amont pour éviter l'attente en restaurant. Ce projet d'intégration web met l'accent sur l'expérience utilisateur mobile et l'interactivité visuelle.",
    objectives:
      "Développer une interface mobile-first entièrement responsive avec des animations CSS engageantes pour illustrer le parcours utilisateur. Le défi principal consistait à créer une expérience fluide et moderne tout en respectant les contraintes d'un développement en HTML/CSS pur.",
    stackIcons: ["Html5", "Sass", "Css3"],
    stackDetailed:
      "HTML5, SCSS (préprocesseur CSS) pour une architecture de styles modulaire et maintenable. Approche mobile-first avec animations CSS natives, sans framework JavaScript.",
    skills:
      " Maîtrise des animations CSS (transitions, keyframes, transforms) pour créer des interactions visuelles attractives. Approfondissement de SCSS avec l'utilisation de variables et mixins pour optimiser l'organisation du code. Gestion de la complexité technique sur certaines animations avancées. ",
    results:
      "Livraison d'un site pleinement fonctionnel et responsive, avec des animations fluides enrichissant l'expérience utilisateur. L'interface mobile-first garantit une accessibilité optimale sur tous les supports.",
    improvements:
      "Avec mon expérience actuelle, j'optimiserais certaines animations pour les rendre plus fluides. J'ajouterais également des micro-interactions plus élaborées et j'explorerais les animations au scroll pour enrichir l'expérience utilisateur.",
    github: "https://github.com/Gaelle-M/OC_3_ohmyfood",
    demo: "https://gaelle-m.github.io/OC_3_ohmyfood/",
    media: [
      { type: "image", url: mockup1, alt: "Mockup réalisé avec la page d'accueil pour le site OhmyFoud" },
      { type: "image", url: accueilOhmyfood, alt: "Capture d'écran de la page d'accueil du site OhmyFoud" },
      { type: "image", url: restauOhmyfood, alt:"Capture d'écran de la page restaurant du site OhmyFoud" },
      { type: "image", url: restauAnime1Ohmyfood, alt: "Capture d'écran de la page restaurant du site OhmyFoud, montrant une animation" },
      { type: "image", url: restauAnime2Ohmyfood, alt:"Capture d'écran de la page restaurant du site OhmyFoud, montrant une animation" },
    ],
  },
  {
    id: 2,
    title: "Projet formation : ArgentBank",
    tech: "REACT/SCSS/Redux/TypeScript",
    color: "#00bc77",
    img: mockup2,
    link: "/project/2",
    // --- PAGE DÉTAIL ---
    subtitle: "Application de banque en ligne",
    context:
      "Dans le cadre du lancement d'une nouvelle banque en ligne, j'ai dû transformer un site statique en une application web dynamique et évolutive.",
    objectives:
      " L'enjeu principal était d'implémenter un système d'authentification sécurisé et de permettre la gestion en temps réel des profils utilisateurs. ",
    stackIcons: ["React", "Sass", "Redux", "Typescript"],
    stackDetailed:
      "L'application utilise REACT et TypeScript pour la structure, Redux Toolkit pour la gestion d'état global, et SCSS pour le stylage. ",
    skills:
      "Architecture de données complexe avec Redux, intégration d'API REST et modélisation de routes via Swagger.",
    results:
      " Le livrable est une plateforme réactive et sécurisée où l'utilisateur peut se connecter et modifier ses informations de manière fluide.",
    improvements:
      "Une optimisation future inclurait l'implémentation complète des endpoints de transactions bancaires et l'ajout de tests unitaires pour sécuriser les fonctionnalités critiques.",
    github: " https://github.com/Gaelle-M/OC_9_ArgentBank",
    media: [
      { type: "image", url: mockup2, alt:"Mockup réalisé avec la page d'accueil pour l'application ArgentBank" },
      { type: "video", url: videoArgentBank, alt: "Capture d'écran vidéo de l'application ArgentBank" },
    ],
  },
  {
    id: 3,
    title: "Projet alternance : Yesss Communication",
    tech: "WordPress/Betheme/Éco-conception",
    color: "#18b4b9",
    img: mockup3,
    link: "/project/3",
    // --- PAGE DÉTAIL ---
    subtitle: "Agence de communication à Marseille",
    context:
      "Refonte complète du site vitrine de Yesss Communication, agence de communication marseillaise, dans le cadre de mon alternance. Ce projet stratégique visait à moderniser la présence digitale de l'agence tout en intégrant une démarche d'éco-conception web.",
    objectives:
      "Créer un site performant et attractif tout en respectant les principes d'éco-conception pour réduire l'empreinte environnementale. Le défi était de trouver l'équilibre entre animations engageantes, design moderne et optimisation des ressources pour un site léger et responsable.",
    stackIcons: ["Wordpress", "Betheme", "dataCampus"],
    stackDetailed:
      "CMS : WordPress avec thème BeTheme / Frontend : HTML/CSS, animations CSS et JavaScript SEO & / Performance : Optimisation technique et référencement naturel / Hébergement : Serveur vert pour réduire l'impact carbone.",
    skills:
      "J'ai développé mon expertise WordPress en personnalisant un thème premium et en gérant l'intégralité du projet de la conception à la mise en production. La gestion du SEO technique et l'apprentissage des bonnes pratiques d'éco-conception (optimisation des médias, limitation des requêtes) ont été des défis enrichissants.",
    results:
      "Mise en ligne réussie d'un site professionnel alliant esthétique et performance, hébergé sur infrastructure verte. L'approche éco-responsable a permis de réduire le poids des pages tout en conservant une expérience utilisateur qualitative et un référencement optimisé.",
    improvements:
      "Je souhaite continuer l'optimisation des performances en améliorant les scores de toutes les pages. L'objectif est d'alléger davantage les assets et d'affiner les animations pour atteindre un équilibre optimal entre impact visuel et sobriété numérique.",
    demo: "https://www.yesss-communication.fr/",
    media: [
      { type: "image", url: mockup3, alt: "Mockup réalisé avec la page d'accueil pour le site Yesss Communication" },
      { type: "image", url: Projet1Yesss, alt: "Capture d'écran montrant une page projet du site Yesss Communication" },
      { type: "image", url: Projet2Yesss, alt: "Capture d'écran montrant une page projet du site Yesss Communication" },
      { type: "video", url: VideoAccueilYesss, alt: "Capture vidéo de la page d'accueil du site Yesss Communication" },
      { type: "video", url: VideoProjetYesss, alt: "Capture vidéo de la projet d'accueil du site Yesss Communication" },
    ],
  },
  {
    id: 4,
    title: "Projet alternance : Crcm",
    tech: "WordPress/Betheme",
    color: "#e9640d",
    img: mockup4,
    link: "/project/4",
    // --- PAGE DÉTAIL ---
    subtitle: "Centre de recherche en cancérologie de Marseille",
    context:
      "Développement du site institutionnel du Centre de Recherche en Cancérologie de Marseille dans le cadre de mon alternance. Ce projet d'envergure devait valoriser les activités de recherche du centre tout en structurant une importante base de données d'équipes et de membres.",
    objectives:
      "Créer un site bilingue (français/anglais) capable de gérer efficacement de nombreuses équipes et membres tout en maintenant des performances optimales. Le principal défi était d'organiser et d'afficher un volume conséquent de contenus sans compromettre la fluidité de navigation et les temps de chargement.",
    stackIcons: ["Wordpress", "Betheme", "dataCampus"],
    stackDetailed:
      "CMS : WordPress avec gestion multilingue / Optimisation : Plugins de performance et mise en cache, système de gestion de membres personnalisé / Hébergement : Serveur vert / Architecture : Structure modulaire pour faciliter la maintenance des pages équipes / SEO : Référencement naturel.",
    skills:
      "J'ai renforcé ma capacité à gérer des projets WordPress complexes avec volumes de données importants et contraintes multilingues. La recherche et configuration de plugins adaptés, ainsi que l'optimisation des performances sur un site dense, ont développé mes compétences en architecture web et en gestion de contenu à grande échelle.",
    results:
      "Livraison d'un site bilingue fonctionnel, structuré pour accueillir l'ensemble des équipes et membres du centre de recherche. La mise en place d'une solution optimisée a permis de gérer efficacement un volume important de données tout en restant sur un hébergement éco-responsable.",
    improvements:
      "Je prévois d'optimiser davantage la fluidité du site en affinant le lazy loading des images et en restructurant certaines requêtes de base de données. L'objectif est de réduire encore les temps de chargement pour offrir une navigation plus rapide malgré la densité du contenu.",
    demo: "https://crcm-marseille.fr/",
    media: [
      { type: "image", url: mockup4, alt: "Mockup réalisé avec la page accueil du site CRCM" },
      { type: "video", url: VideoCrcm, alt: "Capture d'écran vidéo de la page accueil du site du CRCM" },
    ],
  },
];
