import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';

export default function Notifications() {

    const handleClick = () => {
        console.log('Close button has been clicked');
    };
    return (
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
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}