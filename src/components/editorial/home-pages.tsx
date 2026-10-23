import Link from "next/link";
import { PortfolioPhotograph } from "@/components/ui/portfolio-photograph";
import { publicProjectCatalogue } from "@/data/project-registry";
import {
  basketballAchievements,
  asg2024FinalSnapshot,
  fibaU18Snapshot,
} from "@/data/basketball-record";
import { ProjectCard, SectionHeading } from "./shared";

export function ProfessionalHome() {
  return (
    <main>
      <section className="home-hero container">
        <div className="home-hero__copy">
          <p className="eyebrow">
            <span className="status-dot" /> Data science · Applied AI · Computer
            science
          </p>
          <h1>
            Curiosity.
            <br />
            Built into
            <br />
            <em>something real.</em>
          </h1>
          <p className="lede">
            I’m Richie Linardi, a Computer Science student at Monash University
            Malaysia. I explore how data, AI, and thoughtful software can turn
            complex problems into useful systems.
          </p>
          <div className="button-row">
            <Link className="button button--primary" href="#selected-work">
              Explore my work ↗
            </Link>
            <Link className="button button--plain" href="/about">
              A little about me →
            </Link>
          </div>
          <div className="hero-footnote">
            <span>Based in Malaysia</span>
            <span>Monash University Malaysia</span>
          </div>
        </div>
        <div className="home-hero__visual">
          <div className="photo-label">
            <span>01 / The professional side</span>
            <span>Richie Linardi</span>
          </div>
          <PortfolioPhotograph photo="professional" preload />
          <div className="hero-photo-note">
            <span className="note-number">RL.</span>
            <p>
              Analytical by nature.
              <br />
              Driven by possibility.
            </p>
            <Link href="/basketball">Meet the athlete ↗</Link>
          </div>
        </div>
      </section>
      <div className="focus-strip">
        <div className="container">
          <span>My areas of focus</span>
          <p>
            Data Science <i /> Applied AI <i /> Automation <i /> Reliable
            Systems
          </p>
        </div>
      </div>
      <section className="section container" id="selected-work">
        <SectionHeading
          label="Selected work"
          title="Ideas, put into practice."
          link={{ href: "/projects", label: "All projects" }}
        >
          A selection of research, automation, and software projects. Each one
          is connected to its source and current boundaries.
        </SectionHeading>
        <div className="card-grid">
          {publicProjectCatalogue.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
      <section className="section section--tinted">
        <div className="container">
          <SectionHeading
            label="Beyond the code"
            title="Learning happens everywhere."
          />
          <div className="story-grid">
            <article className="story-card">
              <PortfolioPhotograph photo="monash" />
              <div>
                <p className="eyebrow">Education</p>
                <h3>A foundation in curiosity.</h3>
                <p>
                  Computer Science, a Data Science specialization, and room to
                  keep asking better questions.
                </p>
                <Link className="text-link" href="/education">
                  My academic journey ↗
                </Link>
              </div>
            </article>
            <article className="story-card">
              <PortfolioPhotograph photo="hackathon" />
              <div>
                <p className="eyebrow">Collaboration</p>
                <h3>Different perspectives. New ideas.</h3>
                <p>
                  Bringing basketball and generative video together at the AI
                  Video Hackathon KL 2026.
                </p>
                <Link className="text-link" href="/experience">
                  Explore my experience ↗
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section container bridge">
        <div>
          <p className="eyebrow">The other side of the story</p>
          <h2>
            The same discipline.
            <br />A different arena.
          </h2>
          <p>
            Basketball has shaped how I prepare, communicate, and respond under
            pressure. It is a big part of the person behind the projects.
          </p>
          <Link className="button button--primary" href="/basketball">
            Step onto the court ↗
          </Link>
        </div>
        <PortfolioPhotograph photo="allStar" />
      </section>
    </main>
  );
}

export function AthleteHome() {
  return (
    <main>
      <section className="home-hero home-hero--athlete container">
        <div className="home-hero__copy">
          <p className="eyebrow">
            <span className="status-dot" /> Indonesia · No. 13
          </p>
          <h1>
            For the game.
            <br />
            For the team.
            <br />
            <em>For the journey.</em>
          </h1>
          <p className="lede">
            I’m Richie Linardi. From DBL Academy in Surabaya to representing
            Indonesia, basketball has been a journey of preparation,
            competition, and growing together.
          </p>
          <div className="button-row">
            <Link className="button button--primary" href="/basketball/journey">
              Follow my journey ↗
            </Link>
            <Link className="button button--plain" href="/basketball/gallery">
              The photo archive →
            </Link>
          </div>
          <div className="hero-footnote">
            <span>DBL Indonesia All-Star 2024</span>
            <span>Indonesia national representation</span>
          </div>
        </div>
        <div className="home-hero__visual">
          <div className="photo-label">
            <span>02 / The athlete side</span>
            <span>In my element</span>
          </div>
          <PortfolioPhotograph photo="allStar" preload />
          <div className="hero-photo-note">
            <span className="note-number">13.</span>
            <p>
              Built through repetition.
              <br />
              Better, together.
            </p>
            <Link href="/basketball/stats">View the record ↗</Link>
          </div>
        </div>
      </section>
      <div className="focus-strip">
        <div className="container">
          <span>Career landmarks</span>
          <p>
            ASG Gold 2024 <i /> DBL All-Star <i /> FIBA U18 Asia Cup
          </p>
        </div>
      </div>
      <section className="section container">
        <SectionHeading
          label="Moments that matter"
          title="The work behind the milestones."
          link={{ href: "/basketball/achievements", label: "All achievements" }}
        />
        <div className="card-grid">
          {basketballAchievements.slice(0, 3).map((item) => (
            <article className="content-card achievement-card" key={item.title}>
              <span className="large-year">{item.year}</span>
              <p className="eyebrow">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              {item.source ? (
                <a
                  className="text-link"
                  href={item.source.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the record ↗
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      <section className="section section--tinted">
        <div className="container feature-split">
          <PortfolioPhotograph photo="gold" />
          <div>
            <p className="eyebrow">ASEAN Schools Games 2024</p>
            <h2>
              A gold medal.
              <br />A shared memory.
            </h2>
            <p className="lede">
              Indonesia {asg2024FinalSnapshot.score} Philippines.
            </p>
            <p>{asg2024FinalSnapshot.contextNote}</p>
            <div className="stat-grid">
              <div>
                <strong>{asg2024FinalSnapshot.points}</strong>
                <span>Points in the final</span>
              </div>
              <div>
                <strong>{asg2024FinalSnapshot.rebounds}</strong>
                <span>Rebounds in the final</span>
              </div>
              <div>
                <strong>{fibaU18Snapshot.games}</strong>
                <span>FIBA U18 games in 2024</span>
              </div>
            </div>
            <Link className="text-link" href="/basketball/stats">
              Explore the statistics ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          label="Explore the athlete"
          title="There’s more to the story."
        />
        <div className="card-grid">
          {[
            {
              href: "/basketball/journey",
              no: "01",
              title: "The journey",
              copy: "Academy foundations, school competition, club basketball, and international representation.",
            },
            {
              href: "/basketball/gallery",
              no: "02",
              title: "The photographs",
              copy: "A personal collection of game moments, teammates, and milestones.",
            },
            {
              href: "/basketball/media",
              no: "03",
              title: "In the record",
              copy: "Published coverage, federation profiles, and sources behind the competitive record.",
            },
          ].map((item) => (
            <Link
              className="content-card navigation-card"
              href={item.href}
              key={item.href}
            >
              <span className="eyebrow">
                {item.no} <span aria-hidden="true">↗</span>
              </span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
