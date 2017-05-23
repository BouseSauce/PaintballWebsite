import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav/Nav.js';
import Home from './Home/index.js';
import Location from './Location/Location.js';
import Price from './Price/Price.js';
import Footer from './Footer/Footer';
import Book from './Book/Book';
import './index.css';

ReactDOM.render( 
	< div >
		< Nav />
		< Home /> 
		<Location />
		<Price/>
		<Book />
		<Footer />

	< /div>,
    document.getElementById('root')
);
