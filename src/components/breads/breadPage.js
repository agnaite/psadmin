"use strict";

var React = require('react');
var BreadApi = require('../../api/breadApi');

var Breads = React.createClass({
  getInitialState: function() {
    return {
      breads: []
    };
  },
  componentWillMount: function() {
    this.setState({ breads: BreadApi.getAllBreads() });
  },
  render: function() {
    var createBreadRow = function(bread) {
      return (
        <tr key={bread.id}>
          <td>
            <a href={"/#breads/" + bread.id}>{bread.id}</a>
          </td>
          <td>
            {bread.firstName} {bread.lastName}
          </td>
        </tr>
      );
    };
    return (
      <div>
        <h1>Breads</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.state.breads.map(createBreadRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Breads;
