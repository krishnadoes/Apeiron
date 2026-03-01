import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = ["landing2.jpg","land1.jpg", "landing1.jpg"];

const Landing = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Image 1
  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 1.05]);

  // Image 2
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.55], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0.2, 0.55], [1.05, 1]);

  // Image 3
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.5, 0.85], [1.05, 1]);

  return (
    <section ref={containerRef} className="relative h-[200vh] w-full">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Image 1 */}
        <motion.img
          src={images[0]}
          alt=""
          style={{ opacity: opacity1, scale: scale1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Image 2 */}
        <motion.img
          src={images[1]}
          alt=""
          style={{ opacity: opacity2, scale: scale2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Image 3 */}
        <motion.img
          src={images[2]}
          alt=""
          style={{ opacity: opacity3, scale: scale3 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* subtle blue tone */}
        <div className="absolute inset-0 bg-blue-900/10" />

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
        >
          <div className="w-[1px] h-10 bg-white/70" />
        </motion.div>

      </div>
    </section>
  );
};

export default Landing;