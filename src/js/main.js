var App = require('./components/App');
var React = require('react');
const ReactDOM = require('react-dom');
var AppAPI = require('./utils/AppAPI.js');

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);