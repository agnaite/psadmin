"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var App = require('./components/app');

ReactDOM.render(<Router><App /></Router>, document.getElementById('app'));
