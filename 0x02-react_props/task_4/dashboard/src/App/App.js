import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn}) {
  return (
    <>
      <div className='App'>
        <Header />
        <Notifications />
        <hr />
        {isLoggedIn ? <CourseList /> : <Login />}
        <hr />
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;