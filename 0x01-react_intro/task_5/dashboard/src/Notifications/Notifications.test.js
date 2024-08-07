import { shallow } from "enzyme";
import Notifications from './Notifications';
import React from "react";

describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains("Here is the list of notifications")).toEqual(true);
    });
});