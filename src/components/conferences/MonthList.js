import React from 'react'
import ConferenceList from './List'
// import Moment from 'react-moment'
// import moment from 'moment'

const MonthList = (props) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    const first_dates = props.conferences.map( c => ( c.year.toString() + ' ' + c.month.toString() ) )

    let unique_dates = [...(new Set (first_dates))]

    const conferenceList = unique_dates.map(( d, i ) => {
      let year = d.split(' ')[0]
      let compMonth = d.split(' ')[1]
      let month = months[parseInt(compMonth, 10)-1]
      let conferences = props.conferences.filter(c => (c.year === parseInt(year,10) && c.month === parseInt(compMonth,10)))
      return (
        <div key = {i}>
          <h1 style={{marginLeft: '40px'}}>{year} {month}</h1>
          <ConferenceList {...props} talks={props.talks} conferences={conferences} />
        </div>
      )
    })



    return (
      <div>
      {conferenceList}
      </div>
    )
}

export default MonthList
