import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("Counter component has loaded!");
  }, []);

  const handleIncreament = () => {
    setCount((current) => (current += 1));
  };

  const hadleDecreament = () => {
    setCount((current) => (current -= 1));
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>{count}</div>
      <button onClick={handleIncreament}>+</button>
      <button onClick={hadleDecreament}>-</button>
    </div>
  );
};

export default Counter;
