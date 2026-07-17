import { HashLink } from "react-router-hash-link";
import { FaHouseChimneyMedical } from "react-icons/fa6";

export default function Logo() {
  return (
    <HashLink
      to="/#beranda"
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
      className="flex items-center gap-2.5 group outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 rounded-md transition-all duration-300"
      aria-label="Rumah Rukiah Tombo Ati Al Mukarramah - Kembali ke Beranda"
    >
      {/* ICON CONTAINER: Konsistensi visual & efek scaling saat hover */}
      <div
        className="text-xl md:text-2xl text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300 ease-out"
        aria-hidden="true"
      >
        <FaHouseChimneyMedical />
      </div>

      {/* TEXT BRANDING: Dioptimalkan untuk keterbacaan tinggi */}
      <span className="text-xl md:text-2xl font-heading font-bold text-dark tracking-tight leading-none select-none">
        Tombo
        <span className="text-primary group-hover:text-accent transition-colors duration-300 ml-1">
          Ati
        </span>
      </span>
    </HashLink>
  );
}
