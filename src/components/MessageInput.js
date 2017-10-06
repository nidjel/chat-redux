import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../actions.js'

class Input extends Component {
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
    this.props.onSubmit(this.state.value)
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

const mapStateToProps = (state) => ({
  activeThreadId: state.activeThreadId,
  author: state.threads.byId[state.activeThreadId].name
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  onSubmit: (activeThreadId, author, value) => {
    const newMessageId = (Math.floor(Math.random()*1000)).toString()
    const submitTime = Date.now()
    dispatch(addMessage(activeThreadId, newMessageId, author, submitTime, value))
  }
})

const mergeProps = (stateProps, dispatchProps) => ({
  onSubmit: (value) => {
    const newMessageId = (Math.floor(Math.random()*1000)).toString()
    const submitTime = Date.now()
    dispatchProps.dispatch(addMessage(stateProps.activeThreadId, stateProps.author, newMessageId, submitTime, value))
  }
})

const MessageInput = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Input)

export default MessageInput