import { FiUsers, FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function AnalyticsCards({
  currentMonthCount,
  totalProcess,
  totalSuccess,
  totalBatal,
}) {
  const metrics = [
    {
      label: "Pendaftar Bulan Ini",
      value: `${currentMonthCount} Jiwa`,
      icon: FiUsers,
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      label: "Antrean Diproses",
      value: `${totalProcess} Kasus`,
      icon: FiClock,
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      label: "Selesai Ditangani",
      value: `${totalSuccess} Sukses`,
      icon: FiCheckCircle,
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      label: "Dibatalkan/Gagal",
      value: `${totalBatal} Kasus`,
      icon: FiXCircle,
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-white p-5 rounded-2xl border border-secondary/20 shadow-xs flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-medium text-muted block">
                {card.label}
              </span>
              <span className={`text-2xl font-bold block ${card.textColor}`}>
                {card.value}
              </span>
            </div>
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${card.bgColor} ${card.textColor}`}
            >
              <Icon />
            </div>
          </div>
        );
      })}
    </div>
  );
}
