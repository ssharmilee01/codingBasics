import React, { useState } from "react";

const Sorting = () => {
    const [numbers, setNumbers] = useState([5, 2, 9, 1, 7]);
    const [string, setString] = useState(['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', "aanna"]);
    const [sorted, setSorted] = useState([]);
    const [sortedString, setSortedString] = useState([]);
    const [user, setUser] = useState([{ name: "John", age: 30, city: "New York" }, { name: "Hilton", age: 20, city: "Jaipur" }])

    const sortNumbers = () => {
        const sortedNumbers = [...numbers].sort((a, b) => b - a)
        setSorted(sortedNumbers);
    }

    const sortString = () => {
        const sortedStrings = [...string].sort((a, b) => a.localeCompare(b))
        setSortedString(sortedStrings)
    }

    return (
        <div>
            <h2>Original Numbers: {numbers.join(", ")}</h2>
            <button onClick={sortNumbers}>Sort Numbers</button>
            <h2>Sorted Number : {sorted.join(", ")}</h2>

            <h2>Original String : {string.join(", ")}</h2>
            <button onClick={sortString}>Sort String</button>
            <h2>Sorted String : {sortedString.join(", ")}</h2>

            <h2>Original User : {user.map((u) => `${u.name} (${u.age}, ${u.city})`).join(", ")}</h2>
            <p>Sorted User : {user.sort((b, a) => { return a.name.localeCompare(b.name) }).map((u) => u.name)}</p>

        </div>
    );
};

export default Sorting;