import "./Home.css";
import React from "react";
import nameLogo from'../images/LogoWithNam.jpg';

function template() {
  return (
    <div id="home" className="home">
		<div className="backgroundContainer">
			<img src={nameLogo}/>
		</div>
    
    </div>
  );
};

export default template;
