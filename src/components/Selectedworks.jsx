import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "QuantumTech Expo Pavilion",
    type: "Brand Pavilion",
    location: "Bangalore · India",
    year: "2024",
    image: "img2.jpg",
  },
  {
    title: "Aurora Mobility Launch Bay",
    type: "Trade Show Booth",
    location: "Dubai · UAE",
    year: "2023",
    image: "img3.jpg",
  },
  {
    title: "City Museum Light Archive",
    type: "Museum Installation",
    location: "Mumbai · India",
    year: "2022",
    image: "img4.webp",
  },
  {
    title: "Linea Retail Pop-up Series",
    type: "Retail Pop-up",
    location: "Delhi · India",
    year: "2023",
    image: "img5.avif",
  },
  {
    title: "Nova Pharma Experience Lab",
    type: "Experience Center",
    location: "Hyderabad · India",
    year: "2024",
    image: "img2.jpg",
  },
  {
    title: "Heritage Stories Corridor",
    type: "Cultural Exhibit",
    location: "Jaipur · India",
    year: "2022",
    image: "img3.jpg",
  },
];

const Selectedworks = () => {
  return (
    <section
      id="portfolio"
      className="bg-white text-slate-900 py-14 sm:py-18 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle intro row */}
        <div className="mb-8 sm:mb-10 flex justify-between items-end gap-4">
          <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-[0.25em]">
            Case Studies
          </p>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            View full portfolio
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-56 md:h-60 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] bg-white/85 text-slate-900">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    {project.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 whitespace-nowrap mt-0.5">
                    {project.year}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-500">
                  {project.location}
                </p>

                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Concept · Design · Build</span>
                  <button className="inline-flex items-center gap-1 text-[11px] font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                    View case study
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </div>

              {/* Border accent */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-500/60 transition-colors duration-500" />
            </article>
          ))}
        </div>

        {/* Mobile-only “view all” */}
        <div className="mt-8 flex justify-end sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            View full portfolio
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Selectedworks;
