"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { QUOTE_PAGE } from "@/lib/content";
import { cityOptions } from "@/lib/city-options";
import { quoteServices } from "@/lib/services";
import { CONTACT } from "@/lib/site";
import { delay } from "@/lib/util";
import { Arrow } from "./Icons";

/**
 * The form has no server behind it. It writes the request as a message the visitor can copy,
 * or send straight to WhatsApp on our number.
 */
export default function QuoteForm({ detailed = true }: { detailed?: boolean }) {
  const resultRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLPreElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  // A link such as /free-quote?service=Moss%20Wall&city=Noida fills in those fields.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const city = params.get("city");
    const note = params.get("note");
    if (service && quoteServices.includes(service) && serviceRef.current) serviceRef.current.value = service;
    if (city && cityOptions.includes(city) && cityRef.current) cityRef.current.value = city;
    if (note && noteRef.current) noteRef.current.value = note;
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [
      "Hello Satriva, I would like a free quote.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
    ];
    if (get("email")) lines.push(`Email: ${get("email")}`);
    lines.push(`City: ${get("city")}`, `Service: ${get("service")}`);
    if (detailed) {
      lines.push(`Property type: ${get("property")}`, `Approx. area (sq ft): ${get("area") || "Not specified"}`, `Budget: ${get("budget")}`);
    }
    if (get("note")) lines.push(`Project details: ${get("note")}`);

    setMessage(lines.join("\n"));
    setStatus("");
    requestAnimationFrame(() => resultRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }

  async function copy() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setStatus("Message copied.");
    } catch {
      const node = messageRef.current;
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setStatus("Message selected. Copy it from here.");
    }
  }

  const whatsappHref = message ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}` : null;
  const mailHref = message
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent("Free quote request")}&body=${encodeURIComponent(message)}`
    : null;

  return (
    <form className="rv" style={delay(".1s")} onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" required pattern="[0-9+\s-]{10,15}" />
      </div>
      <div className="field">
        <label htmlFor="email">Email address (optional)</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="city">City</label>
        <div className="sel">
          <select id="city" name="city" defaultValue={cityOptions[0]} ref={cityRef}>
            {cityOptions.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field full">
        <label htmlFor="service">Service required</label>
        <div className="sel">
          <select id="service" name="service" defaultValue={quoteServices[0]} ref={serviceRef}>
            {quoteServices.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      {detailed && (
        <>
          <div className="field">
            <label htmlFor="property">Property type</label>
            <div className="sel">
              <select id="property" name="property" defaultValue={QUOTE_PAGE.propertyTypes[0]}>
                {QUOTE_PAGE.propertyTypes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="area">Approx. area (sq. ft.)</label>
            <input id="area" name="area" type="number" min="0" inputMode="numeric" placeholder="e.g. 120" />
          </div>
          <div className="field full">
            <label htmlFor="budget">Approximate budget</label>
            <div className="sel">
              <select id="budget" name="budget" defaultValue={QUOTE_PAGE.budgets[QUOTE_PAGE.budgets.length - 1]}>
                {QUOTE_PAGE.budgets.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}
      <div className="field full">
        <label htmlFor="note">Project details</label>
        <textarea id="note" name="note" ref={noteRef} placeholder="Tell us about your space, the look you want, and any constraints" />
      </div>
      <div className="field full">
        <button className="btn btn-solid" type="submit" style={{ justifySelf: "start" }}>
          Prepare my request <Arrow />
        </button>
      </div>

      {message && (
        <div className="result" ref={resultRef} aria-live="polite">
          <h3>Your request</h3>
          <pre ref={messageRef}>{message}</pre>
          <div className="row">
            <button className="btn btn-line btn-sm" type="button" onClick={copy}>Copy message</button>
            {whatsappHref && (
              <a className="btn btn-solid btn-sm" href={whatsappHref} target="_blank" rel="noopener noreferrer">Send on WhatsApp</a>
            )}
            {mailHref && <a className="btn btn-line btn-sm" href={mailHref}>Send by email</a>}
            <span className="status">{status}</span>
          </div>
        </div>
      )}
    </form>
  );
}
