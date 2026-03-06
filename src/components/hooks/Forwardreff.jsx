import { forwardRef, useRef } from 'react';

// The child component wrapped with forwardRef
const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});

// The parent component
function ForwardReff() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus(); // Accesses the DOM node
    }

    return (
        <>
            <MyInput ref={inputRef} placeholder="Type here..." />
            <button onClick={handleClick}>Focus Input</button>
        </>
    );
}

export default ForwardReff;