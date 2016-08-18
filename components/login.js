import React from 'react'
import { Route } from 'react-router'

import App from './app'
import NavLink from './NavLink'


class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="login">

          <h1 className='login-heading'>Login</h1>

          <form>
            <input type="text" name="user" placeholder="Username" required="required" className="input-txt" />
            <input type="password" name="password" placeholder="Password" required="required" className="input-txt" />

            <div className="login-footer">
              <span className="icon icon-min">ಠ╭╮ಠ</span>
              I've forgotten something
              <NavLink to="/home" className="lnk">
                <button type="submit" className="btn btn-right">Sign in</button>
              </NavLink>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

export default Login
