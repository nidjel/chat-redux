import React, { Component } from 'react'

class MessageList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.messages.map((m, i) => (
            <li key={i} onClick={() => this.props.onMessageClick(m.id)} >{m.text}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageList