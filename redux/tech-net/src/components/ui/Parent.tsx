import { useContext } from "react";
import Child from "./Child";
import { count_context } from "../../App";

export default function Parent() {
  const { count, setCount } = useContext(count_context);
  return (
    <>
      <div>Parent</div>

      <>{count}</>
      <Child></Child>
    </>
  );
}
