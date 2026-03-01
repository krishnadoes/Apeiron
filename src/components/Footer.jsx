import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

const initialImages = [
  "/footer2.jpg",
  "/footer3.jpg",
  "/footer4.jpg",
  "/footer1.jpg",
  
];

const SwipeCard = ({ src, index, cards, setCards }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-18, 18]);

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    const shouldSwipe =
      Math.abs(velocity) > 800 || Math.abs(offset) > 150;

    if (shouldSwipe) {
      const direction = velocity > 0 ? 1 : -1;

      // Animate card flying out
      x.set(direction * 1000);

      setTimeout(() => {
        setCards((prev) => {
          const updated = [...prev];
          const removed = updated.pop();
          return [removed, ...updated]; // cycle to bottom
        });
      }, 200);
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.25}
      style={{ x, rotate }}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 1.04 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing bg-white"
      animate={{
        top: index * 14,
        scale: 1 - index * 0.03,
      }}
    >
      <img
  src={src}
  alt=""
  draggable={false}
  className="w-full h-full object-cover pointer-events-none select-none"
/>
    </motion.div>
  );
};

const Footer = () => {
  const [cards, setCards] = useState(initialImages);

  return (
    <footer className="relative bg-white overflow-hidden min-h-screen">
      {/* Ambient blue environment */}
      <div className="absolute inset-0 footer-light" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10 flex flex-col lg:flex-row gap-16">

        {/* ===== LEFT CONTENT ===== */}
        <div className="flex-1">
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

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="origin-left mt-10 h-[3px] w-40 bg-blue-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 max-w-xl text-2xl text-blue-700 leading-relaxed"
          >
            
As Exhibition Specialist we offer 360° services of Exhibition Stand Design & Build - including creative Design to flawless Production, timely Installation & smooth Dismantling.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 flex flex-wrap gap-x-16 gap-y-6 text-2xl font-medium"
          >
            {["Projects", "How We Work", "Contact"].map(
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
          </motion.div> */}

          <div className="mt-24 text-blue-600">
            <p className="text-xl uppercase tracking-[0.3em]">
              Get in touch
            </p>
            <p className="mt-1 font-semibold text-xl">apeironexhibition@gmail.com</p>
          </div>
        </div>

        {/* ===== RIGHT INTERACTIVE STACK (Desktop Only) ===== */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">

          <div className="relative w-[420px] h-[520px]">

            {cards.map((src, index) => (
              <SwipeCard
                key={src + index}
                src={src}
                index={index}
                cards={cards}
                setCards={setCards}
              />
            ))}

          </div>
        </div>
      </div>

      {/* BASELINE */}
      <div className="relative z-10 pb-2 pt-8 border-t border-blue-200 flex justify-between text-xs text-blue-500 max-w-7xl mx-auto px-8 ">
        <span>© {new Date().getFullYear()} Aperion</span>
        <span>Designed · Built · Executed</span>
      </div>
    </footer>
  );
};

export default Footer;