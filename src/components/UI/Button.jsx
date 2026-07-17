import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Button({
  children,
  to,
  hashTo,
  type = "button",
  variant = "accent", // pilihan: 'accent' | 'outline' | 'primary'
  className = "",
  onClick,
  ...props
}) {
  // 1. Mengelompokkan kelas CSS dasar (Base Styles) untuk tombol
  const baseStyles =
    "inline-block text-center font-body font-semibold text-base px-8 py-4 rounded-xl shadow-sm transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0 active:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";

  // 2. Pemetaan Varian Warna sesuai Design System baru
  const variants = {
    accent:
      "bg-accent hover:bg-accent-hover text-white shadow-md focus:ring-accent/50",
    outline:
      "bg-transparent border border-secondary text-dark hover:bg-secondary/30 focus:ring-primary/30",
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-md focus:ring-primary/50",
  };

  // 3. Menggabungkan kelas dasar, varian, dan custom className tambahan
  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (hashTo) {
    return (
      <HashLink
        to={hashTo}
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {children}
      </HashLink>
    );
  }

  // 4. UX Kondisional: Jika properti 'to' diisi, render sebagai routing <Link>. Jika tidak, render sebagai <button> biasa.
  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
