import React, { useState } from 'react';
import "./header.css";

//import images from file

//import icon from material-ui
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../images/logo ksime.png'
function header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} />
            </div>

            <div className="search">
                <input type="text" placeholder="Search.." />
                <button type="submit"><SearchIcon /></button>
            </div>
            <div className="left-div">
                <div className="icons">
                    <FavoriteBorderIcon />
                    <LocalMallOutlinedIcon />
                    1500$
                </div>
                <div className="menu">
                    <MenuIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
};

export default header;