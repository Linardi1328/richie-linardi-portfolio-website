import type {
  FoundationPortrait,
  FoundationSection,
} from "@/components/layout/foundation-route-page";
import type { PortfolioWorld } from "@/data/world-navigation";

export type FoundationPageDefinition = {
  world: PortfolioWorld;
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly FoundationSection[];
  primaryHref?: string;
  primaryLabel?: string;
  portrait?: FoundationPortrait;
};

export const foundationPages = {
  about: {
    world: "professional",
    eyebrow: "Identity · Richie Linardi",
    title: "One discipline, expressed in two worlds.",
    description:
      "I study Computer Science with a Data Science specialization at Monash University Malaysia while building software, data, and AI systems outside class. Basketball shaped the same habits I bring to engineering: preparation, review, discipline, and decision-making under pressure.",
    portrait: {
      src: "/portraits/richie-professional.jpg",
      alt: "Richie Linardi wearing a black blazer and white shirt",
      label: "Professional portrait · RBL",
      note: "Software and basketball are presented as two sides of the same working mindset.",
    },
    sections: [
      {
        eyebrow: "Professional world",
        title: "Build systems that can explain themselves.",
        description:
          "My technical work focuses on software, data, automation, and applied AI. I value explicit boundaries, testable behavior, traceable evidence, and human control when decisions matter.",
        items: [
          "Computer Science · Data Science specialization",
          "Python, TypeScript, Java, C++, and C# experience",
          "Applied AI and automation projects",
          "Testing, review, and clear system limitations",
        ],
      },
      {
        eyebrow: "Basketball world",
        title: "Development before highlights.",
        description:
          "The athlete record follows the path from development and school competition to DBL selection, national representation, and international competition. Results, statistics, and media stay tied to their event context.",
        items: [
          "DBL Academy development pathway",
          "SMA Gloria 1 Surabaya",
          "DBL Indonesia All-Star 2024",
          "Indonesia national-team competition in 2024",
        ],
      },
      {
        eyebrow: "Shared principle",
        title: "Preparation transfers between worlds.",
        description:
          "Basketball taught repetition, role clarity, review after mistakes, and calm decision-making under pressure. Software applies the same loop: design the process, test the assumptions, measure the result, then improve it.",
      },
    ],
    primaryHref: "/projects",
    primaryLabel: "Explore the systems",
  },
  experience: {
    world: "professional",
    eyebrow: "Experience",
    title: "Experience built through systems, analytics, and verification.",
    description:
      "My experience combines independent software development across public repositories, competition statistics operations, financial audit, collaborative AI, and competitive athletics. The focus is on responsibility, communication, and work that can be inspected directly.",
    sections: [
      {
        eyebrow: "Applied systems",
        title:
          "Independent applied systems development across six public portfolio projects.",
        description:
          "The portfolio includes systems for market research, project operations, accounting workflows, event support, content operations, and sports infrastructure. Each project shows its current phase, constraints, evidence, and repository.",
      },
      {
        eyebrow: "Statistics & operations",
        title: "Stats Team Leader · KHLIM Basketball Club.",
        description:
          "Designed an automated points-tracking system covering more than 350 matches across two competitions. Managed match statistics, scheduling, and scoring flow to keep competition data accurate and current.",
      },
      {
        eyebrow: "Audit & verification",
        title: "Auditor · KHLIM Group of Companies.",
        description:
          "Financial record verification, audit working-paper preparation and review, inventory stock counts, and external audit assignments across three companies.",
      },
      {
        eyebrow: "Collaborative AI",
        title: "AI Video Hackathon KL 2026 · Midnight Owls.",
        description:
          "Teamed with Esther Lim Jia Xin on 'One Team, One Dream', an AI-generated basketball short film exploring sports as a unifier across diverse Malaysian backgrounds. The hackathon was organized by Topview AI and AWS, with the source post separately crediting Topview AI with providing tools.",
      },
      {
        eyebrow: "Leadership",
        title: "Team performance is a system too.",
        description:
          "Competitive basketball adds another leadership context: preparation, role clarity, communication, accountability, and recovery after mistakes. Those habits carry directly into how I build and review technical work.",
      },
    ],
    primaryHref: "/resume",
    primaryLabel: "Open web résumé",
  },
  education: {
    world: "professional",
    eyebrow: "Education · Monash University Malaysia",
    title: "Computer science with a data science focus.",
    description:
      "I am pursuing a Bachelor of Computer Science at Monash University Malaysia with a Data Science specialization and expected graduation in 2027. That academic foundation feeds directly into the software and analytical systems in this portfolio.",
    sections: [
      {
        eyebrow: "Degree",
        title: "Bachelor of Computer Science.",
        description:
          "The degree builds the software and computational foundation behind my project work, while the Data Science specialization adds statistical and data-oriented depth.",
        items: [
          "Monash University Malaysia",
          "Data Science specialization",
          "Expected graduation · 2027",
        ],
      },
      {
        eyebrow: "Technical growth",
        title: "Theory becomes useful through implementation.",
        description:
          "My studies include programming, algorithms, probability and random variables, software design, and data-oriented reasoning. Personal projects give those ideas a larger, more practical setting.",
      },
      {
        eyebrow: "Applied translation",
        title: "Foundations connect to operating software.",
        description:
          "Foundational coursework in programming, algorithms, probability and random variables, software design, and data-oriented reasoning provides computational and analytical depth that connects directly to independent software projects.",
      },
    ],
    primaryHref: "/projects",
    primaryLabel: "See applied work",
  },
  contact: {
    world: "professional",
    eyebrow: "Contact",
    title: "One place for projects, opportunities, and basketball.",
    description:
      "Public contact currently runs through verified profiles. GitHub is the best entry point for technical work, while the athlete side is available through the established social profiles.",
    sections: [
      {
        eyebrow: "Software and data",
        title: "Start with the work itself.",
        description:
          "For project, internship, engineering, data, or AI conversations, GitHub links directly to the repositories behind the portfolio.",
        items: ["GitHub · github.com/Linardi1328"],
      },
      {
        eyebrow: "Basketball",
        title: "Public athlete profiles.",
        description:
          "Basketball updates and public athlete content are available through the established Instagram and TikTok profiles.",
        items: ["Instagram · @richiebertrand3", "TikTok · @richiebertrand"],
      },
      {
        eyebrow: "Contact setup",
        title: "Only verified channels are published.",
        description:
          "The site does not display placeholder contact details. A dedicated form can be connected later with spam protection and an approved destination.",
      },
    ],
    primaryHref: "https://github.com/Linardi1328",
    primaryLabel: "Open GitHub profile",
  },
  resume: {
    world: "professional",
    eyebrow: "Web résumé",
    title: "A concise record, with the evidence one click away.",
    description:
      "Computer Science student specializing in Data Science at Monash University Malaysia, independent software builder, and competitive basketball athlete. Project and athlete pages carry the deeper proof behind this summary.",
    portrait: {
      src: "/portraits/richie-professional.jpg",
      alt: "Richie Linardi wearing a black blazer and white shirt",
      label: "Richie Linardi · Professional record",
    },
    sections: [
      {
        eyebrow: "Technical profile",
        title: "Software, data, automation, and controlled AI.",
        description:
          "Current work spans Python and TypeScript systems, data workflows, automation, applied AI interfaces, testing, and source-aware project operations.",
        items: [
          "Python · TypeScript · Java · C++ · C#",
          "Next.js · React",
          "Data and statistical reasoning",
          "Human-supervised AI workflows",
        ],
      },
      {
        eyebrow: "Academic foundations",
        title: "Monash University Malaysia.",
        description:
          "Bachelor of Computer Science, Data Science specialization, expected 2027. Foundations in programming, algorithms, probability and random variables, software design, and data-oriented reasoning.",
      },
      {
        eyebrow: "Selected systems",
        title: "Six public projects, each with a clear status.",
        description:
          "The catalogue includes SPY Market Agent, Personal Project Operator, LedgerPilot AI, KHLIM Assist, RBL Content Engine, and KHLIM Digital Sports Ecosystem. Project pages link the implementation, evidence, and current limitations.",
      },
    ],
    primaryHref: "/experience",
    primaryLabel: "View experience",
  },
  journey: {
    world: "basketball",
    eyebrow: "Basketball journey",
    title: "From DBL Academy to representing Indonesia.",
    description:
      "The athlete record starts with DBL Academy in 2016 and follows the progression through school competition, DBL Camp and All-Star selection, ASEAN Schools Games gold, and the FIBA U18 Asia Cup in 2024.",
    sections: [
      {
        eyebrow: "2016 onward",
        title: "The development chapter started early.",
        description:
          "Richie joined DBL Academy in 2016 and later appeared in DBL Academy Selection Teams before progressing into the school competition pathway.",
      },
      {
        eyebrow: "2021–2023",
        title: "Gloria 1 became the main school chapter.",
        description:
          "With SMA Gloria 1 Surabaya, the published DBL record includes a 2021 Fantastic Four run, a 2023 East Java runner-up finish, and selection to the 2023 First Team East Java.",
      },
      {
        eyebrow: "2024",
        title: "All-Star, gold, then continental competition.",
        description:
          "The 2024 season included DBL Indonesia All-Star selection, an ASEAN Schools Games gold medal with Indonesia, and three games for Indonesia at the FIBA U18 Asia Cup.",
        items: [
          "DBL Indonesia All-Star 2024",
          "ASEAN Schools Games 2024 · Gold",
          "FIBA U18 Asia Cup 2024 · Indonesia",
        ],
      },
    ],
    primaryHref: "/basketball/achievements",
    primaryLabel: "Open achievement ledger",
  },
  achievements: {
    world: "basketball",
    eyebrow: "Achievements",
    title: "Results with the event context attached.",
    description:
      "The achievement ledger highlights the 2024 ASEAN Schools Games gold medal, DBL Indonesia All-Star selection, Gloria 1’s East Java final run, and the development path behind them.",
    sections: [],
    primaryHref: "/basketball/stats",
    primaryLabel: "View verified statistics",
  },
  stats: {
    world: "basketball",
    eyebrow: "Statistics",
    title: "Numbers separated by competition and season.",
    description:
      "DBL season totals and FIBA international per-game figures stay separate, with links back to the published player records.",
    sections: [],
    primaryHref: "/basketball/gallery",
    primaryLabel: "Open proof gallery",
  },
  gallery: {
    world: "basketball",
    eyebrow: "Proof gallery",
    title: "Photography first. Context always.",
    description:
      "The gallery is an athlete archive rather than a social feed. Photography is organized by team, tournament, and career chapter so each image can connect back to the relevant result or statistic.",
    sections: [
      {
        eyebrow: "Archive model",
        title: "Team and competition organize the archive.",
        description:
          "The archive structure follows the athlete record: national team, DBL, Gloria 1, All-Star, FIBA U18, and development chapters.",
      },
      {
        eyebrow: "Moment detail",
        title: "A photograph should open into the event story.",
        description:
          "Selected images can carry competition, role, result, statistics, source, and related moments instead of standing alone as decoration.",
      },
      {
        eyebrow: "Media boundary",
        title: "Real archive material takes priority.",
        description:
          "Production photography uses owner-provided or properly sourced media. Generated likenesses are never treated as evidence of real basketball events.",
      },
    ],
    primaryHref: "/basketball/media",
    primaryLabel: "View media archive",
  },
  media: {
    world: "basketball",
    eyebrow: "Press and media",
    title: "Coverage tied to the career chapter it documents.",
    description:
      "The media archive is reserved for original DBL, federation, competition, and other verified coverage. Article titles and links come from source material rather than generated mockup copy.",
    sections: [
      {
        eyebrow: "DBL record",
        title: "Development, school competition, and All-Star coverage.",
        description:
          "DBL Indonesia provides the strongest published thread across the athlete journey, including player statistics, academy history, Gloria 1 competition, camp participation, and 2024 All-Star selection.",
      },
      {
        eyebrow: "Indonesia record",
        title: "National-team results stay with official reporting.",
        description:
          "ASEAN Schools Games results and international tournament statistics link to official or competition-specific sources.",
      },
      {
        eyebrow: "Archive growth",
        title: "Strong sources first, volume later.",
        description:
          "Additional interviews, articles, and media can be added without pushing the strongest primary records out of view.",
      },
    ],
    primaryHref: "/basketball/achievements",
    primaryLabel: "Open achievement ledger",
  },
} as const satisfies Record<string, FoundationPageDefinition>;
