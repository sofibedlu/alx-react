import React, { PureComponent } from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

// Define keyframes for animations
const opacityChange = {
    '0%': { opacity: 0.5 },
    '100%': { opacity: 1 }
};

const bounce = {
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-5px)' },
    '100%': { transform: 'translateY(5px)' }
};

export const styles = StyleSheet.create({
    notification: {
        border: '1px dashed red',
        padding: '5px',
        position: 'absolute',
        top: '40px',
        right: '20px',
        fontSize: '3vmin',
        '@media (max-width: 900px)': {
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            padding: 0,
            fontSize: '20px',
            backgroundColor: 'white',
            zIndex: 1000,
        },
    },
    menuItem: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        fontWeight: '600',
        backgroundColor: '#fff8f8',
        cursor: 'pointer',
        ':hover': {
            animationName: [opacityChange, bounce],
            animationDuration: '1s, 0.5s',
            animationIterationCount: '3, 3',
        },
    },
    ul: {
        padding: 0,
        listStyle: 'none',
    },
    p: {
        fontSize: '20px',
    }
})

class Notifications extends PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Close button has been clicked');
    }

    render() {
        const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

        return (
            <>
                <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
                    Your notifications
                </div>
                {displayDrawer && (
                    <div className={css(styles.notification)}>
                        <button onClick={handleHideDrawer} style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer'
                        }} aria-label='Close'>
                        <img src={closeIcon} alt='close' style={{width: '30px', height: '30px'}} />
                        </button>
                        {listNotifications.length > 0 && <p className={css(styles.p)}>Here is the list of notifications</p>}
                        <ul className={css(styles.ul)}>
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
                                        markAsRead={markNotificationAsRead}
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
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {}
}

export default Notifications;