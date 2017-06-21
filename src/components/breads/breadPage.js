"use strict";

var React = require('react');
var BreadApi = require('../../api/breadApi');
var BreadList = require('./breadList');

var BreadPage = React.createClass({
  getInitialState: function() {
    return {
      breads: []
    };
  },
  componentDidMount: function() {
    this._isMounted = true;
    if (this._isMounted) {
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
  },
  componentWillUnmout: function() {
    this._isMounted = false;
  }
});

module.exports = BreadPage;
