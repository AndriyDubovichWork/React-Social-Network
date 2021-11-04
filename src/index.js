import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles_sass/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'I' },
    { id: 3, message: 'know' },
    { id: 4, message: 'you dumb' },
    { id: 5, message: 'Lol' },
];
let dialogs = [
    { id: 1, name: 'Andriy' },
    { id: 2, name: 'Ivanko' },
    { id: 3, name: 'Olexandr' },
    { id: 4, name: 'Roman' },
    { id: 5, name: 'Ura' },
];
let posts = [
    { id: 1, message: 'Hi holywood', likeCount: 20 },
    { id: 2, message: 'mega post', likeCount: 15 },
];
ReactDOM.render(
    <React.StrictMode>
        <App messages={messages} dialogs={dialogs} posts={posts} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
