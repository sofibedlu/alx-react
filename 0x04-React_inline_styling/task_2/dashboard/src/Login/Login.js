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
    alignItems: 'center',
  },
  formpad: {
    padding: '8px',
  },
  formbutton: {
    marginLeft: '10px',
    padding: '8px',
  }
})

function Login() {
  return (
    <>
      <div className={css(styles.loginBody)}>
        <p>Login to access the full dashboard</p>
        <form action="" className={css(styles.form)}>
            <label htmlFor="email" className={css(styles.formpad)}>Email: </label>
            <input type="email" id="email" className={css(styles.formpad)}></input>
            <label htmlFor="password" className={css(styles.formpad)}>Password: </label>
            <input type="password" id="password" className={css(styles.formpad)}></input>
            <button type="submit" className={css(styles.formbutton)}>OK</button>
        </form>
      </div>
    </>
  );
}

export default Login;