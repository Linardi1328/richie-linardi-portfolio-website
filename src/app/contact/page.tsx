import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { PageIntro, SectionHeading } from "@/components/editorial/shared";

const channels = [
  {
    title: "Professional & Technical Networking",
    label: "LinkedIn",
    handle: "in/richie-linardi",
    href: "https://www.linkedin.com/in/richie-linardi-595370314/",
    description:
      "Connect for software engineering opportunities, internships, data science collaborations, or technical inquiries.",
  },
  {
    title: "Open Source & Code Repositories",
    label: "GitHub",
    handle: "Linardi1328",
    href: "https://github.com/Linardi1328",
    description:
      "Explore public codebase repositories, technical implementations, architecture notes, and software experiments.",
  },
  {
    title: "Direct Email Inquiry",
    label: "Email",
    handle: "richb.linardi@gmail.com",
    href: "mailto:richb.linardi@gmail.com",
    description:
      "Send formal correspondence, academic inquiries, project invitations, or engineering questions directly to my inbox.",
  },
  {
    title: "Basketball & Media Journey",
    label: "Instagram",
    handle: "@richiebertrand3",
    href: "https://www.instagram.com/richiebertrand3/",
    description:
      "Follow the basketball journey, training routines, game updates, and moments around competition.",
  },
  {
    title: "Athlete Content & Short-Form Highlights",
    label: "TikTok",
    handle: "@richiebertrand",
    href: "https://www.tiktok.com/@richiebertrand",
    description:
      "Short-form basketball stories, highlight reels, and athletic training insights from my personal profile.",
  },
];

export default function ContactPage() {
  return (
    <PortfolioWorldShell
      navigation={professionalWorldNavigation}
      world="professional"
    >
      <main>
        <PageIntro
          eyebrow="Contact & Collaboration"
          title="Direct channels for engineering and athletics."
          description="A single point of contact for technical projects, software engineering roles, academic conversations, and basketball connections. All channels below are verified and authentic."
        />

        <section className="section container section--compact">
          <SectionHeading
            label="Verified Communication Channels"
            title="Where you can find me."
          />
          <div className="card-grid">
            {channels.map((channel) => (
              <a
                className="content-card navigation-card"
                key={channel.label}
                href={channel.href}
                target={
                  channel.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  channel.href.startsWith("mailto:") ? undefined : "noreferrer"
                }
              >
                <p className="eyebrow">
                  {channel.label} <span aria-hidden="true">↗</span>
                </p>
                <h2 className="card-heading">{channel.title}</h2>
                <p>{channel.description}</p>
                <span className="text-link">{channel.handle}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section container section--tinted">
          <div
            className="content-card"
            style={{ maxWidth: "760px", margin: "0 auto" }}
          >
            <p className="eyebrow">Communication & Privacy Standard</p>
            <h2 className="card-heading">Security and privacy safeguards.</h2>
            <p>
              This portfolio publishes strictly verified professional and public
              athletic channels. Direct phone numbers, unverified chat profiles,
              and internal communication credentials remain protected under
              privacy safeguards.
            </p>
          </div>
        </section>
      </main>
    </PortfolioWorldShell>
  );
}
