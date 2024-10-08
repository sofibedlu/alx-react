import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import AppContext, { defaultUser, defaultLogout } from './AppContext';
 
const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
];

const listNotificationsData = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

const styles = StyleSheet.create(
  {
    App: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      position: 'relative',
    },

    hrStyle: {
      height: '4px',
      backgroundColor: '#ff0000',
      width: '100%',
      border: 'none',
    },
  })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut,
      logIn: this.logIn,
      listNotifications: listNotificationsData,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  //logIn and logOut functions are defined here as arrow functions so no need to bind them in the constructor

  logIn = (email, password) => {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  logOut = () => {
    this.setState({ user: defaultUser })
  }

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

  render() {
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <div className={css(styles.App)}>
          <Header />
          <Notifications listNotifications={this.state.listNotifications} 
            markNotificationAsRead={this.markNotificationAsRead}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            />
          <div><hr className={css(styles.hrStyle)}/></div>
          {this.state.user.isLoggedIn ? (<BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.state.logIn}/>
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Here is some random text about the latest news from the school.</p>
            <p>Our school library has expanded its collection with over 300 new books and digital<br></br>
              resources! Students can now access a wide range of literature, reference materials, 
              and academic databases. With the introduction of new reading programs,<br></br>
              we aim to inspire a love for reading and support academic success across all grade levels.</p>
          </BodySection>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;