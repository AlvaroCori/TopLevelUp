import { render } from '@testing-library/react';
var React = require('react');
const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore')
var createReactClass = require('create-react-class');
const styles = require('../../css/tree.css');

function getElements()
{
    let elements = [{"color":"red"},{"color":"green"}, {"color":"azul"},{"color":"black"},{"color":"white"},{"color":"orange"},{"color":"purple"}];
    let keyNumber = -1;
    let width = 100;
    let containersToRender = elements.map(element => {
        keyNumber += 1;
        return (
        <div className='containerElement'
             key={keyNumber}
             
             style={{width:`${100/(Math.floor(Math.log2(keyNumber+1))+1)}%`}}>
            <div className='cardElement'>
                {element.color}
            </div>
        </div>
        )
    });
    return (containersToRender);
}
function scre()
{

    /*
    window.addEventListener('DOMContentLoaded', function(event){
        const inputs = document.querySelectorAll(`#treeOfElements div`);
        inputs.forEach((input)=>{
            let state = false;
            let activeElementToMove = "";
            let prevX = 0, prevY = 0;
            let deltaX = 0, deltaY = 0;
            input.addEventListener('mousedown',function mouseDown(e) {
                state = true;
                prevX = e.pageX;
                prevY = e.pageY;
                activeElementToMove = e.currentTarget.id;
            }, false);
            document.addEventListener('mousemove', function mouseMove(e){
                if (state) {
                    deltaX = e.pageX - prevX;
                    deltaY = e.pageY - prevY;
                    var panel = document.getElementById(activeElementToMove);
                    panel.style.left = panel.offsetLeft + deltaX + "px";
                    panel.style.top = panel.offsetTop + deltaY + "px";
                    prevX = e.pageX;
                    prevY = e.pageY;
                }
            }, false);
            document.addEventListener('mouseup', function mouseUp(e) {
                state = false;
            }, false);
        });
    })
    */
}
function scrp(elem)
{
    window.addEventListener('DOMContentLoaded', function(event){
        var state = false;
        var activeElementToMove = "";
        var prevX = 0, prevY = 0;
        var deltaX = 0, deltaY = 0;
        var handleMouseDown = function(e) {
            state = true;
            prevX = e.pageX;
            prevY = e.pageY;
            activeElementToMove = e.currentTarget.id;
        }

        var handleMouseMove = function(e) {
            if (state) {
                deltaX = e.pageX - prevX;
                deltaY = e.pageY - prevY;
                var panel = document.getElementById(activeElementToMove);
                panel.style.left = panel.offsetLeft + deltaX + "px";
                panel.style.top = panel.offsetTop + deltaY + "px";
                prevX = e.pageX;
                prevY = e.pageY;
            }
        }
        var handleMouseUp = function(e) {
            state = false;
        }
        let element = document.getElementById(elem);
        element.addEventListener('mousedown', handleMouseDown, false);
        document.addEventListener('mousemove', handleMouseMove, false);
        document.addEventListener('mouseup', handleMouseUp, false);
    });

}
function scr(){
    window.addEventListener('DOMContentLoaded', function(event){
        var state = false;
        var activeElementToMove = "";
        var prevX = 0, prevY = 0;
        var deltaX = 0, deltaY = 0;

        var handleMouseDown = function(e) {
            state = true;
            prevX = e.pageX;
            prevY = e.pageY;
            activeElementToMove = e.currentTarget.id;
        }

        var handleMouseMove = function(e) {
            if (state) {
                deltaX = e.pageX - prevX;
                deltaY = e.pageY - prevY;
                var panel = document.getElementById(activeElementToMove);
                panel.style.left = panel.offsetLeft + deltaX + "px";
                panel.style.top = panel.offsetTop + deltaY + "px";
                prevX = e.pageX;
                prevY = e.pageY;
            }
        }

        var handleMouseUp = function(e) {
            state = false;
        }

        var panel1 = document.getElementById("dv1");
        panel1.addEventListener('mousedown', handleMouseDown, false);
        var panel2 = document.getElementById("dv2");
        panel2.addEventListener('mousedown', handleMouseDown, false);
        document.addEventListener('mousemove', handleMouseMove, false);
        document.addEventListener('mouseup', handleMouseUp, false);
    });
}
var App = createReactClass({
    getInitialState: function(){
        return {number:"34"};
    },
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
    },
    componentUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },
    render: function(){
        /*
        
        */
        return (
            <div key="1">
                <div id="treeOfElements" className="containerTree"> 
                    {getElements()}
                </div>
                <div id="stat" className="statView"></div>
                <div id="container" className="container">
                    <div className="dv1" id="dv1">            
                    </div>
                    <div className="dv2" id="dv2">            
                    </div>
                </div>
                {scre()}
            </div>
            
        );
    },
    _onChange: function(){
        this.setState({number:"34"});
    }
})
//module.exports = App;
export default App;