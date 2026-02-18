import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How long does a typical exhibition project take?",
    a: "Project timelines vary based on scale and complexity, but most exhibition projects take between 6 to 12 weeks from initial brief to on-site installation.",
  },
  {
    q: "Do you handle both design and fabrication?",
    a: "Yes. We manage the entire process — from concept and spatial design to fabrication, logistics, and final installation.",
  },
  {
    q: "Can booths be adapted for different venues?",
    a: "Absolutely. Our designs are modular and adaptable, allowing installations to evolve across venues while maintaining brand consistency.",
  },
  {
    q: "How early should we involve your team?",
    a: "The earlier the better. Early involvement allows us to shape spatial strategy, optimize budgets, and ensure smoother execution.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes. We collaborate with partners and vendors globally and have experience delivering projects across multiple countries.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className=" h-screen relative py-28 bg-white">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-800">
            Information
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light text-black">
            Frequently asked{" "}
            <span className="text-blue-400 font-medium">questions</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="flex flex-col gap-6">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="relative"
              >
                {/* Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-blue-500/10 blur-lg opacity-0 group-hover:opacity-100 transition" />

                {/* Panel */}
                <div
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className={`group relative cursor-pointer rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-sm px-6 py-5 transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-medium text-white">
                      {item.q}
                    </h3>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-blue-400"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm leading-relaxed text-slate-300">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
