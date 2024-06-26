import holbertonLogo from './Holberton Logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className='App'>
      <div className="App-header">
        <img src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
      <hr />
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form action="">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"></input>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password"></input>
          </div>
          <button type="submit">OK</button>
        </form>
      </div>
      <hr />
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
