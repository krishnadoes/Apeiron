import React from "react";
import { motion } from "framer-motion";
import ProcessConnector from "./ProcessConnector";
const steps = [
    {
        title: "Client Brief & Discovery",
        description:
            "Understanding brand goals, audience flow, spatial constraints and exhibition objectives.",
        image: "/clientbreif.webp",
    },
    {
        title: "Concept & Spatial Narrative",
        description:
            "Developing the story, zoning, moodboards and experiential direction.",
        image: "/3d_design2.jpg",
    },
    {
        title: "Design & Visualization",
        description:
            "Detailed layouts, materials, lighting strategy and 3D visualizations.",
        image: "/3d_design.jpg",
    },
    {
        title: "Fabrication & Build",
        description:
            "Precision craftsmanship, material sourcing and in-house fabrication.",
        image: "/fabrication.jpeg",
    },
    {
        title: "Installation & Handover",
        description:
            "On-site execution, final detailing, lighting focus and walkthrough.",
        image: "/finalproduct.jpg",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const Howwework = () => {
    return (

        //  <section className="relative py-24 bg-slate-600 overflow-hidden">
       <section className="relative py-24">
  {/* <div className="relative z-10 max-w-6xl mx-auto px-6"> */}
      {/* Global page background */}
<div className="fixed inset-0 -z-10 overflow-hidden">
  {/* Exhibition image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/bg1.jpg')",
      filter: "blur(px)",
          opacity: 1.0,

    }}
  />


  

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/95" />

  {/* Atmospheric layers */}
  <div className="absolute inset-0 ambient-lights" />
  <div className="absolute inset-0 particles" />
  <div className="absolute inset-0 noise-overlay" />
</div>


            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <p className="text-[11px] tracking-[0.35em] uppercase text-slate-200">
                        Our Process
                    </p>
                    <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light text-white max-w-xl">
                        From idea to{" "}
                        <span className="text-blue-400 font-medium">
                            immersive reality
                        </span>
                        .
                    </h2>
                </motion.div>
                <div className="flex flex-col gap-20">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 1;

                        return (
                            <div key={step.title} className="relative">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    variants={fadeUp}
                                    transition={{ duration: 1.8, delay: 0.1 }}
                                    className={`flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                                        } items-center gap-12`}
                                >
                                    {/* Image */}
                                    <div className="w-full md:w-1/2">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-[280px] sm:h-80 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        </div>
                                    </div>

                                    {/* Text panel */}
                                    <div className="relative w-full md:w-1/2">
                                        {/* Glow layer */}
                                        <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="
    absolute -inset-3 rounded-[30px]
    bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-blue-600/20
    blur-2xl
  "
/>
                                        {/* Actual card */}
                                        <div className="relative text-slate-900 rounded-3xl p-8 shadow-2xl overflow-hidden border-slate-400 border-2" >
                                            {/* Accent rail */}
                                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-slate-400 to-slate-600" />

                                            <div className="pl-6">
                                                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
                                                    Step {index + 1}
                                                </span>

                                                <h3 className="mt-3 text-xl sm:text-2xl font-semibold text-white">
                                                    {step.title}
                                                </h3>

                                                <p className="mt-4 text-sm sm:text-base text-slate-100 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </motion.div>

                                {/* Connector */}
                                {index !== steps.length - 1 && (
                                    <div className="mt-16 flex justify-center">
                                        <ProcessConnector
                                            height={220}
                                            direction={isEven ? "left" : "right"}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>

    );
};

export default Howwework;
