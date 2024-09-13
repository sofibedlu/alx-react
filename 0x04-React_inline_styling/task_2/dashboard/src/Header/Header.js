import React from 'react';
import holbertonLogo from '../assets/Holberton Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: 'calc(100% - 300px)',
  }
})

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holbertonLogo} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;