import Button from "../components/Button";
import InputQuantity from "../components/InputQuantity";

import { FaTrash } from "react-icons/fa";

const CartItem = () => {
  return (
    <div className="flex gap-4 border-b border-slate-300 p-2 md:p-4">
      <div className="w-40 md:w-48 h-32 md:h-4w-48">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="Product Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full relative">
        <h3>Product title</h3>
        <h2 className="text-lg font-semibold text-teal-500">$150</h2>
        <div className="w-full flex items-center justify-between">
          <InputQuantity widthBtn="w-5" heightBtn="h-5" />
          <Button
            padding="p-1"
            width="w-6"
            height="h-6"
            bgColor="bg-red-500 hover:bg-red-600"
            className="flex items-center justify-center absolute bottom-1 right-1"
          >
            <FaTrash size={10} />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
