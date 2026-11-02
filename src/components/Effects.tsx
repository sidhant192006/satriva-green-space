"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Behaviour that has no visible markup of its own:
 * scroll reveal, header progress line, hero photo parallax, and the glow that follows the
 * pointer over list rows.
 */
export default function Effects() {
  const pathname = usePathname();

  // Scroll reveal. Re-runs on every route change so new pages animate in too.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    // Anything already on screen is marked as revealed first, so it never jumps when "js" is added.
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".rv, .steps"));
    for (const el of targets) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) el.classList.add("in");
    }
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    for (const el of targets) {
      if (!el.classList.contains("in")) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  // Progress line and hero parallax.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ticking = false;

    function update() {
      const bar = document.getElementById("progress");
      const img = document.getElementById("heroimg");
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      if (img && !reduce) {
        const p = Math.min(1, y / (window.innerHeight * 1.1));
        img.style.setProperty("--pos", `${(64 + p * 16).toFixed(2)}%`);
      }
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Pointer glow on list rows.
  useEffect(() => {
    function onMove(e: PointerEvent) {
      const row = (e.target as Element | null)?.closest<HTMLElement>(".offer");
      if (!row) return;
      const rect = row.getBoundingClientRect();
      row.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      row.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }

    document.addEventListener("pointermove", onMove);
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
