import React from 'react';
import { connect } from 'react-redux';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    fontSize: '1rem',
    fontStyle: 'italic',
    padding: '2rem',
    position: 'relative',
    bottom: '0',
    width: '100%',
    boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid red',
  }
});

function Footer({ user }) {
  return (
    <div className={css(styles.footer)}>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user.isLoggedIn && (
        <p>
          <a href='#'>Contact us</a>
        </p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

export default connect(mapStateToProps)(Footer);