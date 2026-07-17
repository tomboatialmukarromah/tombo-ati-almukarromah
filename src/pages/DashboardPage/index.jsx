import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { logoutAdmin } from "../../services/logoutService";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "./DashboardHeader";
import AnalyticsCards from "./AnalyticsCards";
import TrendChart from "./TrendChart";
import RegistrationTable from "./RegistrationTable";
import ToastNotification from "../../components/UI/ToastNotification";
import SEO from "../../components/common/SEO";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // STATE NOTIFIKASI TOAST (FIX NO 2)
  const [toastMessage, setToastMessage] = useState(null);

  const [statusFilter, setStatusFilter] = useState("process");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const { data: resData, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setData(resData || []);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  // FIX NO 2: Pemicu Toast Saat CTA Sukses Merubah Status
  const handleUpdateStatus = async (id, newStatus) => {
    // Cari nama klien lokal untuk personalisasi notifikasi
    const clientName = data.find((item) => item.id === id)?.name || "Klien";

    try {
      const { error } = await supabase
        .from("registrations")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;

      setData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item,
        ),
      );

      // Memicu notifikasi teks konversi
      const statusIndo =
        newStatus === "process"
          ? "Diproses"
          : newStatus === "success"
            ? "Sukses"
            : "Dibatalkan";
      setToastMessage(
        `Status berkas ${clientName} berhasil diubah menjadi [${statusIndo}]`,
      );
    } catch (err) {
      alert("Gagal memperbarui status: " + err.message);
    }
  };

  const handleLogout = async () => {
    await logoutAdmin();
    navigate("/login");
  };

  // --- LOGIKA ANALISIS DATA ---
  const currentMonthCount = data.filter((item) => {
    const date = new Date(item.created_at);
    return date.getMonth() === 6 && date.getFullYear() === 2026;
  }).length;

  const totalProcess = data.filter((i) => i.status === "process").length;
  const totalSuccess = data.filter((i) => i.status === "success").length;
  const totalBatal = data.filter((i) => i.status === "batal").length;

  const filteredData = data.filter((item) => {
    const matchesStatus =
      statusFilter === "all" ? true : item.status === statusFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const monthlyData = [
    { name: "Jan", count: 8 },
    { name: "Feb", count: 12 },
    { name: "Mar", count: 15 },
    { name: "Apr", count: 11 },
    { name: "Mei", count: 19 },
    { name: "Jun", count: 24 },
    { name: "Jul", count: currentMonthCount > 0 ? currentMonthCount : 20 },
  ];

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-light">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light font-body text-dark flex flex-col relative">
      <SEO title="Dashboard Admin" description="Dashboard admin Tombo Ati Al Mukarramah." noindex={true} />
      {/* RENDER TOAST NOTIFICATION SECARA DINAMIS */}
      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

      <DashboardHeader onLogout={handleLogout} />

      <main className="flex-grow p-6 max-w-7xl w-full mx-auto space-y-6">
        <AnalyticsCards
          currentMonthCount={currentMonthCount}
          totalProcess={totalProcess}
          totalSuccess={totalSuccess}
          totalBatal={totalBatal}
        />

        <TrendChart monthlyData={monthlyData} />

        <RegistrationTable
          currentItems={currentItems}
          searchQuery={searchQuery}
          setSearchQuery={(val) => {
            setSearchQuery(val);
            setCurrentPage(1);
          }}
          statusFilter={statusFilter}
          setStatusFilter={(val) => {
            setStatusFilter(val);
            setCurrentPage(1);
          }}
          onUpdateStatus={handleUpdateStatus}
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          filteredCount={filteredData.length}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
        />
      </main>
    </div>
  );
}
