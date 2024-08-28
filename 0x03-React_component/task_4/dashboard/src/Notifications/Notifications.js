import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

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
                <div className='menuItem'>Your notifications</div>
                {displayDrawer && (
                    <div className='Notifications'>
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