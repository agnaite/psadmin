/*eslint-disable strict */

var React = require('react');
var Header = require('./common/header');
var Routes = require('../routes');
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <hr />
        <div className="container-fluid">
          <Routes />
        </div>
      </div>
    );
  }
});

module.exports = App;
