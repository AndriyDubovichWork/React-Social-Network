import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from './components/Header/HeaderContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initialiseApp } from './Redux/AppReducer';
import Preloader from 'components/common/preloader/preloader';
import { compose } from 'redux';
import store from 'Redux/ReduxStore';
import { withSuspense } from 'hoc/withSuspense';

// import DialogsContainer from './components/Dialogs/DialogsContainer';

const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);

class App extends Component {
  componentDidMount() {
    this.props.initialiseApp();
  }

  render() {
    if (!this.props.initialised) {
      return <Preloader />;
    } else {
      return (
        <div className='app-wrapper'>
          <HeaderContainer />

          <NavigationContainer />
          <div className='content'>
            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
            <Route
              path='/profile/:userId?'
              render={() => <ProfileContainer />}
            />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <LoginPage />} />
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  initialised: state.app.initialised,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initialiseApp })
)(App);

let MainApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
export default MainApp;
