import { FaShopify } from "react-icons/fa";

const Logo = () => {
  return (
    <div>
      <h1 className="font-bold text-xl text-teal-500 flex items-center gap-2">
        Shopkuy
        <span>
          <FaShopify size={30} />
        </span>
      </h1>
    </div>
  );
};
export default Logo;
