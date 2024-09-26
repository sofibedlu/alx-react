import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
//import fetchMock from 'fetch-mock';
import fetchMock from 'fetch-mock';
import { loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

describe('uiActionCreators', () => {
    it('login action creator returns the correct action', () => {
        const email = 'test@example.com';
        const password = 'password';
        const expectedAction = {
            type: LOGIN,
            user: { email, password }
        };
        expect(login(email, password)).toEqual(expectedAction);
    });

    it('logout action creator returns the correct action', () => {
        const expectedAction = {
            type: LOGOUT
        };
        expect(logout()).toEqual(expectedAction);
    });

    it('displayNotificationDrawer action creator returns the correct action', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER
        };
        expect(displayNotificationDrawer()).toEqual(expectedAction);
    });

    it('hideNotificationDrawer action creator returns the correct action', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER
        };
        expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when API returns the right response', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when API query fails', () => {
    fetchMock.getOnce('/dist/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
