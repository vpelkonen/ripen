import React from 'react';
import ReactDOM from 'react-dom';
import Parse from 'parse';
import ParseReact from 'parse-react';


const TaskList = React.createClass({
	mixins: [ParseReact.Mixin],
	observe: function(){

	},
	render: function(){
		return(
			<ul className="taskList">
				<li><button>Task is here to show what the task is all aboasdasdasdasdut</button></li>
				<li><button>Task is here to show what the task is all about</button></li>
				<li><button>Task is here to show what the task is all about</button></li>
				<li><button>Task is here to show what the task is all about</button></li>
			</ul>
		);
	}
});

export default TaskList;