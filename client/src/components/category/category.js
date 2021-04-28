import React, { useState } from 'react';
import "./category.css";

//import images
import img1 from "../../images/category/category chairs.png"
import img2 from "../../images/category/category closet (1).png"
import img3 from "../../images/category/category community.png"
import img4 from "../../images/category/category desk.png"
import img5 from "../../images/category/category office (1).png"
import img6 from "../../images/category/category recieve.png"


function Category() {
    return (
        <div className="category">
            <div className="cat"><img src={img1} /></div>
            <div className="cat"><img src={img2} /></div>
            <div className="cat"><img src={img3} /></div>
            <div className="cat"><img src={img4} /></div>
            <div className="cat"><img src={img5} /></div>
            <div className="cat"><img src={img6} /></div>
        </div>
    );
};

export default Category;