import "./Price.css";
import React from "react";
import Price from '../images/PriceList.jpg';

function template() {
  return (
    <div id="price" className="price">
    <h1>Price</h1>
    <div className="priceContainer">

    		
    		<div className="paint">
    		<h2>Paint</h2>
    		<p>Entry + 100 paintballs............................$20</p>
    		<p>1 Pod (100 paintballs)............................$15</p>
    		</div>
    		<div className='gear'>
    		<h2>Gear</h2>
    		<p>Protective gloves............................$5</p>
    		<p>Chest protector............................free for girls</p>
    		<p>Groin protector............................free for guys</p>
    		</div>
    	</div>
    </div>
  );
};

export default template;
