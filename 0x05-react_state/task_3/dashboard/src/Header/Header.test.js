import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import AppContext, { defaultUser, defaultLogout } from '../App/AppContext';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogout }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img and h1 tag', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogout }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('does not create logoutSection when user is not logged in', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user: defaultUser, logOut: defaultLogout }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('creates logoutSection when user is logged in', () => {
    const user = { email: 'test@example.com', password: 'password', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: defaultLogout }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
  });

  it('calls logOut function when logout link is clicked', () => {
    const user = { email: 'test@example.com', password: 'password', isLoggedIn: true };
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});