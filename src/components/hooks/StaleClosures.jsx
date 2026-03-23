import { useEffect, useState } from "react";

function StaleClosureExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // BUG: 'count' here is always 0, captured from the first render
            console.log('Current count:', count);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default StaleClosureExample;