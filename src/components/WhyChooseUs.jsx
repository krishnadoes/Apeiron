import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Zap, Layers, Compass } from "lucide-react";

const features = [
  {
    title: "Strategic Stall Planning",
    description:
      "Every exhibition structure is mapped around audience flow, brand positioning and spatial psychology.",
    icon: Compass,
  },
  {
    title: "IN-House Fabrication & Execution",
    description:
      "From concept sketches to on-site installation, we handle design, fabrication and deployment.",
    icon: Layers,
  },
  {
    title: "Impact-Driven Visuals",
    description:
      "Lighting, graphics and materials are engineered to command attention in crowded halls.",
    icon: Zap,
  },
  {
    title: "Precision & Reliability",
    description:
      "Timelines are respected. Budgets are controlled. Every detail is engineered for performance.",
    icon: Award,
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-blue-50/40" />
      <div className="absolute -left-40 top-20 w-[600px] h-[600px] rounded-full bg-blue-200/20 blur-3xl" />
      <div className="absolute -right-40 bottom-10 w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 text-center"
        >
          <p className="text-[20px] font-semibold tracking-[0.35em] uppercase text-blue-600">
            Welcome to Apeiron Exhibition!!!
          </p>
          <h2 className="mt-6 text-4xl sm:text-5xl font-light text-blue-900">
            Built for brands that
            <span className="block font-semibold text-blue-600">
              want to stand out.
            </span>
          </h2>
        </motion.div>

        {/* Motion Path SVG */}
      <motion.svg
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  className="absolute inset-0 w-full h-full pointer-events-none"
>
  <motion.path
    d="M5 25 
       C25 5, 45 45, 65 25 
       S85 45, 95 35"
    stroke="rgba(59,130,246,0.35)"
    strokeWidth="0.6"
    fill="none"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    transition={{ duration: 2 }}
  />
</motion.svg>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-16 relative">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            const x = useMotionValue(0);
            const y = useMotionValue(0);

            const rotateX = useTransform(y, [-50, 50], [6, -6]);
            const rotateY = useTransform(x, [-50, 50], [-6, 6]);

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{ rotateX, rotateY }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  x.set(e.clientX - centerX);
                  y.set(e.clientY - centerY);
                }}
                onMouseLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                className="group relative rounded-3xl border border-blue-200 bg-white shadow-md p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-blue-400"
              >
                {/* Light sweep */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
  <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-300/30 rounded-full blur-2xl" />
</div>

{/* image as a background */}
{/* <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-15 transition duration-700">
  <img
    src="/stall-bg.jpg"
    alt="Exhibition structure"
    className="w-full h-full object-cover scale-110 blur-[2px]"
  />
</div> */}
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6"
                >
                  <Icon size={28} />
                </motion.div>

                <h3 className="text-xl font-bold text-blue-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-lg text-blue-700 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-blue-400/60 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Slide animation keyframe */}
      <style>
        {`
@keyframes sweep {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
    }
`}
      </style>
    </section>
  );
};

export default WhyChooseUs;