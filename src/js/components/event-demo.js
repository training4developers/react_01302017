import React from 'react';

export class EventDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        };
    }

    onClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return <div>
            <div>{this.state.counter}</div>
            <button onClick={this.onClick}>Increment</button>
        </div>;
    }

}