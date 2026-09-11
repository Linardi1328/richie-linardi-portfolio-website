import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="This personal portfolio is intentionally designed to collect as little personal data as possible. The current site has no account system, no contact form, no advertising, and no behavioural analytics."
      sections={[
        {
          title: "What the site collects",
          body: (
            <p>
              The current application does not ask visitors to submit names, email
              addresses, payment details, account credentials, or other profile
              information. Contact is handled through public profile links rather
              than a website form.
            </p>
          ),
        },
        {
          title: "Technical data",
          body: (
            <p>
              The hosting provider may process ordinary request data needed to
              deliver and secure the website, such as IP address, user agent,
              request time, and diagnostic/security logs. This portfolio does not
              intentionally use that information to build advertising profiles or
              track people across sites.
            </p>
          ),
        },
        {
          title: "Analytics and advertising",
          body: (
            <p>
              No Google Analytics, Meta Pixel, Hotjar, Mixpanel, PostHog, or
              similar behavioural analytics/advertising tracker is included in the
              audited build. If non-essential tracking is added later, this policy
              and the site&apos;s consent controls must be reviewed before it is
              enabled.
            </p>
          ),
        },
        {
          title: "Third-party destinations",
          body: (
            <p>
              Project, source, GitHub, social-media, competition, university, and
              other external links take you to services controlled by third
              parties. Their privacy practices apply once you leave this portfolio.
            </p>
          ),
        },
        {
          title: "Media and public records",
          body: (
            <p>
              Portfolio claims and media are intended to use first-party material,
              public professional/competition records, or assets for which
              publication rights have been checked. If you believe personal
              information or media has been published incorrectly, use the
              verified channels on the <Link href="/contact">contact page</Link>.
            </p>
          ),
        },
        {
          title: "Malaysia and privacy requests",
          body: (
            <p>
              The site is operated from Malaysia. It is a personal portfolio rather
              than an online shop or customer account service, but it follows
              data-minimisation, transparency, security, and correction principles
              as a baseline. Requests concerning information published on the site
              can be raised through the verified public contact channels.
            </p>
          ),
        },
      ]}
    />
  );
}
