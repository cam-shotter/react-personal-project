import React from 'react'
import { Link, IndexLink } from 'react-router'
import App from './app'
import NavLink from './NavLink'


class Login extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="login">
          <h1 className='login-heading'>Login</h1>
          <form method="post">
            <input type="text" name="user" placeholder="Username" required="required" className="input-txt" />
              <input type="password" name="password" placeholder="Password" required="required" className="input-txt" />
              <div className="login-footer">
                 <a href="#" className="lnk">
                  <span className="icon icon-min">ಠ╭╮ಠ</span>
                  I've forgotten something
                </a>
                <button type="submit" className="btn btn-right">Sign in  </button>

              </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
