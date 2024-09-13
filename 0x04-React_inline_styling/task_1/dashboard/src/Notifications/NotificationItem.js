import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { id, type, value, html, markAsRead, notifyType } = this.props;
    return (
      <li data-notification-type={type} onClick={() => markAsRead(id)} className={notifyType}>
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

export default NotificationItem;