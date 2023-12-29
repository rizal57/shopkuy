const Button = ({
  children,
  padding = "py-2 px-4",
  bgColor = "bg-teal-500 hover:bg-teal-600",
  textColor = "text-white",
  width,
  height,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${padding} ${width} ${height} rounded-md ${bgColor} ${textColor} transition-all duration-300 ease-out ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
