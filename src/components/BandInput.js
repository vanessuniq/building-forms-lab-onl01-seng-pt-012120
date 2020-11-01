// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {name: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({...this.state, name: ''})
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Band name: </label>
          <input type="text" value={this.state.name} name='name' onChange={this.handleChange}/>
          <br/>
          <input type="submit" value="Add Band"/>
        </form>
      </div>
    )
  }
}

export default BandInput
