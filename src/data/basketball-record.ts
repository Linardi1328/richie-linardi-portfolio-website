export type BasketballSource = {
  label: string;
  href: string;
};

export type BasketballAchievement = {
  year: string;
  category: string;
  title: string;
  detail: string;
  source?: BasketballSource;
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
  fgPct?: string;
  threePtPct?: string;
  ftPct?: string;
  source: BasketballSource;
};

export const basketballSources = {
  dblProfile: {
    label: "DBL Indonesia · Richie player profile",
    href: "https://www.dbl.id/u/profile/27842/richie-bertrand-linardi",
  },
  dblTag: {
    label: "DBL Indonesia · Richie coverage archive",
    href: "https://www.dbl.id/tag/5037/richie-bertrand-linardi",
  },
  dblAllStar: {
    label: "DBL Indonesia · All-Star 2024 roster",
    href: "https://www.dbl.id/r/19689/skuad-putra-kopi-good-day-dbl-indonesia-all-star-2024",
  },
  dblAcademy: {
    label: "DBL Indonesia · Academy retrospective",
    href: "https://www.dbl.id/r/23090/begini-wejangan-richie-dan-kennie-untuk-dbl-academy-selection-team-2024",
  },
  dblFirstTeam: {
    label: "DBL Indonesia · Gloria 1 final run",
    href: "https://www.dbl.id/r/19150/richie-bertrand-dan-kenangan-manis-bawa-gloria-1-ke-partai-final",
  },
  dblThailand: {
    label: "Detik Sport · Selection Team Thailand 2018",
    href: "https://sport.detik.com/basket/d-4164131/para-pebasket-muda-indonesia-ini-ikut-turnamen-di-thailand",
  },
  dblMalaysia: {
    label: "DBL Indonesia · Selection Team Malaysia 2019",
    href: "https://www.dbl.id/r/74/giliran-tim-dbl-academy-selection-ku-13-sabet-runner-up-di-malaysia",
  },
  dblVegas: {
    label: "DBL Indonesia · Impact Basketball Las Vegas 2022",
    href: "https://www.dbl.id/r/9522/ikuti-program-dbl-academy-richie-bertrand-punya-impian-jadi-pemain-profesional",
  },
  dblPerth: {
    label: "DBL Indonesia · Selection Team Australia 2022",
    href: "https://www.dbl.id/r/11064/dbl-academy-selection-team-berangkat-ke-australia",
  },
  asgBox: {
    label: "IBL Indonesia · ASG 2024 final box score",
    href: "https://iblindonesia.com/news/timnas-putra-indonesia-sabet-medali-emas-asg-2024",
  },
  fiba: {
    label: "FIBA player profile",
    href: "https://www.fiba.basketball/en/players/370084-richie-bertrand-linardi",
  },
  fiba3x3: {
    label: "FIBA 3x3 player profile",
    href: "https://play.fiba3x3.com/players/6d9184cf-ffc7-42c9-ad68-82d735b1a245",
  },
  porprov2023: {
    label: "Lenza Nasional · PorProv VIII 2023 final report",
    href: "https://lenzanasional.com/kota-surabaya-kawinkan-gelar-basket-5-x-5-porprov-viii-jatim-2023/",
  },
  basketyuk: {
    label: "Basketyuk · Kualifikasi Kejurnas KU-17 Wilayah 5",
    href: "https://basketyuk.id/event/atlet-detail/kualifikasi-kejurnas-ku-17-wilayah-5?d=YWEyNzQzYTY1YmNiOWE3MzY5ZTMwYWY3ODE3ZDVhZWM3ZjIxMzczOTUxZDZiZmMyODIxZDdjMzcxNzYzYjJmOTMzYThkMmU0N2IxNWVkOTFjMGQwNjg1NzdhZmNkM2EzMTE3YTg2MDYyMDllNWI0OTQ3MjE5NTFjZTliZTk1MWNmeDl0UitoYlRDdlE3UlRLOElpNHhHYUFmbE5JZTh5OS9JeHlVdzNqMnIxbEhYRTNYOVR0ZjFyb2xrbkp4SzhwUXFjLytQak9QVDdmSm50d2tDS2J3WEUvS1BXYkt5RGF0bW5CZnp5Qm9rZVpuc1hiYitLd21iVGxmM3J2RlQvWDN2bnRCNnhjL0JOOFl3SWdzSC82VHc9PQ==",
  },
  basketyukFgLeaderboard: {
    label: "Basketyuk · KU-17 Top Player Average Field Goal Leaderboard",
    href: "https://basketyuk.id/top-player/kualifikasi-kejurnas-ku-17-wilayah-5/avg-goal/24",
  },
  sofascore: {
    label: "Sofascore · Richie Bertrand Linardi profile",
    href: "https://www.sofascore.com/basketball/player/richie-bertrand-linardi/2271130",
  },
  instagramWbs: {
    label: "Western Basketball Surabaya Instagram",
    href: "https://www.instagram.com/westernbasketballsurabaya/",
  },
  instagramCls: {
    label: "Cahaya Lestari Surabaya Instagram",
    href: "https://www.instagram.com/cahayalesterisurabaya/",
  },
  instagramAces: {
    label: "Aces Basketball Surabaya Instagram",
    href: "https://www.instagram.com/ace.basketball__/",
  },
  instagramHornbills: {
    label: "KL Hornbills Instagram",
    href: "https://www.instagram.com/kl_hornbills/",
  },
  majorLeagueHeat2025Stats: {
    label: "Major League Malaysia · Heat Challenge Cup 2025 statistics",
    href: "https://www.majorleague.com.my/Home/Matches?&WHurl=%2Fcompetition%2F42425%2Fperson%2F2501959%2Fstatistics%3F",
  },
  majorLeagueHeat2025GameLog: {
    label: "Major League Malaysia · Heat Challenge Cup 2025 game log",
    href: "https://www.majorleague.com.my/Home/Matches?&WHurl=%2Fcompetition%2F42425%2Fperson%2F2501959%2Fgamelog%3F",
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
    category: "Kota Surabaya · PorProv VIII",
    title: "PorProv VIII 5v5 champion",
    detail:
      "Represented Kota Surabaya in the East Java Provincial Games, scoring 21 points and 7 rebounds in the 93–57 gold medal final victory.",
    source: basketballSources.porprov2023,
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
    fgPct: "58.2%",
    threePtPct: "20.0%",
    ftPct: "89.5%",
    shooting: "58.2 FG% · 20.0 3PT% · 89.5 FT%",
    source: basketballSources.dblProfile,
  },
  {
    season: "2022",
    context: "KFC DBL East Java North Region · SMA Gloria 1",
    games: 4,
    points: 52,
    rebounds: 21,
    assists: 13,
    fgPct: "61.6%",
    threePtPct: "0.0%",
    ftPct: "66.7%",
    shooting: "61.6 FG% · 0.0 3PT% · 66.7 FT%",
    source: basketballSources.dblProfile,
  },
  {
    season: "2023",
    context: "Kopi Good Day DBL East Java · SMA Gloria 1",
    games: 10,
    points: 121,
    rebounds: 84,
    assists: 25,
    fgPct: "58.5%",
    threePtPct: "45.0%",
    ftPct: "72.4%",
    shooting: "58.5 FG% · 45.0 3PT% · 72.4 FT%",
    source: basketballSources.dblProfile,
  },
] as const;

