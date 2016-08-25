import React from 'react'
import Menu from './menu'
import AnimalProfile from './animal-profile'
import { Link } from 'react-router'
import INITIAL_DATA from '../data/initial-data'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_DATA
  }



  render () {
    console.log(this.state)
    return (
      <div>
        <h1 className='scratch-header'>Scratch</h1>
        <h2>Hello, {this.state.loginDetails.userName}</h2>
        <Link to='/home' >Open Menu</Link>
        <Menu />
        <AnimalProfile state={this.state} />
      </div>
    )
  }
}

export default App
