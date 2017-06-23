"use strict";

var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Routes = React.createClass({
  render: function() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={require("./components/homePage")}/>
          <Route path='/about' component={require("./components/about/aboutPage")}/>
          <Route path='/breads' component={require("./components/breads/breadPage")}/>
          <Route path='*' component={require("./components/NotFoundPage")} />
        </Switch>
      </main>
    );
  }
});

module.exports = Routes;