export const fibaU18Snapshot = {
  competition: "FIBA U18 Asia Cup 2024",
  location: "Amman, Jordan",
  games: 3,
  ppg: 5.3,
  rpg: 3.0,
  apg: 0.7,
  efficiency: 2.3,
  contextNote:
    "Continental tournament play with Indonesia at the FIBA U18 Asia Cup in Amman, Jordan.",
  source: basketballSources.fiba,
} as const;

export type AsgFinalSnapshot = {
  competition: string;
  context: string;
  title: string;
  badge: string;
  team: string;
  opponent: string;
  score: string;
  scoreAriaLabel: string;
  resultSummary: string;
  stage: string;
  points: number;
  rebounds: number;
  location?: string;
  contextNote: string;
  source: BasketballSource;
};

export const asg2024FinalSnapshot = {
  competition: "ASEAN Schools Games 2024",
  context: "INDONESIA · ASG 2024",
  title: "ASEAN Schools Games Title Game",
  badge: "Gold Medal Final",
  team: "Indonesia",
  opponent: "Philippines",
  score: "56 — 54",
  scoreAriaLabel: "Final score: Indonesia 56, Philippines 54",
  resultSummary: "Final Score · Indonesia defeated Philippines",
  stage: "Title Game",
  points: 12,
  rebounds: 4,
  location: "Da Nang, Vietnam",
  contextNote:
    "Contributed 12 points and 4 rebounds in the boys' basketball gold medal final against the Philippines in Da Nang, Vietnam.",
  source: basketballSources.asgBox,
} as const satisfies AsgFinalSnapshot;

export const porprovViiiFinalSnapshot = {
  competition: "PorProv Jatim VIII 2023",
  context: "KOTA SURABAYA · PORPROV VIII 2023",
  title: "PorProv VIII 5v5 Championship Final",
  badge: "Champion · Gold Medal",
  team: "Kota Surabaya",
  opponent: "Kabupaten Jember",
  score: "93 — 57",
  scoreAriaLabel: "Final score: Kota Surabaya 93, Kabupaten Jember 57",
  resultSummary: "Final Score · Kota Surabaya defeated Kabupaten Jember",
  stage: "Championship Final",
  points: 21,
  rebounds: 7,
  location: "GOR Delta, Sidoarjo",
  contextNote:
    "Contributed 21 points and 7 rebounds in Kota Surabaya's 93–57 gold medal final victory over Kabupaten Jember at GOR Delta, Sidoarjo.",
  source: basketballSources.porprov2023,
} as const;

export const kejurnasKu17Snapshot = {
  competition: "Kualifikasi Kejurnas KU-17 Wilayah 5",
  context: "CLS / CAHAYA LESTARI SURABAYA · INTER-CLUB QUALIFICATION",
  title: "Kualifikasi Kejurnas KU-17 Wilayah 5 · CLS Surabaya",
  badge: "Official Tournament Statistics",
  team: "CLS Surabaya",
  games: 3,
  minutes: "58:27",
  efficiency: 31,
  points: 31,
  rebounds: 12,
  assists: 3,
  steals: 2,
  blocks: 2,
  fieldGoalPct: "64.29%",
  fgRank: "Rank #1",
  contextNote:
    "Recorded 31 points, 12 rebounds, 3 assists, 2 steals, and 2 blocks across 58:27 minutes in 3 games representing CLS / Cahaya Lestari Surabaya in the Kejurnas KU-17 Wilayah 5 inter-club qualification pathway, leading the tournament with 64.29% field-goal shooting.",
  source: basketballSources.basketyuk,
  leaderboardSource: basketballSources.basketyukFgLeaderboard,
} as const;

