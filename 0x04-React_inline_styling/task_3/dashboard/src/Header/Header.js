import React from 'react';
import holbertonLogo from '../assets/Holberton Logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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
})

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={holbertonLogo} alt="Holberton Logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}
 
export default Header;