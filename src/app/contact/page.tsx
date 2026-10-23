import { PortfolioWorldShell } from "@/components/layout/portfolio-world-shell";
import { professionalWorldNavigation } from "@/data/world-navigation";
import { PageIntro } from "@/components/editorial/shared";

const channels = [
  {
    title: "Projects & collaboration",
    label: "GitHub",
    handle: "Linardi1328",
    href: "https://github.com/Linardi1328",
    description:
      "Explore my repositories or connect around data, applied AI, and software projects.",
  },
  {
    title: "Basketball & updates",
    label: "Instagram",
    handle: "@richiebertrand3",
    href: "https://www.instagram.com/richiebertrand3/",
    description: "Follow the basketball journey and the moments around it.",
  },
  {
    title: "More of the journey",
    label: "TikTok",
    handle: "@richiebertrand",
    href: "https://www.tiktok.com/@richiebertrand",
    description:
      "Basketball stories and athlete content from my personal profile.",
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
          eyebrow="Contact"
          title="Let’s make a connection."
          description="A project idea, a shared interest, or a conversation about basketball. These are the places you can find me."
        />
        <section className="section container section--compact">
          <div className="card-grid">
            {channels.map((channel) => (
              <a
                className="content-card navigation-card"
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
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
      </main>
    </PortfolioWorldShell>
  );
}