export const heatChallenge2025Snapshot = {
  competition: "Heat Challenge Cup 2025",
  context: "KL HORNBILLS · INVITATIONAL CLUB COMPETITION",
  title: "Heat Challenge Cup 2025 · KL Hornbills",
  badge: "Official Tournament Statistics",
  team: "KL Hornbills",
  location: "Kuala Lumpur, Malaysia",
  games: 6,
  minutes: "29:51",
  mpg: "5.0", // Published by Major League Malaysia
  points: 16,
  ppg: "2.7", // Published by Major League Malaysia
  rebounds: 5,
  rpg: "0.8", // Published by Major League Malaysia (all 5 offensive)
  assists: 0,
  apg: "0.0", // Published by Major League Malaysia
  steals: 1,
  stpg: "0.2", // Published by Major League Malaysia
  blocks: 0,
  blkpg: "0.0", // Published by Major League Malaysia
  fieldGoalPct: "43.8%", // Published by Major League Malaysia (7/16)
  fieldGoalsMade: 7,
  fieldGoalsAttempted: 16,
  twoPointPct: "54.5%", // Published by Major League Malaysia (6/11)
  twoPointsMade: 6,
  twoPointsAttempted: 11,
  threePointPct: "20.0%", // Published by Major League Malaysia (1/5)
  threePointsMade: 1,
  threePointsAttempted: 5,
  freeThrowPct: "16.7%", // Published by Major League Malaysia (1/6)
  freeThrowsMade: 1,
  freeThrowsAttempted: 6,
  efficiency: 7.0, // Published by Major League Malaysia
  singleGameHigh: {
    date: "Sep 19, 2025",
    opponent: "Selangor BA",
    minutes: "15:41",
    points: 14,
    rebounds: 3,
    steals: 1,
    shooting: "6/9 FG (66.7%) · 1/2 3PT",
    efficiency: 11.0,
  },
  contextNote:
    "Contested 6 games for KL Hornbills in the Heat Challenge Cup 2025 in Malaysia, recording 16 points (2.7 PPG), 5 rebounds, 1 steal, and 43.8% field-goal shooting in 29:51 minutes, highlighted by a 14-point performance against Selangor BA. All statistics officially published by Major League Malaysia.",
  source: basketballSources.majorLeagueHeat2025Stats,
  gameLogSource: basketballSources.majorLeagueHeat2025GameLog,
} as const;

export type AthleteVerificationStatus =
  "verified" | "owner-provided" | "source-pending";

export type AthleteCompetitionDiscipline = "5v5" | "3x3";

export type AthleteCompetitionLevel =
  | "school"
  | "club"
  | "city-provincial"
  | "national-pathway"
  | "international"
  | "university";

export type AthleteCareerClaim = {
  label: string;
  verificationStatus: AthleteVerificationStatus;
  source?: BasketballSource;
};

export type AthleteCareerRecord = {
  id: string;
  year: string;
  event: string;
  discipline: AthleteCompetitionDiscipline;
  level: AthleteCompetitionLevel;
  team: string;
  result: string;
  resultVerificationStatus?: AthleteVerificationStatus;
  location?: string;
  statLine?: string;
  statVerificationStatus?: AthleteVerificationStatus;
  claims?: readonly AthleteCareerClaim[];
  roleContext?: string;
  sources: readonly BasketballSource[];
  verificationStatus: AthleteVerificationStatus;
  homepagePriority?: boolean;
  featured?: boolean;
  tier: "signature" | "major" | "continuing";
};

