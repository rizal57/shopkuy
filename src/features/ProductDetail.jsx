import { useState } from "react";
import Button from "../components/Button";
import InputQuantity from "../components/InputQuantity";

const ProductDetail = ({ product }) => {
  const [isExpand, setIsExpand] = useState(false);

  const { image, title, description, price } = product;

  const displayDescription = isExpand
    ? description
    : description.split(" ").slice(0, 30).join(" ") + "...";

  const handleExpanded = () => {
    setIsExpand((expand) => !expand);
  };

  return (
    <div className="w-full px-2">
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <div className="w-[200px] md:w-[250px] h-[250px] md:h-[300px] mr-4">
          <img
            src={image}
            alt="Product Image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
            <h1 className="text-2xl font-bold text-teal-500">${price}</h1>
            <p className="text-base text-slate-700">{displayDescription}</p>
            <Button
              onClick={handleExpanded}
              bgColor="bg-none"
              textColor="text-teal-500 hover:text-teal-600"
              padding="p-0"
            >
              {isExpand ? "Show less" : "Show more"}
            </Button>
          </div>

          <div className="w-full flex items-center gap-2 justify-between">
            <InputQuantity />
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
