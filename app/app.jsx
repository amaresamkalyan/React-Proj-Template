var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();


// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Main Action Here</p>,
  document.getElementById('app')
);
