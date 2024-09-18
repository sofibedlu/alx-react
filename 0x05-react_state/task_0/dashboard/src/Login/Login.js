import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginBody: {
    flex: '1',
    fontSize: '2rem',
    padding: '10vmin',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '10px',
    '@media (min-width: 900px)': {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '0',
    },
  },
  formpad: {
    margin: '8px',
    '@media (min-width: 900px)': {
      padding: '8px',
    },
  },
  formbutton: {
    padding: '8px',
    marginLeft: '12px',
    '@media (min-width: 900px)': {
      marginTop: '0',
      marginLeft: '10px',
    },
  },
});

function Login() {
  return (
    <>
      <div className={css(styles.loginBody)}>
        <p>Login to access the full dashboard</p>
        <form action="" className={css(styles.form)}>
          <div className={css(styles.formGroup)}>
            <label htmlFor="email" className={css(styles.formpad)}>Email: </label>
            <input type="email" id="email" className={css(styles.formpad)}></input>
          </div>
          <div className={css(styles.formGroup)}>
            <label htmlFor="password" className={css(styles.formpad)}>Password: </label>
            <input type="password" id="password" className={css(styles.formpad)}></input>
          </div>
          <button type="submit" className={css(styles.formbutton)}>OK</button>
        </form>
      </div>
    </>
  );
}

export default Login;