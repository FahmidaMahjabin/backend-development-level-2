import React, { useContext } from "react";
import { count_context } from "../../App";

export default function Child() {
  const { count, setCount } = useContext(count_context);
  return (
    <>
      <p>{count}</p>
      <button onClick={setCount(count + 1)}>click</button>
      <div>Child</div>
    </>
  );
}
