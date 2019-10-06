import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './App'

import * as serviceWorker from './serviceWorker';

const getReduxComposer = middleware => {
    //EVIL LINE comment out before commiting
    return (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(middleware)
    // return compose(middleware)
}

const store = createStore(rootReducer, getReduxComposer(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();