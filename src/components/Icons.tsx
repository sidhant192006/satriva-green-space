/** Icons reference the SVG sprite rendered once in the root layout (see Sprite below). */

export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <symbol id="leaf" viewBox="0 0 24 24">
        <path
          d="M4 20C4 10.5 10 4 20 4c0 9.5-6 16-16 16z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M4 20 15 9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </symbol>
      <symbol id="arrow" viewBox="0 0 24 24">
        <path
          d="M4 12h15m-6-6 6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
    </svg>
  );
}

type IconProps = { className?: string };

export function Leaf({ className }: IconProps) {
  return (
    <svg className={className} aria-hidden="true">
      <use href="#leaf" />
    </svg>
  );
}

export function Arrow({ className }: IconProps) {
  return (
    <svg className={className} aria-hidden="true">
      <use href="#arrow" />
    </svg>
  );
}
