import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'

 class ConferenceShow extends React.Component {
   state = {
     talksShown: false
   }

   render () {

     const talks = this.props.talks.map((t, i) => {
       return (
         <Link to='/conferences'>
           <Card>
             <Card.Content>
               <Card.Header>
                 {t.title}
               </Card.Header>
               <Card.Description>
                 {[t.description.split('').slice(0, 200).join(''), "..."]}
               </Card.Description>
             </Card.Content>
           </Card>
         </Link>

       )
     })
     const imageStyle = {marginLeft: 'auto', marginRight: 'auto', width: '75%'}
     const talksContainer = {display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: 'minmax(200px, auto)', gridGap: '2em', padding: '20px'}
     const divStyle = {display: 'grid', justifyContent: 'center', alignItems: 'center'}
     const infoStyle = {marginTop: '10px', marginLeft:'auto', marginRight: 'auto', gridColumnGap: '4em',
        gridRowGap: '2em', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(20px, auto)',
         textAlign: 'center'}
     const descStyle = {gridColumn: '1/4', fontSize: '1.4em'}
    return (
      <div style={divStyle}>
        <h1>{this.props.name}</h1>
        <img style={imageStyle} alt={this.props.name} href={this.props.url} src={this.props.image_uri}/>
        <div style={infoStyle}>
          <div style={descStyle}>Description: {this.props.description}</div>
          <div>From: {this.props.start_date} - {this.props.end_date}</div>
          <div>Address: {this.props.address}, {this.props.location.city}, {this.props.location.state}</div>
          <div>Organized by: {this.props.organizer.name}</div>
        </div>
        <br/>
        <Button onClick={() => this.setState({talksShown: true})}>See Talks</Button>
        <div style={talksContainer}>
          {this.state.talksShown ? talks : null}
        </div>
      </div>

    )
  }
};
export default ConferenceShow
