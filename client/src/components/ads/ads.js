import React, { useState } from 'react';
import "./ads.css";

//import images
import Ads1 from "../../images/ads/quadro.png"
import Ads2 from "../../images/1400x788 steer.png"

function Ads() {
    return (
        <div className="aa">
            <div className="part1">
                <img src={Ads1} width="100%" height="100%" />
            </div>
            <div className="part2">
                <div className="qq">
                    <img src={Ads2} width="100%" height="100%" />
                </div>
                <div className="qqq">
                    <img src={Ads1} width="100%" height="100%" />
                </div>
            </div>
        </div>
    );
};

export default Ads;