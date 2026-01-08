"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  {
    src: "/s1.jpeg",
    title: "Accompagnement personnalisé",
    subtitle: "Nous gérons votre carrière pendant que vous jouez",
  },
  {
    src: "/s2.jpeg",
    title: "Détection des talents",
    subtitle: "Formation et développement pour les jeunes athlètes",
  },
  {
    src: "/s3.jpeg",
    title: "Partenariats stratégiques",
    subtitle: "Nous connectons clubs, sponsors et équipes médicales",
  },
];

export default function ImageSlider({ className = "" }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [index]);

  function startAuto() {
    stopAuto();
    // autoplay every 4s
    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
  }

  function stopAuto() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }

  function prev() {
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }

  function next() {
    setIndex((i) => (i + 1) % IMAGES.length);
  }

  return (
    <div
      ref={containerRef}
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      className={`relative w-full overflow-hidden rounded-xl ${className}`}
    >
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
        {IMAGES.map((item, i) => (
          <div key={i} className="w-full flex-shrink-0 relative">
            <img src={item.src} alt={`slide-${i}`} className="w-full h-64 md:h-96 object-cover rounded-xl" />

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-end">
              <div className="w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-b-xl p-6">
                <h3 className="text-white text-2xl md:text-3xl font-bold">{item.title}</h3>
                <p className="text-white/90 mt-1">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left/Right controls */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
        aria-label="Précédent"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
        aria-label="Suivant"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
