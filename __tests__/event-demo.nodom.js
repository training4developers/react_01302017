import React from 'react';
import { shallow } from 'enzyme';
import { EventDemo } from '../src/js/components/event-demo';

jest.unmock('../src/js/components/event-demo');

describe('<EventDemo /> No DOM', () => {

    let component;

    beforeEach(() => {
        component = shallow(<EventDemo />);
    });

    it('<EventDemo /> state should update when button is clicked', () => {

        expect(component.state().counter).toBe(1);
        expect(component.childAt(0).props().children).toBe(1);

        component.find('button').simulate('click');

        component.update();
        expect(component.state().counter).toBe(2);
        expect(component.childAt(0).props().children).toBe(2);

    });

});
