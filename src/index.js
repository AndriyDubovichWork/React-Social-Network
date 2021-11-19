import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles_sass/App.scss';
import App from './App';
import store from './Redux/ReduxStore';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
