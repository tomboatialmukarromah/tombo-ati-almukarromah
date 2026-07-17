import { FiLogOut } from "react-icons/fi";

export default function DashboardHeader({ onLogout }) {
  return (
    <header className="bg-white border-b border-secondary/30 px-6 py-4 flex items-center justify-between shadow-xs">
      <div className="flex items-center gap-3">
        <div className="w-3 h-8 bg-primary rounded-full" />
        <div>
          <h1 className="font-heading font-bold text-xl md:text-2xl text-dark tracking-tight">
            System Workspace
          </h1>
          <p className="text-xs text-muted">
            Data Management & Client Analytics Console
          </p>
        </div>
      </div>
      <button
        onClick={onLogout}
        className="inline-flex items-center gap-2 border border-red-200 text-red-600 bg-red-50/50 hover:bg-red-600 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer outline-none"
      >
        <FiLogOut /> Keluar
      </button>
    </header>
  );
}
