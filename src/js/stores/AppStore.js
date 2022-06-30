 var AppDispatcher = require("../dispatcher/AppDispatcher");
 var AppConstant = require("../constants/AppConstants");
 var EventEmitter = require('events').EventEmitter;
 var assign = require('object-assign');
 var AppAPI = require('../utils/AppAPI.js');
const App = require("../components/App");
 var CHANGE_EVENT = 'event';

 const _items = [];
 var AppStore =  assign({},EventEmitter.prototype,{
    emitChange: function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function(callback){
        this.on('change',callback);
    },
    removeChangeListener: function(callback){
        this.removeListener('change',callback);
    }
 });
 AppDispatcher.register(function(payload){
    var action = payload.action;
    switch (action.actionType){

    }
    return true;
 })
 module.exports = AppStore;