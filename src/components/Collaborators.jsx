import { motion } from "framer-motion";

const brands = [
 "Custom Structures",
"Modular Systems",
"Lighting Frameworks",
"Graphic Panels",
"Interactive Displays",
"Brand Backdrops",
"Wayfinding Elements",
"Product Pods"

];

const Collaborators = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden exhibition-lines">
      {/* ================= BACKGROUND ENVIRONMENT ================= */}

      {/* Architectural arcs */}
      <div className="pointer-events-none absolute -left-40 top-32 w-[520px] h-[520px] rounded-full border border-blue-500/20" />
      <div className="pointer-events-none absolute -right-56 bottom-24 w-[640px] h-[640px] rounded-full border border-blue-400/10" />

      {/* Vertical guide lines */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />
      <div className="pointer-events-none absolute left-[52%] top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/10 to-transparent" />

      {/* Human scale marker */}
      <div className="pointer-events-none absolute bottom-0 left-16 h-40 w-[2px] bg-blue-400/40" />

      {/* Exhibition moving lights */}
      <div className="pointer-events-none absolute inset-0 exhibition-lights" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-400">
            Exhibition formats we design
 


          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light text-white">
            Custom-built environments{" "}
            <span className="text-blue-400 font-medium">tailored to different exhibition needs.</span>
          </h2>
        </motion.div>

        {/* ================= BRAND FIELD ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {brands.map((brand, index) => {
            const variant = index % 3;

            return (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative h-32 flex items-center justify-center"
              >
                {/* Geometric background plate */}
                <div
                  className={`
                    absolute inset-0
                    ${
                      variant === 0
                        ? "rounded-xl"
                        : variant === 1
                        ? "rounded-t-full rounded-b-xl"
                        : "rounded-xl clip-corner"
                    }
                    border border-blue-400/30
                    bg-blue-500/5
                    backdrop-blur-sm
                    transition-all duration-700
                    group-hover:border-blue-400/60
                    group-hover:bg-blue-500/10
                  `}
                />

                {/* Glow */}
                <div className="absolute -inset-2 rounded-xl bg-blue-400/15 blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* Brand name */}
                <span className="relative text-sm sm:text-base font-medium tracking-wide text-slate-200 group-hover:text-white transition">
                  {brand}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
