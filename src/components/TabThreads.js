import React from 'react'
import {connect} from 'react-redux'
import {changeActiveThread} from '../actions.js'

const Tabs = (props) => (
  <div>
    <ul>
     {props.threads.map((t, i) => (
        <li key={i} >
          <button onClick={() => props.onThreadClick(t.id)} >{t.name}</button>
        </li>
      ))}
    </ul>
  </div>
)

const mapStateToProps = (state) => ({
  threads: state.threads.allIds.map(id => state.threads.byId[id])
})

const mapDispatchToProps = (dispatch) => ({
  onThreadClick: (id) => dispatch(changeActiveThread(id))
})

const TabThreads = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs)

export default TabThreads