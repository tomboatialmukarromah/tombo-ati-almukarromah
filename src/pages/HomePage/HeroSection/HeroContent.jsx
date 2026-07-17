import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button";

export default function HeroContent() {
  // Variabel animasi untuk efek staggereing yang elegan saat web pertama dimuat
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center items-start space-y-6 max-w-2xl"
    >
      {/* Badge Informasi Kecil - Trend UI/UX Modern */}
      <motion.div
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-primary font-body text-xs font-semibold tracking-wide"
      >
        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
        Layanan Rukiah Syar'iyyah Sesuai Sunnah
      </motion.div>

      {/* Headline Utama - Menggunakan H1 demi SEO Penting */}
      <motion.h1
        variants={fadeUp}
        className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-dark tracking-tight leading-[1.15]"
      >
        Temukan Ketenangan Jiwa Bersama{" "}
        <span className="text-primary">Tombo Ati</span>
      </motion.h1>

      {/* Sub-Headline / Deskripsi */}
      <motion.p
        variants={fadeUp}
        className="font-body text-base sm:text-lg text-muted leading-relaxed"
      >
        Kami membantu menjembatani ikhtiar kesembuhan spiritual Anda melalui
        metode rukiah yang syar'i, aman, terpercaya, dan ditangani oleh praktisi
        berpengalaman.
      </motion.p>

      {/* Group Action Buttons (CTA) */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
      >
        <Button to="/pendaftaran">Daftar Sekarang</Button>
        <Button hashTo="/#tentang-kami" variant="outline">
          Pelajari Layanan
        </Button>
      </motion.div>
    </motion.div>
  );
}
