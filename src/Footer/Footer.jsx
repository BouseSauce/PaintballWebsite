import "./Footer.css";
import React from "react";
import InstaIcon from "../images/Instagram.png";
import GithubIcon from "../images/Facebook.png";

function template() {
  return (
  	<div id="footer" className="container">
  		<div className="pageBackGround">
		    <div className="footer">
		      <a href="#nav"><h1>Home</h1></a>
		      <a href="#location"><h1>Find Us</h1></a>
		      <h1>Price</h1>
		    </div>
		 
		     <div className="imageIcons">
			    	<a href="https://www.instagram.com/explore/tags/southsidepaintball/" target="_blank"><img  src={InstaIcon} /> </a>
			    	<a href="https://www.facebook.com/southsidepaintball/" target="_blank"><img src={GithubIcon} /></a>
			    </div>
			    <div className="builtBy">
			    <p> <a href="www.bouse.co.nz">Built by bouse</a></p>
			     </div>
			  
	    </div>

	</div>
  );
};

export default template;
 