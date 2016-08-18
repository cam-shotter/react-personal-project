import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="arrow-right"></div>
        <div className="arrow-left"></div>
        <h1 className='scratch-header'>Scratch</h1>
      </div>
    )
  }
}

export default App
