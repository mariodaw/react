import { useState } from "react";
// import React, { useEffect, useState } from "react";
const Counter = ({initialValue, step}) => {
   
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + step)
  };
  const decrement = () => {
    setCount(count - step)
  };

  
  return (
    <div>
      Counter: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default Counter;