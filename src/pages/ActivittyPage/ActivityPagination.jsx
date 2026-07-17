import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ActivityPagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null; // Jika data di bawah batas limit, hilangkan kontroler

  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      {/* Tombol Kembali Halaman */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-xl border border-secondary/40 bg-white text-dark hover:text-primary hover:border-primary disabled:opacity-40 disabled:hover:text-dark disabled:disabled:border-secondary/40 flex items-center justify-center transition-all duration-200 shadow-sm outline-none cursor-pointer disabled:cursor-not-allowed"
        aria-label="Halaman Sebelumnya"
      >
        <FiChevronLeft className="text-lg" />
      </button>

      {/* Render Angka Indikator Halaman */}
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = currentPage === pageNumber;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-10 h-10 rounded-xl font-body text-sm font-semibold flex items-center justify-center transition-all duration-200 border outline-none cursor-pointer ${
              isActive
                ? "bg-primary border-primary text-white shadow-sm"
                : "bg-white border-secondary/40 text-dark hover:text-primary hover:border-primary shadow-sm"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Tombol Lanjut Halaman */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-xl border border-secondary/40 bg-white text-dark hover:text-primary hover:border-primary disabled:opacity-40 disabled:hover:text-dark disabled:disabled:border-secondary/40 flex items-center justify-center transition-all duration-200 shadow-sm outline-none cursor-pointer disabled:cursor-not-allowed"
        aria-label="Halaman Selanjutnya"
      >
        <FiChevronRight className="text-lg" />
      </button>
    </div>
  );
}
