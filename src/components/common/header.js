var React = require('react');
var Link = require('react-router-dom').Link;

var Header = React.createClass({
  render: function() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a href='/' className='navbar-brand'>
            <img className='logo' src='../images/brot.jpeg' />
          </a>
          <ul className='nav navbar-nav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/breads'>Breads</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
