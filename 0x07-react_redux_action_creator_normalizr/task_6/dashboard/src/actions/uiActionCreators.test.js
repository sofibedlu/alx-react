import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

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