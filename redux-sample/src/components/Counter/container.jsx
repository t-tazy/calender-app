import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/count/actions";
import { Counter } from "./presentation";

export const ContainerCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // 関数として渡したいため、コールバック関数
  return (
    <Counter
      count={count}
      increment={(payload) => dispatch(increment(payload))}
      decrement={(payload) => dispatch(decrement(payload))}
    />
  );
};
