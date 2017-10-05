import React, { Component } from 'react'
import {createStore} from 'redux'

import TabThreads from './TabThreads'
import MessageInput from './MessageInput'
import MessageList from './MessageList'

import '../App.css'

class App extends Component {
  state = {
    activeThreadId: 1,
    threads: {
      byId: {
        1: {
          id: '1',
          name: 'Name1',
          messages: ['1', '2']
        },
        2: {
          id: '2',
          name: 'Name2',
          messages: []
        },
      },
      allIds: ['1', '2']
    },
    messages: {
      byId: {
        1: {
          id: '1',
          author: 'Name1',
          text: 'fsdfsdf'
        },
        2: {
          id: '2',
          author: 'Name1',
          text: 'fsdfsdf'
        },
      },
      allIds: ['1', '2']
    }
  }

  handleThreadClick = (id) => {
    this.setState({
      activeThreadId: id
    })
  }

  handleSubmitMessage = (value) => {
    this.addMessage(value)
  }
  
  handleMessageClick = (id) => {
    this.deleteMessage(id)
  }
  
  addMessage = (value) => {
    const newMessageId = (Math.floor(Math.random()*1000)).toString()
    
    this.setState({
      threads: {
        byId: {
          ...this.state.threads.byId,
          [this.state.activeThreadId]: {
            ...this.state.threads.byId[this.state.activeThreadId],
            messages: [...this.state.threads.byId[this.state.activeThreadId].messages, newMessageId]
          }
        },
        allIds: [...this.state.threads.allIds]
      },
      messages: {
        byId: {
          ...this.state.messages.byId,
          [newMessageId]: {
            id: newMessageId,
            author: this.state.threads.byId[this.state.activeThreadId].name,
            text: value
          }
        },
        allIds: [...this.state.messages.allIds, newMessageId]
      }
    })
  }
  
  deleteMessage = (id) => {
    const activeThread = this.state.threads.byId[this.state.activeThreadId]
    const newAllMessageIds = this.state.messages.allIds.filter(messageId => messageId !== id)
    const newMessagesById = {...this.state.messages.byId}
    delete newMessagesById[id]
    
    this.setState({
      threads: {
        ...this.state.threads,
        byId: {
          ...this.state.threads.byId,
          [this.state.activeThreadId]: {
            ...activeThread,
            messages: activeThread.messages.filter(messageId => messageId !== id)
          }
        }
      },
      messages: {
        byId: newMessagesById,
        allIds: newAllMessageIds
      }
    })
  }

  render() {
    const {activeThreadId, threads, messages} = this.state
    const threadsToProps = threads.allIds.map(id => threads.byId[id])
    const activeThreadMessages = threads.byId[activeThreadId].messages.map(id => messages.byId[id])

    return (
      <div className="App">
        <TabThreads threads={threadsToProps} onThreadClick={this.handleThreadClick} />
        <MessageList messages={activeThreadMessages} onMessageClick={this.handleMessageClick} />
        <MessageInput onSubmit={this.handleSubmitMessage} />
      </div>
    )
  }
}

export default App