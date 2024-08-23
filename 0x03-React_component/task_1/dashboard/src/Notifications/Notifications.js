import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {

    const handleClick = () => {
        console.log('Close button has been clicked');
    };
    return (
        <>
            <div className='menuItem'>Your notifications</div>
            {displayDrawer && (
                <div className='Notifications'>
                    <button onClick={handleClick} style={{
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
                                    type={notification.type}
                                    value={notification.value}
                                    html={notification.html}
                                />
                            ))
                        )}
                    </ul>
                </div>
            )}
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}
