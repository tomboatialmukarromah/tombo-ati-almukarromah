import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { menuNavigasi } from "../../../assets/menuNavigasi";

function NavItem({ to, children, className, onClick }) {
  const sharedProps = { className, onClick };

  if (to.includes("#")) {
    return (
      <HashLink
        to={to}
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        {...sharedProps}
      >
        {children}
      </HashLink>
    );
  }

  return (
    <Link to={to} {...sharedProps}>
      {children}
    </Link>
  );
}

export default function DesktopNav() {
  return (
    <nav
      className="hidden md:flex items-center gap-8"
      aria-label="Desktop Navigation"
    >
      <ul className="flex items-center gap-8 list-none m-0 p-0">
        {menuNavigasi.map((menu, index) => (
          <li key={index}>
            <NavItem
              to={menu.url}
              className="font-body text-sm font-medium text-dark hover:text-primary transition-colors duration-200 relative py-2 block group"
            >
              {menu.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
}
