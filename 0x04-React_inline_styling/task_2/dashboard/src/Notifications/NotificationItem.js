import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { id, type, value, html, markAsRead} = this.props;

    // Apply conditional Aphrodite styling based on the notification type
    const notificationType = type === 'urgent' ? styles.urgent : styles.default;
    return (
      <li data-notification-type={type} onClick={() => markAsRead(id)} className={css(notificationType)}>
        {html ? (
          <div dangerouslySetInnerHTML={html} />
        ) : (
          value
        )}
      </li>
    );
  }
}

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

// Define Aphrodite styles
const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  },
})

export default NotificationItem;