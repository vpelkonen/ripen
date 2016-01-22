import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer.jsx';
import './style.scss';

main();

function main() {
    ReactDOM.render(<Timer />, document.getElementById('app'));
}