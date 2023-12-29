import { FaMinus, FaPlus } from "react-icons/fa";

const InputQuantity = ({ widthBtn = "w-6", heightBtn = "h-6" }) => {
  return (
    <div className="flex items-center">
      <button
        className={`bg-teal-500 text-white rounded-md ${widthBtn} ${heightBtn} flex items-center justify-center hover:bg-teal-600 transition-all duration-300 ease-out`}
      >
        <FaMinus size={10} />
      </button>
      <input
        type="number"
        value={1}
        onChange={() => {}}
        className="w-10 text-center outline-none border-none"
      />
      <button
        className={`bg-teal-500 text-white rounded-md ${widthBtn} ${heightBtn} flex items-center justify-center hover:bg-teal-600 transition-all duration-300 ease-out`}
      >
        <FaPlus size={10} />
      </button>
    </div>
  );
};
export default InputQuantity;
