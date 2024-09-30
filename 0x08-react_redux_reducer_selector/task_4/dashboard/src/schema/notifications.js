import * as notificationsData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
})

const normalizedNotifications = normalize(notificationsData.default, [notification]);

export const notificationsNormalizer = (data) => normalize(data, [notification]);

const getAllNotificationsByUser = (userId) => {
    const { notifications, messages } = normalizedNotifications.entities;
    return Object.values(notifications).reduce((acc, notification) => {
        if (notification.author === userId) {
            const message = messages[notification.context];
            acc.push(message);
        }
        return acc;
    }, []);
}

export { normalizedNotifications, user, message, notification, };

export default getAllNotificationsByUser;