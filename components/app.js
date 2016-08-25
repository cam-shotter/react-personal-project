import React from 'react'
import Menu from './menu'
import AnimalProfile from './animal-profile'
import { Link } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.props = {
      name: "Cam"
    }

    // this.handleClick = this.handleClick.bind(this)
    //
    // this.props = this.props.bind(this)
    //  console.log("these are the props: ", this.props);


  }

  // <div className="arrow-right"></div>
  // <div className="arrow-left"></div>

  render () {
    return (
      <div>
        <h1 className='scratch-header'>Scratch</h1>
        <h2>Hello, {this.props.name}</h2>
        <Link to='/home' >Open Menu</Link>
        <Menu />
        <AnimalProfile />
      </div>
    )
  }
}

export default App
