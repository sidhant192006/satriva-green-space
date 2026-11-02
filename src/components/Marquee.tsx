import { marqueeItems } from "@/lib/content";
import { Leaf } from "./Icons";

export default function Marquee() {
  // The list is rendered twice so the slide animation can loop seamlessly.
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {[0, 1].map((copy) => (
          <ul key={copy}>
            {marqueeItems.map((item) => (
              <li key={item}>
                {item} <Leaf />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
