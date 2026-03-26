import { forwardRef, useRef } from 'react';
// ForwardRef allows you to pass a ref through a component to one of its children. This is useful when you want to access the DOM node of a child component from a parent component.
// In this example, we have a parent component `ForwardReff` that renders a child component `MyInput`. The parent component uses `useRef` to create a ref called `inputRef`, which is passed to the child component using `forwardRef`. When the button in the parent component is clicked, it accesses the DOM node of the input field in the child component and sets its value and focuses it.
// Since we are using React 19, we can directly use the `ref` prop on the child component without needing to wrap it with `forwardRef`. However, for demonstration purposes

// The child component wrapped with forwardRef
const MyInput = (props) => {
    return <input {...props} />;
};

// The parent component
function ForwardReff() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.value = "Hello, world!"; // Accesses the DOM node
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