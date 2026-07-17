import AboutIntro from "./AboutIntro";
import AboutVisionMission from "./AboutVisionMission";

export default function AboutSection() {
  return (
    <section
      id="tentang-kami"
      className="relative bg-white py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 md:space-y-28">
        {/* Bagian 1: Pengenalan Organisasi & Profil Tokoh */}
        <AboutIntro />

        {/* Bagian 2: Visi Misi Strategis */}
        <AboutVisionMission />
      </div>
    </section>
  );
}
