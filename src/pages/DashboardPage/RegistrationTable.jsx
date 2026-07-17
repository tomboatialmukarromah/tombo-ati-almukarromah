import { FiSearch, FiFilter, FiPhoneCall } from "react-icons/fi";

export default function RegistrationTable({
  currentItems,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  onUpdateStatus,
  currentPage,
  totalPages,
  setCurrentPage,
  filteredCount,
  indexOfFirstItem,
  indexOfLastItem,
}) {
  return (
    <div className="bg-white rounded-2xl border border-secondary/20 shadow-xs overflow-hidden">
      {/* FILTER BAR */}
      <div className="p-5 border-b border-secondary/20 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white">
        <div className="relative flex-grow max-w-md">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Cari nama atau no. telepon klien..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-light border border-secondary/30 rounded-xl py-2.5 pl-10 pr-4 text-xs md:text-sm outline-none focus:border-primary transition-all"
          />
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          <span className="text-xs text-muted flex items-center gap-1">
            <FiFilter /> Status:
          </span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-light border border-secondary/30 rounded-xl py-2 px-3 text-xs font-semibold outline-none text-dark cursor-pointer focus:border-primary"
          >
            <option value="all">Semua Status</option>
            <option value="process">Diproses (Antrean)</option>
            <option value="success">Sukses (Selesai)</option>
            <option value="batal">Dibatalkan</option>
          </select>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-light/80 border-b border-secondary/20 text-[11px] uppercase tracking-wider text-muted font-heading font-bold">
              <th className="py-4 px-5">Biodata Klien</th>
              <th className="py-4 px-5">Kontak & Gender</th>
              <th className="py-4 px-5 w-[35%]">
                Detail Keluhan Spiritual / Cemas
              </th>
              <th className="py-4 px-5">Status</th>
              <th className="py-4 px-5 text-center">Tindakan Aksi (CTA)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-secondary/10 text-xs md:text-sm">
            {currentItems.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-muted font-body"
                >
                  Tidak ditemukan data pendaftaran yang cocok dengan kriteria
                  filter.
                </td>
              </tr>
            ) : (
              currentItems.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-light/30 transition-colors"
                >
                  <td className="py-4 px-5">
                    <span className="font-bold text-dark block">
                      {row.name}
                    </span>
                    <span className="text-[11px] text-muted block">
                      {row.age ? row.age + " Tahun" : "Usia -"}
                    </span>
                  </td>
                  <td className="py-4 px-5 space-y-1">
                    <span className="text-dark block font-medium">
                      {row.phone}
                    </span>
                    <span className="text-[10px] bg-secondary px-2 py-0.5 rounded-md text-muted inline-block font-medium">
                      {row.gender}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <p className="text-muted text-xs leading-relaxed line-clamp-2 hover:line-clamp-none transition-all duration-300 cursor-pointer">
                      {row.complaint}
                    </p>
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        row.status === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : row.status === "batal"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                      }`}
                    >
                      {row.status === "process"
                        ? "Diproses"
                        : row.status === "success"
                          ? "Sukses"
                          : "Batal"}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={`https://wa.me/${row.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors text-xs"
                      >
                        <FiPhoneCall />
                      </a>
                      <div className="h-4 w-[1px] bg-secondary/30 mx-1" />
                      {["process", "success", "batal"].map((st) => (
                        <button
                          key={st}
                          onClick={() => onUpdateStatus(row.id, st)}
                          disabled={row.status === st}
                          className={`px-2 py-1 rounded text-[10px] font-bold transition-all capitalize ${
                            row.status === st
                              ? "opacity-30 cursor-not-allowed bg-gray-100 text-gray-400"
                              : st === "process"
                                ? "bg-yellow-500 text-white hover:bg-yellow-600 cursor-pointer"
                                : st === "success"
                                  ? "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
                                  : "bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                          }`}
                        >
                          {st === "process" ? "Proses" : st}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* PAGINATION PANEL */}
      <div className="p-4 bg-light/50 border-t border-secondary/20 flex items-center justify-between text-xs font-medium text-muted">
        <span>
          Menampilkan {filteredCount > 0 ? indexOfFirstItem + 1 : 0} -{" "}
          {Math.min(indexOfLastItem, filteredCount)} dari {filteredCount} data
          pendaftar
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 border border-secondary/30 rounded-lg bg-white text-dark hover:bg-light disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Sebelumnya
          </button>
          <div className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-lg font-bold">
            {currentPage} / {totalPages}
          </div>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 border border-secondary/30 rounded-lg bg-white text-dark hover:bg-light disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}
