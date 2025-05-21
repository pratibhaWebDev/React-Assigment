import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Count: {count}</h1>

      {count === 10 && <p style={{ color: "green" }}>Goal Reached!</p>}

      <button onClick={increment} style={{ marginRight: 10 }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: 10 }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;
