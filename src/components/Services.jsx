import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* ================= PROJECT CAROUSEL ================= */

const carouselServices = [
  { title: "Gen Au PVB", cover: "/A1.jpeg", gallery: ["/A1.jpeg", "/A2.jpeg"] },
  { title: "GTF", cover: "/B1.jpeg", gallery: ["/B1.jpeg", "/B2.jpeg", "/B3.jpeg"] },
  { title: "ETI", cover: "/C1.jpeg", gallery: ["/C1.jpeg", "/C2.jpeg"] },
  { title: "TECHFAB India", cover: "/D1.jpeg", gallery: ["/D1.jpeg", "/D2.jpeg"] },
  { title: "Indian Oil", cover: "/F1.jpeg", gallery: ["/F1.jpeg", "/H1.jpeg", "/H2.jpeg", "/I1.jpeg"] },
  { title: "Halewood", cover: "/G1.jpeg", gallery: ["/G1.jpeg", "/G2.jpeg"] },
  { title: "MOTWANE", cover: "/H1.jpeg", gallery: ["/H1.jpeg", "/H2.jpeg"] },
  { title: "KYARI", cover: "/I1.jpeg", gallery: ["/I1.jpeg"] },
];

/* ================= CAPABILITIES ================= */

const serviceCategories = [
  {
    title: "Design",
    img: "/A1.jpeg",
    items: [
      "Exhibition Concept Design",
      "Spatial Layout Planning",
      "Booth & Pavilion Design",
      "Wayfinding & Visitor Flow",
      "3D Visualization & Renders",
    ],
  },
  {
    title: "Development",
    img: "/G1.jpeg",
    items: [
      "Exhibition Fabrication",
      "Custom Display Systems",
      "Interactive Installations",
      "AV & Digital Integration",
      "On-site Installation & Dismantle",
    ],
  },
  {
    title: "Branding",
    img: "/B1.jpeg",
    items: [
      "Exhibition Brand Language",
      "Environmental Graphics",
      "Signage & Typography Systems",
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
        className="text-center max-w-2xl mx-auto text-slate-500 mb-14 text-sm md:text-base px-4"
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
              <div className="h-[22%] flex items-center justify-center text-base md:text-lg font-medium">
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
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-light mb-14"
      >
        More <span className="font-semibold text-blue-600">Capabilities</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto px-5 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
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
      whileHover={{ y: -6 }}
      className="w-full max-w-md rounded-3xl overflow-hidden bg-white shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300"
    >
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-48 md:h-56 object-cover"
      />

      <div className="p-5 md:p-6 text-center">
        <h3 className="text-xl md:text-2xl font-medium mb-3 text-blue-700">
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
                  className="flex items-center justify-center gap-2"
                >
                  <span className="h-1 w-1 rounded-full bg-blue-500" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="mt-6 px-5 py-2 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          {isOpen ? "Collapse" : "Explore Capabilities"}
        </motion.button>
      </div>
    </motion.div>
  );
};