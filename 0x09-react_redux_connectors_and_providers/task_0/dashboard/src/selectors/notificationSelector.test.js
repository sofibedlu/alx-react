import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notification selectors', () => {
  const state = {
    notifications: {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
      ],
    },
  };

  it('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('getNotifications returns a list of the message entities within the reducer', () => {
    expect(getNotifications(state)).toEqual(state.notifications.notifications);
  });

  it('getUnreadNotifications returns a list of the unread message entities within the reducer', () => {
    const expectedUnreadNotifications = [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    ];
    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});