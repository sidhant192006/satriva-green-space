import Image from "next/image";
import Link from "next/link";
import type { Block, Item } from "@/lib/services";
import { delay } from "@/lib/util";
import { Leaf } from "./Icons";

function Head({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <div className="rv block-head">
      <p className="kicker">{kicker}</p>
      <h2 className="detail-h2">{title}</h2>
      {intro && <p className="block-intro">{intro}</p>}
    </div>
  );
}

function Cards({ items }: { items: Item[] }) {
  return (
    <div className="pillars grid-auto">
      {items.map((it, i) => (
        <div className="pillar rv" style={delay(`${(i % 3) * 0.07}s`)} key={it.title}>
          <h3>{it.title}</h3>
          <p>{it.body}</p>
        </div>
      ))}
    </div>
  );
}

function Thumbs({ items }: { items: { name: string; image: string }[] }) {
  return (
    <ul className="thumbs">
      {items.map((p) => (
        <li key={`${p.name}-${p.image}`}>
          <span className="thumb-img">
            <Image src={p.image} alt={p.name} fill sizes="(max-width: 640px) 45vw, 12rem" />
          </span>
          <span>{p.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, idx) => {
        const key = `${b.type}-${idx}`;

        if (b.type === "tiers") {
          return (
            <section className="band band-tight" key={key}>
              <div className="wrap">
                <div className="rv block-head">
                  <p className="kicker">{b.kicker}</p>
                  <h2 className="title">{b.title}</h2>
                  {b.intro && <p className="block-intro">{b.intro}</p>}
                </div>
                <div className="tiers">
                  {b.items.map((t) => (
                    <div className="tier" key={t.name}>
                      <span className="tag">{t.badge ?? "Package"}</span>
                      <h3>{t.name}</h3>
                      <p className="fee">{t.price} <small>{t.unit}</small></p>
                      <p>{t.desc}</p>
                      <ul className="incl-list">
                        {t.features.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {b.note && <p className="band-note">{b.note}</p>}
              </div>
            </section>
          );
        }

        return (
          <section className="detail-block" key={key}>
            <div className="wrap">
              <Head kicker={b.kicker} title={b.title} intro={b.intro} />

              {b.type === "items" && <Cards items={b.items} />}

              {b.type === "list" && (
                <ul className="ticks ticks-2">
                  {b.items.map((it, i) => (
                    <li className="rv" style={delay(`${(i % 4) * 0.05}s`)} key={it}>
                      <Leaf />
                      {it}
                    </li>
                  ))}
                </ul>
              )}

              {b.type === "pills" && (
                <ul className="area-list">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              )}

              {b.type === "steps" && (
                <>
                  <ol className="steps in" style={{ ["--cols" as string]: b.items.length }}>
                    {b.items.map((s, i) => (
                      <li className="step" key={s.title}>
                        <span className="n">{String(i + 1).padStart(2, "0")}</span>
                        <h3>{s.title}</h3>
                        <p>{s.body}</p>
                      </li>
                    ))}
                  </ol>
                  {b.note && <p className="note">{b.note}</p>}
                </>
              )}

              {b.type === "compare" && (
                <div className="cmp-wrap">
                  <table className="cmp">
                    <thead>
                      <tr>
                        {b.heads.map((h, i) => (
                          <th key={i} scope="col">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r) => (
                        <tr key={r[0]}>
                          <th scope="row">{r[0]}</th>
                          <td>{r[1]}</td>
                          <td>{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {b.note && <p className="note">{b.note}</p>}
                </div>
              )}

              {b.type === "gallery" && (
                <ul className="gallery">
                  {b.images.map((g, i) => (
                    <li key={`${g.src}-${i}`}>
                      <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 980px) 33vw, 20rem" />
                      {g.caption && <span className="cap">{g.caption}</span>}
                    </li>
                  ))}
                </ul>
              )}

              {b.type === "beforeafter" && (
                <div className="ba-grid">
                  {b.pairs.map((p) => (
                    <figure className="ba" key={p.title}>
                      <div className="ba-pair">
                        <span className="ba-img"><Image src={p.before} alt={`Before: ${p.title}`} fill sizes="(max-width: 640px) 45vw, 20rem" /><em>Before</em></span>
                        <span className="ba-img"><Image src={p.after} alt={`After: ${p.title}`} fill sizes="(max-width: 640px) 45vw, 20rem" /><em>After</em></span>
                      </div>
                      <figcaption>{p.title}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              {(b.type === "products" || b.type === "plants") &&
                b.groups.map((g) => (
                  <div className="thumb-group" key={g.name}>
                    <h3>{g.name}</h3>
                    <Thumbs items={g.items} />
                  </div>
                ))}
            </div>
          </section>
        );
      })}
      <div className="wrap">
        <p className="note"><Link href="/free-quote" style={{ color: "var(--accent)" }}>Request a free quote</Link></p>
      </div>
    </>
  );
}
