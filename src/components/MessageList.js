import React from 'react'
import {connect} from 'react-redux'
import {deleteMessage} from '../actions'
import {List} from 'semantic-ui-react'

const ListForMessages = (props) => (
  <div>
	<List>
	  {props.messages.map((m, i) => (
		<List.Item key={i} onClick={() => props.onMessageClick(m.id)} >
		  {m.text}
		  <span className='messageTime'>@{m.time}</span>
		</List.Item>
	  ))}
	</List>
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
)(ListForMessages)

export default MessageList