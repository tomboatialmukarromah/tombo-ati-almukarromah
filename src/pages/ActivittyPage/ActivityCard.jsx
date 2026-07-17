import { FiCalendar, FiMaximize2 } from "react-icons/fi";
import { urlFor } from "../../sanityClient";

export default function ActivityCard({ activity, onOpenDetail }) {
  // Fungsi penyeragaman format tampilan tanggal lokal Indonesia
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="bg-white border border-secondary/20 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all duration-300">
      {/* Visual Utama Gambar */}
      <div className="w-full aspect-video overflow-hidden bg-slate-100 relative">
        {activity.image && (
          <img
            src={urlFor(activity.image)
              .width(600)
              .height(340)
              .fit("crop")
              .url()}
            alt={activity.title}
            width="600"
            height="340"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
            loading="lazy"
          />
        )}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-secondary/30 flex items-center gap-1.5 shadow-sm">
          <FiCalendar className="text-primary text-xs" />
          <span className="font-body text-[11px] font-medium text-dark">
            {formatDate(activity.date)}
          </span>
        </div>
      </div>

      {/* Konten Teks Deskriptif */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-heading font-bold text-base md:text-lg text-dark tracking-tight group-hover:text-primary transition-colors duration-200">
            {activity.title}
          </h3>
          <p className="font-body text-sm text-muted leading-relaxed line-clamp-3">
            {activity.desc}
          </p>
        </div>

        <button
          onClick={() => onOpenDetail(activity)}
          className="w-full inline-flex items-center justify-center gap-2 border border-secondary text-dark hover:bg-secondary/20 hover:text-primary font-body font-semibold text-xs py-2.5 rounded-xl transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
        >
          <FiMaximize2 className="text-xs" />
          Lihat Detail Aktifitas
        </button>
      </div>
    </div>
  );
}
