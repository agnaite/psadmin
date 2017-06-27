"use strict";

var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Routes = React.createClass({
  render: function() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={require("./components/homePage")}/>
          <Route exact path='/about' component={require("./components/about/aboutPage")}/>
          <Route exact path='/breads' component={require("./components/breads/breadPage")}/>
          <Route path='*' component={require("./components/NotFoundPage")} />
        </Switch>
      </div>
    );
  }
});

module.exports = Routes;
