import React from "react";
import { motion } from "framer-motion";

const services = [
  { name: "Guarding", icon: "🛡️" },
  { name: "Integrated Technology", icon: "🔗" },
  { name: "Risk and Vulnerability Consulting", icon: "📄" },
  { name: "Canine Security", icon: "🐕" },
  { name: "Executive Protection and Intelligence", icon: "🌍" },
  { name: "Active Law Enforcement", icon: "👮‍♂️" },
  { name: "Weapons and Explosive Screening", icon: "🎯" },
  { name: "Event Security", icon: "🎟️" },
  { name: "Investigations", icon: "🔍" },
  { name: "Disaster and Emergency Response", icon: "🌪️" },
  { name: "Electronic Monitoring", icon: "🎮" },
  { name: "Cash Solutions", icon: "💰" },
  { name: "Workforce Solutions", icon: "👩‍💼" },
  { name: "Janitorial Services", icon: "🏢" },
];

const SecurityServicesSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-black min-w-max border rounded-2xl shadow-md px-6 py-4 bg-white hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-2">{service.icon}</div>
            <p className="text-sm font-medium text-center">{service.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SecurityServicesSlider;
