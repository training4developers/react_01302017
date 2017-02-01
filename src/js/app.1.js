import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colors = ['green','yellow','black','red','white','blue'];


class ColorToolContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colors: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(cars => {
                this.setState({
                    colors: cars.map(({color}) => color)
                });
            });
    }

    render() {
        return <ColorTool
            data-test="test-value"
            myColors={this.state.colors} />;
    }
}



//ReactDOM.render(ColorToolContainer, document.querySelector('main'));



