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
    "px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105";

  const styles = {
    primary:
      "bg-green-500 text-white hover:bg-green-600 shadow-lg",

    secondary: darkMode
      ? "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900"
      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
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