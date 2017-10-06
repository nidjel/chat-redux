import React, { Component } from 'react'

import TabThreads from './TabThreads'
import MessageInput from './MessageInput'
import MessageList from './MessageList'

import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabThreads />
        <MessageList />
        <MessageInput />
      </div>
    )
  }
}

export default App