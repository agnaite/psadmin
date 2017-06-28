"use strict";

var React = require('react');
var BreadForm = require('./breadForm');

var ManageBreadPage = React.createClass({
  getInitialState: function() {
    return {
      bread: {id: '', firstName: '', lastName: ''}
    };
  },
  setBreadState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.bread[field] = value;
    return this.setState({bread: this.state.bread});
  },
  render: function() {
    return (
      <div>
        <h1>Manage Bread</h1>
        <BreadForm
          bread={this.state.bread}
          onChange={this.setBreadState} />
      </div>
    );
  }
});

module.exports = ManageBreadPage;
