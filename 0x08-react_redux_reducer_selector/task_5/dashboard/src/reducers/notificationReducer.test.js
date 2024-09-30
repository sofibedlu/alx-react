import { Map, fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
    const initialState = Map({
        notifications: Map(),
        filter: 'DEFAULT'
    });

    it('should return the initial state when no action is passed', () => {
        const state = notificationReducer(undefined, {});
        expect(state.toJS()).toEqual(initialState.toJS());
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "Notification 1" },
                { id: 2, type: "urgent", value: "Notification 2" },
                { id: 3, type: "default", value: "Notification 3" },
            ]
        };
        const normalizedData = notificationsNormalizer(action.data);
        const expectedState = initialState.set('notifications', fromJS(normalizedData.entities.notifications));
        const state = notificationReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should handle MARK_AS_READ', () => {
        const initialState = fromJS({
            notifications: {
                1: { id: 1, type: "default", value: "Notification 1", isRead: false },
                2: { id: 2, type: "urgent", value: "Notification 2", isRead: false },
                3: { id: 3, type: "default", value: "Notification 3", isRead: false },
            },
            filter: 'DEFAULT'
        });
        const action = {
            type: MARK_AS_READ,
            index: 2
        };
        const expectedState = initialState.setIn(['notifications', 2, 'isRead'], true);
        const state = notificationReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });

    it('should handle SET_TYPE_FILTER', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT'
        };
        const expectedState = initialState.set('filter', 'URGENT');
        const state = notificationReducer(initialState, action);
        expect(state.toJS()).toEqual(expectedState.toJS());
    });
});