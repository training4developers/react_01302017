import React from 'react';
import { shallow } from 'enzyme';
import { RenderDemo } from '../src/js/components/render-demo';

jest.unmock('../src/js/components/render-demo');

describe('<RenderDemo /> No DOM', () => {

    let component;

    beforeEach(() => {
        component = shallow(<RenderDemo />);
    });

    test('<RenderDemo /> renders', () => {
        expect(component.props().children).toBe('Hello World!!');
    });

});