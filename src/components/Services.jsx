import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ================= PROJECT CAROUSEL ================= */

const carouselServices = [
  { title: "GENAU PVB", cover: "/genupwb.jpg", gallery: ["genupwb.jpg","/A1.jpeg", "/A2.jpeg"] },
  { title: "INDO iRAN", cover: "/indoiran1.jpg", gallery: ["/indoiran1.jpg", "/indoiran2.jpg", "/indoiran3.jpg"] },
  { title: "ETI", cover: "/etifront.jpg", gallery: ["/etifront.jpg", "/C2.jpeg","/eti1.jpg"] },
  { title: "TECHFAB India", cover: "/fabtech.jpg", gallery: ["/D1.jpeg", "/D2.jpeg","/fabtech.jpg"] },
 { title: "ChemicalWeekly", cover: "/chemicalweeklyfront.jpg", gallery: ["/chemicalw1.jpg", "/chemicalweeklyfront.jpg","/chemicalw2.jpg"] },

  { title: "META ENGITECH", cover: "/meta1.jpg", gallery: ["/meta3.jpg", "/meta2.jpg","/meta1.jpg"] },
  { title: "JISL", cover: "/jisl.jpg", gallery: ["/fabri1.jpg","/jisl.jpg","/jisl1.jpg"] },
];

/* ================= CAPABILITIES ================= */

