import React from 'react';
import "./card.css";

//import images
import photo from '../../images/cross1.png'

function Cards() {
    return (
        <div className="card">
            <img src={photo} className="images" />
            <div className="product_title">
                כסא בר – דגם פרימה
            </div>

            <div className="product_price">
            &#8362; 1500 
            </div>
        </div>
    );
};

export default Cards;