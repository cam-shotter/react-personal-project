import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Menu from './components/menu'

render((
  <Router history={hashHistory}>
    <Route path='/' component={App} >
      <Route path='/menu' component={Menu} />

    </Route>
  </Router>
), document.querySelector('main'))