const serviceCategories = [
  {
    title: "Design",
    img: "/design.jpg",
    items: [
      "Exhibition Concept Design",
      "Spatial Layout Planning",
      "Booth & Pavilion Design",
      "Wayfinding & Visitor Flow",
      "3D Visualization & Renders",
    ],
  },
  {
    title: "Fabrication",
    img: "/marmik.jpg",
    items: [
      "Exhibition Fabrication",
      "Custom Display Systems",
      "Interactive Installations",
      "AV & Digital Integration",
      "On-site Installation & Dismantle",
    ],
  },
  {
    title: "Printing",
    img: "/print.jpg",
    items: [
      "Large Format Printing",
      "Backlit & Fabric Graphics",
      "Vinyl & Surface Branding",
      "Panel & Standee Production",
      "Event Collateral Printing",
    ],
  },
  {
    title: "Graphic Design",
    img: "/graphic.jpg",
    items: [
      "Booth Graphic Design",
      "Product Display Visuals",
      "Typography Systems",
      "Infographic & Content Design",
      "Exhibition Campaign Creatives",
    ],
  },
  {
    title: "Website & Digital",
    img: "/web.jpg",
    items: [
      "Exhibition Landing Pages",
      "Brand Microsites",
      "Interactive Event Pages",
      "Product Launch Websites",
      "Digital Experience Integration",
    ],
  },
  {
    title: "Branding & Mall Activation",
    img: "/brand.jpg",
    items: [
      "Exhibition Brand Language",
      "Environmental Graphics",
      "Signage Systems",
      "Content & Narrative Strategy",
      "Pre-event Visual Identity",
    ],
  },
];
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 md:pt-28 bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-800">

      {/* ================= PROJECTS ================= */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-light mb-4"
      >
        Our <span className="font-semibold text-blue-600">Projects</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto text-slate-500 mb-14 font-semibold text-2xl md:text-xl px-4"
      >
        We craft immersive exhibition experiences that blend design,
        engineering, and storytelling to elevate global brands.
      </motion.p>

      {/* ===== CAROUSEL ===== */}
      <section className="overflow-hidden mb-28">
        <motion.div
          className="flex gap-6 md:gap-8 w-max px-6 md:px-8"
          animate={prefersReducedMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...carouselServices, ...carouselServices].map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveProject(item)}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 160, damping: 22 }}
              className="w-[300px] md:w-[360px] h-[380px] md:h-[420px] shrink-0 rounded-2xl overflow-hidden bg-white shadow-xl border border-blue-100 cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <motion.img
                src={item.cover}
                alt={item.title}
                className="w-full h-[78%] object-cover"
                animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="h-[22%] flex items-center justify-center text-lg md:text-2xl font-medium">
                {item.title}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== PROJECT MODAL ===== */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-blue-900/30 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl max-w-5xl w-full p-6 shadow-2xl border border-blue-100"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-medium mb-6 text-center text-blue-700">
                {activeProject.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {activeProject.gallery.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    className="rounded-xl object-cover h-48 w-full"
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="mt-8 mx-auto block px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CAPABILITIES ================= */}
<section className="relative py-28 overflow-hidden">

{/* ===== Realistic Exhibition Light Beams ===== */}
<div className="absolute inset-0 pointer-events-none overflow-hidden">

  {/* Light Beam Left */}
  <div className="absolute -top-40 left-1/4 w-[300px] h-[800px] rotate-[20deg] bg-gradient-to-b from-blue-300/40 via-blue-200/10 to-transparent blur-3xl opacity-40 animate-lightBeam" />

  {/* Light Beam Right */}
  <div className="absolute -top-40 right-1/4 w-[300px] h-[800px] rotate-[-20deg] bg-gradient-to-b from-blue-300/40 via-blue-200/10 to-transparent blur-3xl opacity-40 animate-lightBeam delay-[2s]" />

  {/* Subtle atmospheric haze */}
  <div className="absolute inset-0 bg-gradient-to-b from-blue-100/10 via-transparent to-transparent" />

</div>

  {/* ===== Ambient Blueprint Background ===== */}
  <div className="absolute inset-0 pointer-events-none">
    
    {/* soft blue wash */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-blue-50/30 to-transparent" />

    {/* blurred light */}
    <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-blue-900/30 rounded-full blur-[90px]" />

    {/* architectural arcs */}
    <div className="absolute -right-10 bottom-2 w-[600px] h-[600px] rounded-full border border-blue-900/30" />
    <div className="absolute left-100 top-1/3 w-[400px] h-[400px] rounded-full border border-blue-800/20" />
  </div>

  {/* ===== Blueprint Curve Line ===== */}
  <motion.svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full pointer-events-none"
  >
    <motion.path
      d="M5 40 
         C30 20, 50 70, 70 45 
         S90 65, 95 55"
      stroke="rgba(37,99,235,0.25)"
      strokeWidth="0.6"
      fill="none"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
  </motion.svg>

  {/* ===== Heading ===== */}
  <motion.h2
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative z-10 text-center text-3xl md:text-4xl font-light mb-16"
  >
    More <span className="font-semibold text-blue-600">Capabilities</span>
  </motion.h2>

  {/* ===== Cards Grid ===== */}
  <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
    {serviceCategories.map((service, index) => (
      <ServiceCard
        key={index}
        service={service}
        index={index}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
    ))}
  </div>
</section>

      <div className="h-24" />
    </section>
  );
};

export default Services;

/* ================= SERVICE CARD ================= */

const ServiceCard = ({ service, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative w-full rounded-3xl overflow-hidden bg-white shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-500"
    >
      {/* Subtle blueprint overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 pointer-events-none">
        <div className="absolute top-4 left-6 w-20 h-px bg-blue-500" />
        <div className="absolute bottom-6 right-8 w-24 h-px bg-blue-500" />
        <div className="absolute left-1/2 top-1/4 w-px h-20 bg-blue-500" />
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-52 md:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* image depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 text-center relative z-10">
        <h3 className="text-2xl md:text-3xl font-medium mb-3 text-blue-700">
          {service.title}
        </h3>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 space-y-2 text-sm text-slate-600"
            >
              {service.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex text-lg items-center justify-center gap-2"
                >
                  <span className="h-1 w-1  rounded-full bg-blue-500" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="mt-6 px-5 py-2 rounded-full text-md bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {isOpen ? "Collapse" : "Explore Capabilities"}
        </motion.button>
      </div>

      {/* hover depth layer */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/50 transition duration-500" />
    </motion.div>
  );
};


<style>
{`
@keyframes lightDrift {
  0% { transform: translateY(0px) rotate(var(--angle)); }
  50% { transform: translateY(20px) rotate(var(--angle)); }
  100% { transform: translateY(0px) rotate(var(--angle)); }
}

.animate-lightBeam {
  animation: lightDrift 12s ease-in-out infinite;
}
`}
</style>