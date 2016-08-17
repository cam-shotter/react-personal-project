import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

render((
  <Route path='/' component={App} >

  </Route>
), document.querySelector('main'))
