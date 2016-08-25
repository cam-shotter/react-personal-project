import React from 'react'
import NavLink from './NavLink'

class MenuItem extends React.Component {

  render() {
    return (
      <li className="menu-item">
        <NavLink to={'/', this.props.item} >
          {this.props.item}
        </NavLink>
      </li>
    )
  }
}

export default MenuItem
