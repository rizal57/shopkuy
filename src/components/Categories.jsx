import { useSelector } from "react-redux";
import InputSelect from "./InputSelect";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../features/products/productSlice";
import { setCategory } from "../features/products/filterSlice";

const Categories = () => {
  const { categories } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const handleChangeCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_LINK}/products/categories`
        );
        const data = await res.json();
        dispatch(getCategories(data));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-4 w-full pl-10">
      <h1 className="font-semibold text-lg text-slate-800 mb-3">Categories</h1>

      <InputSelect
        onChange={handleChangeCategory}
        name="category"
        title="All"
        value="all"
      />
      {categories.map((category) => (
        <InputSelect
          onChange={handleChangeCategory}
          key={category}
          name="category"
          value={category}
          title={category}
        />
      ))}
    </div>
  );
};
export default Categories;
