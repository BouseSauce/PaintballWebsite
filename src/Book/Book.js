import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import stye from './Book.css';
import { getEvents } from './gcal';

import BigCalendar from 'react-big-calendar';
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment)

// this weird syntax is just a shorthand way of specifying loaders
//require('style!css!react-big-calendar/lib/css/react-big-calendar.css')

class Book extends React.Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      <BigCalendar
        style={{height: '420px'}}
        events={this.state.events}
      />
    )
  }
}
export default Book;
