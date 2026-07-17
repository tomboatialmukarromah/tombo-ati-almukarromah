import { motion } from "framer-motion";
import { dataSteps } from "../../../assets/dataSteps";

export default function ProcessStepsSection() {
  // Variabel animasi untuk efek stagger (berurutan) saat masuk ke layar
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="alur-pendaftaran"
      className="bg-white py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* HEADER SECTION (Mengikuti Teks & Hirarki di Gambar) */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20 space-y-3">
          <span className="text-sm font-heading font-bold text-accent tracking-wider uppercase">
            Alur Proses
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark tracking-tight leading-tight">
            Bagaimana Langkah Menuju Pemulihan?
          </h2>
        </div>

        {/* TIMELINE CONTAINER */}
        {/* Mobile: flex-col (Vertikal) | Desktop (lg): grid-cols-5 (Horizontal mendatar) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-6 pt-2"
        >
          {/* LINES PENGHUBUNG KONTINU (Responsive Logic) */}
          {/* Garis Vertikal (Hanya muncul di Mobile/Tablet < lg) */}
          <div
            className="absolute left-[18px] top-4 bottom-4 w-0.5 bg-secondary z-0 lg:hidden"
            aria-hidden="true"
          />

          {/* Garis Horizontal (Hanya muncul di Desktop >= lg) */}
          <div
            className="absolute left-[4%] right-[4%] top-[18px] h-0.5 bg-secondary z-0 hidden lg:block"
            aria-hidden="true"
          />

          {/* GENERATE ALUR LANGKAH */}
          {dataSteps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="relative z-10 flex flex-row lg:flex-col items-start gap-5 lg:gap-4 group text-left lg:text-center"
            >
              {/* LINGKARAN NOMOR BADGE (Sesuai Persis dengan Gambar Referensi) */}
              <div className="w-9 h-9 rounded-full border-2 border-primary bg-white text-primary font-heading font-bold text-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm lg:mx-auto">
                {step.id}
              </div>

              {/* AREA CONTENT TEKS */}
              <div className="space-y-1 pt-0.5 lg:pt-2 w-full">
                <h3 className="font-heading font-bold text-base md:text-lg text-dark tracking-tight group-hover:text-primary transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted leading-relaxed max-w-xs lg:mx-auto">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
