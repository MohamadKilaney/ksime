import React, { useState } from 'react';
import "./card.css";

//import images
import photo from '../../images/1-6288.jpg'

import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Button } from '@material-ui/core';

function Cards() {
    return (
        <div className="card">
            <img src={photo} className="images" />
            <div className="title">
                title the product
            </div>
            <div className="price">
                150$
            </div>
            <div className="middle">
                <LocalMallOutlinedIcon className="ri" fontSize="large" />
                <FavoriteBorderIcon fontSize="large" />
            </div>
        </div>
    );
};

export default Cards;