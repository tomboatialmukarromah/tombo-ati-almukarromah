import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    // Tag <section> semantik dengan ID untuk navigasi jangkar (anchor link)
    <section
      id="beranda"
      className="relative min-h-screen w-full bg-gradient-to-b from-secondary/20 via-white to-white pt-24 md:pt-0 pb-16 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}
