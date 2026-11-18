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
      "I study Computer Science with a Data Science specialization at Monash University Malaysia while building software, data, and sports systems outside class. Competitive basketball shaped the exact same habits I bring to engineering: rigorous preparation, calm execution under pressure, and relentless accountability.",
    portrait: {
      src: "/images/portfolio/richie-professional.webp",
      alt: "Richie Linardi wearing a black blazer and white shirt",
      label: "Professional portrait · RBL",
      note: "Software and basketball are presented as two sides of the same working mindset.",
    },
    sections: [
      {
        eyebrow: "Professional world",
        title: "Build systems that can explain themselves.",
        description:
          "My technical work focuses on full-stack software, data science, automation, and applied AI systems. I value explicit boundaries, testable behavior, traceable evidence, and human control when decisions matter.",
        items: [
          "Computer Science · Data Science specialization (CGPA 3.50)",
          "Python, TypeScript, SQL, Java, React, and Next.js experience",
          "Live tournament systems and data visualization",
          "Automated testing, continuous review, and clear boundaries",
        ],
      },
      {
        eyebrow: "Basketball world",
        title: "Development before highlights.",
        description:
          "The athlete record follows the path from developmental academies and school competition to DBL selection, national representation, and international competition. Results, statistics, and media stay tied to their verified event context.",
        items: [
          "DBL Academy development pathway",
          "SMA Gloria 1 Surabaya",
          "DBL Indonesia All-Star 2024",
          "ASEAN Schools Games 2024 Gold Medalist (Indonesia)",
          "FIBA U18 Asia Cup 2024 (Indonesia National Team)",
        ],
      },
      {
        eyebrow: "Shared principle",
        title: "Preparation transfers between worlds.",
        description:
          "Basketball taught repetition, role clarity, review after mistakes, and calm decision-making under pressure. Software applies the same discipline: design the system, test the assumptions, measure the result, then refine it.",
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
      "My experience combines independent software development, competition statistics operations, financial audit, collaborative AI hackathon participation, and competitive athletics. The focus is on responsibility, communication, and work that can be inspected directly.",
    sections: [
      {
        eyebrow: "Independent Product Builder · 2026–Present",
        title: "Independent Software Developer · R&E Technologies.",
        description:
          "Leading software engineering for R&E Technologies, a broader technology solutions venture in development that builds its own software products (KYNEXA, RIVORA, AXIOM QUANTUM) while selectively exploring practical software solutions for business problems.",
      },
      {
        eyebrow: "Statistics & operations · Jan 2026–Present",
        title: "Stats Team Leader · KHLIM Basketball Club.",
        description:
          "Designed an automated points-tracking system covering more than 350 matches across two competitions. Managed match statistics, scheduling, and scoring flow to keep competition data accurate and current.",
      },
      {
        eyebrow: "Audit & verification · Dec 2025–Sep 2026",
        title: "Auditor · KHLIM Group of Companies.",
        description:
          "Financial record verification, audit working-paper preparation and review, inventory stock counts, and external audit assignments across three companies.",
      },
      {
        eyebrow: "Incoming Internship · Scheduled 23 Nov 2026 – 19 Feb 2027",
        title: "Incoming Data Annotation Intern · GTEX Asia Sdn Bhd.",
        description:
          "Scheduled to begin on 23 November 2026, focusing on data annotation, dataset verification, and quality workflows supporting applied AI systems.",
      },
      {
        eyebrow: "Collaborative Sprint · Sep 2026",
        title: "AI Video Hackathon KL 2026 · Midnight Owls.",
        description:
          "Teamed with Esther Lim Jia Xin on 'One Team, One Dream', an AI-generated basketball short film exploring sports as a unifier across diverse Malaysian backgrounds. The hackathon was organized by Topview AI and AWS, with the source post separately crediting Topview AI with providing tools.",
      },
      {
        eyebrow: "Leadership & athletic standard",
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
      "I am pursuing a Bachelor of Computer Science at Monash University Malaysia with a Data Science specialization, holding a 3.50 CGPA and expected graduation in Nov 2027. That academic foundation feeds directly into the software and analytical systems in this portfolio.",
    sections: [
      {
        eyebrow: "Degree & Specialization",
        title: "Bachelor of Computer Science (Data Science).",
        description:
          "Monash University Malaysia (Mar 2025 – Nov 2027 expected). The degree builds computational and algorithmic foundations, while the Data Science specialization adds deep statistical and data-oriented depth.",
        items: [
          "Monash University Malaysia",
          "Data Science specialization",
          "Cumulative Grade Point Average: 3.50",
          "Expected graduation · November 2027",
        ],
      },
      {
        eyebrow: "Academic Coursework",
        title: "Core computational and analytical foundations.",
        description:
          "Foundational academic studies include algorithms, databases, data visualisation, statistics, and software design. Personal technical projects give those ideas a practical, production-oriented setting.",
      },
      {
        eyebrow: "Applied Translation",
        title: "Foundations connect to operating software.",
        description:
          "Rigorous academic coursework in algorithms, databases, and statistics provides analytical depth that connects directly to real-world systems, such as live tournament computation and market research models.",
      },
    ],
    primaryHref: "/projects",
    primaryLabel: "See applied work",
  },
  contact: {
    world: "professional",
    eyebrow: "Contact & Collaboration",
    title: "One place for projects, opportunities, and basketball.",
    description:
      "Public contact runs through verified channels. Reach out for software engineering roles, data science projects, technical collaborations, or basketball connections.",
    sections: [
      {
        eyebrow: "Professional & technical",
        title: "Start with the work itself.",
        description:
          "For internship, software engineering, data science, or AI project conversations, connect via LinkedIn, GitHub, or direct email.",
        items: [
          "LinkedIn · linkedin.com/in/richie-linardi-595370314",
          "GitHub · github.com/Linardi1328",
          "Email · richb.linardi@gmail.com",
        ],
      },
      {
        eyebrow: "Basketball",
        title: "Public athlete profiles.",
        description:
          "Basketball updates and public athlete content are available through verified social channels.",
        items: ["Instagram · @richiebertrand3", "TikTok · @richiebertrand"],
      },
      {
        eyebrow: "Communication standard",
        title: "Only verified channels are published.",
        description:
          "This portfolio displays only authentic, verified channels. Private contact information remains protected in accordance with privacy safeguards.",
      },
    ],
    primaryHref: "https://www.linkedin.com/in/richie-linardi-595370314/",
    primaryLabel: "Connect on LinkedIn",
  },
  resume: {
    world: "professional",
    eyebrow: "Web résumé",
    title: "A concise record, with the evidence one click away.",
    description:
      "Computer Science undergraduate specializing in Data Science at Monash University Malaysia (CGPA 3.50, expected 2027), independent software builder, and competitive basketball athlete. Below is the verified record from Résumé V4.",
    portrait: {
      src: "/images/portfolio/richie-professional.webp",
      alt: "Richie Linardi wearing a black blazer and white shirt",
      label: "Richie Linardi · Professional record",
    },
    sections: [
      {
        eyebrow: "Education",
        title: "Monash University Malaysia (Mar 2025 – Nov 2027 expected).",
        description:
          "Bachelor of Computer Science (Data Science) · CGPA: 3.50. Coursework: algorithms, databases, data visualisation, statistics, and software design.",
      },
      {
        eyebrow: "Experience",
        title: "Professional & Technical Roles.",
        description:
          "Independent Software Developer at R&E Technologies (venture in development, 2026–Present); Stats Team Leader at KHLIM Basketball Club (Jan 2026–Present); Auditor at KHLIM Group of Companies (Dec 2025–Sep 2026); Incoming Data Annotation Intern at GTEX Asia Sdn Bhd (Scheduled 23 Nov 2026–19 Feb 2027).",
      },
      {
        eyebrow: "Selected Technical Systems",
        title: "Five core systems from Résumé V4.",
        description:
          "Flagship deployed system: KHLIM 3x3 Live V1 (deployed 24 Oct 2026; 118 matches, 2 courts, 4 divisions). In development: KYNEXA (sports registration platform) and RIVORA (managed basketball tournament platform). Quantitative research: AXIOM QUANTUM (v2 beta research baseline). Completed academic work: Tourism in Malaysia Interactive Dashboard.",
      },
      {
        eyebrow: "Technical Skills & Achievements",
        title: "Languages, Tools, and Honors.",
        description:
          "Languages & Frameworks: Python, SQL, Java, TypeScript, JavaScript, React, Next.js, FastAPI, NestJS. Data & Tools: pandas, scikit-learn, Tableau, PostgreSQL, Supabase, Git/GitHub, CI, Linux, Excel. Honors: ASEAN Schools Games 2024 gold (Indonesia); DBL Indonesia All-Star 2024; FIBA U18 Asia Cup 2024; AI Video Hackathon KL 2026 participant (Midnight Owls).",
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
      "The basketball record separates competition results, individual honors, and game records. Every achievement traces directly to its governing body, competition organizer, or official box score.",
    sections: [
      {
        eyebrow: "International competition",
        title: "Representing Indonesia at youth and school levels.",
        description:
          "Richie won gold with the Indonesia Men's Basketball Team at the 13th ASEAN Schools Games in Da Nang, Vietnam, and represented Indonesia at the FIBA U18 Asia Cup in Amman, Jordan.",
      },
      {
        eyebrow: "National honors",
        title: "DBL Indonesia All-Star 2024 selection.",
        description:
          "Selected to the DBL Indonesia All-Star 2024 roster following the national DBL Camp in Jakarta, representing East Java and SMA Gloria 1 Surabaya.",
      },
      {
        eyebrow: "School competition",
        title: "SMA Gloria 1 Surabaya campaign.",
        description:
          "Competed in the DBL East Java series, earning Fantastic Four and Runner-up finishes, along with First Team East Java selection in 2023.",
      },
    ],
    primaryHref: "/basketball/stats",
    primaryLabel: "View statistical ledger",
  },
} as const;
