import React from 'react'
import Menu from './menu'
import { Link } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    //
    // this.props = this.props.bind(this)
    //  console.log("these are the props: ", this.props);

  }

  handleClick() {
    this.props.store.dispatch({
      type: "DISPLAY_MENU",
      payload: "block"
    })
  }
  // <div className="arrow-right"></div>
  // <div className="arrow-left"></div>

  render () {
    return (
      <div>
        <h1 className='scratch-header'>Scratch</h1>
        <h2>Hello, {this.props.name}</h2>
        <button type="button" onClick={this.handleClick} className="open-menu"><Link to='/home/menu' >Open Menu</Link></button>
        <Menu className="hidden"/>
      </div>
    )
  }
}

export default App
