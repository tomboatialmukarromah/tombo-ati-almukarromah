import HeroSection from "./HeroSection";
import Stats from "../../components/Stats";
import AboutSection from "./AboutSection";
import ProcessStepsSection from "./ProcessStepsSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";
import SEO from "../../components/common/SEO";
import { dataFaq } from "../../assets/dataFaq";

export default function HomePage() {
  // JSON-LD: LocalBusiness schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rumah Rukiah Tombo Ati Al Mukarramah",
    description:
      "Layanan bimbingan spiritual, konseling psikis Islam, dan pengobatan alternatif rukiah syar'iyyah yang aman, bersih, dan profesional.",
    url: "https://RadizJoster-web.github.io/tombo-ati",
    telephone: "+6285777796117",
    address: {
      "@type": "PostalAddress",
      streetAddress: "JL. Suka Damai VI RT.08/04 NO.7",
      addressLocality: "Serua Indah, Ciputat",
      addressRegion: "Banten",
      addressCountry: "ID",
    },
    // TODO: Tambahkan geo coordinates (latitude, longitude) jika tersedia
    // TODO: Tambahkan openingHoursSpecification jika jam operasional tetap
  };

  // JSON-LD: FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dataFaq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div id="home">
      <SEO
        title="Beranda"
        description="Rumah Rukiah Tombo Ati Al Mukarramah — Layanan bimbingan spiritual, konseling psikis Islam, dan rukiah syar'iyyah yang aman dan profesional di Ciputat, Tangerang Selatan."
        keywords="rukiah syariyyah, ruqyah, pengobatan islami, konseling islam, tombo ati, al mukarramah, ciputat"
        canonicalUrl="/"
        structuredData={[localBusinessSchema, faqSchema]}
      />
      <HeroSection />
      <Stats />
      <AboutSection />
      <ProcessStepsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
