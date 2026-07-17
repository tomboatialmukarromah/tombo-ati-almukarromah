export default function TextAreaField({
  label,
  id,
  name,
  required = false,
  rows = 4,
  value,
  onChange,
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
          <span className="absolute left-4 top-4 text-muted text-base">
            <Icon />
          </span>
        )}
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-light border border-secondary/30 rounded-xl py-3.5 pr-4 font-body text-sm text-dark placeholder:text-muted/60 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none ${
            Icon ? "pl-11" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}
