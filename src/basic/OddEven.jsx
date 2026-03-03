import { useState, useEffect } from "react";

const OddEven = () => {
  const [result, setResult] = useState({});
  useEffect(() => {
    oddOrEven();
  }, []);
  const oddOrEven = () => {
    const result1 = {};
    for (let i = 1; i <= 10; i++) {
      //   console.log("oddEven", i);

      result1[i] = i % 2 === 0 ? "Even " : "Odd";
    }
    console.log("oddEven", result1);
    setResult(result1);
  };

  //   {Object.entries(result).map(([key, value]) => (
  return (
    <>
      <div>Odd or Even</div>

      {Object.entries(result).map(([key, value]) => (
        <p>
          {console.log("result oddEven", key, value)}
          {key} : {value}
        </p>
      ))}
    </>
  );
};

export default OddEven;
