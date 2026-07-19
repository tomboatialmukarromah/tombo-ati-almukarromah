import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiUser, FiUsers } from "react-icons/fi";

export default function AboutIntro() {
  const [activeTab, setActiveTab] = useState("founder");
  // State untuk memicu animasi selimut hitam
  const [isTransitioning, setIsTransitioning] = useState(false);
  // State bayangan untuk menampung data gambar yang ditampilkan setelah tertutup hitam
  const [displayedTab, setDisplayedTab] = useState("founder");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const profileData = {
    founder: {
      name: "Muhammad Yandi bin Jajang Jumena",
      role: "Founder & Praktisi Utama",
      image: "/images/ketua tombo ati.jpeg",
      alt: "Ustadz Muhammad Yandi bin Jajang Jumena, Pendiri Tombo Ati Al Mukarramah",
    },
    member: {
      name: "Tim Praktisi & Pendamping Spiritual",
      role: "Anggota & Tim Konselor",
      image: "/images/anggota tombo ati.png",
      alt: "Jajaran Anggota Praktisi dan Konselor Keagamaan Tombo Ati",
    },
  };

  // Alur Logika Efek Selimut Hitam (Overlay Transition)
  const handleTabChange = (targetTab) => {
    if (targetTab === activeTab) return;

    setActiveTab(targetTab);
    setIsTransitioning(true); // 1. Selimut hitam mulai menutup (fade in)

    // 2. Saat selimut hitam menutup penuh (150ms), ganti konten gambarnya di belakang layar
    setTimeout(() => {
      setDisplayedTab(targetTab);
    }, 150);

    // 3. Buka kembali selimut hitam secara perlahan (total 300ms)
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const currentProfile = profileData[displayedTab];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* ========================================================================= */}
      {/* KOLOM KIRI: KARTU PROFIL DENGAN TRANSISI SELIMUT HITAM SINEMATIK          */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center justify-center w-full max-w-sm mx-auto"
      >
        <div className="absolute inset-0 bg-secondary/30 rounded-2xl transform rotate-3 scale-102 -z-10" />

        {/* CONTROLLER SWITCHER: ANTI FOCUS RING & ANTI GLITCH */}
        <div className="bg-light/80 border border-secondary/40 p-1 rounded-xl flex items-center w-full mb-4 shadow-xs">
          <button
            onClick={() => handleTabChange("founder")}
            style={{ webkitTapHighlightColor: "transparent" }}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-heading font-bold transition-all border outline-none focus:outline-none focus:ring-0 active:outline-none select-none cursor-pointer ${
              activeTab === "founder"
                ? "bg-white text-dark shadow-xs border-secondary/10"
                : "text-muted hover:text-dark border-transparent"
            }`}
          >
            <FiUser className="text-sm" /> Pendiri
          </button>
          <button
            onClick={() => handleTabChange("member")}
            style={{ webkitTapHighlightColor: "transparent" }}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-heading font-bold transition-all border outline-none focus:outline-none focus:ring-0 active:outline-none select-none cursor-pointer ${
              activeTab === "member"
                ? "bg-white text-dark shadow-xs border-secondary/10"
                : "text-muted hover:text-dark border-transparent"
            }`}
          >
            <FiUsers className="text-sm" /> Anggota
          </button>
        </div>

        {/* UTAMA KARTU PROFIL */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-secondary/20 w-full overflow-hidden">
          {/* BINCOK BINGKAI GAMBAR */}
          <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 mb-4 relative flex items-center justify-center select-none pointer-events-none">
            {/* SOLUSI: LAPISAN SELIMUT HITAM (OVERLAY) YANG MENGATUR TRANSISI FADE IN/OUT */}
            <div
              className={`absolute inset-0 bg-slate-950 z-20 transition-opacity duration-150 ease-in-out pointer-events-none ${
                isTransitioning ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* AMBIENT BLUR BACKGROUND */}
            <img
              src={profileData.member.image}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover blur-md scale-110 transition-opacity duration-300 -z-0 ${
                displayedTab === "member" ? "opacity-35" : "opacity-0"
              }`}
            />

            {/* GAMBAR UTAMA (Tetap statis di posisinya, pergantian tertutup rapi oleh selimut hitam) */}
            <img
              src={currentProfile.image}
              alt={currentProfile.alt}
              className={`w-full h-full relative z-10 ${
                displayedTab === "member" ? "object-contain" : "object-cover"
              }`}
              loading="lazy"
              width="352"
              height="469"
            />
          </div>

          {/* INFORMASI TEKS DI BAWAH FOTO (Perubahan teks ikut terselubung durasi transisi) */}
          <div className="text-center h-14 flex flex-col justify-center">
            <div
              className={`transition-opacity duration-150 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
              <p className="font-heading font-bold text-base md:text-lg text-dark line-clamp-1">
                {currentProfile.name}
              </p>
              <p className="font-body text-xs text-primary font-medium tracking-wider uppercase mt-0.5">
                {currentProfile.role}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* KOLOM KANAN: TEKS NARASI PENJELASAN UTAMA (TETAP KONSISTEN)                */}
      {/* ========================================================================= */}
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
  