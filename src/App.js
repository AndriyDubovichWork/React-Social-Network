import React from 'react';
import Header from './components/Header/Header';
import NavigationContainer from './components/Navigation/NavigationContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />

                <NavigationContainer />
                <div className='content'>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer />}
                    />
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
