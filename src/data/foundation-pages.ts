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
    title: "Same person. Two worlds. One discipline.",
    description:
      "I study computer science with a Data Science specialization at Monash University Malaysia while building software, data, and AI systems outside the classroom. Basketball is the other half of the record: years of development, competition, and representing Indonesia shaped the same habits I bring to engineering.",
    portrait: {
      src: "/portraits/richie-professional.jpg",
      alt: "Richie Linardi wearing a black blazer and white shirt",
      label: "Professional portrait · RBL",
      note: "The portfolio treats software and basketball as two sides of one operating mindset rather than separate biographies.",
    },
    sections: [
      {
        eyebrow: "Professional world",
        title: "Build systems that can explain themselves.",
        description:
          "My current technical work centers on applied software, data, automation, and AI. I care about systems with explicit boundaries, testable behavior, traceable evidence, and human control where decisions carry consequences.",
        items: [
          "Computer science · Data Science specialization",
          "Python, TypeScript, Java, C++, and C# experience",
          "Evidence-aware AI and automation projects",
          "Testing, review, and limitations treated as product features",
        ],
      },
      {
        eyebrow: "Basketball world",
        title: "Development before highlights.",
        description:
          "The athlete side begins with the development path and follows the record through school competition, DBL selection, national representation, and international competition. Results, statistics, and media are kept attached to their competition context.",
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
          "Basketball taught repetition, decision-making under pressure, review after mistakes, and the value of reliable systems. Software gives those same habits a different surface: design the process, test the assumptions, measure what happened, then improve it.",
      },
    ],
    primaryHref: "/projects",
    primaryLabel: "Explore the systems",
  },
  experience: {
    world: "professional",
    eyebrow: "Experience",
    title: "Responsibility before job-title theatre.",
    description:
      "My experience so far combines teaching, applied software development, and leadership through projects and sport. This page keeps the scope explicit instead of inflating early-career work into a corporate résumé narrative.",
    sections: [
      {
        eyebrow: "Teaching",
        title: "FIT1045 Teaching Assistant.",
        description:
          "At Monash University I have supported FIT1045, helping students work through introductory programming and problem-solving concepts. Teaching reinforces the need to explain technical ideas clearly rather than hiding behind implementation detail.",
        items: [
          "Programming fundamentals",
          "Problem decomposition",
          "Debugging and reasoning",
          "Clear technical communication",
        ],
      },
      {
        eyebrow: "Applied systems",
        title: "Projects are treated like operating software.",
        description:
          "The portfolio catalogue includes systems for market research, project operations, accounting workflows, event support, content operations, and sports infrastructure. Each project exposes its current phase, constraints, evidence, and repository rather than presenting a fictional finished state.",
      },
      {
        eyebrow: "Leadership",
        title: "Performance is a team system too.",
        description:
          "Years of competitive basketball add a second leadership context: preparation, role clarity, communication, accountability, and recovery after poor decisions. That operating discipline is intentionally visible across the technical side of the portfolio.",
      },
    ],
    primaryHref: "/resume",
    primaryLabel: "Open web résumé",
  },
  education: {
    world: "professional",
    eyebrow: "Education · Monash University Malaysia",
    title: "Computer science, specialized toward data.",
    description:
      "I am pursuing a Bachelor of Computer Science at Monash University Malaysia with a specialization in Data Science, with expected graduation in 2027. The academic foundation feeds directly into the software and analytical systems in this portfolio.",
    sections: [
      {
        eyebrow: "Degree",
        title: "Bachelor of Computer Science.",
        description:
          "The degree provides the core software and computational foundation behind my project work, while the Data Science specialization adds statistical and data-oriented depth.",
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
          "My study has included programming, algorithms, probability and random variables, software design, and data-oriented reasoning. I use personal projects to push those ideas beyond isolated coursework exercises.",
      },
      {
        eyebrow: "Teaching loop",
        title: "Learning becomes sharper when you explain it.",
        description:
          "Working as a FIT1045 Teaching Assistant adds a useful feedback loop: concepts have to be understood well enough to explain, debug, and adapt to how another student is thinking.",
      },
    ],
    primaryHref: "/projects",
    primaryLabel: "See applied work",
  },
  contact: {
    world: "professional",
    eyebrow: "Contact",
    title: "Projects, opportunities, basketball — one entry point.",
    description:
      "The safest public contact layer currently routes through verified profiles rather than publishing generated contact details. Technical work is easiest to inspect through GitHub; athlete updates are available through the existing social profiles.",
    sections: [
      {
        eyebrow: "Software and data",
        title: "Start with the work itself.",
        description:
          "For project, internship, engineering, data, or AI conversations, the GitHub profile links directly to the repositories behind the portfolio catalogue.",
        items: ["GitHub · github.com/Linardi1328"],
      },
      {
        eyebrow: "Basketball",
        title: "Athlete-side public profiles.",
        description:
          "Basketball updates and public-facing athlete content can be followed through the established Instagram and TikTok profiles.",
        items: ["Instagram · @richiebertrand3", "TikTok · @richiebertrand"],
      },
      {
        eyebrow: "Privacy boundary",
        title: "No invented inboxes or phone numbers.",
        description:
          "The site does not publish placeholder email addresses, phone numbers, or form endpoints. A dedicated contact form can be connected later with spam protection and an explicitly approved destination.",
      },
    ],
    primaryHref: "https://github.com/Linardi1328",
    primaryLabel: "Open GitHub profile",
  },
  resume: {
    world: "professional",
    eyebrow: "Web résumé",
    title: "A compact index of the evidence behind the portfolio.",
    description:
      "Computer Science student specializing in Data Science, FIT1045 Teaching Assistant, applied software builder, and competitive basketball athlete. The deeper project and athlete pages carry the proof behind this short-form record.",
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
          "Current work spans Python and TypeScript systems, data workflows, automation, applied AI interfaces, testing, and evidence-aware project operations.",
        items: [
          "Python · TypeScript · Java · C++ · C#",
          "Next.js · React",
          "Data and statistical reasoning",
          "Human-supervised AI workflows",
        ],
      },
      {
        eyebrow: "Education & teaching",
        title: "Monash University Malaysia.",
        description:
          "Bachelor of Computer Science, Data Science specialization, expected 2027. Teaching Assistant for FIT1045 with a focus on programming fundamentals and problem solving.",
      },
      {
        eyebrow: "Selected systems",
        title: "Six public projects, each with explicit status.",
        description:
          "The current catalogue includes SPY Market Agent, Personal Project Operator, LedgerPilot AI, KHLIM Assist, RBL Content Engine, and KHLIM Digital Sports Ecosystem. Repository evidence and limitations are linked from the project pages.",
      },
    ],
    primaryHref: "/experience",
    primaryLabel: "View experience",
  },
  journey: {
    world: "basketball",
    eyebrow: "Basketball journey",
    title: "From academy development to representing Indonesia.",
    description:
      "The athlete record begins with DBL Academy in 2016 and follows the progression through school competition, DBL Camp and All-Star selection, ASEAN Schools Games gold, and the FIBA U18 Asia Cup in 2024.",
    sections: [
      {
        eyebrow: "2016 onward",
        title: "The development chapter started early.",
        description:
          "Richie joined DBL Academy in 2016 and later appeared in DBL Academy Selection Teams before progressing into the school competition pathway.",
      },
      {
        eyebrow: "2021–2023",
        title: "Gloria 1 became the main competitive chapter.",
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
    title: "Results with event context and sources.",
    description:
      "The dedicated achievement ledger now highlights the 2024 ASEAN Schools Games gold, DBL Indonesia All-Star selection, the Gloria 1 East Java final run, and the development pathway behind them.",
    sections: [],
    primaryHref: "/basketball/stats",
    primaryLabel: "View verified statistics",
  },
  stats: {
    world: "basketball",
    eyebrow: "Statistics",
    title: "Competition-aware numbers, not a blended career total.",
    description:
      "The statistics view now separates DBL season totals from FIBA international per-game figures and links back to the published player profiles.",
    sections: [],
    primaryHref: "/basketball/gallery",
    primaryLabel: "Open proof gallery",
  },
  gallery: {
    world: "basketball",
    eyebrow: "Proof gallery",
    title: "Photography first. Context always.",
    description:
      "The gallery is designed as an athlete archive rather than a social feed. Real owner photography will be grouped by team, tournament, and career chapter so each image can connect back to the relevant result or statistic.",
    sections: [
      {
        eyebrow: "Archive model",
        title: "Team and competition are the organizing layer.",
        description:
          "The planned filters map directly to the athlete record: national team, DBL, Gloria 1, All-Star, FIBA U18, and development chapters.",
      },
      {
        eyebrow: "Moment detail",
        title: "A photograph should open into the event story.",
        description:
          "Selected images can carry competition, role, result, statistics, source, and related moments instead of existing as isolated decoration.",
      },
      {
        eyebrow: "Media boundary",
        title: "Real archive material takes priority.",
        description:
          "Production photography uses owner-provided or properly sourced media. Generated likenesses are not treated as evidence of real basketball events.",
      },
    ],
    primaryHref: "/basketball/media",
    primaryLabel: "View media archive",
  },
  media: {
    world: "basketball",
    eyebrow: "Press and media",
    title: "Coverage connected back to the career chapter it documents.",
    description:
      "The media architecture is reserved for original DBL, federation, competition, and other verified coverage. Article titles and links are added from source material rather than generated mockup copy.",
    sections: [
      {
        eyebrow: "DBL record",
        title: "Development, school competition, and All-Star coverage.",
        description:
          "DBL Indonesia provides the strongest published thread across the athlete journey, including player statistics, academy history, Gloria 1 competition, camp participation, and the 2024 All-Star selection.",
      },
      {
        eyebrow: "Indonesia record",
        title: "National-team results stay with official reporting.",
        description:
          "ASEAN Schools Games results and international tournament statistics are linked to official or competition-specific sources rather than summarized without provenance.",
      },
      {
        eyebrow: "Archive growth",
        title: "Strong sources first, volume later.",
        description:
          "Additional interviews, articles, and media can be added over time without displacing the strongest primary records at the top of the archive.",
      },
    ],
    primaryHref: "/basketball/achievements",
    primaryLabel: "Open achievement ledger",
  },
} as const satisfies Record<string, FoundationPageDefinition>;
