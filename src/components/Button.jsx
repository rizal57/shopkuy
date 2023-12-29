const Button = ({ children, text }) => {
  return (
    <button className="py-2 px-4 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 ease-out">
      {children || text}
    </button>
  );
};
export default Button;
