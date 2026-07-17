export default function TrendChart({ monthlyData }) {
  const maxCount = Math.max(...monthlyData.map((d) => d.count)) || 1;

  return (
    <div className="bg-white p-6 rounded-2xl border border-secondary/20 shadow-xs space-y-4">
      <div>
        <h3 className="font-heading font-bold text-base text-dark">
          Grafik Tren Pendaftaran
        </h3>
        <p className="text-xs text-muted">
          Akumulasi volume pertumbuhan calon klien per periode bulan berjalan
        </p>
      </div>

      <div className="w-full bg-light rounded-xl p-4 flex items-end justify-between h-48 pt-8">
        {monthlyData.map((item, index) => {
          const heightPercentage = (item.count / maxCount) * 100;
          return (
            <div
              key={index}
              className="flex flex-col items-center flex-grow space-y-2 group"
            >
              <span className="text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {item.count}
              </span>
              <div
                style={{ height: `${Math.max(heightPercentage, 8)}%` }}
                className="w-8 sm:w-12 bg-primary/20 hover:bg-primary rounded-t-md transition-all duration-300 relative flex justify-center"
              >
                {item.name === "Jul" && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary rounded-t-md" />
                )}
              </div>
              <span className="text-xs font-semibold text-muted">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
