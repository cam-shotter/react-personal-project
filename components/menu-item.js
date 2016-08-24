import React from 'react'

class MenuItem extends React.Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     name: userName
  //   }
  // }

  render() {
    return (
      <li className="menu-item">
        {this.props.item}
      </li>
    )
  }
}

export default MenuItem
