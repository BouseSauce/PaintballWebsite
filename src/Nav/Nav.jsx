import "./Nav.css";
import React from "react";

import Logo from '../images/logo.jpg'
function template() {
  return (
    <div id="nav" className="nav">
   

      	<div className="navContainer">
      	<a href="#"><h1>Home</h1></a>
      	<a href="#location"><h1>Find Us</h1></a>
      	<a href="#price"><h1>Price</h1></a>
      	</div>
      	   	<div className="buttonContainer">	
      	<a href='#'><h1 className="button">Book Now</h1></a>
      	<a href='href="tel:0458144909"'><h1 className="button">Call Now</h1></a>
      	</div>   
      
    </div>
  );
};

export default template;
 