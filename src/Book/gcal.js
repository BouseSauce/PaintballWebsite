import request from 'superagent'

const CALENDAR_ID = ' 3imojene2dc9r7dvv0vf9vf0ig@group.calendar.google.com';
const API_KEY = 'AIzaSyDGiJOxuig-N8RvJQ087Q7T0gn1bxG7LqY';
let url = `https://www.googleapis.com/calendar/v3/calendars/3imojene2dc9r7dvv0vf9vf0ig@group.calendar.google.com/events?key=AIzaSyDGiJOxuig-N8RvJQ087Q7T0gn1bxG7LqY`;

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}