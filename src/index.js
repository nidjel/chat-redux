import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import {activeThreadId, threads, messages} from './reducers.js'
import './index.css'
import 'semantic-ui-css/semantic.min.css'

const reducer = combineReducers({
  activeThreadId,
  threads,
  messages
})

/* eslint-disable no-underscore-dangle */
  const store = createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
