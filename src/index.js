import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducers'
import App from './components/App'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(thunk, routerMiddleware(history), createLogger())
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)