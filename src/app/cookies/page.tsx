import { LegalPage } from "@/components/legal/legal-page";

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      summary="The audited portfolio build does not intentionally set advertising, behavioural analytics, or cross-site marketing cookies. Because there is currently no non-essential tracking stack, the site does not show a performative cookie banner."
      sections={[
        {
          title: "Current implementation",
          body: <p>No Google Analytics, Meta Pixel, Hotjar, Mixpanel, PostHog, or similar behavioural tracking library was found in the current site code. The site also does not use browser storage for visitor profiles or marketing preferences.</p>,
        },
        {
          title: "Hosting and necessary infrastructure",
          body: <p>The hosting/CDN platform may use technical mechanisms or request logs necessary to deliver, secure, cache, and diagnose the website. Those infrastructure functions are different from intentionally adding marketing or behavioural tracking to the application.</p>,
        },
        {
          title: "External links",
          body: <p>GitHub, social networks, project deployments, and other external destinations may use their own cookies after you navigate away from this portfolio. Those cookies are controlled by the destination service.</p>,
        },
        {
          title: "If tracking is added later",
          body: <p>Non-essential analytics, advertising pixels, cross-site tracking, and third-party embeds must be reviewed before release. Where prior consent is required for relevant visitors, those technologies must remain off until a valid choice is made and users must be able to change that choice later.</p>,
        },
        {
          title: "Browser controls",
          body: <p>You can use browser settings to block or delete cookies and site storage. Since the current portfolio does not intentionally depend on marketing cookies, doing so should not be necessary to opt out of advertising tracking on this site.</p>,
        },
      ]}
    />
  );
}
