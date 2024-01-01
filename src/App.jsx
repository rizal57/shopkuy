import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductList from "./features/products/ProductList";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full relative">
        <Navbar />
        <ProductList />
        <Footer />
      </main>
    </div>
  );
};
export default App;
