import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles_sass/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { InputPostsOnChange, addPost } from './Redux/State';
import { MessageOnChange, addMessage } from './Redux/State';

export let RerenderEntierTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                InputPostsOnChange={InputPostsOnChange}
                addPost={addPost}
                MessageOnChange={MessageOnChange}
                addMessage={addMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
reportWebVitals();
