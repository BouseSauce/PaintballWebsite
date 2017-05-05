import "./Nav.css";
import React from "react";
import F_Icon from "../images/i-header-facebook.svg";

function template() {
  return (
    <div className="navbarContainer">
		<h1>Home</h1>	
		<h1>About</h1>	
		<h1>Parties</h1>	
	
		<div className="socialMedia">
			<img className="image16" src={F_Icon}></img>
			<img className="image16" src={F_Icon}></img>
			<img className="image16" src={F_Icon}></img>
		</div>

		
				<p className="bookText">Book</p>
			
    </div>
  );
};

export default template;
