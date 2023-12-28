import CardProduct from "../components/CardProduct";

const ProductList = () => {
  return (
    <div className="pt-2 pb-24 px-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Product List</h1>
        <p className="text-slate-500 text-base mb-4">All Products</p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {Array.from({ length: 12 }, (_, i) => (
            <CardProduct key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
