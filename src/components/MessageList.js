import React, { Component } from 'react'

class MessageList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.messages.map((m, i) => (
            <li key={i} onClick={() => this.props.onMessageClick(this.props.activeThreadId, m.id)} >
              {m.text}<span>{m.time}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageList