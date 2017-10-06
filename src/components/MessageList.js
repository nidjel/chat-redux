import React from 'react'
import {connect} from 'react-redux'
import {deleteMessage} from '../actions.js'

const List = (props) => (
  <div>
	<ul>
	  {props.messages.map((m, i) => (
		<li key={i} onClick={() => props.onMessageClick(m.id)} >
		  {m.text}<span>{m.time}</span>
		</li>
	  ))}
	</ul>
  </div>
)

const mapStateToProps = (state) => ({
  activeThreadId: state.activeThreadId,
  messages: state.threads.byId[state.activeThreadId].messages.map(id => state.messages.byId[id])
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

const mergeProps = (stateProps, dispatchProps) => ({
  messages: stateProps.messages,
  onMessageClick: (id) => dispatchProps.dispatch(deleteMessage(stateProps.activeThreadId, id))
})

const MessageList = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(List)

export default MessageList