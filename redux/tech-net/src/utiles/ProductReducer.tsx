import { createContext, useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import produtsJson from "../../products.json";

const productContext = createContext(null);
export const initialState = {
  loading: false,
  products: [],
  error: false,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case action.type === "fetching_start":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case action.type === "fetching_success":
      return {
        ...state,
        loading: true,
        products: action.payload,
        error: false,
      };
    case action.type === "fetching_error":
      return {
        ...state,
        loading: false,

        error: true,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductReducer({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "fetching_start" });
    fetch("../../products.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "fetching_success", payload: data }))
      .catch(() => {
        dispatch({ type: "fetching_error" });
      });
  }, []);
  const value = {
    state,
    dispatch,
  };
  console.log("children:", children);
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
}

export const useProductInReducer = () => {
  return useContext(productContext);
};
