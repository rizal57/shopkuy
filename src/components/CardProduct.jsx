import { AiFillStar } from "react-icons/ai";

const CardProduct = ({ openModal, product }) => {
  const { title, image, price } = product;
  return (
    <div
      onClick={openModal}
      className="w-full h-full border rounded-md cursor-pointer bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="p-2 h-52 mb-3 rounded-md overflow-hidden">
        <img
          src={image}
          alt="product"
          className="w-full h-full object-contain rounded-md group-hover:scale-95 transition-all duration-300 ease-out"
        />
      </div>

      <div className="px-2 pb-4">
        <h3 className="text-base font-semibold text-slate-800">
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </h3>
        <div className="flex items-center">
          <AiFillStar className="fill-yellow-500 text-base" />
          <AiFillStar className="fill-yellow-500 text-base" />
          <AiFillStar className="fill-yellow-500 text-base" />
          <AiFillStar className="fill-yellow-500 text-base" />
          <span className="ml-3 text-sm font-semibold text-slate-600">
            (123)
          </span>
        </div>
        <h1 className="font-bold text-teal-600 text-xl">${price}</h1>
      </div>
    </div>
  );
};
export default CardProduct;
