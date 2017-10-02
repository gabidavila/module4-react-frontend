import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    const styling = {display: 'grid', gridTemplateColumns: ' 3fr, 1fr, 1fr, 1fr'}
    return (
      <div className="ui secondary menu">
        <h1 className="item Left">Has Many Talks</h1>
        <NavLink activeClassName="active" className="item right" to="/conferences">Conferences</NavLink>
        <NavLink activeClassName="active" className="item right" to="/conferences/new">New</NavLink>
        <NavLink className="item right" to="/">Logout</NavLink>
      </div>
    )
  }
}


export default Nav
