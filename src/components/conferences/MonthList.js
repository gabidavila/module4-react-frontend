import React from 'react'
import ConferencesList from './List'
// import Moment from 'react-moment'
// import moment from 'moment'

const MonthList = (props) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    const first_dates = props.conferences.map( c => ( c.year.toString() + ' ' + c.month.toString() ) )

    let unique_dates = [...(new Set (first_dates))]

    const list = unique_dates.map(( d, i ) => {
      let year = d.split(' ')[0]
      let compMonth = d.split(' ')[1]
      let month = months[parseInt(compMonth)-1]
      let conferences = props.conferences.filter(c => (c.year == year && c.month == compMonth))
      return (
        <div key = {i}>
        <h1>{year} {month}</h1>
        <ConferencesList {...props} conferences={conferences} />
        </div>
      )
    })

    return (
      <div>
      {list}
      </div>
    )
}

export default MonthList
