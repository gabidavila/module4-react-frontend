import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'

class ConferenceShow extends React.Component {
  state = {
    talksShown: false
  }

  render() {
    let talks = [];
    if (this.props.talks.length != 0) {
        talks = this.props.talks.map((t, i) => {
        const link = '/conferences/' + this.props.id + '/talks/' + t.id
        return (
          <Link to={link}>
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
    }

      const imageStyle = { marginLeft: 'auto', marginRight: 'auto', maxWidth: '300px' }
      const divStyle = { display: 'grid', justifyContent: 'center', alignItems: 'center' }
      const infoStyle = {
        marginTop: '10px', marginLeft: 'auto', marginRight: 'auto', gridColumnGap: '4em',
        gridRowGap: '2em', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: 'minmax(20px, auto)',
        textAlign: 'center', backgroundColor: '#ccc', padding: '20px', borderRadius: '10px', width: '75%'
      }
      const descStyle = { gridColumn: '1/4', fontSize: '1.4em' }
      const talksContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'minmax(200px, auto)'
      }

      return (
        <div style={divStyle}>
          <img style={imageStyle} alt={this.props.name} src={this.props.image_uri}/>
          <h1>{this.props.name}</h1>
          <div style={infoStyle}>
            <div style={descStyle}>Description: {this.props.description}</div>
            <div>From: {this.props.start_date} - {this.props.end_date}</div>
            <div>Address: {this.props.address}, {this.props.location.city}, {this.props.location.state}</div>
            <div>Organized by: {this.props.organizer.name}</div>
            {this.props.talks.length ?
              <Button style={{ gridColumn: '2/3', backgroundColor: '#fff' }} className={'medium ui button'}
                      onClick={() => this.setState({ talksShown: true })}>See Talks</Button> : null}
          </div>
          <br/>
          <div style={{ width: '75%', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={talksContainer}>
              {this.state.talksShown ? talks : null}
            </div>
          </div>

        </div>

      )
  }
};
export default ConferenceShow
