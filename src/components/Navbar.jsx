import { FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between gap-2 h-[60px] bg-white shadow-sm px-2 md:px-4 lg:px-8">
        <div className="md:hidden">
          <Logo />
        </div>

        <div className="w-full max-w-[250px] md:max-w-[300px]">
          <input
            type="text"
            placeholder="Search..."
            className="py-1 px-2 w-full rounded-md outline-none placeholder:text-slate-400 bg-white border border-teal-400 focus:border-teal-600 focus:shadow-sm transition-all duration-300 ease-out"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative w-9 md:w-10 h-9 md:h-10 rounded-full bg-teal-500 text-white flex items-center justify-center">
            <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center absolute -top-1 -right-2 p-3 text-xs">
              99
            </span>
            <FaShoppingCart size={18} />
          </button>
          <button className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-teal-500 text-white flex items-center justify-center">
            <FaUser size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
