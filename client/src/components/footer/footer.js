import React, { useState } from 'react';
import "./footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="p-1">
                <h3>title part 1</h3>
                <span>0524523183</span>
                <span>0524523183</span>
                <span>ksime@gmail.com</span>
                <span>Umm el fhem</span>
            </div>
            <div className="p-2">
                <h3>title part 2</h3>
                <span>link 1</span>
                <span>link 2</span>
                <span>link 3</span>
                <span>link 4</span>
                <span>link 5</span>
                <span>link 6</span>
            </div>
            <div className="p-3">
                <h3>title part 2</h3>
                <p>random text random text random text random text random text random text random text random text random text random text random text </p>

            </div>
        </div>
    );
};

export default Footer;