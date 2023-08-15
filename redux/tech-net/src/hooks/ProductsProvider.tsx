import { useState, useEffect, createContext, useContext } from "react";
// import productData from "../../products.json";
const ProductProvider = createContext([]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductsProvider({ children }) {
  console.log("chilren:", children);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../../products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("data from fetch:", data);
        return setData(data);
      });
  }, []);

  return (
    <ProductProvider.Provider value={data}>{children}</ProductProvider.Provider>
  );
}

export const useProducts = () => {
  return useContext(ProductProvider);
};
