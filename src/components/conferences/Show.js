import React from 'react'


 const ConferenceShow = (props) => {
   const imageStyle = {marginLeft: 'auto', marginRight: 'auto', width: '75%'}
   const divStyle = {display: 'grid', justifyContent: 'center', alignItems: 'center'}
   console.log(props)
  return (
    <div style={divStyle}>
      <h1>{props.name}</h1>
      <img style={imageStyle} href={props.url} src={props.image_uri}/>
      <div><p>{props.description}</p>
      <p>{props.start_date}</p>
      <p>{props.end_date}</p>
      <p>{props.address}</p>
      <p>{props.organizer.name}</p>
      <p>{props.location.city}</p>
      </div>
    </div>
  );
};
export default ConferenceShow
