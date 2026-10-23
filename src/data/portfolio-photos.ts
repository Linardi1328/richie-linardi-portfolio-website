export const portfolioPhotos = {
  professional: {
    src: "/images/portfolio/richie-professional.webp",
    width: 1800,
    height: 1800,
    alt: "Richie Linardi in a black blazer and white shirt",
    caption: "Richie Linardi · Data Science & Applied AI",
    route: "/about",
  },
  monash: {
    src: "/images/portfolio/monash-campus.webp",
    width: 1013,
    height: 1800,
    alt: "Richie standing outside the Monash University Malaysia entrance",
    caption: "Monash University Malaysia · Computer Science / Data Science",
    route: "/education",
  },
  hackathon: {
    src: "/images/portfolio/ai-video-hackathon-kl-2026.webp",
    width: 1350,
    height: 1800,
    alt: "Richie beside the AI Video Hackathon KL 2026 event banner",
    caption: "AI Video Hackathon KL 2026 · Midnight Owls",
    route: "/experience",
  },
  gold: {
    src: "/images/portfolio/asg-2024-gold-medal.webp",
    width: 1350,
    height: 1800,
    alt: "Richie holding his gold medal while wearing Indonesia team kit",
    caption: "ASEAN Schools Games 2024 · Gold medal · Da Nang, Vietnam",
    route: "/basketball/gallery",
  },
  team: {
    src: "/images/portfolio/asg-2024-team.webp",
    width: 1200,
    height: 1600,
    alt: "Indonesia teammates celebrating together with their ASG gold medals",
    caption: "Indonesia · ASEAN Schools Games 2024 team celebration",
    route: "/basketball/gallery",
  },
  allStar: {
    src: "/images/portfolio/dbl-indonesia-all-star-2024.webp",
    width: 1800,
    height: 1200,
    alt: "Richie dribbling in a red Indonesia number 13 All-Star uniform",
    caption: "DBL Indonesia All-Star 2024 · Richie Linardi / No. 13",
    route: "/basketball",
  },
} as const;

export type PortfolioPhotoId = keyof typeof portfolioPhotos;
