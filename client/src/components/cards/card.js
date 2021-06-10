import React from 'react';
import "./card.css";


function Cards({photo,title,price}) {
    return (
        <div className="card">
            <img src={photo} className="images" />
            <div className="product_title">
                {title}
            </div>

            <div className="product_price">
            {price} 
            </div>
        </div>
    );
};

export default Cards;