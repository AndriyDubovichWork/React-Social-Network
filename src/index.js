import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles_sass/App.scss';
import App from './App';
import store from './Redux/ReduxStore';
import StoreContext from './StoreContext';

let RerenderEntierTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
RerenderEntierTree(store.getState);

store.subscribe(() => {
    let state = store.getState();
    RerenderEntierTree(state);
});
