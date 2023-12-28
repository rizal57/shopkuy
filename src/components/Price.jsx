import InputSelect from "./InputSelect";

const Price = () => {
  return (
    <div className="w-full pl-10">
      <h1 className="font-semibold text-lg text-slate-800 mb-3">Price</h1>

      <InputSelect name="price" title="All" />
      <InputSelect name="price" title="$0 - $50" />
      <InputSelect name="price" title="$50 - $100" />
      <InputSelect name="price" title="$100 - $150" />
      <InputSelect name="price" title="Over $150" />
    </div>
  );
};
export default Price;
