import React, { useState } from "react";
import { motion } from "framer-motion";

import { MapPin,Mail, Instagram, Facebook, Phone, Send } from "lucide-react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //    const isValid =
  //   formData.email.length > 0 &&
  //   formData.name.length > 0 &&
  //   formData.message.length > 0;
  //   alert(formData)
  //   if (isValid) {
  //     emailjs.sendForm('service_qecs7yc', 'template_kstozcd', form.current, { publicKey: 'QrFGwt1kLTSviq117', }).then(
  //         () => {
  //           console.log('Success!');
  //           toast('Message mailed successfully!', {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "dark",
  //           });

  //           setStatusMessage("Thank you for your message. We’ll connect with you shortly.");
  //   setFormData({ name: "", email: "", message: "" });

  //         }, (error) => {
  //           console.log('FAILED...', error);
  //         },
  //       );
  //       setFormData({ email: "", name: "", message: "" })
  //   } else {
  //     toast('Fill the details properly', { 
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //   }
    
  // };
  const handleSubmit = (e) => {
  e.preventDefault();

  const isValid =
    formData.email.length > 0 &&
    formData.name.length > 0 &&
    formData.message.length > 0;

  if (isValid) {
    emailjs
      .sendForm(
        "service_qecs7yc",        // service ID
        "template_kstozcd",       // template ID
        form.current,     // IMPORTANT: form element
        { publicKey: 'QrFGwt1kLTSviq117', }     // public key
      )
      .then(
        () => {
          console.log('Success!');
            toast('Message mailed successfully!', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

          

          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  } else {
    toast("Fill the details properly", {
      position: "top-right",
      autoClose: 5000,
      theme: "dark",
    });
  }
};

  return (<>
     <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="Bounce"
      />
      <ToastContainer />
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-8 lg:px-16   overflow-hidden">
<div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/contact1.jpg')",
      filter: "blur(px)",
          opacity: 1.0,

    }}
  />
      {/* ===== Ambient Background ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-500 via-black to-transparent" /> */}
       
      </div>

      {/* ===== Blueprint Curve Line (Responsive) ===== */}
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <motion.path
          d="M5 35 
             C25 15, 45 65, 65 40 
             S85 60, 95 50"
          stroke="rgba(37,99,235,0.25)"
          strokeWidth="0.7"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.svg>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-blue-400">
            Let’s Build Your
            <span className="block text-blue-400">
              Next Exhibition.
            </span>
          </h1>

          <p className="mt-6 font-bold text-xl text-blue-400 max-w-2xl mx-auto">
            Share your exhibition requirements and our team will guide you
            from concept to complete stall execution.
          </p>
        </motion.div>

       
        {/* ===== Contact Layout ===== */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* ===== LEFT INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white border border-blue-100 shadow-xl rounded-3xl p-10"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Reach Us
            </h2>

            <p className="text-blue-900 font-semibold  text-xl mb-8">
              We design and fabricate exhibition stalls for startups,
              product brands and large-scale events across India.
            </p>

           <div className="space-y-6 font-semibold">

  <InfoItem icon={Mail} text="apeironexhibition@gmail.com" href="mailto:apeironexhibition@gmail.com" />

  <InfoItem
    icon={Phone}
    text="+91 7498155141, +91 8169474676"
    href="tel:+917498155141"
  />

  <InfoItem
    icon={Instagram}
    text="Follow on Instagram"
    href="https://www.instagram.com/apeiron_exhibitiondesign/"
  />
<InfoItem
  icon={MapPin}
  text="Factory Address- Avdhoot Bhagwan Ram Seva Ashram, Sr.No.200, Gala No.C-6, Datar Industrial Estate, Pelhar Vasai Palghar - 401208"
/>
</div>
          </motion.div>

          {/* ===== RIGHT FORM ===== */}
          <motion.form
  ref={form}
  onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white border border-blue-100 shadow-xl rounded-3xl p-10"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Start Your Project
            </h2>

            <FormInput
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <FormInput
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              type="email"
            />

            <FormTextarea
              name="message"
              placeholder="Tell us about your exhibition needs..."
              value={formData.message}
              onChange={handleChange}
              type="text"
            />

            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.message}
              className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
    </>
  );
};

/* ===== Helper Components ===== */

const InfoItem = ({ icon: Icon, text, href }) => {
  return (
    <a
      href={href || "#"}
      target={href?.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="flex items-center gap-4 text-blue-800 hover:text-blue-600 transition duration-300 group"
    >
      <Icon size={22} className="shrink-0" />

      <span className="group-hover:underline underline-offset-4">
        {text}
      </span>
    </a>
  );
};
const FormInput = ({ name, placeholder, value, onChange, type = "text" }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required
    className="w-full border border-blue-200 focus:border-blue-500 p-4 rounded-xl mb-4 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition"
  />
);

const FormTextarea = ({ name, placeholder, value, onChange }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={6}
    required
    className="w-full border border-blue-200 focus:border-blue-500 p-4 rounded-xl mb-6 text-blue-900 placeholder-blue-400 resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 transition"
  />
);

export default Contact;