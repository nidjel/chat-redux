import React, { Component } from 'react'

class MessageInput extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.props.activeThreadId, this.props.author, this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default MessageInput