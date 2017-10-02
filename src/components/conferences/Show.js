import React from 'react'
import { Button } from 'semantic-ui-react'

 class ConferenceShow extends React.Component {
   state = {
     talksShown: false
   }

   render () {
     const talks = this.props.talks.map((t, i) => {
       return (
         <div>{t.title} - {t.description}</div>
       )
     })
     const imageStyle = {marginLeft: 'auto', marginRight: 'auto', width: '75%'}
     const divStyle = {display: 'grid', justifyContent: 'center', alignItems: 'center'}
     const infoStyle = {marginTop: '10px', marginLeft:'auto', marginRight: 'auto', gridColumnGap: '4em',
        gridRowGap: '2em', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(20px, auto)',
         textAlign: 'center'}
     const descStyle = {gridColumn: '1/4', fontSize: '1.4em'}
    return (
      <div style={divStyle}>
        <h1>{this.props.name}</h1>
        <img style={imageStyle} href={this.props.url} src={this.props.image_uri}/>
        <div style={infoStyle}>
          <div style={descStyle}>Description: {this.props.description}</div>
          <div>From: {this.props.start_date} - {this.props.end_date}</div>
          <div>Address: {this.props.address}, {this.props.location.city}, {this.props.location.state}</div>
          <div>Organized by: {this.props.organizer.name}</div>
        </div>
        <br/>
        <Button onClick={() => this.setState({talksShown: true})}>See Talks</Button>
        {this.state.talksShown ? talks : null}
      </div>

    )
  }
};
export default ConferenceShow
