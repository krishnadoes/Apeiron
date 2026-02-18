
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ===== Animation variants ===== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const projects = [
  {
    title: "MOTWANE",
    type: "Brand Pavilion",
    location: "Bangalore · India",
    year: "2024",
    image: "project1.jpg",
  },
  {
    title: "JAYSYNTH",
    type: "Trade Show Booth",
    location: "Mumbai · India",
    year: "2023",
    image: "project2.jpg",
  },
  {
    title: "GENAUPVB",
    type: "Retail Pop-up",
    location: "Pune · India",
    year: "2025",
    image: "project3.jpg",
  },
  {
    title: "VASY ERP",
    type: "Retail Pop-up",
    location: "Delhi · India",
    year: "2025",
    image: "project4.jpg",
  },
  {
    title: "HOUSE OF SPARSH",
    type: "Experience Center",
    location: "Hyderabad · India",
    year: "2025",
    image: "project5.jpg",
  },
  {
    title: "NAFEES",
    type: "Cultural Exhibit",
    location: "Mumbai · India",
    year: "2022",
    image: "project6.jpg",
  },
];
const Selectedworks = () => {
  return (
    <section
      id="portfolio"
      className="relative bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* ===== STRONGER BLUE AMBIENT BACKGROUND ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* main wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-blue-50/40 to-transparent" />
        {/* secondary soft light */}
        <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Intro row ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-semibold text-blue-900"
        >
        <div className="mb-10 sm:mb-12 flex justify-between items-end gap-4">
          <p className="text-[40px] sm:text-md font-semibold text-blue-900 uppercase tracking-[0.25em]">
  Selected  <span className=" text-blue-600">Exhibitions.</span>
</p>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-blue-700 transition-colors"
          >
            View full portfolio
            <ArrowUpRight size={14} />
          </a>
        </div>
        </motion.h2>


        {/* ===== GRID (motion container) ===== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* ===== Image ===== */}
              <div className="relative h-56 md:h-60 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* image overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] bg-white/90 text-slate-900">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* ===== Content ===== */}
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

              {/* ===== Blue hover layers ===== */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-500/60 transition-colors duration-500" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-200/0 via-blue-200/0 to-blue-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </motion.div>

        {/* ===== Mobile CTA ===== */}
        <div className="mt-10 flex justify-end sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-blue-700 transition-colors"
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

