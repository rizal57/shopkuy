import { useState } from "react";
import CardProduct from "../components/CardProduct";

import { FaFilter } from "react-icons/fa";
import Modal from "../components/Modal";
import Categories from "../components/Categories";
import Price from "../components/Price";
import ProductDetail from "./ProductDetail";
import { useEffect } from "react";
import { data } from "autoprefixer";
import Loader from "../components/Loader";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [openModalFilter, setOpenModalFilter] = useState(false);

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
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts(data);
  }, []);

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

      <div className="pt-2 pb-24 px-2 md:px-4 lg:px-8">
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

          <p className="text-slate-500 text-base mb-4">All Products</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-2 lg:gap-3">
            {products.length
              ? products.map((product) => (
                  <CardProduct
                    key={product.id}
                    product={product}
                    openModal={() => handleOpenModalProduct(product)}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
