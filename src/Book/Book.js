import React from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import './Book.css';
import { getEvents } from './gcal';

import BigCalendar from 'react-big-calendar';
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment);

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
      <div className="bookContainer">
      <div className="bookNow">
        <form>  
          <input type="text" name="groupName" value="Event Here" />
          <input type="time" name="Start Time" value="Start" />
          <input type="time" name="End Time" value="End" />
          <input type="tel" name="Contact Number" value="Event Name" />
          <input type="submit" name="Subimt" value="Book Now" />
        </form>
      </div>
        <div className="calanderContainer">
          <BigCalendar
            style={{height: '420px'}}
            events={this.state.events}
          />
      </div>
      </div>
    )
  }
}
export default Book;
