import React, { Component } from 'react'
import {createStore, combineReducers} from 'redux'

import TabThreads from './TabThreads'
import MessageInput from './MessageInput'
import MessageList from './MessageList'

import {addMessage, deleteMessage, changeActiveThread} from '../actions.js'
import {activeThreadId, threads, messages} from '../reducers.js'

import '../App.css'

const reducer = combineReducers({
  activeThreadId,
  threads,
  messages
})

const store = createStore(reducer)

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  handleThreadClick = (id) => {
    store.dispatch(changeActiveThread(id))
  }

  handleSubmitMessage = (activeThreadId, author, value) => {
    const newMessageId = (Math.floor(Math.random()*1000)).toString()
    const submitTime = Date.now()
    store.dispatch(addMessage(activeThreadId, newMessageId, author, submitTime, value))
  }
  
  handleMessageClick = (activeThreadId, id) => {
    store.dispatch(deleteMessage(activeThreadId, id))
  }

  render() {
    const state = store.getState()
    const {activeThreadId, threads, messages} = state
    const threadsToProps = threads.allIds.map(id => threads.byId[id])
    const activeThreadMessages = threads.byId[activeThreadId].messages.map(id => messages.byId[id])

    return (
      <div className="App">
        <TabThreads 
          threads={threadsToProps}
          onThreadClick={this.handleThreadClick}
        />
        <MessageList
          activeThreadId={activeThreadId}
          messages={activeThreadMessages}
          onMessageClick={this.handleMessageClick}
        />
        <MessageInput 
          activeThreadId={activeThreadId}
          author={threads.byId[activeThreadId].name}
          onSubmit={this.handleSubmitMessage}
        />
      </div>
    )
  }
}

export default App