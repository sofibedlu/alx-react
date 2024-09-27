import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

describe('uiReducer', () => {
    it('should return the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('should return the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(state).toEqual(initialState);
    });

    it('should change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true,
        });
    });
});