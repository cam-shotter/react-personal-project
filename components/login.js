import React from 'react'
import { Route } from 'react-router'

import App from './app'
import NavLink from './NavLink'
import INITIAL_DATA from '../data/initial-data'


class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = INITIAL_DATA
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log("this is the handlechange state: ", event.target.value);
    setState({value: event.target.value})
  }

  render() {

    return (
      <div className="container">
        <div className="login">

          <h1 className='login-heading'>Login</h1>

          <form>
            <input type="text" name="user" value={this.state.loginDetails.userName} placeholder="Username" required="required" className="input-txt" onChange={this.handleChange} />
            <input type="password" name="password" placeholder="Password" required="required" className="input-txt" />

            <div className="login-footer">
              <span className="icon icon-min">ಠ╭╮ಠ</span>
              I've forgotten something
              <NavLink to="/home" className="lnk">
                <button type="submit" className="btn float-right">Sign in</button>
              </NavLink>
            </div>

          </form>

        </div>

      </div>
    )
  }
}

export default Login
