import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

/* ===== Animation Variants ===== */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "SUMITO ELECTRIC",
    type: "Ifat",
    location: "Nesco · Mumbai · India",
    
    image: "select1.jpg",
  },
  {
    title: "JAYSYNTH",
    type: "Gartex Pro Process Expo",
    location: "Jio · Hyderbad · India",
   
    image: "project2.jpg",
  },
  {
    title: "GENAU PVB",
    type: "Zak Doors and Windows Expo",
    location: "Nesco · Mumbai · India",
    
    image: "project3.jpg",
  },
  {
    title: "VASY ERP",
    type: "Anuga Foodtech",
    location: "Nesco · Mumbai · India",
    
    image: "project4.jpg",
  },
  {
    title: "JISL",
    type: "Pharma Pro Pack",
    location: "Hitex · Hyderabad · India",
    
    image: "jisl.jpg",
  },
  {
    title: "VASY ERP",
    type: "Cmai",
    location:  "Nesco · Mumbai · India",
    
    image: "vasy.jpg",
  },
];

const Selectedworks = () => {
  return (
    <section
      id="portfolio"
      className="relative bg-white text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* ===== Ambient Background ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-blue-100/70 via-blue-50/40 to-transparent" />
        <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[120px]" />
      </div>

      {/* ===== Architectural Curve Line (Responsive) ===== */}
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <motion.path
          d="M5 30 
             C25 10, 45 60, 65 35 
             S85 55, 95 45"
          stroke="rgba(37,99,235,0.25)"
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* ===== Content Container ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Header Row ===== */}
        <div className="mb-12 flex justify-between items-end gap-4 flex-wrap">
          
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-[clamp(2rem,5vw,3rem)] font-semibold text-blue-900 uppercase tracking-[0.2em]"
          >
            Selected{" "}
            <span className="text-blue-600">Exhibitions.</span>
          </motion.h2>

          <a
            href="/Services"
            className="hidden sm:inline-flex items-center gap-2 text-md font-medium text-slate-600 hover:text-blue-700 transition-colors"
          >
            View Other Projects
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* ===== Grid ===== */}
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
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-blue-400"
            >
              {/* Image */}
              <div className="relative h-56 md:h-60 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-3 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] bg-white/90 text-slate-900">
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

              {/* Subtle Blue Depth Layer */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-blue-100/0 via-blue-100/0 to-blue-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-end sm:hidden">
          <a
            href="/Services"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-blue-700 transition-colors"
          >
            View Proejcts
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Selectedworks;