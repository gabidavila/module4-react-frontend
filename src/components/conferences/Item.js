import React from 'react';
import { Link } from 'react-router-dom';


const ConferenceItem = (props) => {
  const imageStyle = { maxWidth: '100%' }
  //const confImage = {props.image_uri !== "" ? props.image_uri : "https://thumbs.dreamstime.com/t/coaching-mentoring-seminar-meeting-conference-business-concept-60792479.jpg"}
  const divStyle= { display: 'grid', justifyContent: 'center', backgroundColor: '#ccc', paddingBottom: '20px' }
  return (
    <Link to={"/conferences/" + props.id}>
      <div style={ divStyle } onClick={ () => props.showConference(props.id) }>
      <img style={ imageStyle } src={props.image_uri !== "" ? props.image_uri : "http://media.istockphoto.com/photos/public-speaker-at-business-conference-picture-id524170029?k=6&m=524170029&s=612x612&w=0&h=AtlRPx4R4I59eZK08doKMccJp4qwe_IeRhBXaV2GWbo="}/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      </div>
    </Link>

  )
}

export default ConferenceItem
