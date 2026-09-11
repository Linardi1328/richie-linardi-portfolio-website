import { LegalPage } from "@/components/legal/legal-page";

export default function RefundsPage() {
  return (
    <LegalPage
      title="Payments & Refunds"
      summary="This personal portfolio does not currently sell products, subscriptions, coaching, consulting, memberships, or other paid services through the website, and it does not collect payment information."
      sections={[
        {
          title: "No website checkout",
          body: (
            <p>
              There is currently no cart, paid membership, recurring billing,
              donation flow, payment gateway, or commercial checkout on this
              portfolio. Accordingly, there are no website purchases to cancel or
              refund.
            </p>
          ),
        },
        {
          title: "Project demos are not purchases",
          body: (
            <p>
              Links to portfolio projects and demonstrations are provided to show
              technical work. Using a public demo does not create a paid services
              contract with the portfolio owner unless a separate written
              agreement explicitly says otherwise.
            </p>
          ),
        },
        {
          title: "Future paid services",
          body: (
            <p>
              If the site later offers paid services or products, the relevant
              seller identity, pricing, cancellation terms, refund rules, statutory
              consumer rights, and payment/privacy disclosures must be added before
              checkout is enabled. This page must be updated at the same time.
            </p>
          ),
        },
        {
          title: "Unexpected payment request",
          body: (
            <p>
              If a page claiming to be this portfolio unexpectedly asks you for
              card details, banking credentials, cryptocurrency, or payment, do not
              proceed unless that feature is clearly reflected in the current
              official site policies and verified contact channels.
            </p>
          ),
        },
      ]}
    />
  );
}
