import React from 'react';
import ReactDOM from 'react-dom';

class FirstDemo extends React.Component {

    constructor(props) {
        super(props);
        console.log('called first demo constructor');
    }

    componentDidMount() {
        console.log('called first demo component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('called first demo component will receive props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('called first demo should component update');
        return true;
    }

    render() {
        console.log('called first demo render');
        return <div>
            <div>First Demo Counter: {this.props.counter}</div>
            <SecondDemo counter={this.props.counter} />
        </div>;
    }

    componentDidUpdate() {
        console.log('called first demo component did update');
    }    
}

class SecondDemo extends React.Component {

    constructor(props) {
        super(props);
        console.log('called second demo constructor');
    }

    componentDidMount() {
        console.log('called second demo component did mount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('called second demo component will receive props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('called second demo should component update');
        return true;
    }

    render() {
        console.log('called second demo render');
        return <span>Second Demo Counter: {this.props.counter}</span>;

    }

    componentDidUpdate() {
        console.log('called second demo component did update');
    }

}


for (let x=0; x<2; x++) {
    ReactDOM.render(<FirstDemo counter={x} />, document.querySelector('main'));
}
