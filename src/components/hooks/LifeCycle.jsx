import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Lifecycle() {
    const ref = useRef();
    const boxRef = useRef();
    const [width, setWidth] = useState(0);


    useEffect(() => {
        console.log('useEffect: Runs after DOM paint');
    });

    useLayoutEffect(() => {
        console.log('useLayoutEffect: Runs before DOM paint');
        console.log('Element width:', ref.current.offsetWidth);
        if (boxRef.current) {
            setWidth(boxRef.current.getBoundingClientRect().width);
        }
    }, []);

    const handleClick = () => {
        console.log('Clicked! Focusing element.');
        ref.current.style.backgroundColor = 'yellow';
        ref.current.focus()

    }
    return (
        <>
            <div ref={boxRef} style={{ width: '50%' }}>Width: {width}px</div>
            <button ref={ref} onClick={handleClick}>Hello</button>
        </>
    );
}

export default Lifecycle;


