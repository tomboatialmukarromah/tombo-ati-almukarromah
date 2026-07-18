import { HashLink } from "react-router-hash-link";

export default function Logo({ scrollWithOffset }) {
  return (
    <HashLink
      to="/#beranda"
      scroll={scrollWithOffset}
      className="group flex items-center gap-2.5 outline-none relative z-50"
    >
      <div
        className="text-xl text-primary group-hover:text-accent duration-150"
        aria-hidden="true"
      >
        <img src="/favicon.jpeg" alt="Baner tombo ati" className="object-cover w-12 h-12 rounded-full" />
      </div>  
      <span className="text-xl font-heading font-bold text-dark tracking-tight">
        Tombo Ati
        <span className="text-primary ml-1 group-hover:text-accent duration-150">
          Al Mukarramah
        </span>
      </span>
    </HashLink>
  );
}
