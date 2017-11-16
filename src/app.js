import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// var ReactGridLayout = require('react-grid-layout');
import ReactGridLayout from 'react-grid-layout';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MyFirstGrid />
            </div>
        );
    }
}

var MyFirstGrid = React.createClass({
    render: function () {
      return (
        <ReactGridLayout className="layout" cols={12} rowHeight={50} width={1200}>
          <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 1, static: false}}>a</div>
          {/* <div key="b" data-grid={{x: 0, y: 5, w: 3, h: 2, minW: 1, maxW: 5}}>b</div>
          <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div> */}
        </ReactGridLayout>
      )
    }
  });

ReactDOM.render(<App />, document.querySelector('.container'));