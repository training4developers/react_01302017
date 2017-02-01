import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { RenderDemo } from '../src/js/components/render-demo';
import renderer from 'react-test-renderer';

jest.unmock('../src/js/components/render-demo');

describe('<RenderDemo /> Mock DOM', () => {

    let component;
    let componentDOMNode;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument(<RenderDemo />);
        componentDOMNode = TestUtils.findRenderedDOMComponentWithTag(component, 'h1');
    });

    test('<RenderDemo /> renders', () => {
        expect(componentDOMNode.textContent).toBe('Hello World!');
    });
	
});

describe('<RenderDemo /> Mock DOM', () => {

    test('<RenderDemo /> snapshot', () => {

        const tree = renderer.create(<RenderDemo />).toJSON();
        expect(tree).toMatchSnapshot();

    });


});