import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';

const createAddAction = value => ({ type: 'ADD', value });

const createSubtractAction = value => ({
    type: 'SUBTRACT',
    value
});

const reducer = (state = 0, action) => {

    if (action === null || action === undefined) return state;

    console.log('state: ', state, 'action: ', action);
    switch(action.type) {
        case 'ADD':
            return state + action.value;
        case 'SUBTRACT':
            return state - action.value;
        default:
            return state;
    }
};


// const createStore = reducer => {
//     let currentState;
//     const fns = [];
//     return {
//         getState: () => currentState,
//         dispatch: action => {
//             currentState = reducer(currentState, action);
//             fns.forEach(fn => fn());
//         },
//         subscribe: fn => fns.push(fn),
//     };
// };

const appStore = createStore(reducer);

class Calculator extends React.Component {

    render() {
        return <div>
            <div>Current Value: {this.props.currentValue}</div>
            <button onClick={() => this.props.add(3)}>Add 3</button>
            <button onClick={() => this.props.subtract(5)}>Subtract 5</button>
        </div>;
    }
}

const mapStateToProps = appState => {

    // props passed into the component
    return {
        currentValue: appState
    };

};

const mapDispatchToProps = dispatch => {

    // props passed into the component
    return {
        add: (value) => dispatch(createAddAction(value)),
        subtract: (value) => dispatch(createSubtractAction(value)),
    };

};

// const connect = (mapStateToProps, mapDispatchToProps) => {
//     return (componentToWrap) => {
//         return class Container extends React.Component {
//             static propTypes = {
//                 store: React.PropTypes.object
//             };
//             componentDidMount() {
//                 this.props.store.subscribe(() => {
//                     this.forceUpdate();
//                 });
//                 this.props.store.dispatch({ type: 'NOOP' });
//             }
//             render() {
//                 const componentProps = {};
//                 Object.assign(componentProps, mapStateToProps(this.props.store.getState()));
//                 Object.assign(componentProps, mapDispatchToProps(this.props.store.dispatch));
//                 return React.createElement(componentToWrap, componentProps);
//             }
//         };
//     };
// };

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

ReactDOM.render(<CalculatorContainer store={appStore} />, document.querySelector('main'));
