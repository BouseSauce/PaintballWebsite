import request from 'superagent'
import moment from 'moment';

let url = `https://www.googleapis.com/calendar/v3/calendars/3imojene2dc9r7dvv0vf9vf0ig@group.calendar.google.com/events?key=AIzaSyDGiJOxuig-N8RvJQ087Q7T0gn1bxG7LqY`;

export function getEvents(callback) {
    request
        .get(url)
        .end((err, resp) => {
            console.log(err)
            if (!err) {
                const events = []
                console.log("getEvents was run ->" + events[0]);
                JSON.parse(resp.text).items.map(event => {
                    let sTime = event.start.date || event.start.dateTime;
                    let eTime = event.end.date || event.end.dateTime;
                    let csTime = moment(sTime).toDate();
                    let ceTime = moment(eTime).toDate();
                    return events.push({
                        start: csTime,
                        end: ceTime,
                        title: event.summary,
                        description: event.description,
                        location: event.location,

                    });
                });
                callback(events)
            }

        })
};
