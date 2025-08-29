import React, { useState } from 'react';

const Counting=()=> {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1); // Directly using current state
  };

  return (
    <div>
      <h2>{count}Count:</h2>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default Counting;
