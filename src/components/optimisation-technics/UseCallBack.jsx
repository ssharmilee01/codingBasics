import React, { useCallback, useState } from "react"

const ChildComponent = React.memo(({ onIncrement }) => {
    console.log("ChildComponent rendered")
    return <button onClick={onIncrement}>+1</button>
})


const UseCallBack = () => {
    const [count, setCount] = useState(0)
    const [bool, setBool] = useState(false)

    const handle = useCallback(() => {
        // if (bool) {
        setCount(c => c + 1)
        // } else {

        // }
        // make dependency array empty to avoid re-rendering of child component when bool changes.Too rerender concept put bool inside []
    }, [])

    return <><ChildComponent onIncrement={handle} />{count}</>
}

export default UseCallBack