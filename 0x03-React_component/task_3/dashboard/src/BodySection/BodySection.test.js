import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe('BodySection', () => {
    it('renders correctly with children and title', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );
        const h2Element = wrapper.find('h2');
        const pElement = wrapper.find('p');

        expect(h2Element).toHaveLength(1);
        expect(h2Element.text()).toEqual('test title');
        expect(pElement).toHaveLength(1);
        expect(pElement.text()).toEqual('test children node');
    });
});