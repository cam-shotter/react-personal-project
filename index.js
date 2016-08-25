import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/app'
import Menu from './components/menu'
import Login from './components/login'
import HumanProfile from './components/human-profile'


// <Route path='/login' component='{}' />

let INITIAL_DATA = {
  name: "Cam"
}

render((
  <Router history={hashHistory}>
    <Route path='/login' component={Login} />

    <Route path='/home' component={App} />

      <Route path='/home/menu' component={Menu} >
    </Route>
  </Router>
), document.querySelector('main'))
