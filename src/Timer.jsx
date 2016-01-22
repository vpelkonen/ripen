import React from 'react';
import ReactDOM from 'react-dom';

const Timer = React.createClass({
	getInitialState: function(){
		return {secondsElapsed: 0};
	},
	tick: function(){
		this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
	},
	componentDidMount: function(){
		this.interval = setInterval(this.tick, 1000);
	},
	componentWillUnmount: function(){
		clearInterval(this.interval);
	},
	handleClick(e){

	},
	render(){
		return(
			<div> Timer: {this.state.secondsElapsed}</div>
/*			<button onClick={ this.handleClick } className="timerButton"></button>*/
		);
	}
});

module.exports = Timer;