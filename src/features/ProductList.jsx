import { useState } from "react";
import CardProduct from "../components/CardProduct";

import { FaFilter } from "react-icons/fa";
import Modal from "../components/Modal";
import Categories from "../components/Categories";
import Price from "../components/Price";

const ProductList = () => {
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [openModalFilter, setOpenModalFilter] = useState(false);

  const handleOpenModalProduct = () => {
    setOpenModalProduct(true);
  };

  const handleOpenModalFilter = () => {
    setOpenModalFilter(true);
  };

  const handleCloseModalFilter = () => {
    setOpenModalFilter(false);
  };

  const handleCloseModalProduct = () => {
    setOpenModalProduct(false);
  };

  return (
    <>
      {openModalProduct ? (
        <Modal closeModal={handleCloseModalProduct}>Product</Modal>
      ) : null}

      {openModalFilter ? (
        <Modal closeModal={handleCloseModalFilter}>
          <Categories />
          <Price />
        </Modal>
      ) : null}

      <div className="pt-2 pb-24 px-2 md:px-4 lg:px-8">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Product List
              </h1>
            </div>
            {/* filter button */}
            <div className="block md:hidden">
              <button
                onClick={handleOpenModalFilter}
                className="text-teal-500 hover:text-teal-600 transition-all duration-300 ease-out text-xl p-2"
              >
                <FaFilter />
              </button>
            </div>
          </div>

          <p className="text-slate-500 text-base mb-4">All Products</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-3">
            {Array.from({ length: 12 }, (_, i) => (
              <CardProduct key={i} openModal={handleOpenModalProduct} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
