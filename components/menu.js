import React from 'react'
import MenuItem from './menu-item'
import NavLink from './NavLink'

import App from './app'

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div className="menu-container">
          <h3 className="menu-title">Menu</h3>
          <ul>
            <MenuItem item={"Search"} />
            <MenuItem item={"Not Worth Abandoning"} />
            <MenuItem item={"Other"} />
            <MenuItem item={"Login"} />
          </ul>
          <NavLink to='/home' style={{textDecoration: "none"}}>Close Menu</NavLink>
        </div>
      </div>
    )
  }
}

export default Menu
