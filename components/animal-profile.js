import React from 'react'

class AnimalProfile extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    console.log("animal profile state: ", this.state)

    return (
      <div>
        <h1>{this.props.state.profile.name}</h1>
        <img src={this.props.state.profile.image} />

        <div>
          <h3>{this.props.state.profile.heading}</h3>
          <p>{this.props.state.profile.descriptions}</p>
        </div>
      </div>
    )
  }
}

export default AnimalProfile
