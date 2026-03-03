import { useState } from "react";

const CountCharacter = () => {
  const compressString = (str) => {
    let count = 1;
    // let result;
    let result = [];
    for (let i = 0; i < str.length; i++) {
      if (i + 1 < str.length && str[i] === str[i + 1]) {
        count++;
      } else {
        // result += str[i] + count;
        result.push(str[i], count);
        count = 1;
      }
    }
    return result;
  };

  return <>{compressString("aannxxxxsssbbb")}</>;
};

export default CountCharacter;
