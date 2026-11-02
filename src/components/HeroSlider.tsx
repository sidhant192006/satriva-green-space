"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = { image: string; tag: string; title: string; href: string; alt: string };

const INTERVAL = 3800;

/**
 * Home hero card deck. The front card slides away to the left every few seconds while the next one
 * moves forward, so the deck keeps turning on its own. It pauses only while the pointer is over it
 * (or when the visitor presses Pause) and can be dragged, swiped, or driven with the arrows and dots.
 */
export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [stopped, setStopped] = useState(false);
  const startX = useRef<number | null>(null);

  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);
  const running = !hover && !stopped;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => window.clearTimeout(id);
  }, [index, running, count]);

  function release(x: number) {
    if (startX.current === null) return;
    const dx = x - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
  }

  return (
    <div
      className="deck-wrap"
      role="group"
      aria-roledescription="carousel"
      aria-label="Our work"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(index + 1);
        if (e.key === "ArrowLeft") go(index - 1);
      }}
    >
      <div
        className="deck"
        onPointerDown={(e) => { startX.current = e.clientX; }}
        onPointerUp={(e) => release(e.clientX)}
        onPointerCancel={() => { startX.current = null; }}
      >
        {slides.map((s, i) => {
          const pos = (i - index + count) % count;
          const state = pos === 0 ? "on" : pos === 1 ? "next" : pos === 2 ? "next2" : pos === count - 1 ? "prev" : "far";
          return (
            <article
              className={`dc ${state}`}
              key={s.image}
              aria-hidden={pos !== 0}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              <Image src={s.image} alt={s.alt} fill priority={i < 2} sizes="(max-width: 860px) 80vw, 24rem" draggable={false} />
              <div className="dc-shade" aria-hidden="true" />
              <span className="dc-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className="dc-cap">
                <span className="dc-tag">{s.tag}</span>
                <Link href={s.href} tabIndex={pos === 0 ? 0 : -1} draggable={false}>{s.title} &rarr;</Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="deck-ctl">
        <ul className="deck-dots">
          {slides.map((s, i) => (
            <li key={s.image}>
              <button type="button" className={i === index ? "on" : undefined} onClick={() => go(i)} aria-label={`Show slide ${i + 1}: ${s.title}`} aria-current={i === index}>
                <span key={i === index ? `r${index}` : "x"} style={i === index && running ? { animationDuration: `${INTERVAL}ms` } : i === index ? { animationPlayState: "paused" } : undefined} />
              </button>
            </li>
          ))}
        </ul>
        <div className="deck-btns">
          <button type="button" onClick={() => go(index - 1)} aria-label="Previous slide">&larr;</button>
          <button type="button" className="toggle" onClick={() => setStopped((v) => !v)} aria-label={stopped ? "Play slideshow" : "Pause slideshow"}>{stopped ? "▶" : "❚❚"}</button>
          <button type="button" onClick={() => go(index + 1)} aria-label="Next slide">&rarr;</button>
        </div>
      </div>
    </div>
  );
}
