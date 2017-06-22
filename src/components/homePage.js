"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className='jumbotron'>
        <h1>Schnittlauchbrot</h1>
        <p>Brot</p>
        <Link to='about' className='btn btn-primary btn-large'>Learn more!</Link>
      </div>
    );
  }
});

module.exports = Home;
