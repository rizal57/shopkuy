import { FaMinus, FaPlus } from "react-icons/fa";

const InputQuantity = () => {
  return (
    <div className="flex items-center">
      <button className="p-2 bg-teal-500 text-white rounded-md w-6 h-6 flex items-center justify-center hover:bg-teal-600 transition-all duration-300 ease-out">
        <FaMinus />
      </button>
      <input
        type="number"
        value={1}
        className="w-10 text-center outline-none border-none"
      />
      <button className="p-2 bg-teal-500 text-white rounded-md w-6 h-6 flex items-center justify-center hover:bg-teal-600 transition-all duration-300 ease-out">
        <FaPlus />
      </button>
    </div>
  );
};
export default InputQuantity;
