import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import moment from 'moment';
import Week from './Week';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: new Date(),
            selected: null
        }
    }
    select(day) {
        this.setState({ selected: day.date })
    }
    next() {
        let month = moment(this.state.month);
        month.add(1, "M");
        this.setState({ month: month });
    }
    previous() {
        let month = moment(this.state.month);
        month.add(-1, "M");
        this.setState({ month: month });
    }
    renderMonthLabel() {
        return <span className="header-title"><Moment format="MMMM YYYY">{this.state.month}</Moment></span>;
    }
    renderWeeks() {
        let weeks = [],
            done = false,
            date = moment(this.state.month).clone().startOf("month").add("w" - 1).day("Sunday"),
            monthIndex = date.month(),
            count = 0;
        while (!done) {
            weeks.push(
                <Week
                    key={date.toString()}
                    date={date.clone()}
                    month={this.state.month}
                    select={this.select.bind(this)}
                    selected={this.state.selected}
                />
            );
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
        return weeks;
    }
    render() {
        return (
            <div className="calendar-main">
                <div className="header">
                    <i className="fa fa-angle-left" onClick={this.previous.bind(this)}></i>
                    {this.renderMonthLabel()}
                    <i className="fa fa-angle-right" onClick={this.next.bind(this)}></i>
                </div>
                {/* <DayNames /> */}
                {this.renderWeeks()}
            </div>
        )
    }
};