export const athleteCareerRecords: readonly AthleteCareerRecord[] = [
  {
    id: "asg-2024",
    year: "2024",
    event: "ASEAN Schools Games 2024",
    discipline: "5v5",
    level: "international",
    team: "Indonesia",
    result: "Gold Medal · Champion",
    location: "Da Nang, Vietnam",
    statLine: "12 PTS · 4 REB in Final (56–54 vs Philippines)",
    roleContext:
      "Contributed 12 PTS / 4 REB in boys' championship final victory",
    sources: [basketballSources.asgBox],
    verificationStatus: "verified",
    homepagePriority: true,
    featured: true,
    tier: "signature",
  },
  {
    id: "fiba-u18-2024",
    year: "2024",
    event: "FIBA U18 Asia Cup 2024",
    discipline: "5v5",
    level: "international",
    team: "Indonesia",
    result: "Continental Championship Play",
    location: "Amman, Jordan",
    statLine: "3 GP · 5.3 PPG · 3.0 RPG · 0.7 APG · 2.3 EFF",
    roleContext: "Representing Indonesia in Group Stage continental play",
    sources: [basketballSources.fiba],
    verificationStatus: "verified",
    homepagePriority: true,
    featured: true,
    tier: "signature",
  },
  {
    id: "dbl-allstar-2024",
    year: "2024",
    event: "DBL Indonesia All-Star 2024",
    discipline: "5v5",
    level: "national-pathway",
    team: "Kopi Good Day DBL Indonesia All-Star",
    result: "All-Star Roster Selection",
    location: "Jakarta, Indonesia",
    statLine: "Selected to the 2024 DBL Indonesia All-Star boys roster",
    roleContext:
      "Selected to the 2024 DBL Indonesia All-Star boys roster following third DBL Camp appearance",
    sources: [basketballSources.dblAllStar],
    verificationStatus: "verified",
    homepagePriority: true,
    featured: true,
    tier: "signature",
  },
  {
    id: "dbl-academy-graduation-2024",
    year: "2024",
    event: "DBL Academy Graduation",
    discipline: "5v5",
    level: "club",
    team: "DBL Academy",
    result: "Graduated from DBL Academy (2016–2024)",
    location: "Surabaya, Indonesia",
    roleContext:
      "Concluded eight-year player development curriculum from foundational training through Selection Team tours",
    sources: [],
    verificationStatus: "owner-provided",
    tier: "continuing",
  },
  {
    id: "porprov-viii-2023",
    year: "2023",
    event: "PorProv Jatim VIII 2023 (5v5)",
    discipline: "5v5",
    level: "city-provincial",
    team: "Kota Surabaya",
    result: "Champion · Gold Medal",
    location: "GOR Delta, Sidoarjo",
    statLine: "21 PTS · 7 REB in Final (93–57 vs Jember)",
    roleContext: "Contributed 21 PTS / 7 REB in gold medal championship win",
    sources: [basketballSources.porprov2023],
    verificationStatus: "verified",
    homepagePriority: true,
    featured: true,
    tier: "signature",
  },
  {
    id: "pra-pon-xxi-2023",
    year: "2023",
    event: "Pra-PON XXI 2023 (5v5)",
    discipline: "5v5",
    level: "national-pathway",
    team: "Jawa Timur",
    result: "Qualified for PON XXI 2024",
    location: "Indonesia",
    roleContext:
      "Provincial squad selection and national qualification tournament",
    sources: [],
    verificationStatus: "owner-provided",
    homepagePriority: true,
    tier: "major",
  },
  {
    id: "dbl-east-java-2023",
    year: "2023",
    event: "Honda DBL East Java 2023",
    discipline: "5v5",
    level: "school",
    team: "SMA Gloria 1 Surabaya",
    result: "East Java Runner-Up · First Team",
    location: "Surabaya, Indonesia",
    statLine:
      "10 GP · 121 PTS · 84 REB · 25 AST (58.5 FG% · 45.0 3PT% · 72.4 FT%)",
    roleContext:
      "Gloria 1 reached the East Java final; Richie earned DBL East Java First Team honors",
    sources: [basketballSources.dblFirstTeam, basketballSources.dblProfile],
    verificationStatus: "verified",
    homepagePriority: true,
    tier: "major",
  },
  {
    id: "dbl-east-java-2022",
    year: "2022",
    event: "KFC DBL East Java North Region 2022",
    discipline: "5v5",
    level: "school",
    team: "SMA Gloria 1 Surabaya",
    result: "Sweet Sixteen · North Region",
    location: "Surabaya, Indonesia",
    statLine: "4 GP · 52 PTS · 21 REB · 13 AST",
    roleContext: "North Region tournament campaign with SMA Gloria 1",
    sources: [basketballSources.dblProfile],
    verificationStatus: "verified",
    tier: "major",
  },
  {
    id: "dbl-east-java-2021",
    year: "2021",
    event: "Honda DBL East Java 2021",
    discipline: "5v5",
    level: "school",
    team: "SMA Gloria 1 Surabaya",
    result: "Fantastic Four · Second Team",
    location: "Surabaya, Indonesia",
    statLine: "5 GP · 60 PTS · 35 REB · 3 AST",
    roleContext:
      "High-school varsity debut season reaching semifinal round with DBL East Java Second Team honors",
    sources: [basketballSources.dblProfile],
    verificationStatus: "verified",
    tier: "major",
  },
  {
    id: "kejurnas-ku17-2023",
    year: "2023",
    event: "Kualifikasi Klub Kejurnas U-17 · 2023",
    discipline: "5v5",
    level: "club",
    team: "CLS Surabaya",
    result: "Champion · CLS Surabaya",
    resultVerificationStatus: "owner-provided",
    location: "Surabaya, Indonesia",
    statLine:
      "3 GP · 58:27 MIN · 31 PTS · 12 REB · 3 AST · 2 STL · 2 BLK · EF 31 · 64.29 FG% (Rank #1)",
    statVerificationStatus: "verified",
    claims: [
      {
        label: "Champion · CLS Surabaya",
        verificationStatus: "owner-provided",
      },
      {
        label: "3 GP · 31 PTS · 12 REB · 3 AST · 2 STL · 2 BLK · EF 31",
        verificationStatus: "verified",
        source: basketballSources.basketyuk,
      },
      {
        label: "64.29 FG% · Rank #1",
        verificationStatus: "verified",
        source: basketballSources.basketyukFgLeaderboard,
      },
    ],
    roleContext:
      "Inter-club qualification tournament with CLS Surabaya; official tournament totals and 64.29 FG% / rank #1 leaderboard verified via Basketyuk; Champion result owner-provided pending published classification report",
    sources: [
      basketballSources.basketyuk,
      basketballSources.basketyukFgLeaderboard,
    ],
    verificationStatus: "owner-provided",
    tier: "major",
  },
  {
    id: "kejurnas-u16-3x3-2023",
    year: "2023",
    event: "Kejurnas U16 3x3 2023",
    discipline: "3x3",
    level: "national-pathway",
    team: "Jawa Timur",
    result: "Champion · National Gold",
    location: "Indonesia",
    roleContext: "Provincial 3x3 selection squad championship run",
    sources: [],
    verificationStatus: "owner-provided",
    tier: "major",
  },
  {
    id: "kejurnas-u18-3x3-2023",
    year: "2023",
    event: "Kejurnas U18 3x3 2023",
    discipline: "3x3",
    level: "national-pathway",
    team: "Jawa Timur",
    result: "3rd Place · National Podium",
    location: "Indonesia",
    roleContext: "Provincial 3x3 selection squad podium finish",
    sources: [],
    verificationStatus: "owner-provided",
    tier: "major",
  },
  {
    id: "porprov-ix-2025",
    year: "2025",
    event: "PorProv Jatim IX 2025 (3x3)",
    discipline: "3x3",
    level: "city-provincial",
    team: "Kota Surabaya",
    result: "Champion · Gold Medal",
    location: "Jawa Timur, Indonesia",
    roleContext: "Representing Kota Surabaya in 3x3 provincial games",
    sources: [],
    verificationStatus: "owner-provided",
    tier: "major",
  },
  {
    id: "zheng-cheng-gong-2023",
    year: "2023",
    event: "Zheng Cheng Gong Cup 2023",
    discipline: "5v5",
    level: "international",
    team: "Indonesia Elite",
    result: "International Invitational Tournament",
    roleContext: "Selected for Indonesia Elite invitational roster",
    sources: [],
    verificationStatus: "owner-provided",
    tier: "continuing",
  },
  {
    id: "datuk-wira-u21-2023",
    year: "2023",
    event: "Malacca Datuk Wira Cup U21 2023",
    discipline: "5v5",
    level: "international",
    team: "Indonesia Elite",
    result: "2nd Runner-Up · Podium Finish",
    location: "Malacca, Malaysia",
    roleContext: "Indonesia Elite international invitational campaign",
    sources: [],
    verificationStatus: "owner-provided",
    tier: "continuing",
  },
  {
    id: "liga-mahasiswa-2024",
    year: "2024",
    event: "Liga Mahasiswa (LIMA) Nasional 2024",
    discipline: "5v5",
    level: "university",
    team: "Universitas Surabaya",
    result: "1st Runner-Up · National Finalist",
    location: "Indonesia",
    roleContext:
      "One-semester university basketball campaign for LIMA Nasional",
    sources: [],
    verificationStatus: "owner-provided",
    homepagePriority: true,
    tier: "continuing",
  },
  {
    id: "heat-challenge-cup-2025",
    year: "2025",
    event: "Heat Challenge Cup 2025",
    discipline: "5v5",
    level: "club",
    team: "KL Hornbills",
    result: "1st Runner-Up · KL Hornbills",
    resultVerificationStatus: "owner-provided",
    location: "Kuala Lumpur, Malaysia",
    statLine: "6 GP · 29:51 MIN · 16 PTS · 5 REB · 1 STL · 43.8 FG%",
    statVerificationStatus: "verified",
    claims: [
      {
        label: "1st Runner-Up · KL Hornbills",
        verificationStatus: "owner-provided",
      },
      {
        label: "6 GP · 29:51 MIN · 16 PTS (2.7 PPG) · 5 REB · 1 STL · 43.8 FG%",
        verificationStatus: "verified",
        source: basketballSources.majorLeagueHeat2025Stats,
      },
      {
        label: "Single-game high: 14 PTS (6/9 FG) vs Selangor BA",
        verificationStatus: "verified",
        source: basketballSources.majorLeagueHeat2025GameLog,
      },
    ],
    roleContext:
      "Invitational club campaign with KL Hornbills in Malaysia; official tournament statistics verified via Major League Malaysia; 1st Runner-Up team result owner-provided pending published playoff finals report",
    sources: [
      basketballSources.majorLeagueHeat2025Stats,
      basketballSources.majorLeagueHeat2025GameLog,
    ],
    verificationStatus: "owner-provided",
    homepagePriority: true,
    tier: "continuing",
  },
  {
    id: "esp-varsity-2026",
    year: "2026",
    event: "ESP Varsity Basketball Championship 2026",
    discipline: "5v5",
    level: "university",
    team: "Monash University",
    result: "1st Runner-Up · Semifinal Player of the Game",
    location: "Malaysia",
    roleContext: "Varsity team contributor and semifinal Player of the Game",
    sources: [],
    verificationStatus: "owner-provided",
    homepagePriority: true,
    tier: "continuing",
  },
  {
    id: "dev-thailand-2018",
    year: "2018",
    event: "DBL Academy Selection Team · Thailand",
    discipline: "5v5",
    level: "club",
    team: "DBL Academy Selection Team",
    result: "International Tournament Campaign · Bangkok",
    location: "Bangkok, Thailand",
    roleContext:
      "Selected to U13 international squad for tournament competition in Thailand",
    sources: [basketballSources.dblThailand],
    verificationStatus: "verified",
    tier: "continuing",
  },
  {
    id: "dev-malaysia-2019",
    year: "2019",
    event: "DBL Academy Selection Team · Malaysia",
    discipline: "5v5",
    level: "club",
    team: "DBL Academy Selection Team",
    result: "Global Elite Hoops 2019 · Runner-Up",
    location: "Malaysia",
    roleContext:
      "Selected to U13 squad earning 1st Runner-Up in international tournament",
    sources: [basketballSources.dblMalaysia],
    verificationStatus: "verified",
    tier: "continuing",
  },
  {
    id: "dev-vegas-2022",
    year: "2022",
    event: "DBL Academy International Summer Camp · Las Vegas",
    discipline: "5v5",
    level: "club",
    team: "DBL Academy",
    result: "Impact Basketball Summer Camp",
    location: "Las Vegas, United States",
    roleContext:
      "Selected for intensive international player development curriculum at Impact Basketball",
    sources: [basketballSources.dblVegas],
    verificationStatus: "verified",
    tier: "continuing",
  },
  {
    id: "dev-perth-2022",
    year: "2022",
    event: "DBL Academy Selection Team · Australia",
    discipline: "5v5",
    level: "club",
    team: "DBL Academy Selection Team",
    result: "World Basketball Academy Training & Tour",
    location: "Perth, Australia",
    roleContext:
      "Selected to DBL Academy Selection Team for training and tournament play with World Basketball Academy",
    sources: [basketballSources.dblPerth],
    verificationStatus: "verified",
    tier: "continuing",
  },
  {
    id: "junior-dbl-2019",
    year: "2019",
    event: "Junior DBL East Java 2019",
    discipline: "5v5",
    level: "school",
    team: "SMP IPH West Surabaya",
    result: "Junior DBL Campaign",
    location: "Surabaya, Indonesia",
    statLine: "3 GP · 21 PTS · 19 REB · 1 AST",
    roleContext: "Middle school varsity campaign in Junior DBL East Java",
    sources: [basketballSources.dblProfile],
    verificationStatus: "verified",
    tier: "continuing",
  },
  {
    id: "dbl-academy-foundation-2016",
    year: "2016",
    event: "DBL Academy Pathway",
    discipline: "5v5",
    level: "club",
    team: "DBL Academy",
    result: "Joined Long-term Academy Pathway",
    location: "Surabaya, Indonesia",
    roleContext:
      "Commenced competitive basketball fundamentals pathway in 2016",
    sources: [],
    verificationStatus: "owner-provided",
    homepagePriority: true,
    tier: "continuing",
  },
] as const;

