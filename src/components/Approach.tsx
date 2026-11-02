import { pillars } from "@/lib/content";
import { delay } from "@/lib/util";

export default function Approach() {
  return (
    <section className="section" aria-labelledby="pos">
      <div className="wrap">
        <p className="kicker rv">Our approach</p>
        <h2 className="big rv" id="pos">
          SATRIVA sits between the informal gardener and the large landscaping contractor.{" "}
          <em>Documented and dependable, yet easy to reach and flexible about the job.</em>
        </h2>
        <div className="pillars">
          {pillars.map((pillar, i) => (
            <div className="pillar rv" style={delay(`${0.05 + i * 0.1}s`)} key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
