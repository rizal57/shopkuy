import InputSelect from "./InputSelect";

const Categories = () => {
  return (
    <div className="mb-4 w-full pl-10">
      <h1 className="font-semibold text-lg text-slate-800 mb-3">Categories</h1>

      <InputSelect name="category" title="All" />
      <InputSelect name="category" title="Men's" />
      <InputSelect name="category" title="Woman's" />
    </div>
  );
};
export default Categories;
