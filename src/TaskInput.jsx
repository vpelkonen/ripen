import React from 'react';
import ReactDOM from 'react-dom';

const TaskInput = React.createClass({
	getInitialState: function(){
		return {
			text: false
		};
	},
	componentDidMount: function(){

	},
	componentWillUnmount: function(){

	},
	formAction: function(){

	},
	render: function(){
		// Fill in existing tasks with autocorrec (possibly show autocorrect taska in order always on focus)
		return(
			<form action={ this.formAction }>
				<p>TASK</p>
				<input type="text" maxLength="100" name="taskName" />
			</form>
		);
	}
});

export default TaskInput;