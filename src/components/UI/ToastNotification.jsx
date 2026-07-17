import { useEffect } from "react";
import { FiCheckCircle, FiX } from "react-icons/fi";

export default function ToastNotification({
  message,
  onClose,
  duration = 3000,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  if (!message) return null;

  return (
    <div className="fixed top-24 right-6 z-50 animate-fade-in-down max-w-sm w-full bg-white border border-green-200 shadow-xl rounded-2xl p-4 flex items-center justify-between gap-3 transform transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="text-green-500 text-xl flex-shrink-0">
          <FiCheckCircle />
        </div>
        <p className="font-body text-xs md:text-sm font-semibold text-dark leading-snug">
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        className="text-muted hover:text-dark transition-colors p-1 rounded-lg hover:bg-light cursor-pointer outline-none"
      >
        <FiX className="text-base" />
      </button>
    </div>
  );
}
