"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CONTACT } from "@/lib/site";
import { interests, nextSteps, spaces, VISIT_OFFER } from "@/lib/content";
import { cityOptions } from "@/lib/locations";
import { delay } from "@/lib/util";
import { Arrow } from "./Icons";

/**
 * The form cannot post anywhere by itself, so it writes the enquiry as a message the visitor
 * can copy, or send straight to WhatsApp when a number is set in src/lib/site.ts.
 */
export default function Enquiry() {
  const resultRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLPreElement>(null);
  const interestRef = useRef<HTMLSelectElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  // A link such as /enquire?interest=Balcony%20refresh&city=Indore fills in those fields.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const interest = params.get("interest");
    const city = params.get("city");
    const note = params.get("note");
    if (interest && interests.includes(interest) && interestRef.current) interestRef.current.value = interest;
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
      "Hello SATRIVA, I would like to enquire about a site visit.",
      "",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `City: ${get("city")}`,
      `Locality: ${get("locality")}`,
      `Space: ${get("space")}`,
      `Interested in: ${get("interest")}`,
    ];
    if (get("note")) lines.push(`Notes: ${get("note")}`);

    setMessage(lines.join("\n"));
    setStatus("");
    requestAnimationFrame(() => resultRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }

  function selectMessage() {
    const node = messageRef.current;
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  async function copy() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setStatus("Message copied.");
    } catch {
      selectMessage();
      setStatus("Message selected. Copy it from here.");
    }
  }

  const whatsappHref =
    message && CONTACT.whatsapp
      ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
      : null;

  return (
    <section className="section is-page" id="enquire" aria-labelledby="enq">
      <div className="wrap enquire">
        <div className="enquire-copy rv">
          <p className="kicker">Enquire</p>
          <h1 className="title" id="enq">Tell us about your <em>space.</em></h1>
          <p>
            Fill in a few details to prepare your enquiry, then send it to us. We will suggest a time for a
            site visit.
          </p>
          <ol className="next">
            {nextSteps.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ol>

          {(CONTACT.whatsapp || CONTACT.email) && (
            <div className="contact">
              {CONTACT.whatsapp && (
                <div>
                  <span>WhatsApp</span>
                  <b>+{CONTACT.whatsapp}</b>
                </div>
              )}
              {CONTACT.email && (
                <div>
                  <span>Email</span>
                  <b>{CONTACT.email}</b>
                </div>
              )}
            </div>
          )}
        </div>

        <form className="rv" style={delay(".1s")} onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone or WhatsApp</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" required />
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
          <div className="field">
            <label htmlFor="locality">Locality</label>
            <input
              id="locality"
              name="locality"
              type="text"
              autoComplete="address-level2"
              placeholder="Area or society name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="space">Type of space</label>
            <div className="sel">
              <select id="space" name="space" defaultValue={spaces[0]}>
                {spaces.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field full">
            <label htmlFor="interest">I am interested in</label>
            <div className="sel">
              <select id="interest" name="interest" defaultValue={VISIT_OFFER} ref={interestRef}>
                {interests.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="field full">
            <label htmlFor="note">Anything we should know</label>
            <textarea id="note" name="note" ref={noteRef} placeholder="Size of the space, sunlight, what you have in mind" />
          </div>
          <div className="field full">
            <button className="btn btn-solid" type="submit" style={{ justifySelf: "start" }}>
              Prepare my enquiry <Arrow />
            </button>
          </div>

          {message && (
            <div className="result" ref={resultRef} aria-live="polite">
              <h3>Your enquiry</h3>
              <pre ref={messageRef}>{message}</pre>
              <div className="row">
                <button className="btn btn-line btn-sm" type="button" onClick={copy}>
                  Copy message
                </button>
                {whatsappHref && (
                  <a className="btn btn-solid btn-sm" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    Send on WhatsApp
                  </a>
                )}
                <span className="status">{status}</span>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
