import { motion } from "framer-motion";

const ProcessConnector = ({ height = 220 }) => {
  return (
    <div className="relative flex justify-center">
      <svg
        width="2"
        height={height}
        viewBox={`0 0 2 ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Line */}
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2={height}
          stroke="rgba(96,165,250,0.35)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2.0,          // longer overall
            delay: 0.5,             // waits before starting
            ease: [0.4, 0.0, 0.2, 1] // slow start → smooth finish
          }}
        />

        {/* Moving dot */}
        <motion.circle
          cx="1"
          cy="0"
          r="4"
          fill="rgba(96,165,250,0.9)"
          initial={{ cy: 0, opacity: 0 }}
          whileInView={{ cy: height, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            delay: 0.25,
            ease: [0.4, 0.0, 0.2, 1]
          }}
        />
      </svg>
    </div>
  );
};

export default ProcessConnector;
