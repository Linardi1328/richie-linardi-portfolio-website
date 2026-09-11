import { LegalPage } from "@/components/legal/legal-page";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      summary="These terms apply to this personal portfolio and its public project/athlete archive. Browsing the site does not create a client, employment, advisory, coaching, or other professional relationship."
      sections={[
        {
          title: "Portfolio purpose",
          body: (
            <p>
              The site presents personal projects, experience, education, and
              basketball records for portfolio and informational purposes. Project
              pages may describe prototypes, research systems, demos, limitations,
              and work in progress.
            </p>
          ),
        },
        {
          title: "Accuracy and claims",
          body: (
            <p>
              Reasonable effort is made to keep factual claims tied to
              repositories, official records, first-party information, or cited
              sources. The site may still contain mistakes or become outdated.
              Corrections should be raised through the verified contact channels.
            </p>
          ),
        },
        {
          title: "No professional advice or guarantees",
          body: (
            <p>
              Nothing on this portfolio is financial, investment, accounting, tax,
              legal, medical, recruitment, or other regulated professional advice.
              Project descriptions and technical demonstrations are not promises
              of commercial performance, availability, fitness for a specific use,
              investment returns, employment outcomes, or sporting results.
            </p>
          ),
        },
        {
          title: "Intellectual property",
          body: (
            <p>
              Original site design, code, writing, and first-party media are
              protected by applicable intellectual-property law. Third-party names,
              marks, articles, statistics, images, and other source material remain
              the property of their respective owners. A link or reference does
              not imply endorsement.
            </p>
          ),
        },
        {
          title: "External services",
          body: (
            <p>
              Links to GitHub, social platforms, project deployments, competition
              records, and other sites are provided for evidence or convenience.
              Their availability, content, security, and terms are controlled by
              those third parties.
            </p>
          ),
        },
        {
          title: "Acceptable use",
          items: [
            "Do not attempt to disrupt, probe, overload, or gain unauthorised access to the site or its hosting infrastructure.",
            "Do not misrepresent portfolio content, identity, achievements, or project work as your own.",
            "Do not use published personal information for harassment, impersonation, fraud, or unlawful profiling.",
          ],
        },
        {
          title: "Changes and governing context",
          body: (
            <p>
              The site and these terms may change as the portfolio evolves. These
              terms are intended to operate under applicable Malaysian law, without
              excluding rights or remedies that cannot lawfully be excluded.
            </p>
          ),
        },
      ]}
    />
  );
}
