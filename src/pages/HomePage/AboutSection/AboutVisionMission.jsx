import { motion } from "framer-motion";

export default function AboutVisionMission() {
  const misis = [
    {
      id: "01",
      title: "Menegakkan Dakwah Syar'iyyah (Amar Ma'ruf)",
      text: "Menyediakan layanan bimbingan spiritual dan rukiah syar'iyyah yang bersih dan dapat dipertanggungjawabkan sesuai Al-Qur'an dan As-Sunnah.",
    },
    {
      id: "02",
      title: "Mencegah Kemusyrikan (Nahi Munkar)",
      text: "Mengedukasi masyarakat luas untuk mengikis praktik takhayul, khurafat, dan kesyirikan dengan memberikan pemahaman tauhid yang benar.",
    },
    {
      id: "03",
      title: "Integrasi Spiritual & Mental",
      text: "Mengintegrasikan bimbingan spiritual dengan pendekatan konseling psikologis Islam yang ramah, empatis, dan aman bagi ketenangan jiwa.",
    },
  ];

  return (
    <div className="py-16 border-t border-secondary/20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container utama yang membagi Visi dan Misi berdampingan pada layar desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* 1. SECTION VISI (Kiri pada desktop, Atas pada mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mt-3 tracking-tight">
            Visi & Misi Kami
          </h2>

          {/* Box khusus untuk Visi agar memiliki kontras dan fokus visual yang kuat */}
          <div className="p-6 sm:p-8 rounded-2xl bg-secondary/5 border border-secondary/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
            <p className="font-body text-lg text-dark font-medium leading-relaxed">
              "Amar Ma'ruf Nahi Munkar."
            </p>
          </div>
        </motion.div>

        {/* 2. SECTION MISI (Kanan pada desktop, Bawah pada mobile) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="lg:col-span-7 flex flex-col gap-5"
        >
          {misis.map((misi) => (
            <motion.div
              key={misi.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="relative group p-6 rounded-2xl border border-secondary/10 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 flex flex-row items-start gap-5"
            >
              {/* BADGE LINGKARAN - Dibuat sedikit lebih besar untuk keseimbangan visual */}
              <div className="w-12 h-12 rounded-xl border border-secondary/20 bg-secondary/5 text-primary font-heading font-bold text-base flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                {misi.id}
              </div>

              {/* AREA KONTEN TEXT */}
              <div className="space-y-1 pt-1">
                <h3 className="font-heading font-bold text-lg text-dark tracking-tight group-hover:text-primary transition-colors duration-200">
                  {misi.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-muted leading-relaxed">
                  {misi.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
