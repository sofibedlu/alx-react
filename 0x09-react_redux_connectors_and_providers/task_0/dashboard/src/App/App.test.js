import React from 'react';
import { shallow, mount } from 'enzyme';
import App, { mapStateToProps } from './App';
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import Login from "../Login/Login";
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';  // For creating a mock store
import { fromJS } from 'immutable';

// Configure the mock store
const mockStore = configureMockStore([]);
const defaultStore = mockStore({
  isUserLoggedIn: false,  // Default mock state (logged out)
});

// Create a store for logged-in state
const loggedInStore = mockStore({
  isUserLoggedIn: true,  // Mock state for logged-in users
});

describe('App component', () => {    
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain the Notifications component', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('should contain the Header component', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('should contain the Login component when not logged in', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find(Login).exists()).toBe(true);
  });

  it('should contain the Footer component', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find(CourseList).exists()).toBe(false);
  });

  it('displays CourseList when isLoggedIn is true', () => {
    const wrapper = mount(
      <Provider store={loggedInStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });

  it('verifies that the default state for displayDrawer is false', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find(App).instance().state.displayDrawer).toBe(false);
  });

  it('verifies that after calling handleDisplayDrawer, the state should now be true', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    wrapper.find(App).instance().handleDisplayDrawer();
    expect(wrapper.find(App).instance().state.displayDrawer).toBe(true);
  });

  it('verifies that after calling handleHideDrawer, the state is updated to be false', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    wrapper.find(App).instance().handleDisplayDrawer(); // First set it to true
    wrapper.find(App).instance().handleHideDrawer();
    expect(wrapper.find(App).instance().state.displayDrawer).toBe(false);
  });

  it('verifies that markNotificationAsRead works as intended', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    const instance = wrapper.find(App).instance();
    const mockNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    instance.setState({ listNotifications: mockNotifications });

    instance.markNotificationAsRead(1);
    expect(instance.state.listNotifications).toEqual([
      { id: 2, type: 'urgent', value: 'New resume available' }
    ]);
  });
});

describe('App Component when isLoggedIn is true', () => {
  it('does not include Login and includes CourseList', () => {
    const wrapper = mount(
      <Provider store={loggedInStore}>
        <App />
      </Provider>
    );
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(CourseList).exists()).toBe(true);
  });
});

describe('App Component lifecycles', () => {
  it('calls logOut and shows alert when ctrl+h is pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = mount(
      <Provider store={loggedInStore}>
        <App />
      </Provider>
    );
    wrapper.find(App).instance().setState({ user: { isLoggedIn: true } });

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(wrapper.find(App).instance().state.user).toEqual({ email: '', password: '', isLoggedIn: false });
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  });

  it('verifies that the logIn function updates the state correctly', () => {
    const wrapper = mount(
      <Provider store={defaultStore}>
        <App />
      </Provider>
    );
    wrapper.find(App).instance().logIn('test@example.com', 'password');
    expect(wrapper.find(App).instance().state.user).toEqual({ email: 'test@example.com', password: 'password', isLoggedIn: true });
  });

  it('verifies that the logOut function updates the state correctly', () => {
    const wrapper = mount(
      <Provider store={loggedInStore}>
        <App />
      </Provider>
    );
    wrapper.find(App).instance().setState({ user: { email: 'test@example.com', password: 'password', isLoggedIn: true } });
    wrapper.find(App).instance().logOut();
    expect(wrapper.find(App).instance().state.user).toEqual({ email: '', password: '', isLoggedIn: false });
  });
});

describe('mapStateToProps', () => {
  it('returns the correct props from state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });

    const expectedProps = {
      isLoggedIn: true,
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
