import "./Location.css";
import React from "react";
import Map from '../Map/Map';
import InstaIcon from "../images/Instagram.png";
import FaceBookIcon from "../images/Facebook.png";

function template() {
  return (
    <div id="location" className="location">

      <div className="contentContainer">

        <div className="locationContainer">

      			<dl>	
              
          			<dt><p><b>Address</b></p></dt>
          			<dd>151 Morgan Rd, Green Hill, Australia</dd>
          			<dt><p><b>Phone  </b> </p></dt>
          			<dd>04-5814-4909</dd>
          	</dl>

            <div className="socialMedia">
              <a href="https://www.instagram.com/explore/tags/southsidepaintball/" target="_blank"> <img  src={InstaIcon} /> </a>
              <a href="https://www.facebook.com/southsidepaintball/" target="_blank"> <img src={FaceBookIcon} /></a>
             
            </div>
  			</div>
  			<div className="mapContainer">
  	      			<Map/>
  	   </div>
    </div>
	</div>
  );
};

export default template;
