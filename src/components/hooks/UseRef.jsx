import { useEffect, useRef } from "react";

const UseRef = () => {

    const inpRef = useRef();

    return (
        <>
            <input ref={inpRef}></input>
            <button onClick={() => inpRef.current.focus()}>Focus Input</button>
        </>
    );
}

export default UseRef;