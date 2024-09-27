import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';

const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isUserLoggedIn: true,
            };
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
            };
        case DISPLAY_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: true,
            };
        case HIDE_NOTIFICATION_DRAWER:
            return {
                ...state,
                isNotificationDrawerVisible: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
}

export default uiReducer;