type EvidencePrinciple = {
  description: string;
  num: string;
  title: string;
};

const evidencePrinciples: readonly EvidencePrinciple[] = [
  {
    num: "01",
    title: "Result → source → context",
    description:
      "A medal, championship, or All-Star roster spot is accompanied by official tournament recaps and competitive context.",
  },
  {
    num: "02",
    title: "Photo → event → role",
    description:
      "Every photograph and proof slot connects directly to the specific tournament, opponent, and team milestone behind it.",
  },
  {
    num: "03",
    title: "Statistic → competition → verification",
    description:
      "Statistics remain partitioned by level of play—school, provincial, and national—rather than blended into vague totals.",
  },
  {
    num: "04",
    title: "Story → evidence → related moments",
    description:
      "Narrative statements and career reflection stay linked to published articles, player profiles, and verifiable sources.",
  },
];

export function AthleteEvidenceSystem() {
  return (
    <section
      aria-labelledby="evidence-heading"
      className="athlete-section"
      id="proof"
    >
      <div className="athlete-container">
        <div className="athlete-evidence__grid">
          <div data-reveal>
            <p className="athlete-kicker">Evidence standard</p>
            <h2 className="athlete-title-display mt-3" id="evidence-heading">
              Proof stays attached to the record.
            </h2>
            <p className="athlete-lead mt-5 max-w-xl">
              A viewer can move from a championship result to its source, from a
              game photograph to its event context, and from a stat line back to
              the competition where it happened.
            </p>
          </div>

          <div
            aria-label="Core verification principles"
            className="athlete-evidence__list"
            data-reveal
            data-reveal-delay="1"
            role="region"
          >
            {evidencePrinciples.map((principle) => (
              <article className="athlete-evidence__item" key={principle.num}>
                <span className="athlete-evidence__num">{principle.num}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
