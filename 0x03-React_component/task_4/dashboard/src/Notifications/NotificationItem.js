import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type, value, html, markAsRead }) => {
  return (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
      {html ? (
        <div dangerouslySetInnerHTML={ html } />
      ) : (
        value
      )}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  markAsRead: PropTypes.func.isRequired
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
  markAsRead: () => {},
  id: 0
};

export default NotificationItem;