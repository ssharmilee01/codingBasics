import React, { useState, useMemo } from "react";

function FibonacciComponent() {
  const [count, setCount] = useState(10);

  const fibonacciSequence = useMemo(() => {
    console.log("Calculating Fibonacci...");
    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
      console.log(sequence[i - 1], sequence[i - 2]);
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }, [count]);

  return (
    <div>
      <h3>Fibonacci Sequence (0 1 1 2 3 5 8...)</h3>
      <p>{fibonacciSequence.join(", ")}</p>
      <button onClick={() => setCount(count + 1)}>Add Number</button>
    </div>
  );
}

export default FibonacciComponent;
