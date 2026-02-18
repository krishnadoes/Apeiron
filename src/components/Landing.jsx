// import React from 'react'

// const Landing = () => {
//   return (
//     <div className='py-20 flex flex-col gap-14 justify-center items-center'>
//       <span className='text-2xl'>---------Aperion---------</span>
//       <div className='flex justify-center items-center'>
//         <h1 className='text-8xl text-blue-400 '>WHERE <span className='text-blue-800'>ARTS</span><br />BECOME REALITY</h1>
//       </div>
//       <div className='flex flex-row gap-2'>
//         <img className='border-2 h-[80vh]' src="" alt="" />
//         <img className='border-2 h-[80vh]' src="" alt="" />
//         <img className='border-2 h-[80vh] w-7xl' src="landingpage.jpg" alt="" />
//       </div>
//     </div>
//   )
// }

import React, { useState, useEffect } from "react";

const slides = [
  {
    src: "land1.jpg", // update to your paths
    label: "Brand Pavilion",
    caption: "Immersive storytelling environments for high-visibility brands.",
  },
  {
    src: "/land2.jpg",
    label: "Trade Show Booth",
    caption: "Precise detailing, bold lighting and clear visitor flow.",
  },
  {
    src: "land3.jpg",
    label: "Museum Installation",
    caption: "Narrative-driven spaces designed for slow exploration.",
  },
];

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background images with fade animation */}
      <div className="absolute inset-0 -z-20">
        {slides.map((slide, idx) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.label}
            className={`
              h-full w-full object-cover absolute inset-0
              transition-opacity duration-1200 ease-in-out
              ${idx === activeIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Neutral dark overlays instead of strong blue wash */}
      {/* <div className="absolute inset-0 -z-10 bg-slate-950/85" /> */}
      <div className="absolute inset-0 -z-10 bg-transparent" />
      {/* Bottom fade to black so it merges into TransitionShowcase */}
      {/* Bottom fade – fade to transparent, not a hard black bar */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 -z-10 bg-linear-to-b from-transparent via-slate-800/11 to-transparent" />


      {/* Main content */}
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-14 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="flex items-center justify-between text-xs sm:text-sm text-slate-200/80 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="text-[11px] tracking-[0.3em] uppercase text-slate-400">
              Aperion
            </span>
            <div className="h-px w-8 bg-slate-500/60" />
            <span className="text-slate-300/90">Exhibition Design Studio</span>
          </div>
          <span className="hidden sm:inline text-slate-400">
            Spaces • Narratives • Experiences
          </span>
        </header>

        {/* Center content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-16 pb-10">
          {/* Left: Text block */}
          <div
            className={`flex-1 flex flex-col gap-6 lg:gap-8 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
          >
            {/* Tagline */}
            <span className="text-[11px] tracking-[0.35em] uppercase text-slate-400">
              Exhibition · Spatial Design · Build
            </span>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-light">
              Where{" "}
              <span className="font-semibold text-blue-400">Products <br /></span> Takes
              <span className="block mt-1">Center stage.</span>
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-sm sm:text-base text-slate-200/85">
              From startups to established companies,
              Aperion creates custom exhibition stalls that
              highlight products, communicate services,
              and help brands stand out on the exhibition floor.

            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                className="
                  px-6 py-2.5 text-sm rounded-full border border-blue-400
                  bg-blue-500/90 text-white tracking-wide
                  hover:bg-blue-400 hover:border-blue-300
                  hover:-translate-y-0.5 hover:shadow-lg
                  transition-all duration-300
                "
              >
                View Selected Works
              </button>
              <button
                className="
                  px-6 py-2.5 text-sm rounded-full border border-slate-500/80
                  text-slate-100 tracking-wide
                  hover:border-slate-200 hover:bg-slate-900/40
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Discuss a Project
              </button>
            </div>

            {/* Small meta line */}
            <div className="pt-3 text-[11px] sm:text-xs text-slate-300/80 flex flex-wrap gap-3">
              <span>Trade Shows · Brand Pavilions · Museums · Pop-ups</span>
              <span className="hidden sm:inline">•</span>
              <span>Based in India · Working Worldwide</span>
            </div>
          </div>

          {/* Right: Slide info / controls card */}
          <div className="w-full max-w-md lg:max-w-sm">
            <div className="bg-slate-950/75 border border-slate-800 rounded-3xl p-4 sm:p-5 backdrop-blur-md">
              {/* Small top label */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                  Featured Project
                </span>
                <span className="text-[11px] text-slate-400">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 h-56 sm:h-64">
                <img
                  src={slides[activeIndex].src}
                  alt={slides[activeIndex].label}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-slate-100 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    {slides[activeIndex].label}
                  </span>
                </div>
              </div>

              {/* Caption + controls */}
              <div className="mt-4 flex flex-col gap-3">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {slides[activeIndex].caption}
                </p>

                <div className="flex items-center justify-between mt-1">
                  {/* Dots */}
                  <div className="flex gap-2">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-1.5 w-6 rounded-full transition-all ${idx === activeIndex
                            ? "bg-blue-400"
                            : "bg-slate-600 hover:bg-slate-400"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Prev / Next */}
                  <div className="flex gap-2">
                    <button
                      onClick={goToPrev}
                      className="
                        h-8 w-8 rounded-full border border-slate-600
                        text-slate-100 text-xs flex items-center justify-center
                        hover:bg-slate-800 hover:border-slate-300
                        transition-all duration-200
                      "
                    >
                      ‹
                    </button>
                    <button
                      onClick={goToNext}
                      className="
                        h-8 w-8 rounded-full border border-blue-400
                        text-slate-100 text-xs flex items-center justify-center
                        bg-blue-500/80
                        hover:bg-blue-400 hover:border-blue-300
                        transition-all duration-200
                      "
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Small label under card */}
            <div className="mt-3 text-[11px] text-slate-300/80 text-right uppercase tracking-[0.22em]">
              Concept · Design · Build
            </div>
          </div>
        </div>

        {/* Bottom scroll hint (matches black fade now) */}
        <div className="flex justify-center pb-2">
          <div className="flex flex-col items-center gap-1 text-[11px] text-slate-300/80">
            <span>Scroll to explore the work</span>
            <div className="h-7 w-px bg-slate-600 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-2 bg-blue-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

