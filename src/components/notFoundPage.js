"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>There is nothing to see here!</p>
        <p><Link to='/'>Back to Home</Link></p>
      </div>
    );
  }
});

module.exports = NotFoundPage;
