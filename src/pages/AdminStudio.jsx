import { Studio } from "sanity";
import sanityConfig from "../../sanity.config"; // Pastikan path relative ini benar
import SEO from "../components/common/SEO";

export default function AdminStudio() {
  return (
    // Menggunakan fixed inset-0 untuk memaksa studio mendominasi seluruh layar secara bersih
    <div className="fixed inset-0 w-full h-full z-[9999] bg-white overflow-hidden">
      <SEO title="Admin Studio" description="Sanity Studio admin panel." noindex={true} />
      <Studio config={sanityConfig} />
    </div>
  );
}
