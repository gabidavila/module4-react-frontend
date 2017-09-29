import React from 'react';
import { Link } from 'react-router-dom';


const ConferenceItem = (props) => {
  const imageStyle = { maxWidth: '100%' }
  const divStyle={ backgroundColor: '#ccc' }
  console.log(props)
  return (

    <div style={ divStyle } onClick={ () => props.showConference(props.id) }>
    <img style={ imageStyle } src={props.image_uri}/>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <Link to={"/conferences/" + props.id}>See This Conference</Link>
    </div>

  )
}

export default ConferenceItem
