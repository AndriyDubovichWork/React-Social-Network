import React from 'react';

import HeaderContainer from './components/Header/HeaderContainer';
import NavigationContainer from './components/Navigation/NavigationContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './components/Login/Login';

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />

                <NavigationContainer />
                <div className='content'>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer />}
                    />
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
        </BrowserRouter>
    );
}

export default App;
