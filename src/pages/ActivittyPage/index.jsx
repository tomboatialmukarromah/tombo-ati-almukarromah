import { useState, useEffect } from "react";
import ActivityHeader from "./ActivityHeader";
import ActivityCard from "./ActivityCard";
import ActivityDetailModal from "./ActivityDetailModal";
import ActivityPagination from "./ActivityPagination";
import { client } from "../../sanityClient";
import SEO from "../../components/common/SEO";

export default function ActivityPage() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Batasan pagination sesuai brief awal (6 item per halaman)
  const itemsPerPage = 6;

  useEffect(() => {
    // Query GROQ: Mengambil dokumen bertipe 'activity' dan diurutkan berdasarkan tanggal terbaru
    const query = `*[_type == "activity"] | order(date desc)`;

    client
      .fetch(query)
      .then((data) => {
        setActivities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data dari Sanity:", err);
        setLoading(false);
      });
  }, []);

  // LOGIKA MATHEMATIKA PAGINATION
  const totalPages = Math.ceil(activities.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = activities.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("galeri-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://RadizJoster-web.github.io/tombo-ati/" },
      { "@type": "ListItem", position: 2, name: "Dokumentasi Aktifitas", item: "https://RadizJoster-web.github.io/tombo-ati/aktifitas" },
    ],
  };

  // UX State: Menampilkan loading spinner jika internet lambat saat memuat data pertama kali
  if (loading) {
    return (
      <div className="w-full min-h-[50vh] flex items-center justify-center bg-light">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section
      id="galeri-section"
      className="bg-light py-16 md:py-24 min-h-screen"
    >
      <SEO
        title="Dokumentasi Aktifitas"
        description="Galeri dokumentasi kegiatan rukiah syar'iyyah, kajian Islam, dan aktifitas dakwah Rumah Rukiah Tombo Ati Al Mukarramah."
        keywords="aktifitas rukiah, dokumentasi kajian islam, kegiatan tombo ati"
        canonicalUrl="/aktifitas"
        structuredData={breadcrumbSchema}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between h-full space-y-12">
        <ActivityHeader />

        {activities.length === 0 ? (
          <div className="text-center font-body text-muted py-12">
            Belum ada dokumentasi aktifitas yang diunggah.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentItems.map((activity) => (
              <ActivityCard
                key={activity._id} // Menggunakan ID bawaan Sanity (_id)
                activity={activity}
                onOpenDetail={(item) => setSelectedActivity(item)}
              />
            ))}
          </div>
        )}

        <ActivityPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        <ActivityDetailModal
          activeActivity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      </div>
    </section>
  );
}
