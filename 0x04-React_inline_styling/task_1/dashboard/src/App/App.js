import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.listCourses = [P1+r[24~\P0+r\P0+r\P1+r\P0+r\P1+r[3~\P1+rOH\P1+rOF\P1+r[5~\P1+r[6~\
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40}
    ];
  
    this.listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
    ];
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }  
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render () {
    return (
      <React.Fragment>
        <Notification listNotifications={this.listNotifications}/>
        <div className={css(bodyStyles.App)}>
          <Header />
          {this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={this.listCourses}/></BodySectionWithMarginBottom>
          : 
            <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School">
            <p>Random Text</p>
          </BodySection>
          <div className={css(footerStyles.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const bodyStyles = StyleSheet.create({
  App: {
    position: 'relative',
    minHeight: '100vh'
  }
});

const footerStyles = StyleSheet.create({
	footer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderTop: '3px solid #E11D3F',
		padding: '1rem',
		fontStyle: 'italic',
	}
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;
