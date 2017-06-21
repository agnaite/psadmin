"use strict";

var React = require('react');

var BreadsList = React.createClass({

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
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.props.breads.map(createBreadRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = BreadsList;
