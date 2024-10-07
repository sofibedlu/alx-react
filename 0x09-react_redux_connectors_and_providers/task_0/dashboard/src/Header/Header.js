import React from 'react';
import { connect } from 'react-redux';
import holbertonLogo from '../assets/Holberton Logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { logout } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  header: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    padding: '10px',
    '@media (min-width: 900px)': {
      width: 'calc(100% - 300px)',
    },
  },
  logo: {
    '@media (max-width: 900px)': {
      width: '150px',
      height: '150px',
    },
  },
  title: {
    fontSize: '1.5rem',
    marginLeft: '10px',
    '@media (min-width: 900px)': {
      fontSize: '2.5rem',
      marginLeft: '20px',
    },
  },
  logOut: {
    position: 'absolute',
    right: '10px',
    cursor: 'pointer',
  },
});

class Header extends React.Component {
  render() {
    const { user, logout } = this.props;
    return (
      <>
        <div className={css(styles.header)}>
          <img src={holbertonLogo} alt="Holberton Logo" className={css(styles.logo)} />
          <h1 className={css(styles.title)}>School dashboard</h1>
        </div>
        {user.isLoggedIn && (
          <div id='logoutSection' className={css(styles.logOut)}>
            Welcome {user.email} (<a href="#" onClick={logout}>logout</a>)
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);