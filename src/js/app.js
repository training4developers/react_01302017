import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap-loader';
import '../css/styles.scss';

class HelloWorld extends React.Component {

    render() {
        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render( <HelloWorld /> , document.querySelector('main'));