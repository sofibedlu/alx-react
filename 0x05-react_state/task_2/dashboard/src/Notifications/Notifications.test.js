import { shallow } from "enzyme";
import Notifications from './Notifications';
import React from "react";
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { css } from "aphrodite";
import { styles } from "./Notifications";

const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
  ];

describe('Notifications component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three list items', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
        expect(wrapper.find(NotificationItem).length).toBe(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.contains("Here is the list of notifications")).toEqual(true);
    });

    it('first NotificationItem element renders the right html', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const firstNotificationItem = wrapper.find(NotificationItem).at(0);
        expect(firstNotificationItem.html()).toContain('New course available');
    });
    
    // Fixing tests to check for dynamic class names generated by Aphrodite
    it('displays the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div').at(0).prop('className')).toBe(css(styles.menuItem)); // Check Aphrodite class
    });

    it('does not display the div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('div').at(1).exists()).toBe(false);
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div').at(0).prop('className')).toBe(css(styles.menuItem)); // Check Aphrodite class
    });

    it('displays the div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('div').at(1).prop('className')).toBe(css(styles.notification)); // Check Aphrodite class
    });

    it('renders correctly if listNotifications is an empty array', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.find(NotificationItem).length).toBe(1);
        expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('No new notification for now');
    });

    it('renders correctly if listNotifications is not passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find(NotificationItem).length).toBe(1);
        expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('No new notification for now');
    });

    it('renders correctly when listNotifications is passed', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        expect(wrapper.find(NotificationItem).length).toBe(listNotifications.length);
    });

    it('does not display "Here is the list of notifications" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find(NotificationItem).at(0).prop('value')).toBe('No new notification for now');
    });

    it('calls console.log with the right message when markAsRead is called', () => {
        const wrapper = shallow(<Notifications />);
        const instance = wrapper.instance();
        const consoleSpy = jest.spyOn(console, 'log');
    
        instance.markAsRead(1);
        expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    
        consoleSpy.mockRestore();
    });

    
    it('does not rerender when updating props with the same list', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' }
        ];

        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'render');

        wrapper.setProps({ listNotifications });
        expect(instance.render).toHaveBeenCalledTimes(0);
    });

    it('rerenders when updating props with a longer list', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' }
        ];

        const longerListNotifications = [
            ...listNotifications,
            { id: 3, type: 'default', value: 'New notification' }
        ];

        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'render');

        wrapper.setProps({ listNotifications: longerListNotifications });
        expect(instance.render).toHaveBeenCalledTimes(1);
    });

    it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
        const handleDisplayDrawer = jest.fn();
        const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
        wrapper.find(`.${css(styles.menuItem)}`).simulate('click');
        expect(handleDisplayDrawer).toHaveBeenCalled();
    });
    
    it('verifies that clicking on the button calls handleHideDrawer', () => {
        const handleHideDrawer = jest.fn();
        const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
        wrapper.find('button').simulate('click');
        expect(handleHideDrawer).toHaveBeenCalled();
    });
    
});