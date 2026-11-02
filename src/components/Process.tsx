import Link from "next/link";
import { steps } from "@/lib/content";
import { delay } from "@/lib/util";

type Props = {
  /** Use "h1" when this section is the main content of its own page. */
  as?: "h1" | "h2";
};

export default function Process({ as: Heading = "h2" }: Props) {
  const isPage = Heading === "h1";

  return (
    <section
      className={isPage ? "section is-page" : "section"}
      id="process"
      aria-labelledby="proc"
      style={isPage ? undefined : { paddingTop: 0 }}
    >
      <div className="wrap">
        <div className="rv">
          <p className="kicker">How it works</p>
          <Heading className="title" id="proc">From first visit to <em>steady care.</em></Heading>
        </div>
        <ol className="steps">
          {steps.map((step, i) => (
            <li className="step rv" style={delay(`${0.05 + i * 0.1}s`)} key={step.slug}>
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <h3>
                <Link className="step-link" href={`/process/${step.slug}`}>{step.title}</Link>
              </h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
