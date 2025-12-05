import React from "react";

const CollectionsDivider = () => {
  return (
    <section className="bg-black text-white py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-400">
            Selected
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            COLLECTIONS
          </h2>
        </div>

        <div className="text-xs sm:text-sm text-slate-300 max-w-xs sm:text-right">
          A curated view of exhibition booths, pavilions and installations
          designed and built by Aperion across trade shows, museums and
          cultural spaces.
        </div>
      </div>
    </section>
  );
};

export default CollectionsDivider;
