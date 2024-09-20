import React from "react";
import { shallow, mount } from "enzyme";
import App from './App';
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";

describe('App component', () => {    
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('should contain the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    it('should contain the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('should contain the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('should contain the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('Footer').length).toBe(1);
    });
    it('does not display CourseList when isLoggedIn is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(CourseList).exists()).toBe(false);
    });

    it('verifies that the default state for displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('displayDrawer')).toBe(false);
    });

    it('verifies that after calling handleDisplayDrawer, the state should now be true', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toBe(true);
    });

    it('verifies that after calling handleHideDrawer, the state is updated to be false', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer(); // First set it to true
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toBe(false);
    });
});

describe('App Component when isLoggedIn is true', () => {
    it('does not include Login and includes CourseList', () => {
        const wrapper = shallow(<App />);
        wrapper.setState({ user: { isLoggedIn: true } });
        expect(wrapper.find(Login).exists()).toBe(false);
        expect(wrapper.find(CourseList).exists()).toBe(true);
    });
});

describe('App Component lifecycles', () => {
    
    it('calls logOut and shows alert when ctrl+h is pressed', () => {
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const wrapper = mount(<App />);
        wrapper.setState({ user: { isLoggedIn: true } });

        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
        document.dispatchEvent(event);

        expect(wrapper.state('user')).toEqual({ email: '', password: '', isLoggedIn: false });
        expect(alertMock).toHaveBeenCalledWith('Logging you out');

        alertMock.mockRestore();
    });

    it('verifies that the logIn function updates the state correctly', () => {
        const wrapper = mount(<App />);
        wrapper.instance().logIn('test@example.com', 'password');
        expect(wrapper.state('user')).toEqual({ email: 'test@example.com', password: 'password', isLoggedIn: true });
    });

    it('verifies that the logOut function updates the state correctly', () => {
        const wrapper = mount(<App />);
        wrapper.setState({ user: { email: 'test@example.com', password: 'password', isLoggedIn: true } });
        wrapper.instance().logOut();
        expect(wrapper.state('user')).toEqual({ email: '', password: '', isLoggedIn: false });
    });
  });