import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav/index.js';
import Home from './Home/Home.js';
import './index.css';

ReactDOM.render( 
	< div >
		< Nav /> 
		< Home /> 
	< /div>,
    document.getElementById('root')
);
