import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Login from './components/login'
import App from './components/app'
import Menu from './components/menu'

// <Route path='/login' component='{}' />

render((
  <Router history={hashHistory}>
    <Route path='/' component={Login} >
    </Route>
    <Route path='/home' component={App} />
  </Router>
), document.querySelector('main'))
