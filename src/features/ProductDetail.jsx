import { FaMinus, FaPlus } from "react-icons/fa";

const ProductDetail = () => {
  return (
    <div className="w-full px-2">
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div className="w-[200px] md:w-[250px] h-[250px] md:h-[300px] mr-4">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Product Image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-slate-800">
              Product title
            </h3>
            <h1 className="text-2xl font-bold text-teal-500">$150</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              illum, voluptatum quam soluta sapiente beatae molestias dicta
              minus sed aperiam. Laboriosam maxime.
            </p>
          </div>

          <div className="w-full flex items-center gap-2 justify-between">
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

            <button className="py-2 px-4 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 ease-out">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
