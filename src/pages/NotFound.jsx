import { motion } from "framer-motion";
import Button from "../components/UI/Button"; // Sesuaikan path relatif ke komponen Button Anda
import SEO from "../components/common/SEO";

export default function NotFound() {
  // Variabel animasi stagger untuk memunculkan konten secara bertahap
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
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
    <main className="min-h-screen w-full bg-light flex items-center justify-center px-6 py-12 overflow-hidden relative">
      <SEO title="404 - Halaman Tidak Ditemukan" description="Halaman yang Anda cari tidak ditemukan." noindex={true} />
      {/* Ornamen Latar Belakang Lingkaran Lembut untuk Estetika Meditatif */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-secondary/30 blur-3xl -top-40 -left-20 pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-secondary/20 blur-3xl -bottom-20 -right-20 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Konten Utama */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full text-center space-y-6 relative z-10 flex flex-col items-center"
      >
        {/* INDIKATOR KODE VISUAL (404 Megah tapi Clean) */}
        <motion.h1
          variants={itemVariants}
          className="font-heading font-black text-7xl md:text-8xl text-primary tracking-tighter drop-shadow-sm select-none"
        >
          404
        </motion.h1>

        {/* SUB-HEADER & TEKS NARASI EMPATIS */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="font-heading font-bold text-xl md:text-2xl text-dark tracking-tight">
            Halaman Tidak Ditemukan
          </h2>
          <p className="font-body text-sm md:text-base text-muted leading-relaxed">
            Mohon maaf, tautan yang Anda tuju salah atau halaman telah
            dipindahkan. Mari kembali ke jalur yang tenang dan terarah.
          </p>
        </motion.div>

        {/* REUSABLE CTA BUTTON (Mengarahkan Kembali ke Beranda Utama) */}
        <motion.div variants={itemVariants} className="w-full sm:w-auto pt-2">
          <Button to="/" variant="primary" className="w-full sm:w-auto">
            Kembali ke Beranda
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
}
