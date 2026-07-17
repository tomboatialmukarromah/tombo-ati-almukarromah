import { menuNavigasi } from "../../../assets/menuNavigasi";
import { contactDetails } from "../../../assets/dataContact";
import { dataSocialMedia } from "../../../assets/dataSocialMedia";
import { FaHouseChimneyMedical } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 border-t border-secondary/20 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ROW 1: UTAMA (GRID TATA LETAK) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-secondary/10">
          {/* KOLOM 1: IDENTITAS ORGANISASI */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div
                className="text-xl md:text-2xl text-primary"
                aria-hidden="true"
              >
                <FaHouseChimneyMedical />
              </div>
              <span className="text-xl font-heading font-bold text-dark tracking-tight leading-none select-none">
                Tombo Ati
                <span className="text-primary ml-1">Al Mukarramah</span>
              </span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed max-w-sm">
              Lembaga nirlaba pelayanan bimbingan spiritual, konseling psikis
              Islam, dan pengobatan alternatif rukiah syar'iyyah yang aman,
              bersih, dan profesional.
            </p>

            {/* SOSIAL MEDIA ICON LIST (UX Engagement) */}
            <div className="flex items-center gap-3 pt-2">
              {dataSocialMedia.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-light border border-secondary/30 text-muted hover:text-primary hover:bg-secondary/30 hover:border-primary/20 flex items-center justify-center transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                    aria-label={`Kunjungi ${social.name} Rumah Rukiah Tombo Ati`}
                  >
                    <IconComponent className="text-base" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* KOLOM 2: TAUTAN NAVIGASI CEPAT (SEO & ACCESSIBILITY) */}
          <div className="space-y-4 md:pl-8">
            <h4 className="font-heading font-bold text-sm text-dark tracking-wider uppercase">
              Navigasi Halaman
            </h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2.5 list-none p-0 m-0">
                {menuNavigasi.map((menu, index) => (
                  <li key={index}>
                    <a
                      href={menu.url}
                      className="font-body text-sm text-muted hover:text-primary transition-colors duration-150 block py-0.5"
                    >
                      {menu.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* KOLOM 3: KANTOR PUSAT & OPERASIONAL */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-dark tracking-wider uppercase">
              Kantor Operasional
            </h4>
            <div className="space-y-3 font-body text-sm text-muted leading-relaxed">
              <p className="m-0">
                <span className="font-semibold text-dark block mb-0.5">
                  Alamat Pusat:
                </span>
                {contactDetails.address.value}
              </p>
              <p className="m-0">
                <span className="font-semibold text-dark block mb-0.5">
                  Kontak Hotline:
                </span>
                {contactDetails.whatsapp.value}
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2: BOTTOM (COPYRIGHT & PRIVASI LEGAL) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted text-center sm:text-left m-0">
            &copy; {currentYear} Rumah Rukiah Tombo Ati Al Mukarramah. Hak Cipta
            Dilindungi Undang-Undang.
          </p>
          <div className="flex items-center gap-6 font-body text-xs text-muted">
            <a
              href="#kebijakan-privasi"
              className="hover:text-primary transition-colors"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#syarat-ketentuan"
              className="hover:text-primary transition-colors"
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
