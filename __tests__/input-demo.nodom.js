import React from 'react';
import { shallow } from 'enzyme';
import { InputDemo } from '../src/js/components/input-demo';

jest.unmock('../src/js/components/input-demo');

describe('<InputDemo /> No DOM', () => {

    const message = 'Original Value!';
    const newMessage = 'New Value!';

    let component;

    beforeEach(() => {
        component = shallow(<InputDemo message={message} />);
    });

    it('<InputDemo /> updates state and input with new value', () => {

        expect(component.state().message).toBe(message);
        expect(component.childAt(0).childAt(1).props().value).toBe(message);

        component.find('input').simulate('change', { currentTarget: { name: 'message', value: newMessage }});
        component.update();

        expect(component.state().message).toBe(newMessage);
        expect(component.childAt(0).childAt(1).props().value).toBe(newMessage);

    });

});
