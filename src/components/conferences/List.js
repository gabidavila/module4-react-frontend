import React from 'react'
import ConferenceItem from './Item'

const ConferencesList = (props) => {
  const conferences = props.conferences.map(conference => <ConferenceItem />)

  return(
    <p>hi</p>
  )
}

export default ConferencesList
