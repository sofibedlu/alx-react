import { createSelector } from 'reselect';

const filterTypeSelected = (state) => state.notifications.filter;

const getNotifications = (state) => state.notifications.notifications;

const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter(notification => !notification.isRead)
);

export { filterTypeSelected, getNotifications, getUnreadNotifications };