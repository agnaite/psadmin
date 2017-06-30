"use strict";

var React = require('react');
var Input = require('../common/textInput');

var BreadForm = React.createClass({
  render: function() {
    return (
      <form>
        <Input
          name="firstName"
          label="First Name"
          value={this.props.bread.firstName}
          onChange={this.props.onChange} />

      <Input
          name="lastName"
          label="Last Name"
          value={this.props.bread.lastName}
          onChange={this.props.onChange} />

        <input
          type="submit"
          value="Save"
          className="btn btn-default"
          onClick={this.props.onSave} />
      </form>
    );
  }
});

module.exports = BreadForm;
