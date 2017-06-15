var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand'>
            <img className='logo' src='../images/brot.jpeg' />
          </a>
          <ul className='nav navbar-nav'>
            <li><a href='/#about'>About</a></li>
            <li><a href='/'>Home</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
