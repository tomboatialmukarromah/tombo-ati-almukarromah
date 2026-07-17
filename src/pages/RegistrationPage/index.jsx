import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import { handlePendaftaranClient } from "../../services/registrationService";
import SEO from "../../components/common/SEO";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmitHandler = async (formData) => {
    setLoading(true);
    setErrorMsg(null);

    // Memanggil service terpisah
    const result = await handlePendaftaranClient(formData);

    setLoading(false);

    if (result.success) {
      // Mengarahkan tab browser baru langsung menuju API WhatsApp Hotline
      window.open(result.redirectUrl, "_blank", "noopener,noreferrer");
      navigate("/");
    } else {
      setErrorMsg(result.message || "Terjadi kegagalan sistem. Coba lagi.");
    }
  };

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://RadizJoster-web.github.io/tombo-ati/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pendaftaran",
        item: "https://RadizJoster-web.github.io/tombo-ati/pendaftaran",
      },
    ],
  };

  return (
    <section
      id="pendaftaran"
      className="w-full min-h-screen flex justify-center items-center bg-light py-16 md:py-24"
    >
      <SEO
        title="Pendaftaran Online"
        description="Ajukan permohonan pendampingan rukiah syar'iyyah secara online. Data Anda terenkripsi dan diproses oleh konselor profesional Tombo Ati Al Mukarramah."
        keywords="daftar rukiah, pendaftaran ruqyah online, pendampingan islami"
        canonicalUrl="/pendaftaran"
        structuredData={breadcrumbSchema}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* TEKS INFORMASI KIRI (5 KOLOM GRID) */}
        <div className="lg:col-span-5 space-y-5 text-left">
          <span className="text-sm font-heading font-bold text-accent tracking-wider uppercase">
            Pendaftaran Online
          </span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-dark tracking-tight leading-tight">
            Ajukan Permohonan Pendampingan Anda
          </h1>
          <p className="font-body text-sm md:text-base text-muted leading-relaxed">
            Seluruh data keluhan Anda dienkripsi secara privat dan hanya
            digunakan untuk kepentingan pemetaan penanganan medis-islami oleh
            tim konselor.
          </p>
          <div className="bg-white/80 p-4 rounded-xl border border-secondary/30 font-body text-xs text-muted leading-relaxed">
            <span className="font-bold text-dark block mb-1">
              💡 Catatan Alur Kelanjutan:
            </span>
            Setelah menekan tombol kirim, Anda akan diarahkan ke WhatsApp untuk
            mengirim berkas teks otomatis. Asisten operasional kami akan
            membalas pesan Anda maksimal 1x24 jam untuk verifikasi jadwal.
          </div>
        </div>

        {/* FORM ISIAN KANAN (7 KOLOM GRID) */}
        <div className="lg:col-span-7 w-full">
          <RegistrationForm
            onSubmit={onSubmitHandler}
            loading={loading}
            errorMessage={errorMsg}
          />
        </div>
      </div>
    </section>
  );
}
