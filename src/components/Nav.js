import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div style={{borderBottom: '6px solid #0892dd'}}className="ui secondary menu">
        <h1 style={{color: '#008080', fontFamily: 'Shadows Into Light', fontSize: '3em'}} className="item Left">Has Many Talks</h1>
        <NavLink activeClassName="active" className="item large right" to="/conferences">Conferences</NavLink>
        <NavLink activeClassName="active" className="item large right" to="/talks">Talks</NavLink>
        <NavLink activeClassName="active" className="item large right" style={{marginRight: '20px'}} to="/conferences/new">New</NavLink>
      </div>
    )
  }
}


export default Nav
