import { shallow } from "enzyme";
import Notifications from './Notifications';
import React from "react";
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.contains("Here is the list of notifications")).toEqual(true);
    });

    it('first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const firstNotificationItem = wrapper.find(NotificationItem).at(0);
        expect(firstNotificationItem.html()).toContain('New course available');
    });
    
    it('displays the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('does not display the div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications').exists()).toBe(false);
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem').exists()).toBe(true);
    });

    it('displays the div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications').exists()).toBe(true);
    });
});