export type CompetitiveLadderResult = {
  label: string;
  verificationStatus: AthleteVerificationStatus;
  source?: BasketballSource;
};

export type AthleteCompetitiveLadderTier = {
  order: string;
  tierKey: string;
  tierName: string;
  levelBadge: string;
  context: string;
  headline: string;
  statCallout?: string;
  summary: string;
  signatureResults: readonly CompetitiveLadderResult[];
};

export const athleteCompetitiveLadder: readonly AthleteCompetitiveLadderTier[] =
  [
    {
      order: "01",
      tierKey: "school",
      tierName: "School Competition",
      levelBadge: "High School · DBL East Java",
      context: "SMA Gloria 1 Surabaya · DBL Series",
      headline: "East Java Final Run & First Team",
      statCallout: "10 GP · 121 PTS · 84 REB · 25 AST",
      summary:
        "Gloria 1 reached the DBL East Java championship final in 2023; Richie earned Kopi Good Day First Team honors with 58.5 FG% and 45.0 3PT% shooting across 10 games.",
      signatureResults: [
        {
          label: "2023 DBL East Java Runner-Up · First Team selection",
          verificationStatus: "verified",
          source: basketballSources.dblFirstTeam,
        },
        {
          label: "2021 DBL East Java Fantastic Four · Second Team honors",
          verificationStatus: "verified",
          source: basketballSources.dblProfile,
        },
      ],
    },
    {
      order: "02",
      tierKey: "city-provincial",
      tierName: "City & Provincial Games",
      levelBadge: "Provincial Games · PorProv Jatim",
      context: "Kota Surabaya Representative Squad",
      headline: "PorProv VIII Champion · 21 PTS in Final",
      statCallout: "21 PTS · 7 REB in Championship Game",
      summary:
        "Represented Kota Surabaya in the East Java Provincial Games (PorProv VIII), posting 21 points and 7 rebounds in the 93–57 gold medal final victory over Kabupaten Jember.",
      signatureResults: [
        {
          label:
            "PorProv VIII Jatim 2023 5v5 Champion · 21 PTS / 7 REB in final",
          verificationStatus: "verified",
          source: basketballSources.porprov2023,
        },
        {
          label: "PorProv IX Jatim 2025 3x3 Champion · Kota Surabaya",
          verificationStatus: "owner-provided",
        },
      ],
    },
    {
      order: "03",
      tierKey: "national-pathway",
      tierName: "National Pathway",
      levelBadge: "National Qualification & Camps",
      context: "Jawa Timur & National Selection",
      headline: "Pra-PON XXI Qualification & All-Star Roster",
      statCallout: "Qualified for PON XXI · All-Star Boys Roster",
      summary:
        "Advanced into the national developmental pathway: earned qualification for PON XXI 2024 with Jawa Timur and selected to the 2024 DBL Indonesia All-Star boys roster.",
      signatureResults: [
        {
          label: "Selected to the 2024 DBL Indonesia All-Star boys roster",
          verificationStatus: "verified",
          source: basketballSources.dblAllStar,
        },
        {
          label:
            "Kualifikasi Kejurnas KU-17 Wilayah 5 · 64.29 FG% Leader (Rank #1)",
          verificationStatus: "verified",
          source: basketballSources.basketyukFgLeaderboard,
        },
        {
          label:
            "Kualifikasi Kejurnas KU-17 Wilayah 5 · 31 PTS / 12 REB / EF 31 in 3 GP (CLS Surabaya)",
          verificationStatus: "verified",
          source: basketballSources.basketyuk,
        },
        {
          label:
            "Kualifikasi Klub Kejurnas U-17 2023 · Champion (CLS Surabaya)",
          verificationStatus: "owner-provided",
        },
        {
          label:
            "Pra-PON XXI 2023 · Qualified for PON XXI 2024 with Jawa Timur",
          verificationStatus: "owner-provided",
        },
      ],
    },
    {
      order: "04",
      tierKey: "international",
      tierName: "Indonesia & International",
      levelBadge: "Indonesia Youth National Team",
      context: "Continental & Regional Competition",
      headline: "ASEAN Schools Games Gold & FIBA U18",
      statCallout: "ASG Gold · 12 PTS / 4 REB in Title Match",
      summary:
        "Represented Indonesia in continental and regional competition: contributed 12 points and 4 rebounds in the 56–54 gold medal victory over the Philippines at ASG 2024, and contested 3 matches at the FIBA U18 Asia Cup.",
      signatureResults: [
        {
          label:
            "ASEAN Schools Games 2024 Gold · 56–54 vs Philippines (12 PTS / 4 REB in final)",
          verificationStatus: "verified",
          source: basketballSources.asgBox,
        },
        {
          label: "FIBA U18 Asia Cup 2024 · 3 GP for Indonesia in Amman, Jordan",
          verificationStatus: "verified",
          source: basketballSources.fiba,
        },
      ],
    },
    {
      order: "05",
      tierKey: "university-club",
      tierName: "University & Club Continuation",
      levelBadge: "University & Regional Club Play",
      context: "Universitas Surabaya · KL Hornbills · Monash",
      headline: "National University Finalist & Club Invitationals",
      statCallout: "National & Regional Podium Finishes",
      summary:
        "Maintained competitive progression across university and club levels: Liga Mahasiswa Nasional 1st Runner-Up with Universitas Surabaya, Heat Challenge Cup 1st Runner-Up with KL Hornbills, and 2026 ESP Varsity 1st Runner-Up with Monash University.",
      signatureResults: [
        {
          label:
            "Liga Mahasiswa Nasional 2024 · 1st Runner-Up (Universitas Surabaya)",
          verificationStatus: "owner-provided",
        },
        {
          label:
            "Heat Challenge Cup 2025 · 6 GP / 16 PTS / 43.8 FG% (KL Hornbills)",
          verificationStatus: "verified",
          source: basketballSources.majorLeagueHeat2025Stats,
        },
        {
          label: "Heat Challenge Cup 2025 · 1st Runner-Up (KL Hornbills)",
          verificationStatus: "owner-provided",
        },
        {
          label:
            "ESP Varsity Championship 2026 · 1st Runner-Up & Semifinal Player of the Game (Monash)",
          verificationStatus: "owner-provided",
        },
      ],
    },
  ];

