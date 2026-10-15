function Button({
  text,
  onClick,
  variant = "primary",
  disabled = false,
  type="button"
}) {
  const variants = {
    primary: "bg-sky-500 hover:bg-sky-700 text-white",
    secondary: "bg-slate-200 hover:bg-slate-300 text-slate-800",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  return (
    <button
    type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-fit self-center rounded-lg px-4 py-3 font-semibold shadow-sm transition duration-300 hover:shadow-md active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant] || variants.primary}`}
    >
      {text}
    </button>
  );
}

export default Button;