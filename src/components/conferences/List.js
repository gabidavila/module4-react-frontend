import React from 'react'
import ConferenceItem from './Item'
import { Card } from 'semantic-ui-react';


class ConferencesList extends React.Component {
  state = {
  }

 render () {
   const conferences = this.props.conferences.map((conference, i) => <ConferenceItem key={i} id={conference.id} showConference={this.showConference} image_uri={conference.image_uri} name={conference.name} description={conference.description}/>)
   const styling = {display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'minmax(200px, auto)', gridGap: '2em', padding: '20px'}
   return (
     <div style={styling}>
       {conferences}
     </div>
   )
 }
}

export default ConferencesList
