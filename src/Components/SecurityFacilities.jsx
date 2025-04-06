import React from "react";
import {
  ShieldCheck,
  Camera,
  KeyRound,
  BellRing,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const facilities = [
  {
    icon: <ShieldCheck size={40} />,
    title: "24/7 Monitoring",
    desc: "We take care of your security day and night.",
  },
  {
    icon: <Camera size={40} />,
    title: "CCTV Surveillance",
    desc: "Latest cameras for full property coverage.",
  },
  {
    icon: <KeyRound size={40} />,
    title: "Access Control",
    desc: "Secure entry aur exit system.",
  },
  {
    icon: <BellRing size={40} />,
    title: "Emergency Alerts",
    desc: "Turant alert system for emergencies.",
  },
  {
    icon: <AlertCircle size={40} />,
    title: "Risk Assessment",
    desc: "Proper analysis for security threats.",
  },
  {
    icon: <BellRing size={40} />,
    title: "Fire Alarm System",
    desc: "Instant fire detection aur notification system.",
  },
];

const SecurityFacilities = () => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Our Security Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          We provide you best security solutions!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:bg-blue-50 dark:hover:bg-gray-700 transition duration-300"
          >
            <div className="text-blue-600 mb-4">{facility.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {facility.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{facility.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SecurityFacilities;
