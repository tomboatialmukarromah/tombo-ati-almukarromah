import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <div className="relative w-full h-[350px] lg:h-[500px] flex items-center justify-center">
      {/* Ornamen Background Abstrak Bulat Lembut (UX Aesthetic) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-[80%] h-[80%] rounded-full bg-secondary/40 blur-3xl z-0"
      />

      {/* Bingkai Foto Utama dengan Efek Elevasi */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-card border border-white"
      >
        <img
          src="/images/hero section image.png"
          alt="Suasana tenang dan damai untuk pemulihan spiritual"
          width="1920"
          height="1080"
          className="w-full h-full object-cover select-none"
          loading="eager" // Penting untuk SEO LCP (Largest Contentful Paint) agar gambar hero dimuat instan
        />

        {/* Lapisan Gradasi Lembut di atas Gambar */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent mix-blend-multiply" />
      </motion.div>

      {/* Floating Card Kecil untuk Menambah Kedalaman Kedalaman Visual (Depth of Field) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-6 left-2 md:left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md border border-secondary/30 flex items-center gap-3 max-w-xs"
      >
        <div>
          <p className="font-heading font-bold text-sm text-dark m-0">
            100% Syar'iyyah
          </p>
          <p className="font-body text-xs text-muted m-0">
            Tanpa syirik & khurafat
          </p>
        </div>
      </motion.div>
    </div>
  );
}
