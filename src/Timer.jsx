import React from 'react';
import ReactDOM from 'react-dom';

const Timer = React.createClass({
	getInitialState: function(){
		return {
			timerOn: false,
			secondsElapsed: 0 // 5 = 25 min
		};
	},
	tick: function(){
		if(this.state.timerOn && this.state.secondsElapsed != 5){
			this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
		}
		else if(this.state.timerOn && this.state.secondsElapsed >= 5){
			alert("YO");
			this.setState({ timerOn: false });
		}
	},
	componentDidMount: function(){
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function(){
		clearInterval(this.interval);
	},
	fixDigit: function(str){
    	return (new Array(3).join('0')+str).slice(-2);
	},
	handleClick: function(e){
		this.setState({timerOn: !this.state.timerOn});
	},
	render(){
		let minutes = Math.floor((5 - this.state.secondsElapsed) / 60);
		let seconds = this.fixDigit((5 - this.state.secondsElapsed) - minutes * 60);
		return(
			<button className="timerClock" onClick={ this.handleClick }> {minutes + ":" + seconds}</button>
		);
	}
});

module.exports = Timer;