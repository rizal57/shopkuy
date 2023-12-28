import { FaShopify } from "react-icons/fa";

const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-teal-500">
        <h1 className="font-bold text-lg md:text-xl hidden md:block">
          Shopkuy
        </h1>
        <span>
          <FaShopify className="text-[32px] md:text-[36px]" />
        </span>
      </div>
    </>
  );
};
export default Logo;
