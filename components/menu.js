import React from 'react'
import MenuItem from './menu-item'
import { Link } from 'react-router'

import App from './app'

class Menu extends React.Component {
  render() {
    return (
      <div>
        <div className="menu-container">
          <h3 className="menu-title">Menu</h3>
          <ul>
            <MenuItem item={"Search"}/>
            <MenuItem item={"Not Worth Abandoning"}/>
            <MenuItem item={"Other"}/>
          </ul>
          <Link to='/home' className="close-menu" >Close Menu</Link>
        </div>
        
      </div>
    )
  }
}

export default Menu
