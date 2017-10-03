import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'


const TalkItem = (props) => {

  const link = '/talks/' + props.id

  return(
    <Link to={link}>
      <Card>
        <Card.Content>
          <Card.Header>
            {props.title}
          </Card.Header>
          <Card.Description>
            {[props.description.split('').slice(0, 200).join(''), "..."]}
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )

}

export default TalkItem
