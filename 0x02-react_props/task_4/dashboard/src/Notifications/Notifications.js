import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer }) {

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
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type='default' value='New course available' />
                        <NotificationItem type='urgent' value='New resume available' />
                        <NotificationItem type='urgent' html={{ __html: getLatestNotification()}} />
                    </ul>
                </div>
            )}
        </>
    );
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
    displayDrawer: false
}