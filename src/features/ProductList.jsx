import CardProduct from "../components/CardProduct";

import { FaFilter } from "react-icons/fa";

const ProductList = () => {
  return (
    <div className="pt-2 pb-24 px-2 md:px-4 lg:px-8">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Product List</h1>
          </div>
          <div className="block md:hidden">
            <button className="text-teal-500 hover:text-teal-600 transition-all duration-300 ease-out text-xl p-2">
              <FaFilter />
            </button>
          </div>
        </div>

        <p className="text-slate-500 text-base mb-4">All Products</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-3">
          {Array.from({ length: 12 }, (_, i) => (
            <CardProduct key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
