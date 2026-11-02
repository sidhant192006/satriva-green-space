"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const INTERVAL = 5200;

/**
 * Photo background for the home hero. The photos change by themselves with a slow cross-fade and zoom,
 * and the dots at the bottom right let a visitor jump to a photo or pause the show.
 */
export default function HeroBackdrop({ images }: { images: { src: string; alt: string }[] }) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => window.clearTimeout(id);
  }, [index, paused, count]);

  return (
    <>
      <div className="hbg" aria-hidden="true">
        {images.map((img, i) => (
          <div className={i === index ? "hbg-slide on" : "hbg-slide"} key={img.src}>
            <Image src={img.src} alt="" fill priority={i === 0} sizes="100vw" />
          </div>
        ))}
      </div>

      <div className="hbg-ctl" role="group" aria-label="Background photos">
        <ul>
          {images.map((img, i) => (
            <li key={img.src}>
              <button type="button" className={i === index ? "on" : undefined} onClick={() => setIndex(i)} aria-label={`Show photo ${i + 1}: ${img.alt}`} aria-current={i === index}>
                <span key={i === index ? `r${index}` : "x"} style={i === index && !paused ? { animationDuration: `${INTERVAL}ms` } : i === index ? { animationPlayState: "paused" } : undefined} />
              </button>
            </li>
          ))}
        </ul>
        <button type="button" className="hbg-toggle" onClick={() => setPaused((v) => !v)} aria-label={paused ? "Play background photos" : "Pause background photos"}>
          {paused ? "▶" : "❚❚"}
        </button>
      </div>
    </>
  );
}
