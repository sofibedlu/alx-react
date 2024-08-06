import { shallow } from "enzyme";
import Notifications from './Notifications';
import React from "react";
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains("Here is the list of notifications")).toEqual(true);
    });

    it('first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications />);
        const firstNotificationItem = wrapper.find(NotificationItem).at(0);
        expect(firstNotificationItem.html()).toContain('New course available');
    });
});