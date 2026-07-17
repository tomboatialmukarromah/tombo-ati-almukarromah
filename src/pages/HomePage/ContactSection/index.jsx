import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import { contactDetails } from "../../../assets/dataContact";

export default function ContactSection() {
  // Generate URL Google Maps satu pintu untuk disalurkan ke anak komponen
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contactDetails.address.value,
  )}`;

  return (
    <section id="kontak" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Modul Kiri: Informasi Tekstual */}
        <ContactInfo googleMapsUrl={googleMapsUrl} />

        {/* Modul Kanan: Tampilan Map + CTA Eksternal */}
        <ContactMap googleMapsUrl={googleMapsUrl} />
      </div>
    </section>
  );
}
