import { useState } from "react";
import CardProduct from "../../components/CardProduct";

import { FaFilter } from "react-icons/fa";
import Modal from "../../components/Modal";
import Categories from "../../components/Categories";
import Price from "../../components/Price";
import ProductDetail from "./ProductDetail";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "./productSlice";
import { useMemo } from "react";

const ProductList = () => {
  const [productSelected, setProductSelected] = useState(null);

  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [openModalFilter, setOpenModalFilter] = useState(false);

  const { productItems, isLoading, error } = useSelector(
    (state) => state.product
  );

  const {
    category: selectedCategory,
    search,
    shortBy,
  } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const handleOpenModalProduct = (product) => {
    setOpenModalProduct(true);
    setProductSelected(product);
  };

  const handleOpenModalFilter = () => {
    setOpenModalFilter(true);
  };

  const handleCloseModalFilter = () => {
    setOpenModalFilter(false);
  };

  const handleCloseModalProduct = () => {
    setOpenModalProduct(false);
  };

  useEffect(() => {
    // Fetch products
    const fetchProducts = async () => {
      dispatch(getProductsStart());
      try {
        const res = await fetch(`${import.meta.env.VITE_API_LINK}/products`);
        const data = await res.json();
        dispatch(getProductsSuccess(data));
      } catch (error) {
        dispatch(getProductsFailure(error.message));
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const filtered = productItems.filter((product) => {
      const matchedSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchedCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchedSearch && matchedCategory;
    });

    switch (shortBy) {
      case "a-z":
        return filtered.slice().short((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return filtered.slice().short((a, b) => b.title.localeCompare(a.title));
      case "relevance":
      default:
        return filtered;
    }
  }, [productItems, selectedCategory, search, shortBy]);

  if (isLoading) return <Loader />;

  if (error) return <p className="text-red-500 italic p-4">{error}</p>;

  return (
    <>
      {openModalProduct ? (
        <Modal closeModal={handleCloseModalProduct}>
          <ProductDetail product={productSelected} />
        </Modal>
      ) : null}

      {openModalFilter ? (
        <Modal closeModal={handleCloseModalFilter}>
          <Categories />
          <Price />
        </Modal>
      ) : null}

      <div className="pt-2 pb-24 px-2 md:px-4">
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Product List
              </h1>
            </div>
            {/* filter button */}
            <div className="block md:hidden">
              <button
                onClick={handleOpenModalFilter}
                className="text-teal-500 hover:text-teal-600 transition-all duration-300 ease-out text-xl p-2"
              >
                <FaFilter />
              </button>
            </div>
          </div>

          <p className="text-slate-500 text-base mb-4 capitalize">
            {selectedCategory === "all" ? "All Products" : selectedCategory}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-3">
            {filteredProducts.map((product) => (
              <CardProduct
                key={product.id}
                product={product}
                openModal={() => handleOpenModalProduct(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
