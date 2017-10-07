import React from 'react'
import {connect} from 'react-redux'
import {changeActiveThread} from '../actions.js'
import {Tab} from 'semantic-ui-react'

const Tabs = (props) => (
  <div>
    <Tab 
      panes={props.threads.map((t, i) => (
        {menuItem: t.name}
      ))}
      onTabChange={(event, data) => props.onThreadClick(props.threads[data.activeIndex].id)}
    />
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