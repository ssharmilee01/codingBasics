import { useState } from "react"
import { usePrevious } from "./usePrevious"

const Counter = () => {
    const [count, setCount] = useState(0)
    const prevCount = usePrevious(count)
    return (
        <>
            <h1>Now : {count} </h1>
            <h2>Before : {prevCount !== undefined ? prevCount : 0} </h2>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
        </>)
}

export default Counter;