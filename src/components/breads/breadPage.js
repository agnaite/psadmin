"use strict";

var React = require('react');
var BreadApi = require('../../api/breadApi');
var BreadList = require('./breadList');

var Breads = React.createClass({
  getInitialState: function() {
    return {
      breads: []
    };
  },
  componentDidMount: function() {
    if (this.isMounted()) {
      this.setState({ breads: BreadApi.getAllBreads() });
    }
  },
  render: function() {
    return (
      <div>
        <h1>Breads</h1>
        <BreadList breads={this.state.breads} />
      </div>
    );
  }
});

module.exports = Breads;
