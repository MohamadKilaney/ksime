import React, { useState } from 'react';
import "./ads.css";

//import images
import Ads1 from "../../images/creativity.jpg"

function Ads() {
    return (
        <div className="aa">
            <div className="part1">
                <img src={Ads1} width="100%" height="100%" />
            </div>
            <div className="part2">
                <div className="qq">
                    <img src={Ads1} width="100%" height="100%" />
                </div>
                <div className="qqq">
                    <img src={Ads1} width="100%" height="100%" />
                </div>
            </div>
        </div>
    );
};

export default Ads;