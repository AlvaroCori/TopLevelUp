var React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore')

function getAppState(){
    return ["22","33","44","55"]
}
var App = React.createClass({
    getInitialState: function(){
        return getAppState();
    },
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },
    render: function(){
        return (
            <div>
                qwertyuiop
            </div>
        );
    },
    _onChange: function(){
        this.setState(getAppState());
    }
})
module.exports = App;