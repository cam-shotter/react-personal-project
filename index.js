import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore } from 'redux'
import domready from 'domready'

import App from './components/app'
import Menu from './components/menu'
import Login from './components/login'
import HumanProfile from './components/human-profile'


// <Route path='/login' component='{}' />

// const userName =

const INITIAL_DATA = {
  name: "Cam"
}

const reducer = (state=INITIAL_DATA, action) => {
 console.log("action ", action)
 switch (action.type) {
   case "DISPLAY_MENU":
    return Object.assign({}, state, {
      backgroundColor: action.payload
    })
   default:
      return state
 }
}

// console.log("this: ", this.props);

// <Router history={hashHistory}>
//   <Route path='/' component={Login} />
//
//   <Route path='/home' component={App} />
//   <App {...INITIAL_DATA}/>
//   <Route path='/home/menu' component={Menu} >
//   </Route>
// </Router>
const store = createStore(reducer)

store.subscribe(() => {
  console.log("logging state ", store.getState())
  render()
})

domready(() => {
  render()
})

const render = () => {
  ReactDOM.render(
    <App store={store} state={store.getState()} />,
    document.querySelector('main')
  )
}
