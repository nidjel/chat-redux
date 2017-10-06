import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import {activeThreadId, threads, messages} from './reducers.js'

const reducer = combineReducers({
  activeThreadId,
  threads,
  messages
})

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
