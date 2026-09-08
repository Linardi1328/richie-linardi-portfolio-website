export type BasketballSource = {
  label: string;
  href: string;
};

export type BasketballAchievement = {
  year: string;
  category: string;
  title: string;
  detail: string;
  source: BasketballSource;
  featured?: boolean;
};

export type BasketballSeasonStat = {
  season: string;
  context: string;
  games: number;
  points: number;
  rebounds: number;
  assists: number;
  shooting?: string;
  source: BasketballSource;
};

export const basketballSources = {
  dblProfile: {
    label: "DBL Indonesia player profile",
    href: "https://www.dbl.id/u/profile/27842/richie-bertrand-linardi",
  },
  dblAllStar: {
    label: "DBL Indonesia · All-Star 2024 roster",
    href: "https://www.dbl.id/r/19689/skuad-putra-kopi-good-day-dbl-indonesia-all-star-2024",
  },
  dblAcademy: {
    label: "DBL Indonesia · Academy journey",
    href: "https://www.dbl.id/r/23090/begini-wejangan-richie-dan-kennie-untuk-dbl-academy-selection-team-2024",
  },
  dblFirstTeam: {
    label: "DBL Indonesia · Gloria 1 final run",
    href: "https://www.dbl.id/r/19150/richie-bertrand-dan-kenangan-manis-bawa-gloria-1-ke-partai-final",
  },
  asg: {
    label: "Kemenpora · ASEAN Schools Games 2024",
    href: "https://www.kemenpora.go.id/detail/5038/kalahkan-filipina-tim-bola-basket-putra-indonesia-akhiri-asean-schools-games-2024-dengan-emas",
  },
  asgBox: {
    label: "IBL Indonesia · ASG 2024 final",
    href: "https://iblindonesia.com/news/timnas-putra-indonesia-sabet-medali-emas-asg-2024",
  },
  fiba: {
    label: "FIBA player profile",
    href: "https://www.fiba.basketball/en/players/370084-richie-bertrand-linardi",
  },
} as const satisfies Record<string, BasketballSource>;

export const basketballAchievements: readonly BasketballAchievement[] = [
  {
    year: "2024",
    category: "Indonesia · ASEAN Schools Games",
    title: "ASEAN Schools Games gold medal",
    detail:
      "Indonesia defeated the Philippines 56–54 in the boys' basketball final. Richie contributed 12 points and 4 rebounds in the title game.",
    source: basketballSources.asgBox,
    featured: true,
  },
  {
    year: "2024",
    category: "DBL Indonesia",
    title: "DBL Indonesia All-Star",
    detail:
      "Selected to the 2024 Kopi Good Day DBL Indonesia All-Star boys' roster after a third DBL Camp appearance.",
    source: basketballSources.dblAllStar,
  },
  {
    year: "2023",
    category: "SMA Gloria 1 Surabaya",
    title: "East Java runner-up and First Team",
    detail:
      "Gloria 1 reached the East Java final, and Richie was selected to the Kopi Good Day First Team East Java.",
    source: basketballSources.dblFirstTeam,
  },
  {
    year: "2016",
    category: "Development",
    title: "Joined DBL Academy",
    detail:
      "The long-term development chapter began at DBL Academy in 2016, before later Selection Team and All-Star appearances.",
    source: basketballSources.dblAcademy,
  },
] as const;

export const dblSeasonStats: readonly BasketballSeasonStat[] = [
  {
    season: "2019",
    context: "Junior DBL East Java · SMP IPH West",
    games: 3,
    points: 21,
    rebounds: 19,
    assists: 1,
    source: basketballSources.dblProfile,
  },
  {
    season: "2021",
    context: "Honda DBL East Java · SMA Gloria 1",
    games: 5,
    points: 60,
    rebounds: 35,
    assists: 3,
    source: basketballSources.dblProfile,
  },
  {
    season: "2022",
    context: "KFC DBL East Java North Region · SMA Gloria 1",
    games: 4,
    points: 52,
    rebounds: 21,
    assists: 13,
    source: basketballSources.dblProfile,
  },
  {
    season: "2023",
    context: "Kopi Good Day DBL East Java · SMA Gloria 1",
    games: 10,
    points: 121,
    rebounds: 84,
    assists: 25,
    shooting: "58.5 FG% · 45.0 3PT% · 72.4 FT%",
    source: basketballSources.dblProfile,
  },
] as const;

export const fibaU18Snapshot = {
  competition: "FIBA U18 Asia Cup 2024",
  games: 3,
  ppg: 5.3,
  rpg: 3.0,
  apg: 0.7,
  efficiency: 2.3,
  source: basketballSources.fiba,
} as const;

export const basketballIdentityFacts = [
  "DBL Academy development pathway since 2016",
  "SMA Gloria 1 Surabaya athlete",
  "DBL Indonesia All-Star 2024",
  "Indonesia · ASEAN Schools Games 2024 gold",
  "Indonesia · FIBA U18 Asia Cup 2024",
] as const;
