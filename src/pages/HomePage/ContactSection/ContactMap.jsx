import { motion } from "framer-motion";
import { FiMap } from "react-icons/fi";
import { contactDetails } from "../../../assets/dataContact";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button";

export default function ContactMap({ googleMapsUrl }) {
  // Ganti alamat ini dengan nama lokasi/koordinat spesifik organisasimu untuk iFrame
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    contactDetails.address.value,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full h-[350px] lg:h-[480px] relative rounded-2xl border border-secondary/30 shadow-md overflow-hidden group"
    >
      {/* 1. MAPS IFRAME NYATA (Menampilkan peta aktual kepada user) */}
      <iframe
        title="Peta Lokasi Kantor Tombo Ati"
        src={mapEmbedUrl}
        className="w-full h-full border-0 grayscale-[20%] contrast-[95%] pointer-events-none lg:pointer-events-auto"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* 2. OVERLAY GLASS GRADIENT CORNER (Menjaga estetika desain agar tetap clean di area pinggir) */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/10 via-transparent to-transparent pointer-events-none" />

      {/* 3. FLOATING ACTION CTA CARD & BUTTON (Mengarah langsung ke Aplikasi/Web Peta) */}
      <div className="absolute bottom-5 left-5 right-5 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-secondary/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md transition-all duration-300 group-hover:border-primary/20">
        <div className="space-y-0.5">
          <h4 className="font-heading font-bold text-sm md:text-base text-dark flex items-center gap-1.5">
            <span className="flex h-2 w-2 rounded-full bg-status-finished" />
            Lokasi Pusat Tombo Ati
          </h4>
          <p className="font-body text-xs text-muted max-w-[280px] sm:max-w-xs truncate md:whitespace-normal">
            {contactDetails.address.value}
          </p>
        </div>

        {/* Tombol CTA Utama Arah Peta */}
        <Button
          to={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-dark font-body font-bold text-xs md:text-sm px-4 py-2.5 rounded-lg shadow-sm transform hover:-translate-y-0.5 transition-all duration-200 outline-none focus:ring-2 focus:ring-accent/50 whitespace-nowrap"
        >
          <FiMap className="text-base" />
          Buka di Google Maps
        </Button>
      </div>
    </motion.div>
  );
}
