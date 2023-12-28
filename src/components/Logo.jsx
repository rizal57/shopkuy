import { FaShopify } from "react-icons/fa";

const Logo = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-teal-500 flex items-center gap-2">
        Tokol
        <span>
          <FaShopify size={25} />
        </span>
      </h1>
    </div>
  );
};
export default Logo;
