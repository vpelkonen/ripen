import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({
	getInitialState: function(){
		return {
			text: false
		};
	},
	render: function(){
		return(
			<header>
				<h1>RIPEN</h1>
			</header>
		);
	}
});

export default Header;