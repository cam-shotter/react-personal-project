import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/app'
import Menu from './components/menu'
import Login from './components/login'
import HumanProfile from './components/human-profile'



// <Route path='/login' component='{}' />

render((
  <Router history={hashHistory}>
    <Route path='/' component={Login} >
      <Route path='/error' component={ErrorMessage}/>
    </Route>
    <Route path='/home' component={App} >
      <Route path='/home/:userName' component={HumanProfile} />
    </Route>
  </Router>
), document.querySelector('main'))
