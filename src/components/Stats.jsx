import { motion } from "framer-motion";
import { dataStats } from "../assets/dataStats";

export default function Stats() {
  // Animasi halus untuk memunculkan card secara utuh saat discroll
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full px-6 md:px-12 -mt-8 md:-mt-12 relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-white shadow-xl rounded-dashboard p-10 grid grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 items-center justify-center text-center"
        >
          {dataStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`flex flex-col items-center justify-center space-y-2 relative ${
                index !== dataStats.length - 1
                  ? "lg:border-r lg:border-secondary/30"
                  : ""
              }`}
            >
              {/* Angka Statistik Utama */}
              <h2 className="font-heading font-bold text-2xl lg:text-4xl text-dark tracking-tight leading-none text-primary">
                {stat.value}
              </h2>

              {/* Label Keterangan */}
              <p className="font-body text-xs md:text-sm font-medium text-muted tracking-wide max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
