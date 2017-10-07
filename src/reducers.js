export const activeThreadId = (state='1', action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_THREAD': return action.payload.id
  }
  return state
}

export const threads = (state={
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
}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      const activeThread = state.byId[action.payload.activeThreadId]
      console.log(action)
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.activeThreadId]: {
            ...activeThread,
            messages: [...activeThread.messages, action.payload.newMessageId]
          }
        }
      })
    }
    case 'DELETE_MESSAGE': {
      const activeThread = state.byId[action.payload.activeThreadId]
      return ({
        ...state,
        byId: {
          ...state.byId,
          [action.payload.activeThreadId]: {
            ...activeThread,
            messages: activeThread.messages.filter(messageId => messageId !== action.payload.id)
          }
        }
      })
    }
  }
  return state
}

export const messages = (state={
  byId: {
    1: {
      id: '1',
      author: 'Name1',
      time: '1507282963472',
      text: 'fsdfsdf'
    },
    2: {
      id: '2',
      author: 'Name1',
      time: '1507282963472',
      text: 'fsdfsdf'
    },
  },
  allIds: ['1', '2']
}, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      const {newMessageId, author, submitTime, value} = action.payload
      return ({
        ...state,
        byId: {
          ...state.byId,
          [newMessageId]: {
            id: newMessageId,
            author,
            time: submitTime,
            text: value
          }
        },
        allIds: [...state.allIds, newMessageId]
      })
    }
    case 'DELETE_MESSAGE': {
      const newMessagesById = {...state.byId}
      delete newMessagesById[action.payload.id]
      return ({
        ...state,
        byId: newMessagesById,
        allIds: state.allIds.filter(messageId => messageId !== action.payload.id)
      })
    }
  }
  return state
}