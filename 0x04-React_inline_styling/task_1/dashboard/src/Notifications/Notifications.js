import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

export const styles = StyleSheet.create({
    notification: {
        border: '1px dashed red',
        padding: '5px',
        position: 'absolute',
        top: '40px',
        right: '20px',
        fontSize: '3vmin',
    },

    menuItem: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontWeight: '600',
    },

    defaultNotification: {
        color: 'blue',
    },

    urgentNotification: {
        color: 'red',
    }
})

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    handleClick() {
        console.log('Close button has been clicked');
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;

        return (
            <>
                <div className={css(styles.menuItem)}>Your notifications</div>
                {displayDrawer && (
                    <div className={css(styles.notification)}>
                        <button onClick={this.handleClick} style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer'
                        }} aria-label='Close'>
                        <img src={closeIcon} alt='close' style={{width: '30px', height: '30px'}} />
                        </button>
                        {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
                        <ul>
                            {listNotifications.length === 0 ? (
                                <NotificationItem type='default' value='No new notification for now' />
                            ) : (
                                listNotifications.map(notification => (
                                    <NotificationItem
                                        key={notification.id}
                                        id={notification.id}
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                        markAsRead={this.markAsRead}
                                        notifyType={css(notification.type === 'default' ?  styles.defaultNotification : styles.urgentNotification)}
                                    />
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;