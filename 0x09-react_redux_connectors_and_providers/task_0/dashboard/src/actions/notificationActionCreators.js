import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, SET_LOADING_STATE } from './notificationActionTypes';
import { NotificationTypeFilters } from './notificationActionTypes';

export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index
});

export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter
});

export const fetchNotificationsSuccess = (data) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
});

export const setLoadingState = (isLoading) => ({
    type: SET_LOADING_STATE,
    isLoading,
});

export const setNotifications = (data) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data,
});

export const fetchNotifications = () => {
    return async (dispatch) => {
        dispatch(setLoadingState(true));
        try {
            const response = await fetch('/notifications.json');
            const data = await response.json();
            dispatch(setNotifications(data));
        } catch (error) {
            console.error('Error fetching notifications:', error);
        } finally {
            dispatch(setLoadingState(false));
        }
    };
};

export const boundFetchNotificationsSuccess = (data) => dispatch(fetchNotificationsSuccess(data));
export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (filter) => dispatch(setNotificationFilter(filter));
export const boundSetLoadingState = (isLoading) => dispatch(setLoadingState(isLoading));
export const boundSetNotifications = (data) => dispatch(setNotifications(data));
export const boundFetchNotifications = () => dispatch(fetchNotifications());