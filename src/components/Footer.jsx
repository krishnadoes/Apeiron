import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-white overflow-hidden h-screen">
      {/* ===== BLUE LIGHT ENVIRONMENT ===== */}
      <div className="absolute inset-0 footer-light" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">
        
        {/* BIG STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] font-semibold text-blue-900"
        >
          Let’s build
          <br />
          your next
          <span className="block text-blue-600">exhibition.</span>
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="origin-left mt-10 h-[3px] w-40 bg-blue-500"
        />

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 max-w-xl text-lg text-blue-700 leading-relaxed"
        >
          Aperion designs and builds exhibition stalls for brands and startups
          that want to stand out, communicate clearly, and win attention on the
          exhibition floor.
        </motion.p>

        {/* NAV LINKS (BIG & INTERACTIVE) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 flex flex-wrap gap-x-16 gap-y-6 text-2xl font-medium"
        >
          {["Projects", "How We Work", "Clients", "FAQs", "Contact"].map(
            (item) => (
              <span
                key={item}
                className="relative cursor-pointer text-blue-800 hover:text-blue-950 transition group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            )
          )}
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 text-blue-600"
        >
          <p className="text-sm uppercase tracking-[0.3em]">
            Get in touch
          </p>
          <p className="mt-1 text-lg">hello@aperion.design</p>
        </motion.div>

        {/* BASELINE */}
        <div className="mt-24 pt-8 border-t border-blue-200 flex justify-between text-xs text-blue-500">
          <span>© {new Date().getFullYear()} Aperion</span>
          <span>Designed · Built · Executed</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
