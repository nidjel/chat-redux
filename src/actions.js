export const addMessage = ({activeThreadId, newMessageId, author, submitTime, value}) => ({
  type: 'ADD_MESSAGE', 
  payload: {
    activeThreadId,
    newMessageId,
    author,
    submitTime,
    value
  }
})

export const deleteMessage = (activeThreadId, id) => ({
  type: 'DELETE_MESSAGE',
  payload: {
    activeThreadId,
    id
  }
})

export const changeActiveThread = (id) => ({
  type: 'CHANGE_ACTIVE_THREAD',
  payload: {
    id
  }
})