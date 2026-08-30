import type { FoundationSection } from "@/components/layout/foundation-route-page";
import type { PortfolioWorld } from "@/data/world-navigation";

export type FoundationPageDefinition = {
  world: PortfolioWorld;
  eyebrow: string;
  title: string;
  description: string;
  sections: readonly FoundationSection[];
  primaryHref?: string;
  primaryLabel?: string;
};

export const foundationPages = {
  about: {
    world: "professional",
    eyebrow: "Identity",
    title: "Same person. Two worlds. One operating mindset.",
    description:
      "This page establishes the identity layer of the portfolio: software, data, AI, and basketball are presented as connected disciplines rather than unrelated biographies.",
    sections: [
      {
        eyebrow: "Professional world",
        title: "Build systems that can explain themselves.",
        description:
          "The professional side will focus on evidence, architecture, deterministic boundaries, testing, and the decisions behind each system.",
        items: [
          "Projects with proof",
          "Human control",
          "Current limitations",
          "Reviewable engineering decisions",
        ],
      },
      {
        eyebrow: "Basketball world",
        title: "Treat the athlete journey like an archive.",
        description:
          "The basketball side will connect milestones, photography, statistics, sources, and context instead of behaving like a social-media feed.",
        items: [
          "Chronology",
          "Verified results",
          "Event context",
          "Source-backed media",
        ],
      },
      {
        eyebrow: "Shared principle",
        title: "Discipline transfers between worlds.",
        description:
          "The final version will make the connection explicit through mirrored layouts, shared design grammar, and the physical two-sided page interaction.",
      },
    ],
    primaryHref: "/projects",
    primaryLabel: "See the systems",
  },
  experience: {
    world: "professional",
    eyebrow: "Professional experience",
    title: "Work should be shown as responsibility, not decoration.",
    description:
      "This foundation page is reserved for verified roles, leadership, audit exposure, teaching, and software or analytics work. It deliberately avoids inflated job-title storytelling.",
    sections: [
      {
        eyebrow: "Responsibility",
        title: "What I was trusted to do.",
        description:
          "Each experience entry will identify the actual responsibility, working context, and practical scope of the role.",
      },
      {
        eyebrow: "Evidence",
        title: "What changed because of the work.",
        description:
          "Where evidence exists, the page will connect responsibilities to outputs, process improvements, systems, reports, teaching outcomes, or documented deliverables.",
      },
      {
        eyebrow: "Reflection",
        title: "What the work taught me.",
        description:
          "The final interface will connect professional experience back to the same engineering principles used across the project case studies.",
      },
    ],
    primaryHref: "/resume",
    primaryLabel: "Open web resume",
  },
  education: {
    world: "professional",
    eyebrow: "Education",
    title: "Academic work as a foundation for applied systems.",
    description:
      "This page will present university study, selected coursework, technical growth, and academic leadership only where the details are verified and relevant to the portfolio story.",
    sections: [
      {
        eyebrow: "Core study",
        title: "Computer science and data science foundations.",
        description:
          "The final version will show the academic areas that directly support the projects in this portfolio without turning the page into a transcript dump.",
      },
      {
        eyebrow: "Applied learning",
        title: "Coursework becomes useful when it survives implementation.",
        description:
          "Selected academic concepts will be connected to real project decisions such as probability, software design, data handling, testing, and algorithmic reasoning.",
      },
      {
        eyebrow: "Growth",
        title: "The page should show progression, not just credentials.",
        description:
          "A concise academic timeline will eventually connect formal study to the user's evolving software and data practice.",
      },
    ],
    primaryHref: "/projects",
    primaryLabel: "See applied work",
  },
  contact: {
    world: "professional",
    eyebrow: "Contact",
    title: "One contact surface for projects, work, and basketball.",
    description:
      "The preview establishes the routing and layout for enquiries. The final submission flow and verified contact destinations will be wired after the review pass.",
    sections: [
      {
        eyebrow: "Software and data",
        title: "Project, internship, and collaboration enquiries.",
        description:
          "This route will direct technical opportunities to the right context and make it easy to reference a specific project or capability.",
      },
      {
        eyebrow: "Basketball",
        title: "Athlete, coaching, event, and media enquiries.",
        description:
          "Basketball-related contact will share the same entry point while preserving the athlete-side visual identity and context.",
      },
      {
        eyebrow: "Before launch",
        title: "Only verified destinations go live.",
        description:
          "No generated email address, phone number, form endpoint, or social handle will be published simply because it appeared in a design mockup.",
      },
    ],
    primaryHref: "https://github.com/Linardi1328",
    primaryLabel: "Open GitHub profile",
  },
  resume: {
    world: "professional",
    eyebrow: "Web resume",
    title: "A concise operating record of skills, roles, and evidence.",
    description:
      "The web resume will become the compact factual index of the portfolio, while the deeper pages provide the story and supporting proof.",
    sections: [
      {
        eyebrow: "Profile",
        title: "Technical identity at a glance.",
        description:
          "The final resume will summarize the professional focus without repeating the entire homepage narrative.",
      },
      {
        eyebrow: "Experience and education",
        title: "Canonical facts, one source of truth.",
        description:
          "Roles, education, skills, and selected achievements will come from a shared verified content model so the site cannot contradict itself across pages.",
      },
      {
        eyebrow: "Evidence links",
        title: "Claims should lead somewhere useful.",
        description:
          "Projects, repositories, case studies, and relevant source material will be linked directly from the resume rather than left as unsupported bullet points.",
      },
    ],
    primaryHref: "/experience",
    primaryLabel: "View experience structure",
  },
  journey: {
    world: "basketball",
    eyebrow: "Basketball journey",
    title:
      "From development to higher-level competition, shown as one sequence.",
    description:
      "The journey page is the chronological backbone of the athlete side. This preview establishes the story architecture before the verified milestones and owner media are fully wired in.",
    sections: [
      {
        eyebrow: "Timeline",
        title: "Every chapter needs context.",
        description:
          "The final timeline will connect year, team, competition level, role, outcome, and supporting proof instead of listing isolated trophies.",
      },
      {
        eyebrow: "Progression",
        title: "Development matters as much as the headline result.",
        description:
          "The interface will show how opportunities, responsibilities, and competition level changed over time.",
      },
      {
        eyebrow: "Cross-links",
        title: "Moments should connect to photos and statistics.",
        description:
          "Timeline entries will eventually link directly into the gallery, achievement ledger, and verified statistical records.",
      },
    ],
    primaryHref: "/basketball/achievements",
    primaryLabel: "Open achievement ledger",
  },
  achievements: {
    world: "basketball",
    eyebrow: "Achievements",
    title: "Results you can trace back to an event and a source.",
    description:
      "This page will become the structured achievement ledger. The foundation intentionally avoids publishing a dense results list before the final source pass.",
    sections: [
      {
        eyebrow: "Ledger model",
        title: "Achievement, event, role, source.",
        description:
          "Every final achievement entry will carry enough context for a visitor to understand what happened and where the proof comes from.",
      },
      {
        eyebrow: "Hierarchy",
        title: "Major milestones deserve more space.",
        description:
          "The page will distinguish national-team, school, academy, and individual recognition rather than flattening everything into identical cards.",
      },
      {
        eyebrow: "Proof",
        title: "Source material stays attached.",
        description:
          "Official pages, game records, media, or owner-provided evidence will be linked from the relevant achievement where available.",
      },
    ],
    primaryHref: "/basketball/stats",
    primaryLabel: "View statistics foundation",
  },
  stats: {
    world: "basketball",
    eyebrow: "Statistics",
    title: "Numbers only become useful when the competition context is clear.",
    description:
      "The statistics route is ready for verified game and tournament data. It will not invent totals, percentages, or advanced metrics to fill empty space in the preview.",
    sections: [
      {
        eyebrow: "Career snapshot",
        title: "A small number of trusted headline metrics.",
        description:
          "The final snapshot will use only metrics that can be traced to a reliable competition or official statistical source.",
      },
      {
        eyebrow: "Tournament view",
        title: "Compare like with like.",
        description:
          "Competition-specific tables and charts will keep seasons, formats, and sample sizes explicit so the numbers are not misleading.",
      },
      {
        eyebrow: "Future layer",
        title: "Game logs and shooting splits when the data supports them.",
        description:
          "The route is designed to expand without redesigning the athlete-side navigation once more complete records are available.",
      },
    ],
    primaryHref: "/basketball/gallery",
    primaryLabel: "Open proof gallery",
  },
  gallery: {
    world: "basketball",
    eyebrow: "Proof gallery",
    title: "Photography first. Context always.",
    description:
      "The gallery foundation is built as an athlete archive rather than an Instagram clone. Owner media will be added after the review pass so the final crop and hierarchy can be judged properly.",
    sections: [
      {
        eyebrow: "Archive filters",
        title: "Browse by team, competition, and chapter.",
        description:
          "The final gallery will support meaningful filters that map back to the journey and achievement structure.",
      },
      {
        eyebrow: "Moment detail",
        title: "A photo opens into the event story.",
        description:
          "Each selected image can carry event, role, result, statistics, source, and related moments instead of existing as an isolated visual.",
      },
      {
        eyebrow: "Media ownership",
        title: "Use real owner media wherever possible.",
        description:
          "Generated likenesses are not a substitute for the user's actual basketball archive in the production site.",
      },
    ],
    primaryHref: "/basketball/media",
    primaryLabel: "View media archive",
  },
  media: {
    world: "basketball",
    eyebrow: "Press and media",
    title: "A verified archive of coverage, interviews, and source material.",
    description:
      "The preview reserves the route and information architecture. Real article titles, publication dates, outlets, and links will be added only after verification.",
    sections: [
      {
        eyebrow: "Coverage",
        title: "Original source before summary.",
        description:
          "Every published media item will link back to its source wherever practical rather than reproducing unsupported generated headlines.",
      },
      {
        eyebrow: "Context",
        title: "Connect coverage to the relevant basketball chapter.",
        description:
          "Media items will cross-link to journey milestones, competitions, achievements, and gallery moments when the connection is useful.",
      },
      {
        eyebrow: "Archive growth",
        title: "Designed to expand without becoming noisy.",
        description:
          "The page will support additional coverage over time while keeping the strongest pieces visible first.",
      },
    ],
    primaryHref: "/contact",
    primaryLabel: "Open contact page",
  },
} as const satisfies Record<string, FoundationPageDefinition>;
