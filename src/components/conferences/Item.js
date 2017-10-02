import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'


const ConferenceItem = (props) => {
  const description = [props.description.split('').slice(0, 200).join(''), "..."]
  
  return (
    <Link to={"/conferences/" + props.id}>
      <Card>
        <Image src={props.image_uri ? props.image_uri : "http://media.istockphoto.com/photos/public-speaker-at-business-conference-picture-id524170029?k=6&m=524170029&s=612x612&w=0&h=AtlRPx4R4I59eZK08doKMccJp4qwe_IeRhBXaV2GWbo="} />
        <Card.Content>
          <Card.Header>
            {props.name}
          </Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )
}

export default ConferenceItem
