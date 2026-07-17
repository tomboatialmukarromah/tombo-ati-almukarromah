import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiCalendar } from "react-icons/fi";
import { urlFor } from "../../sanityClient";

export default function ActivityDetailModal({ activeActivity, onClose }) {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <AnimatePresence>
      {activeActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-lg border border-secondary/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative z-10 flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm text-dark hover:text-primary shadow-sm border border-secondary/30 flex items-center justify-center transition-colors outline-none cursor-pointer"
              aria-label="Tutup Detail"
            >
              <FiX className="text-base" />
            </button>

            <div className="w-full aspect-video bg-slate-100 overflow-hidden">
              {activeActivity.image && (
                <img
                  src={urlFor(activeActivity.image).width(800).url()}
                  alt={activeActivity.title}
                  className="w-full h-full object-cover select-none"
                />
              )}
            </div>

            <div className="p-6 md:p-8 space-y-3">
              <div className="flex items-center gap-1.5 text-muted">
                <FiCalendar className="text-primary text-sm" />
                <span className="font-body text-xs font-semibold uppercase tracking-wider">
                  {formatDate(activeActivity.date)}
                </span>
              </div>
              <h2 className="font-heading font-bold text-xl md:text-2xl text-dark tracking-tight">
                {activeActivity.title}
              </h2>
              <p className="font-body text-sm md:text-base text-muted leading-relaxed pt-1">
                {activeActivity.desc}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
