import React, { useEffect, useLayoutEffect, useRef } from 'react';

function Lifecycle() {
    const ref = useRef();

    useEffect(() => {
        console.log('useEffect: Runs after DOM paint');
    });

    useLayoutEffect(() => {
        console.log('useLayoutEffect: Runs before DOM paint');
        console.log('Element width:', ref.current.offsetWidth);
    });

    const handleClick = () => {
        console.log('Clicked! Focusing element.');
        ref.current.style.backgroundColor = 'yellow';
        ref.current.focus()

    }
    return <><button ref={ref} onClick={handleClick}>Hello</button></>;
}

export default Lifecycle;


