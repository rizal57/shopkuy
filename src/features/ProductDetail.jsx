import Button from "../components/Button";
import InputQuantity from "../components/InputQuantity";

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
        <div className="flex-1 flex-col justify-between">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-slate-800">
              Product title
            </h3>
            <h1 className="text-2xl font-bold text-teal-500">$150</h1>
            <p className="text-base text-slate-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
              illum, voluptatum quam soluta sapiente beatae molestias dicta
              minus sed aperiam. Laboriosam maxime.
            </p>
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
