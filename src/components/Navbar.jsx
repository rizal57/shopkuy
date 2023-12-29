import { FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from "./Logo";
import Modal from "./Modal";
import { useState } from "react";

import Cart from "../features/Cart";

const Navbar = () => {
  const [openModalCart, setOpenModalCart] = useState(false);
  const [openModalProfile, setOpenModalProfile] = useState(false);

  const handleCloseModalCart = () => {
    setOpenModalCart(false);
  };

  const handleCloseModalProfile = () => {
    setOpenModalProfile(false);
  };

  const handleOpenModalCart = () => {
    setOpenModalCart(true);
  };

  const handleOpenModalProfile = () => {
    setOpenModalProfile(true);
  };

  return (
    <>
      {openModalCart ? (
        <Modal closeModal={handleCloseModalCart}>
          <Cart />
        </Modal>
      ) : null}

      {openModalProfile ? (
        <Modal closeModal={handleCloseModalProfile}>Profile</Modal>
      ) : null}

      <nav className="w-full sticky top-0 left-0 right-0 z-20">
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
            <button
              onClick={handleOpenModalCart}
              className="relative w-9 md:w-10 h-9 md:h-10 rounded-full bg-teal-500 text-white flex items-center justify-center"
            >
              <span className="rounded-full bg-rose-600 text-white flex items-center justify-center absolute -top-1 -right-2 p-1 text-xs">
                99
              </span>
              <FaShoppingCart size={18} />
            </button>
            <button
              onClick={handleOpenModalProfile}
              className="w-9 md:w-10 h-9 md:h-10 rounded-full bg-teal-500 text-white flex items-center justify-center"
            >
              <FaUser size={18} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
