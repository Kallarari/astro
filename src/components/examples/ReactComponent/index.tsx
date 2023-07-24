import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
