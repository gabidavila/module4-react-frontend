import React from 'react'
import { Card } from 'semantic-ui-react'
import TalkItem from './Item'

const TalksList = (props) => {
  const talks = props.talks.map((t,i) => <TalkItem title={t.title} id={t.id} description={t.description}/> )

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '200px', gridGap: '2em'}}>
     {talks}
    </div>
  )
}

export default TalksList
