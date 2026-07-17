import {
  FiX,
  FiUser,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiClock,
  FiCalendar,
} from "react-icons/fi";

export default function DetailModal({ isOpen, onClose, clientData }) {
  if (!isOpen || !clientData) return null;

  // Deteksi tautan share location
  const isLinkAddress = clientData.address?.includes("http");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-secondary/20 overflow-hidden transform transition-all animate-scale-up max-h-[90vh] flex flex-col">
        {/* MODAL HEADER */}
        <div className="p-5 border-b border-secondary/10 flex items-center justify-between bg-light/30">
          <div>
            <h3 className="font-heading font-bold text-base text-dark">
              Detail Berkas Klien
            </h3>
            <p className="text-[11px] text-muted">
              ID: {clientData.id?.slice(0, 8)}...
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-muted hover:text-dark hover:bg-light rounded-xl transition-all cursor-pointer outline-none"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        {/* MODAL BODY (SCROLLABLE ON MOBILE) */}
        <div className="p-6 space-y-4 overflow-y-auto flex-grow font-body text-xs md:text-sm">
          {/* NAMA & USIA */}
          <div className="flex gap-3 items-start border-b border-secondary/10 pb-3">
            <div className="text-primary text-lg mt-0.5">
              <FiUser />
            </div>
            <div>
              <span className="text-xs text-muted block">
                Nama Lengkap & Usia
              </span>
              <span className="font-bold text-dark text-sm md:text-base">
                {clientData.name}
              </span>
              <span className="text-xs bg-secondary/60 px-2 py-0.5 rounded-md text-muted ml-2 font-semibold">
                {clientData.age ? clientData.age + " Tahun" : "Usia -"}
              </span>
            </div>
          </div>

          {/* KONTAK & GENDER */}
          <div className="grid grid-cols-2 gap-4 border-b border-secondary/10 pb-3">
            <div className="flex gap-3 items-start">
              <div className="text-primary text-lg mt-0.5">
                <FiPhone />
              </div>
              <div>
                <span className="text-xs text-muted block">No. WhatsApp</span>
                <span className="font-semibold text-dark">
                  {clientData.phone}
                </span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="text-primary text-lg mt-0.5">
                <FiUser />
              </div>
              <div>
                <span className="text-xs text-muted block">Jenis Kelamin</span>
                <span className="font-semibold text-dark">
                  {clientData.gender}
                </span>
              </div>
            </div>
          </div>

          {/* ALAMAT / SHARE LOCATION */}
          <div className="flex gap-3 items-start border-b border-secondary/10 pb-3">
            <div className="text-primary text-lg mt-0.5">
              <FiMapPin />
            </div>
            <div className="w-full">
              <span className="text-xs text-muted block mb-0.5">
                Alamat Rumah / Lokasi
              </span>
              {isLinkAddress ? (
                <a
                  href={clientData.address}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold underline break-all flex items-center gap-1 hover:text-primary/80"
                >
                  📍 Buka Peta Lokasi (Share Loc Klien)
                </a>
              ) : (
                <p className="text-dark font-medium leading-relaxed">
                  {clientData.address || "-"}
                </p>
              )}
            </div>
          </div>

          {/* DETAIL KELUHAN SPIRITUAL */}
          <div className="flex gap-3 items-start border-b border-secondary/10 pb-3">
            <div className="text-primary text-lg mt-0.5">
              <FiMessageSquare />
            </div>
            <div>
              <span className="text-xs text-muted block mb-1">
                Kondisi & Keluhan Saat Ini
              </span>
              <p className="text-dark font-medium leading-relaxed bg-light/50 p-3 rounded-xl border border-secondary/10 whitespace-pre-line">
                {clientData.complaint}
              </p>
            </div>
          </div>

          {/* STATUS BERKAS KINI */}
          <div className="flex items-center justify-between bg-light/40 p-3 rounded-xl border border-secondary/20">
            <div className="flex gap-2 items-center text-xs text-muted">
              <FiClock /> <span>Status Alur Kerja:</span>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                clientData.status === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : clientData.status === "batal"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-yellow-50 text-yellow-700 border border-yellow-200"
              }`}
            >
              {clientData.status === "process"
                ? "Diproses"
                : clientData.status === "success"
                  ? "Sukses"
                  : "Batal"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
