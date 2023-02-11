import React from "react";

export const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => decrement(1)}>-</button>
    </div>
  );
};
