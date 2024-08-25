import React from 'react';
import './Login.css';

function Login() {
  return (
    <>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form action="" className='form'>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email"></input>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password"></input>
            <button type="submit">OK</button>
        </form>
      </div>
    </>
  );
}

export default Login;