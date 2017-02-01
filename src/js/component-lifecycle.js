import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {

    constructor(props) {
        super(props);
        console.log('called constructor');
    }

    componentWillMount() {
        console.log('called component will mount');
    }

    componentDidMount() {
        console.log('called component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('called component will receive props');
        console.log('current props:', this.props);
        console.log('next props:', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('called should component update');
        console.log('current props:', this.props);
        console.log('next props:', nextProps);
        return true;
        //return this.props.counter !== nextProps.counter;
    }

    componentWillUpdate() {
        console.log('called component will update');
    }

    componentDidUpdate() {
        console.log('called component did update');
    }

    render() {
        console.log('called render');
        return <span>Counter: {this.props.counter}</span>;

    }

    componentWillUnmount() {
        console.log('called component will unmount');
    }

}

    /*ReactDOM.render(<div>
        {x % 2 === 0 ? <Demo counter={x} /> : null}
    </div>, document.querySelector('main'));*/


for (let x=0; x<5; x++) {
    ReactDOM.render(<Demo counter={1} />, document.querySelector('main'));
}
