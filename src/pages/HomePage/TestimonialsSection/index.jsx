import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { dataTestimonials } from "../../../assets/dataTestimonials";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataTestimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataTestimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const current = dataTestimonials[currentIndex];

  return (
    <section id="testimoni" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* HEADER TESTIMONI */}
        <div className="mb-12 md:mb-16 space-y-3">
          <span className="text-sm font-heading font-bold text-accent tracking-wider uppercase">
            Testimonial
          </span>

          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark tracking-tight leading-tight max-w-2xl mx-auto">
            Cerita Mereka yang Menemukan Kembali Arah Pulang
          </h2>
        </div>

        {/* CONTAINER FIXED CARD (Ukurannya Dikunci Mati) */}
        {/* Menggunakan h-[280px] md:h-[240px] untuk mengunci dimensi tinggi container luar */}
        <div className="w-full bg-white border border-secondary/20 p-8 md:p-12 rounded-2xl shadow-md h-[280px] md:h-[240px] flex flex-col justify-between text-left relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full flex flex-col justify-between overflow-hidden"
            >
              {/* AREA TEKS KOMENTAR DENGAN SCROLL INTERNAL (Pencegah Layout Shifting) */}
              {/* pr-2 memberikan ruang bernapas agar scrollbar tidak menempel ke teks */}
              <div className="overflow-y-auto pr-2 flex-grow scrollbar-thin scrollbar-thumb-secondary">
                <p className="font-body text-base md:text-lg text-dark leading-relaxed italic">
                  "{current.quote}"
                </p>
              </div>

              {/* IDENTITAS KLIEN (Tetap Diam Di Bawah Kotak) */}
              <div className="pt-4 mt-auto border-t border-secondary/10 bg-white">
                <p className="font-heading font-bold text-base text-dark leading-none">
                  {current.name}
                </p>
                <p className="font-body text-xs text-muted mt-1.5">
                  {current.role}, {current.age}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BUTTON NAVIGATION CONTROLLER (Kini 100% Statik di Tempatnya) */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-secondary/40 bg-white text-dark hover:text-primary hover:border-primary flex items-center justify-center transition-all duration-200 shadow-sm outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
            aria-label="Testimoni Sebelumnya"
          >
            <FiArrowLeft className="text-lg" />
          </button>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-secondary/40 bg-white text-dark hover:text-primary hover:border-primary flex items-center justify-center transition-all duration-200 shadow-sm outline-none focus:ring-2 focus:ring-primary/30 cursor-pointer"
            aria-label="Testimoni Selanjutnya"
          >
            <FiArrowRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
}
