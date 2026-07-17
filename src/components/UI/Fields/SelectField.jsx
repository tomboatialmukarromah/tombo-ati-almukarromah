export default function SelectField({
  label,
  id,
  name,
  required = false,
  value,
  onChange,
  options = [],
  placeholder,
  icon: Icon,
}) {
  return (
    <div className="space-y-1.5 w-full">
      <label
        htmlFor={id}
        className="font-heading font-bold text-xs md:text-sm text-dark block"
      >
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-base">
            <Icon />
          </span>
        )}
        <select
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`w-full bg-light border border-secondary/30 rounded-xl py-3.5 pr-10 font-body text-sm text-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer ${
            Icon ? "pl-11" : "px-4"
          }`}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none text-xs">
          ▼
        </span>
      </div>
    </div>
  );
}
