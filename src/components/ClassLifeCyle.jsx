import { Component } from "react";

class ClassLifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            timer: null,
            hasError: false
        }
        console.log("1. Constructor: Component is being initialized.");
    }

    static getDerivedStateFromProps(props, state) {
        if (props.forceReset && state.count !== 0) {
            console.log(" getDerivedStateFromProps: Force reset triggered, resetting count to 0.");
            return { count: 0 }
        }
        return null
    }
    componentDidMount() {
        console.log("3. ComponentDidMount: Component has been mounted to the DOM.");
        // In React, components may re-render, but componentDidMount only runs once after initial mount.
        // To prevent multiple mounts, ensure you don't unmount/remount this component unnecessarily.
        // No extra code is needed here to prevent multiple mounts.

        // Stop the interval after 10 seconds
        setTimeout(() => {
            clearInterval(this.timerId);
            console.log("Interval stopped after 10 seconds.");
        }, 10000);
        this.timerId = setInterval(() => { this.setState({ count: this.state.count + 1 }) }, 1000);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate: Deciding whether to re-render.");
        return nextState.count % 2 === 0
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // Example: Capture scroll position before the list grows
        const scrollPosition = window.scrollY;
        console.log("getSnapshotBeforeUpdate: Captured scroll position:", scrollPosition);
        return scrollPosition;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count) {
            console.log("4. ComponentDidUpdate: Count has been updated:", this.state.count);
            console.log("Previous State:", prevState);
            console.log("Current State:", this.state)
        }
    }

    componentWillUnmount() {
        console.log("5. componentWillUnmount: Cleaning up interval");
        clearInterval(this.timerId);
    }

    static getDerivedStateFromError(error) {
        console.log("getDerivedStateFromError: An error has been caught:", error);
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("componentDidCatch: Logging error details:", error, info);
    }

    render() {
        console.log("2. Render: Component is rendering.")

        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
        }

        return <>
            <h1>Class Life Cycle</h1>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Count (Evens only): {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        </>
    }
}

export default ClassLifeCycle;