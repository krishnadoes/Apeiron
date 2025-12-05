import React from "react";

const TransitionShowcase = () => {
  return (
    <section className="relative w-full h-[55vh] sm:h-[60vh] overflow-hidden">
      <img
        src="img5.avif" // <-- put a strong wide exhibition shot here
        alt="Exhibition gallery transition"
        className="h-full w-full object-cover"
      />

      {/* subtle dark gradient to bottom so it blends into black band */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* small caption */}
      <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between text-[11px] sm:text-xs text-slate-200/80">
        <span>Gallery View · Curated Environments</span>
        <span className="uppercase tracking-[0.25em] text-slate-400">
          Aperion Studio
        </span>
      </div>
    </section>
  );
};

export default TransitionShowcase;
