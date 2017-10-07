import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../actions.js'

import {Button, Input} from 'semantic-ui-react'

class InputField extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  
  handleButtonClick = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <form >
          <Input type='text' value={this.state.value} onChange={this.handleChange} />
          <Button onClick={this.handleButtonClick}>Submit</Button>
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
})

const mergeProps = (stateProps, dispatchProps) => ({
  onSubmit: (value) => {
    const newMessageId = (Math.floor(Math.random()*1000)).toString()
    const submitTime = Date.now()
    dispatchProps.dispatch(addMessage({
      activeThreadId: stateProps.activeThreadId, 
      author: stateProps.author, 
      newMessageId, 
      submitTime, 
      value}))
  }
})

const MessageInput = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(InputField)

export default MessageInput