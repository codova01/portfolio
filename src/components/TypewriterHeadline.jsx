import { useState, useEffect } from "react";

// Each phrase: [cream part, gradient-orange part]
const PHRASES = [
  ["Building ", "Backend Systems."],
  ["Designing ", "Data-Driven Applications."],
  ["Mastering ", "Data Structures & Algorithms."],
  ["Exploring ", "AWS & Cloud."],
];

const TYPING_SPEED = 45;        // ms per character while typing
const DELETING_SPEED = 25;      // ms per character while deleting
const PAUSE_AFTER_TYPE = 1500;  // ms to hold full phrase before deleting
const PAUSE_AFTER_DELETE = 300; // ms pause before typing next phrase

export default function TypewriterHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [cream, gradient] = PHRASES[phraseIndex];
  const fullText = cream + gradient;

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < fullText.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), TYPING_SPEED);
    } else if (!isDeleting && charIndex === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), DELETING_SPEED);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETE);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText]);

  const shown = fullText.slice(0, charIndex);
  const creamShown = shown.slice(0, cream.length);
  const gradientShown = shown.slice(cream.length);

  return (
    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight min-h-[1.3em]">
      <span className="text-[#f4ece2]">{creamShown}</span>
      <span className="text-gradient">{gradientShown}</span>
      <span
        className="inline-block w-[3px] ml-1 align-middle"
        style={{
          background: "#ff5a1f",
          animation: "typewriter-blink 0.8s step-end infinite",
        }}
      >
        &nbsp;
      </span>
      <style>{`
        @keyframes typewriter-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .inline-block[style*="typewriter-blink"] {
            animation: none !important;
          }
        }
      `}</style>
    </h2>
  );
}
