import React, { Component } from 'react';
import Moment from 'react-moment';
import moment from 'moment';

export default class Week extends Component {
    render() {
        let days = [],
            date = this.props.date,
            month = this.props.month;
  
    for (var i = 0; i < 7; i++) {
        var day = {
            name: moment(date).format("dd").substring(0, 1),
            number: date.date(),
            isCurrentMonth: date.month() === moment(month).month(),
            isToday: date.isSame(new Date(), "day"),
            date: date
        };
        days.push(
                <div className="day-container">
                    <span 
                        key={day.date.toString()} 
                        className={"day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "")} 
                        onClick={this.props.select.bind(null, day)}>
                        {day.number}
                    </span>
                </div>
            );
        date = date.clone();
        date.add(1, "d");
    }
  
      return (
        <div className="week" key={days[0].toString()}>
            {days}
        </div>
      )
    }
};
