import { createSignal } from 'solid-js';

const CounterSolid = () => {
  const [count, setCount] = createSignal(0);

  const handleIncrement = () => {
    setCount(count() + 1);
  };
  const handleDecrement = () => {
    setCount(count() - 1);
  };

  return (
    <div>
      <h2>Counter: {count()}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterSolid;
