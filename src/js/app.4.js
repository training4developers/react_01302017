import React from 'react';
import ReactDOM from 'react-dom';


function Person(fn, ln) {
    this.fn = fn;
    this.ln = ln;
}

Person.create = function(name) {
    const nameParts = name.split(' ');
    return new Person(nameParts[0], nameParts[1]);
};

Person.prototype.getFullName = function() {
    return this.fn + ' ' + this.ln;
}

var p = new Person('Bob', 'Smith');

class Person {

    static create(name) {
        const nameParts = name.split(' ');
        return new Person(nameParts[0], nameParts[1]);
    }

    constructor(fn, ln) {
        this.fn = fn;
        this.ln = ln;
    }

    getFullName() {
        return this.fn + ' ' + this.ln;
    }
}

var p = Person.create('Bob Smith');


const Demo = props => {

    const onClick = () => {
        //props.delete(props.id);
        console.log('was clicked');
    };


    return <span>{props.counter} <button onClick={onClick}>Click Me!</button></span>;
}


for (let x=0; x<2; x++) {
    ReactDOM.render(<Demo counter={x} />, document.querySelector('main'));
}
