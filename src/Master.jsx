import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';
import TaskInput from './TaskInput.jsx';
import Header from './Header.jsx';
import TaskList from './TaskList.jsx';

const Master = React.createClass({
	getInitialState: function(){
		return null;
	},
	render: function(){
		return(
            <main>
            	<Header />
            	<TaskInput />
            	<Timer />
            	<TaskList />
            </main>
		);
	}
});

export default Master;