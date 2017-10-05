import React, { Component } from 'react'

class TabThreads extends Component {
  handleThreadClick = (e, id) => {
    e.preventDefault()
    this.props.onThreadClick(id)
  }
  
  render() {
    const {threads} = this.props
    return (
      <div>
        <ul>
         {threads.map((t, i) => (
            <li key={i} >
              <a href='#' onClick={(e) => this.handleThreadClick(e, t.id)} >{t.name}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TabThreads