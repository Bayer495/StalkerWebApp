import './bootstrap.min.css';
import './sidebars.css';

var ReactDOM = require('react-dom');
var React = require('react');
var NavBar = require('./components/NavBar.jsx');
var LoginDisplay = require('./components/LoginDisplay.jsx');

 
ReactDOM.render(
    <NavBar />,
    document.getElementById("navbar")
)

ReactDOM.render(
    <LoginDisplay />,
    document.getElementById("main")
)