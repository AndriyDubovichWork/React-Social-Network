import React from 'react';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navigation />
                <div className='content'>
                    <Route
                        path='/dialogs'
                        render={() => (
                            <Dialogs
                                dialogs={props.dialogs}
                                message={props.messages}
                            />
                        )}
                    />
                    <Route
                        path='/profile'
                        render={() => <Profile posts={props.posts} />}
                    />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
