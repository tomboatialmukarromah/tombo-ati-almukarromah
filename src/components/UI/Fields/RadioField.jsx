export default function RadioField({
  label,
  name,
  required = false,
  value,
  onChange,
  options = [],
}) {
  return (
    <div className="space-y-2 w-full">
      <label className="font-heading font-bold text-xs md:text-sm text-dark block">
        {label} {required && <span className="text-primary">*</span>}
      </label>

      <div className="flex flex-wrap gap-6 pt-1">
        {options.map((opt) => {
          const isSelected = value === opt.value;

          return (
            <label
              key={opt.value}
              className="flex items-center gap-3 cursor-pointer group select-none outline-none"
            >
              {/* INPUT RADIO TERSEMBUNYI TAPI AKSESIBEL */}
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={isSelected}
                onChange={onChange}
                required={required}
                className="peer sr-only"
              />

              {/* LINGKARAN INDIKATOR KUSTOM MODERN */}
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 group-hover:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 ${
                  isSelected
                    ? "border-primary bg-primary/10"
                    : "border-secondary/50 bg-light"
                }`}
              >
                {/* TITIK TENGAH AKTIF */}
                <div
                  className={`w-2.5 h-2.5 rounded-full bg-primary transition-transform duration-200 ${
                    isSelected ? "scale-100" : "scale-0"
                  }`}
                />
              </div>

              {/* TEKS LABEL PILIHAN */}
              <span className="font-body text-sm text-dark group-hover:text-primary transition-colors">
                {opt.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
