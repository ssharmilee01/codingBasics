// write a code snippet for a React component that demonstrates the use of React.memo for optimizing performance by preventing unnecessary re-renders.
import React, { useState } from "react";

const ChildComponent = React.memo(({ count }) => {
    console.log("ChildComponent rendered");
    return <p>Count: {count}</p>;
});
/*
React.memo does not use a dependency array like useEffect or useCallback.
It performs a shallow comparison of props by default and only re-renders the component if the props change.
*/
// can we use useMemo,useCallback and React.memo is class components? No, useMemo and useCallback are hooks that can only be used in functional components. React.memo is a higher-order component that can be used with both functional and class components to optimize performance by preventing unnecessary re-renders. However, the use of React.memo is more common in functional components, while class components typically rely on shouldComponentUpdate for similar optimization.
const ReactMemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <>
            {/* <input value={text} onChange={(e) => setText(e.target.value)} /> */}
            <ChildComponent count={count} />
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
};

export default ReactMemo;