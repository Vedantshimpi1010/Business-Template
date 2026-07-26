function Button({
  children,
  href,
  variant = "primary",
  darkMode = false,
  target,
  rel,
  onClick,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-1";

  const styles = {
    primary:
      "bg-[#7C3AED] text-white shadow-[0_12px_30px_rgba(124,58,237,0.35)] hover:bg-[#6D28D9] hover:shadow-[0_18px_40px_rgba(124,58,237,0.45)]",

    secondary: darkMode
      ? "border-2 border-[#7C3AED] text-white hover:bg-[#7C3AED]"
      : "bg-white border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white shadow-md",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;