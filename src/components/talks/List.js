import React from 'react'
import TalkItem from './Item'

const TalksList = (props) => {
  const talks = props.talks.map((t,i) => <TalkItem key={i} title={t.title} id={t.id} description={t.description}/> )

  return (
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '200px', gridGap: '2em'}}>
     {talks}
    </div>
  )
}

export default TalksList
