import * as notificationsData from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
})

const getAllNotificationsByUser = (userId) => {
    return notificationsData.default
        .filter(notification => notification.author.id === userId)
        .map(notification => notification.context);
}

const normalizedNotifications = normalize(notificationsData.default, [notification]);

export { normalizedNotifications, user, message, notification, };

export default getAllNotificationsByUser;