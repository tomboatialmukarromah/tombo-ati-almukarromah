import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiX } from "react-icons/fi";
import { dataFaq } from "../../../assets/dataFaq";

export default function FAQSection() {
  const [activeId, setActiveId] = useState(0); // Set default item 1 terbuka sesuai gambar referensi

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-light py-16 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* HEADER FAQ */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3">
          <span className="text-sm font-heading font-bold text-accent tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark tracking-tight leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        {/* ACCORDION LIST WRAPPER */}
        <div className="w-full space-y-4">
          {dataFaq.map((faq) => {
            const isOpen = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl shadow-sm transition-all duration-300 border ${
                  isOpen
                    ? "border-primary/30 ring-1 ring-primary/5 shadow-md"
                    : "border-secondary/20 hover:border-secondary/50"
                }`}
              >
                {/* TRIGGER HEADER BUTTON */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left font-heading font-bold text-base md:text-lg text-dark cursor-pointer outline-none rounded-2xl select-none"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  {/* ICON TOGGLE (Berubah + / x dinamis sesuai referensi gambar) */}
                  <div
                    className={`text-xl flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "text-primary rotate-0"
                        : "text-muted hover:text-dark"
                    }`}
                  >
                    {isOpen ? <FiX /> : <FiPlus />}
                  </div>
                </button>

                {/* ANIMATED RESPONSE CONTAINER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {/* Konten teks jawaban di dalam */}
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 font-body text-sm md:text-base text-muted leading-relaxed border-t border-secondary/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
