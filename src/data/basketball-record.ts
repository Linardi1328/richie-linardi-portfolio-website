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
  dblTag: {
    label: "DBL Indonesia · Richie coverage archive",
    href: "https://www.dbl.id/t/20340/richie-bertrand-linardi",
  },
  asgBox: {
    label: "IBL Indonesia · ASG 2024 final",
    href: "https://iblindonesia.com/news/timnas-putra-indonesia-sabet-medali-emas-asg-2024",
  },
  fiba: {
    label: "FIBA player profile",
    href: "https://www.fiba.basketball/en/players/370084-richie-bertrand-linardi",
  },
  fiba3x3: {
    label: "FIBA 3x3 player profile",
    href: "https://play.fiba3x3.com/players/58e2bfb7-a379-4d6f-bf3d-187aa75fe92a",
  },
  porprov2023: {
    label: "Lenza Nasional · PorProv VIII 2023 final report",
    href: "https://lenzanasional.com/kota-surabaya-kawinkan-gelar-basket-5-x-5-porprov-viii-jatim-2023/",
  },
  basketyuk: {
    label: "Basketyuk · Kejurnas KU17 event statistics",
    href: "https://basketyuk.com",
  },
  sofascore: {
    label: "Sofascore · KL Hornbills player profile",
    href: "https://www.sofascore.com",
  },
  instagramWbs: {
    label: "Western Basketball Surabaya Instagram",
    href: "https://www.instagram.com/westernbasketballclub/",
  },
  instagramCls: {
    label: "Cahaya Lestari Surabaya Instagram",
    href: "https://www.instagram.com/clsbasketball/",
  },
  instagramAces: {
    label: "Aces Basketball Surabaya Instagram",
    href: "https://www.instagram.com/acesbasketball_sby/",
  },
  instagramHornbills: {
    label: "KL Hornbills Instagram",
    href: "https://www.instagram.com/klhornbills/",
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
  competition: "Kejurnas KU17 2023",
  context: "CLS SURABAYA · NATIONAL YOUTH TOURNAMENT",
  title: "Kejurnas KU17 Tournament Performance",
  badge: "Official Tournament Statistics",
  team: "CLS Surabaya",
  games: 3,
  points: 31,
  rebounds: 12,
  assists: 3,
  steals: 2,
  blocks: 2,
  fieldGoalPct: "64.29 FG%",
  contextNote:
    "Recorded 31 points, 12 rebounds, 3 assists, 2 steals, and 2 blocks across 3 games, ranking among tournament field-goal percentage leaders at 64.29%.",
  source: basketballSources.basketyuk,
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

export type AthleteCareerRecord = {
  id: string;
  year: string;
  event: string;
  discipline: AthleteCompetitionDiscipline;
  level: AthleteCompetitionLevel;
  team: string;
  result: string;
  location?: string;
  statLine?: string;
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
    roleContext: "Starting contributor in boys' championship final victory",
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
    statLine: "Selected to National Top 12 All-Star Roster",
    roleContext:
      "Selected to the national All-Star roster following third DBL Camp appearance",
    sources: [basketballSources.dblAllStar],
    verificationStatus: "verified",
    homepagePriority: true,
    featured: true,
    tier: "signature",
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
    roleContext: "Finals scoring co-leader in gold medal championship win",
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
      "Led Gloria 1 to East Java championship final and earned First Team honors",
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
      "High-school varsity debut season reaching semifinal round with Second Team honors",
    sources: [basketballSources.dblProfile],
    verificationStatus: "verified",
    tier: "major",
  },
  {
    id: "kejurnas-ku17-2023",
    year: "2023",
    event: "Kejurnas KU17 2023",
    discipline: "5v5",
    level: "national-pathway",
    team: "CLS Surabaya",
    result: "National Youth Tournament",
    location: "Indonesia",
    statLine: "3 GP · 31 PTS · 12 REB · 3 AST · 2 STL · 2 BLK · 64.29 FG%",
    roleContext:
      "Club representative in national youth championship with official Basketyuk tracking",
    sources: [basketballSources.basketyuk],
    verificationStatus: "verified",
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
    result: "1st Runner-Up",
    location: "Kuala Lumpur, Malaysia",
    roleContext: "Club campaign with KL Hornbills",
    sources: [
      basketballSources.instagramHornbills,
      basketballSources.sofascore,
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
    id: "kualifikasi-kejurnas-u17-2023",
    year: "2023",
    event: "Kualifikasi Klub Kejurnas U17 2023",
    discipline: "5v5",
    level: "club",
    team: "CLS Surabaya",
    result: "Champion",
    location: "Surabaya, Indonesia",
    roleContext: "Club championship qualification run with CLS Surabaya",
    sources: [basketballSources.instagramCls],
    verificationStatus: "owner-provided",
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
    sources: [basketballSources.dblAcademy],
    verificationStatus: "verified",
    homepagePriority: true,
    tier: "continuing",
  },
] as const;

export type AthleteCompetitiveLadderTier = {
  context: string;
  headline: string;
  levelBadge: string;
  order: string;
  signatureResults: readonly string[];
  source?: BasketballSource;
  statCallout?: string;
  summary: string;
  tierKey: string;
  tierName: string;
  verificationStatus: AthleteVerificationStatus;
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
        "Led SMA Gloria 1 Surabaya to the DBL East Java championship final in 2023, earning Kopi Good Day First Team honors with 58.5 FG% and 45.0 3PT% shooting.",
      signatureResults: [
        "2023 DBL East Java Runner-Up · First Team selection",
        "2021 DBL East Java Fantastic Four · Second Team honors",
      ],
      source: basketballSources.dblFirstTeam,
      verificationStatus: "verified",
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
        "PorProv VIII Jatim 2023 5v5 Champion · 21 PTS / 7 REB in final",
        "PorProv IX Jatim 2025 3x3 Champion · Kota Surabaya",
      ],
      source: basketballSources.porprov2023,
      verificationStatus: "verified",
    },
    {
      order: "03",
      tierKey: "national-pathway",
      tierName: "National Pathway",
      levelBadge: "National Qualification & Camps",
      context: "Jawa Timur & National Selection",
      headline: "Pra-PON XXI Qualification & All-Star Roster",
      statCallout: "Qualified for PON XXI · Top 12 Boys Roster",
      summary:
        "Advanced into the national developmental pathway: earned qualification for PON XXI 2024 with Jawa Timur and selected to the 2024 DBL Indonesia All-Star roster.",
      signatureResults: [
        "Pra-PON XXI 2023 · Qualified for PON XXI 2024 with Jawa Timur",
        "DBL Indonesia All-Star 2024 · National roster selection",
        "Kejurnas KU17 2023 · 64.29% FG leaderboard with CLS Surabaya",
      ],
      source: basketballSources.dblAllStar,
      verificationStatus: "verified",
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
        "ASEAN Schools Games 2024 Gold · 56–54 vs Philippines in final",
        "FIBA U18 Asia Cup 2024 · 3 GP for Indonesia in Amman, Jordan",
      ],
      source: basketballSources.asgBox,
      verificationStatus: "verified",
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
        "Liga Mahasiswa Nasional 2024 · 1st Runner-Up (Universitas Surabaya)",
        "Heat Challenge Cup 2025 · 1st Runner-Up (KL Hornbills)",
        "ESP Varsity Championship 2026 · 1st Runner-Up & Semifinal Player of the Game (Monash)",
      ],
      source: basketballSources.instagramHornbills,
      verificationStatus: "owner-provided",
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
      verificationStatus: "verified",
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
      verificationStatus: "verified",
    },
    {
      id: "club-2023",
      year: "2023",
      pathway: "club",
      entity: "CLS Surabaya",
      title: "Kualifikasi Klub Kejurnas U17 Champion",
      context: "Club Championship Qualification",
      detail:
        "Competed in club championship qualification tournament with CLS Surabaya, securing national tournament placement.",
      source: basketballSources.instagramCls,
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
      verificationStatus: "verified",
    },
    {
      id: "club-2025",
      year: "2025",
      pathway: "club",
      entity: "KL Hornbills",
      title: "Heat Challenge Cup 1st Runner-Up",
      context: "Regional Club Competition · Malaysia",
      detail:
        "Represented KL Hornbills in regional invitational tournament play, finishing as 1st Runner-Up.",
      source: basketballSources.instagramHornbills,
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
      source: basketballSources.dblAcademy,
      verificationStatus: "verified",
    },
    {
      id: "dev-2018",
      year: "2018",
      pathway: "development",
      entity: "DBL Academy Selection Team",
      title: "Selection Team Thailand Campaign",
      context: "International Academy Tour",
      detail:
        "Selected to the DBL Academy Selection Team for international competitive experience in Thailand.",
      source: basketballSources.dblAcademy,
      verificationStatus: "verified",
    },
    {
      id: "dev-2019",
      year: "2019",
      pathway: "development",
      entity: "DBL Academy Selection Team",
      title: "Second Selection Team Tour",
      context: "Advanced Academy Selection",
      detail:
        "Earned consecutive selection to the DBL Academy Selection Team program.",
      source: basketballSources.dblAcademy,
      verificationStatus: "verified",
    },
    {
      id: "dev-2022",
      year: "2022",
      pathway: "development",
      entity: "DBL Academy International",
      title: "Las Vegas Development Program",
      context: "Overseas Training Experience",
      detail:
        "Participated in the separately organized 2022 Las Vegas international basketball development curriculum.",
      source: basketballSources.dblAcademy,
      verificationStatus: "verified",
    },
    {
      id: "dev-2024",
      year: "2024",
      pathway: "development",
      entity: "DBL Academy & All-Star",
      title: "DBL All-Star & Academy Graduation",
      context: "Pinnacle Development Honors",
      detail:
        "Selected to the 2024 Kopi Good Day DBL Indonesia All-Star boys' roster following third DBL Camp appearance, concluding the 2016–2024 academy chapter.",
      source: basketballSources.dblAllStar,
      verificationStatus: "verified",
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
        "Led Gloria 1 to the East Java final, recording 121 PTS, 84 REB, and 25 AST with Kopi Good Day First Team selection.",
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
