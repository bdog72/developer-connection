//
//
import React, { useState } from 'react';

import './CounterApp.css';

const CounterApp = () => {
  //
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  const increment = (step) => () => setCount(count + step);

  return (
    <>
      <div className="counter-app">
        <h1 className="value">{count}</h1>
        <div className="button-container">
          <button onClick={increment(1)}>Increment</button>
          <button onClick={increment(-1)}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
