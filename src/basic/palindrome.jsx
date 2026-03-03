import React, { useState } from "react";

const PalindromeChecker = () => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const isPalindrome = (str) => {
    // Normalize the string: convert to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split("").reverse().join("");

    // Check if the original cleaned string is the same as the reversed one
    return cleanedStr === reversedStr;
  };

  const checkPalindrome = () => {
    if (inputText.trim().length === 0) {
      alert("Input cannot be empty");
      setResult("");
      return;
    }

    const palindrome = isPalindrome(inputText);

    if (palindrome) {
      setResult("Yes, it is a palindrome!");
    } else {
      setResult("Nope, not a palindrome!");
    }
  };

  return (
    <div>
      <h2>Is It A Palindrome?</h2>
      <input
        type="text"
        placeholder="Enter a word or phrase"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update state on change
      />
      <button onClick={checkPalindrome}>Check</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default PalindromeChecker;
