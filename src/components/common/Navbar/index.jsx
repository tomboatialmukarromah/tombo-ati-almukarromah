import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menggunakan react-icons/fi atau lucide sesuai paketmu
import { FiArrowRight } from "react-icons/fi";
import { menuNavigasi } from "../../../assets/menuNavigasi";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import Button from "../../../components/UI/Button"; // Memanggil Reusable CTA Button ke dalam Navbar
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // UX INTEGRASI: Otomatis menutup navbar saat pindah rute/section
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // UX INTEGRASI: Mengunci scroll vertikal saat menu fullscreen aktif
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // UI INTEGRASI: Efek Deteksi Scroll untuk border dinamis & bayangan (Shadow)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UX INTEGRASI: Jarak potong aman agar section tidak tertabrak ketebalan navbar
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-secondary/40 shadow-sm py-3"
          : "bg-white/95 border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* LOGO BRAND */}
        <Logo scrollWithOffset={scrollWithOffset} />

        {/* DESKTOP NAVIGATION & CTA BUTTON CONTAINER */}
        <div className="hidden md:flex items-center gap-10">
          <nav
            className="flex items-center gap-8"
            aria-label="Desktop Navigation"
          >
            {menuNavigasi.map((menu, index) => (
              <HashLink
                key={index}
                to={menu.url}
                scroll={scrollWithOffset}
                className="font-body text-sm font-semibold text-muted hover:text-primary transition-colors py-2 relative group"
              >
                {menu.label}
                {/* Efek Garis Bawah Interaktif Khas UI Lama */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </HashLink>
            ))}
          </nav>

          {/* UI LAMA: Reusable CTA Button untuk Konversi Cepat */}
          <Button
            to="/pendaftaran"
            className="text-xs py-2.5 px-5 flex items-center gap-2"
          >
            Daftar Sekarang
          </Button>
        </div>

        {/* HAMBURGER TRIGGER BUTTON FOR MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-dark hover:text-primary transition-colors outline-none cursor-pointer z-50"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Tutup Menu Utama" : "Buka Menu Utama"}
        >
          {isOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>

        {/* ========================================================================= */}
        {/* MOBILE FULLSCREEN MENU OVERLAY */}
        {/* ========================================================================= */}
        <div
          className={`fixed inset-0 w-full h-screen bg-white md:hidden z-40 flex flex-col justify-between p-8 pt-28 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 pointer-events-auto visible"
              : "opacity-0 pointer-events-none invisible"
          }`}
        >
          {/* Menu Navigasi Tengah Mobile */}
          <nav
            className="flex flex-col gap-6 items-center justify-center flex-grow"
            aria-label="Mobile Navigation"
          >
            {menuNavigasi.map((menu, index) => (
              <HashLink
                key={index}
                to={menu.url}
                scroll={scrollWithOffset}
                onClick={() => setIsOpen(false)}
                className="font-heading font-bold text-xl text-dark hover:text-primary transition-colors py-2 block text-center w-full"
              >
                {menu.label}
              </HashLink>
            ))}

            {/* CTA Button Khusus Tampilan Mobile di bawah menu */}
            <div className="w-full pt-4 max-w-xs">
              <Button
                to="/pendaftaran"
                className="w-full py-3.5 text-center flex items-center justify-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                Daftar Sekarang
              </Button>
            </div>
          </nav>

          {/* Catatan Kaki Legal */}
          <div className="font-body text-xs text-muted text-center pt-6 border-t border-secondary/10">
            &copy; {new Date().getFullYear()} Rumah Rukiah Tombo Ati Al
            Mukarramah.
          </div>
        </div>
      </div>
    </header>
  );
}
