import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Typed from 'react-typed';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './parallax-one.css'

//import images
import Pic1 from "../../images/elegance13.png"
function ParallaxOne() {
    return (
        <Parallax bgImage={Pic1} strength={100}>
            <div className="pic-pic1">
                <div className="content">
                    <span>מיליון אפשרויות ריהוט לבית, למשרד ולגן במקום אחד </span><br /><br />
                    <div className="sale-button">
                        <ArrowDropDownIcon className="bounce" /><a href="#">לצפייה בכל המבצעים</a>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default ParallaxOne;
