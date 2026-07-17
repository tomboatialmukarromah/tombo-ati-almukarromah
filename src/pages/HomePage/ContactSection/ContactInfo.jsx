import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";
import { contactDetails, scheduleDetails } from "../../../assets/dataContact";

export default function ContactInfo({ googleMapsUrl }) {
  const IconWA = contactDetails.whatsapp.icon;
  const IconEmail = contactDetails.email.icon;
  const IconAddress = contactDetails.address.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header Konten */}
      <div className="space-y-3">
        <span className="text-sm font-heading font-bold text-accent tracking-wider uppercase">
          Siapa Kami
        </span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark tracking-tight leading-tight">
          Mari Buka Lembaran Baru Bersama
        </h2>
        <p className="font-body text-sm md:text-base text-muted leading-relaxed max-w-xl">
          Punya pertanyaan spesifik sebelum mengisi form permohonan resmi?
          Kantor operasional kami terbuka untuk diskusi kasual hangat.
        </p>
      </div>

      {/* List Item Informasi Kontak */}
      <div className="space-y-6">
        {/* WHATSAPP */}
        <a
          href={contactDetails.whatsapp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-2 rounded-xl hover:bg-secondary/20 transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
        >
          <div className="w-11 h-11 rounded-full bg-white border border-secondary/40 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
            <IconWA className="text-lg" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-base text-dark leading-none">
              {contactDetails.whatsapp.label}
            </h4>
            <p className="font-body text-sm text-muted mt-1.5 group-hover:text-primary transition-colors">
              {contactDetails.whatsapp.value}
            </p>
          </div>
        </a>

        {/* EMAIL */}
        <a
          href={contactDetails.email.link}
          className="flex items-start gap-4 p-2 rounded-xl hover:bg-secondary/20 transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
        >
          <div className="w-11 h-11 rounded-full bg-white border border-secondary/40 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
            <IconEmail className="text-lg" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-base text-dark leading-none">
              {contactDetails.email.label}
            </h4>
            <p className="font-body text-sm text-muted mt-1.5 group-hover:text-primary transition-colors">
              {contactDetails.email.value}
            </p>
          </div>
        </a>

        {/* ALAMAT */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-2 rounded-xl hover:bg-secondary/20 transition-all duration-200 group outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
          title="Klik untuk membuka di Google Maps"
        >
          <div className="w-11 h-11 rounded-full bg-white border border-secondary/40 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
            <IconAddress className="text-lg" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-base text-dark leading-none">
              {contactDetails.address.label}
            </h4>
            <p className="font-body text-sm text-muted mt-1.5 leading-relaxed group-hover:text-primary transition-colors">
              {contactDetails.address.value}
            </p>
          </div>
        </a>
      </div>

      {/* JAM OPERASIONAL */}
      <div className="pt-4 border-t border-secondary/20 space-y-4">
        <div className="flex items-center gap-2 text-dark font-heading font-bold text-base">
          <FiClock className="text-primary text-lg" />
          <span>Jam Operasional Layanan</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {scheduleDetails.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-light p-4 rounded-xl border border-secondary/20 space-y-1"
            >
              <h5 className="font-heading font-bold text-xs text-primary uppercase tracking-wider">
                {schedule.label}
              </h5>
              <p className="font-body font-semibold text-sm text-dark">
                {schedule.time}
              </p>
              <p className="font-body text-xs text-muted leading-relaxed">
                {schedule.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
