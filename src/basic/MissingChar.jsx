import { useEffect, useState } from "react";

const MissingChar = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    findMissingNumbers([1, 9, 13, 4, 5, 6]);
  }, []);

  const findMissingNumbers = (arr) => {
    if (arr.length === 0) return;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const numberSet = new Set(arr);
    console.log(numberSet);
    const missing = [];

    for (let i = min; i <= max; i++) {
      if (!numberSet.has(i)) {
        missing.push(i);
      }
    }
    console.log("ARRAY", missing);
    setArr(missing);
  };

  return <>{arr}</>;
};

export default MissingChar;
