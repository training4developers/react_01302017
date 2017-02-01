import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { InputDemo } from '../src/js/components/input-demo'; 

jest.unmock('../src/js/components/input-demo');

describe('<InputDemo /> Mock DOM', () => {

    let component;
    let componentDOMNode;
    let message = 'Hello';

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<InputDemo message={message} />);
        componentDOMNode = TestUtils.findRenderedDOMComponentWithTag(component, 'form');
    });

    test('<InputDemo /> updates state and input with new value', () => {

        expect(component.props.message).toBe(message);
        expect(component.state.message).toBe(message);

        let inputDOMNode = componentDOMNode.querySelector('input');
        expect(inputDOMNode.value).toBe(message);

        let newMessage = 'Goodbye';
        inputDOMNode.value = newMessage;
        TestUtils.Simulate.change(inputDOMNode);

        expect(component.props.message).toBe(message);
        expect(component.state.message).toBe(newMessage);
        expect(componentDOMNode.querySelector('input').value).toBe(newMessage);

    });

});