export type PathwayMilestone = {
  context: string;
  detail: string;
  discipline?: AthleteCompetitionDiscipline;
  entity: string;
  id: string;
  location?: string;
  pathway: "club" | "development" | "school-university";
  roleContext?: string;
  source?: BasketballSource;
  title: string;
  verificationStatus: AthleteVerificationStatus;
  year: string;
};

export const athletePathwayTracks: {
  club: readonly PathwayMilestone[];
  development: readonly PathwayMilestone[];
  schoolUniversity: readonly PathwayMilestone[];
} = {
  club: [
    {
      id: "club-2015",
      year: "2015",
      pathway: "club",
      entity: "Western Basketball Surabaya",
      title: "Club Development Foundation",
      context: "Surabaya Junior Club",
      detail:
        "Initial club training began with Western Basketball Surabaya, establishing early competitive fundamentals.",
      source: basketballSources.instagramWbs,
      verificationStatus: "owner-provided",
    },
    {
      id: "club-2019",
      year: "2019",
      pathway: "club",
      entity: "CLS (Cahaya Lestari Surabaya)",
      title: "Club Competition Pathway",
      context: "Surabaya Club Competition",
      detail:
        "Progressed into CLS Surabaya's development system, competing in local club leagues and tournament play.",
      source: basketballSources.instagramCls,
      verificationStatus: "owner-provided",
    },
    {
      id: "club-2023",
      year: "2023",
      pathway: "club",
      entity: "CLS Surabaya",
      title: "Kualifikasi Klub Kejurnas U-17 Champion",
      context: "Kualifikasi Kejurnas KU-17 Wilayah 5",
      detail:
        "Represented CLS Surabaya in the Kejurnas KU-17 Wilayah 5 inter-club qualification tournament (Champion record). Recorded 31 PTS, 12 REB, 3 AST, 2 STL, 2 BLK across 58:27 minutes in 3 games, leading the tournament with 64.29% field-goal shooting.",
      source: basketballSources.basketyuk,
      verificationStatus: "owner-provided",
    },
    {
      id: "club-2024",
      year: "2024",
      pathway: "club",
      entity: "Aces Basketball Surabaya",
      title: "Senior Club Play",
      context: "Surabaya Club League",
      detail:
        "Joined Aces Basketball for regional club competition following high-school graduation.",
      source: basketballSources.instagramAces,
      verificationStatus: "owner-provided",
    },
    {
      id: "club-2025",
      year: "2025",
      pathway: "club",
      entity: "KL Hornbills",
      title: "Heat Challenge Cup 1st Runner-Up",
      context: "Regional Club Competition · Malaysia",
      detail:
        "Represented KL Hornbills in regional invitational tournament play in Malaysia (6 GP, 16 PTS, 43.8 FG%, 1st Runner-Up).",
      source: basketballSources.majorLeagueHeat2025Stats,
      verificationStatus: "owner-provided",
    },
  ],
  development: [
    {
      id: "dev-2016",
      year: "2016",
      pathway: "development",
      entity: "DBL Academy",
      title: "Long-term Development Begins",
      context: "Academy Fundamentals",
      detail:
        "Joined DBL Academy in Surabaya in 2016, embarking on an 8-year intentional player development curriculum.",
      verificationStatus: "owner-provided",
    },
    {
      id: "dev-2018",
      year: "2018",
      pathway: "development",
      entity: "DBL Academy Selection Team",
      title: "Selection Team · Thailand Campaign",
      context: "International Academy Tour · Bangkok",
      detail:
        "Selected to the DBL Academy Selection Team U13 roster for international tournament competition in Bangkok, Thailand.",
      source: basketballSources.dblThailand,
      verificationStatus: "verified",
    },
    {
      id: "dev-2019",
      year: "2019",
      pathway: "development",
      entity: "DBL Academy Selection Team",
      title: "Selection Team · Malaysia Campaign",
      context: "Global Elite Hoops 2019 · Runner-Up",
      detail:
        "Earned consecutive selection to the DBL Academy Selection Team U13 roster, finishing as runner-up in Malaysia.",
      source: basketballSources.dblMalaysia,
      verificationStatus: "verified",
    },
    {
      id: "dev-2022-vegas",
      year: "2022",
      pathway: "development",
      entity: "DBL Academy International",
      title: "International Summer Camp · Las Vegas",
      context: "Impact Basketball · Overseas Training",
      detail:
        "Participated in the separately organized 2022 Las Vegas international basketball development curriculum at Impact Basketball.",
      source: basketballSources.dblVegas,
      verificationStatus: "verified",
    },
    {
      id: "dev-2022-perth",
      year: "2022",
      pathway: "development",
      entity: "DBL Academy Selection Team",
      title: "Selection Team · Australia",
      context: "World Basketball Academy · Perth",
      detail:
        "Selected to the DBL Academy Selection Team for international training and tournament competition with the World Basketball Academy in Perth, Australia.",
      source: basketballSources.dblPerth,
      verificationStatus: "verified",
    },
    {
      id: "dev-2024-allstar",
      year: "2024",
      pathway: "development",
      entity: "DBL Indonesia All-Star",
      title: "DBL Indonesia All-Star Boys Roster",
      context: "National Development Honors",
      detail:
        "Selected to the 2024 Kopi Good Day DBL Indonesia All-Star boys roster following a third DBL Camp appearance.",
      source: basketballSources.dblAllStar,
      verificationStatus: "verified",
    },
    {
      id: "dev-2024-grad",
      year: "2024",
      pathway: "development",
      entity: "DBL Academy",
      title: "DBL Academy Curriculum Completion",
      context: "Academy Chapter Graduation",
      detail:
        "Completed the eight-year player development curriculum at DBL Academy in Surabaya (2016–2024).",
      verificationStatus: "owner-provided",
    },
  ],
  schoolUniversity: [
    {
      id: "school-2019",
      year: "2019",
      pathway: "school-university",
      entity: "SMP IPH West Surabaya",
      title: "Junior DBL East Java",
      context: "Middle School Competition",
      detail:
        "Competed in Junior DBL East Java with SMP IPH West, recording 21 points, 19 rebounds, and 1 assist in 3 games.",
      source: basketballSources.dblProfile,
      verificationStatus: "verified",
    },
    {
      id: "school-2021",
      year: "2021",
      pathway: "school-university",
      entity: "SMA Gloria 1 Surabaya",
      title: "DBL East Java Fantastic Four & Second Team",
      context: "High School Varsity Debut",
      detail:
        "Varsity debut season with SMA Gloria 1, reaching the Fantastic Four semifinal stage and earning DBL East Java Second Team honors.",
      source: basketballSources.dblProfile,
      verificationStatus: "verified",
    },
    {
      id: "school-2022",
      year: "2022",
      pathway: "school-university",
      entity: "SMA Gloria 1 Surabaya",
      title: "DBL East Java Sweet Sixteen",
      context: "North Region Playoff",
      detail:
        "Recorded 52 points, 21 rebounds, and 13 assists across 4 regional playoff games for SMA Gloria 1.",
      source: basketballSources.dblProfile,
      verificationStatus: "verified",
    },
    {
      id: "school-2023",
      year: "2023",
      pathway: "school-university",
      entity: "SMA Gloria 1 Surabaya",
      title: "DBL East Java Runner-Up & First Team",
      context: "Championship Series Final Run",
      detail:
        "Gloria 1 reached the East Java final; Richie earned DBL East Java First Team honors, recording 121 PTS, 84 REB, and 25 AST with Kopi Good Day First Team selection.",
      source: basketballSources.dblFirstTeam,
      verificationStatus: "verified",
    },
    {
      id: "school-2024",
      year: "2024",
      pathway: "school-university",
      entity: "Universitas Surabaya",
      title: "Liga Mahasiswa (LIMA) 1st Runner-Up",
      context: "One-Semester University Campaign",
      detail:
        "Contributed to Universitas Surabaya's national finalist campaign, finishing as 1st Runner-Up in Liga Mahasiswa Nasional 2024.",
      verificationStatus: "owner-provided",
    },
    {
      id: "school-2026",
      year: "2026",
      pathway: "school-university",
      entity: "Monash University Malaysia",
      title: "ESP Varsity 1st Runner-Up",
      context: "Varsity Championship",
      detail:
        "Contributed to Monash University's 1st Runner-Up finish in the 2026 ESP Varsity Championship, earning semifinal Player of the Game recognition.",
      verificationStatus: "owner-provided",
    },
  ],
};

export const basketballIdentityFacts = [
  "DBL Academy development pathway since 2016",
  "SMA Gloria 1 Surabaya athlete",
  "DBL Indonesia All-Star 2024",
  "Indonesia · ASEAN Schools Games 2024 gold",
  "Indonesia · FIBA U18 Asia Cup 2024",
] as const;
