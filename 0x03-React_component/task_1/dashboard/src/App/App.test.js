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
});

describe('App Component when isLoggedIn is true', () => {
    it('does not include Login and includes CourseList', () => {
        // Render the App component with isLoggedIn set to true
        const wrapper = shallow(<App isLoggedIn={true} />);
        // Check that the Login component is not rendered
        expect(wrapper.find(Login).exists()).toBe(false);
        // Check that the CourseList component is rendered
        expect(wrapper.find(CourseList).exists()).toBe(true);
    });
});

describe('App Component lifecycles', () => {
    
    it('calls logOut and shows alert when ctrl+h is pressed', () => {
        const logOutMock = jest.fn();
        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
        const wrapper = mount(<App isLoggedIn={true} logOut={logOutMock} />);

        const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
        document.dispatchEvent(event);

        expect(logOutMock).toHaveBeenCalled();
        expect(alertMock).toHaveBeenCalledWith('Logging you out');

        alertMock.mockRestore();
    });
  });