import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';
import './style.scss';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}