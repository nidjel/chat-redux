import React from 'react'
import {connect} from 'react-redux'
import {deleteMessage} from '../actions.js'

const List = (props) => (
  <div>
	<ul>
	  {props.messages.map((m, i) => (
		<li key={i} onClick={() => props.onMessageClick(props.activeThreadId, m.id)} >
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
  onMessageClick: (activeThreadId, id) => dispatch(deleteMessage(activeThreadId, id))
})

const MessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default MessageList