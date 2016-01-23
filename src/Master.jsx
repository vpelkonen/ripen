import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';
import TaskInput from './TaskInput.jsx';

const Master = React.createClass({
	getInitialState: function(){
		return null;
	},
	render(){
		return(
            <main>
            	<TaskInput />
            	<Timer />
            </main>
		);
	}
});

export default Master;