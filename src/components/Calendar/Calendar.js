import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Moment from 'react-moment';
import moment from 'moment';
import Week from './Week';

export default class Calendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            month: new Date()
        }
    }
    select(day){
        console.log(day);
        this.props.selected = day.date;
        this.forceUpdate();
    }
    renderMonthLabel(){
        console.log(moment(this.state.month).format('MMMM YYYY'))
        return <span><Moment format="MMMM YYYY">{this.state.month}</Moment></span>;
    }
    renderWeeks(){
        let weeks = [],
            done = false,
            date = moment(this.state.month).clone().startOf("month").add("w" -1).day("Sunday"),
            monthIndex = date.month(),
            count = 0;
        while (!done) {
            weeks.push(
                <Week 
                    key={date.toString()} 
                    date={date.clone()} 
                    month={this.state.month} 
                    select={this.select} 
                    //selected={this.props.selected} 
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
            <div className="calendar">
                <div className="header">
                    <i className="fa fa-angle-left" onClick={this.previous}></i>
                    {this.renderMonthLabel()}
                    <i className="fa fa-angle-right" onClick={this.next}></i>
                </div>
                {/* <DayNames /> */}
                {this.renderWeeks()}
          </div>
        )
    }
};
