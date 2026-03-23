// React.memo example in class component:          

import React, { Component } from "react";

class ChildComponent extends Component {
    render() {
        console.log("ChildComponent rendered");
        return <p>Count: {this.props.count}</p>;
    }
}

class ReactMemoClass extends Component {
    state = {
        count: 0,
        text: ""
    }
    render() {
        return (
            <>
                <ChildComponent count={this.state.count} />
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </>
        );
    }
}

export default ReactMemoClass;