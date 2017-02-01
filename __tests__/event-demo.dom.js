import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { EventDemo } from '../src/js/components/event-demo';

jest.unmock('../src/js/components/event-demo');

describe('<EventDemo /> Mock DOM', () => {

    let component;
    let componentDOMNode;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<EventDemo />);
        componentDOMNode = TestUtils.scryRenderedDOMComponentsWithTag(component, 'div')[0];
    });

    test('<EventDemo /> state should update when button is clicked', () => {

        expect(component.state.counter).toBe(1);
        expect(componentDOMNode.children[0].textContent).toBe('1');

        TestUtils.Simulate.click(componentDOMNode.children[1]);

        expect(component.state.counter).toBe(2);
        expect(componentDOMNode.children[0].textContent).toBe('2');

    });

});
