import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function AboutIntro() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Kolom Kiri: Teks & Nilai Utama */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex justify-center"
      >
        {/* Menggunakan rounded-2xl dan shadow bawaan Tailwind */}
        <div className="absolute inset-0 bg-secondary/30 rounded-2xl transform rotate-3 scale-102 -z-10" />

        <div className="bg-white p-4 rounded-2xl shadow-md border border-secondary/20 max-w-sm w-full">
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 mb-4">
            <img
              src="/images/about image.jpeg"
              alt="Ustadz Muhammad Yandi bin Jajang Jumena, Pendiri Tombo Ati Al Mukarramah"
              className="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
              width="352"
              height="469"
            />
          </div>
          <div className="text-center">
            <p className="font-heading font-bold text-lg text-dark">
              Muhammad Yandi bin Jajang Jumena
            </p>
            <p className="font-body text-xs text-primary font-medium tracking-wider uppercase mt-0.5">
              Founder & Praktisi Utama
            </p>
          </div>
        </div>
      </motion.div>

      {/* Kolom Kanan: Foto Profil Pendiri */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="space-y-6"
      >
        <motion.div variants={fadeUp} className="space-y-2">
          <span className="text-sm font-heading font-bold text-accent tracking-wider uppercase">
            Siapa Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark tracking-tight leading-tight">
            Menjembatani Kedamaian Spiritual di Era Modern
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-body text-base text-muted leading-relaxed"
        >
          Tombo Ati adalah organisasi nirlaba yang mendedikasikan diri pada
          ranah pelayanan bimbingan spiritual, konseling psikis berbasis nilai
          Islam, dan pengobatan alternatif non-medis yang akuntabel.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-body text-base text-muted leading-relaxed"
        >
          Kami memahami bahwa tantangan mental dan spiritual dewasa muda saat
          ini membutuhkan pendekatan yang empatis tanpa stigma. Melalui metode
          yang bersih dari praktik syirik, kami menuntun Anda kembali ke fitrah
          ketenangan jiwa.
        </motion.p>

        {/* List Fitur Unggulan */}
        <motion.div variants={fadeUp} className="space-y-4 pt-2">
          <div className="flex items-start gap-3">
            <div
              className="p-1 rounded-full bg-secondary text-primary mt-0.5"
              aria-hidden="true"
            >
              <FiCheck className="text-lg stroke-[3]" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-base text-dark">
                Syar'iyyah & Bersih
              </h4>
              <p className="font-body text-sm text-muted">
                All tindakan terbebas dari khurafat, takhayul, dan praktik
                kesyirikan.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div
              className="p-1 rounded-full bg-secondary text-primary mt-0.5"
              aria-hidden="true"
            >
              <FiCheck className="text-lg stroke-[3]" />
            </div>
            <div>
              <h4 className="font-heading font-semibold text-base text-dark">
                Pendekatan Empatis
              </h4>
              <p className="font-body text-sm text-muted">
                Sesi privat yang aman, nyaman, dan ramah terhadap perspektif
                generasi muda.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
