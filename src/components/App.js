import React from 'react'
import createHistory from 'history/createBrowserHistory'
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Favorites from './Favorites'
import { ConnectedRouter } from 'react-router-redux'

const App = () => {

    const history = createHistory()

    return (
        <ConnectedRouter history={history}>
            <div>
                <Link to="/">Home </Link>
                <Link to="/favorites">Favorites</Link>
                <Route exact path="/" component={Home}/>
                <Route path="/favorites" component={Favorites}/>
            </div>
        </ConnectedRouter>
    )
}

export default App