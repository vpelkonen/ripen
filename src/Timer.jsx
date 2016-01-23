import React from 'react';
import ReactDOM from 'react-dom';

const Timer = React.createClass({
	getInitialState: function(){
		return {
			timerOn: false,
			totalSeconds: 5,
			secondsElapsed: 0
		};
	},
	tick: function(){
		if(this.state.timerOn && this.state.secondsElapsed != this.state.totalSeconds){
			this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
		}
		else if(this.state.timerOn && this.state.secondsElapsed >= this.state.totalSeconds){
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
		if(this.state.secondsElapsed < this.state.totalSeconds){
			this.setState({timerOn: !this.state.timerOn});
		}
	},
	render(){
		let minutes = Math.floor((this.state.totalSeconds - this.state.secondsElapsed) / 60);
		let seconds = this.fixDigit((this.state.totalSeconds - this.state.secondsElapsed) - minutes * 60);
		return(
			<button className="timerClock" onClick={ this.handleClick }> {minutes + ":" + seconds}</button>
		);
	}
});

export default Timer;