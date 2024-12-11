import { useState } from "react";
// import React, { useEffect, useState } from "react";
const Counter = ({initialValue}) => {
   
  const [count, setCount] = useState(initialValue);
  const increment = () => {
    setCount(count + 1)
  };
  const decrement = () => {
    setCount(count - 1)
  };
//   useEffect(() => {
//     setCount(count+1)
//   }, [increment])
  
  return (
    <div>
      Counter: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
export default Counter;