import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import Images from './Images'

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role='nav'>
          <li><NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink></li>
        </ul>

        {this.props.children || <Home/>}
      </div>
    )
  }
}

export default Login
