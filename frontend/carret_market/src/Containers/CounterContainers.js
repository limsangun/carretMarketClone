import React from "react";
import Counter from "../Component/Counter";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../module/Counter";

//const number = useSelector((state) => state.counter);

const CounterContainers = () => {  

    const number = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
      };
      const onDecrease = () => {
        dispatch(decrease());
      };
    
    return (
    <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        ></Counter>
    );
};

export default CounterContainers;