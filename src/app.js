import React from 'react';
import ReactDOM from 'react-dom';
import Master from './Master.jsx';
import './style.scss';

main();

function main() {
    ReactDOM.render(<Master/>, document.getElementById('app'));
}