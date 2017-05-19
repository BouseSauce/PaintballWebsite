import "./Nav.css";
import React from "react";

import Logo from '../images/logo.jpg'
function template() {
  return (
    <div id="nav" className="nav">
   
      	<a href="#"><h1>Home</h1></a>
      	<a href="#location"><h1>Find Us</h1></a>
      	<a href="#price"><h1>Price</h1></a>
      	<a href='#'><h1 className="button">Book Now</h1></a>
   
    </div>
  );
};

export default template;
 