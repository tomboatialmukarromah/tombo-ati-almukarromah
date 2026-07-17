import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { menuNavigasi } from "../../../assets/menuNavigasi";
import Button from "../../UI/Button";

function NavItem({ to, onClick, onClose, className, children }) {
  if (to.includes("#")) {
    return (
      <HashLink
        to={to}
        scroll={(el) =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        onClick={onClose}
        className={className}
      >
        {children}
      </HashLink>
    );
  }

  return (
    <Link to={to} onClick={onClose} className={className}>
      {children}
    </Link>
  );
}

export default function MobileNav({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-white border-b border-secondary/30 absolute top-full left-0 w-full overflow-hidden shadow-md"
        >
          <nav
            className="flex flex-col px-6 pt-4 pb-8 gap-6"
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col gap-5 list-none m-0 p-0">
              {menuNavigasi.map((menu, index) => (
                <li key={index}>
                  <NavItem
                    to={menu.url}
                    onClick={onClose}
                    className="font-body text-base font-medium text-dark hover:text-primary transition-colors block py-1"
                  >
                    {menu.label}
                  </NavItem>
                </li>
              ))}
            </ul>
            <Button
              to="/pendaftaran"
              onClick={onClose}
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              Daftar Rukiah
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
