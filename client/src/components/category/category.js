import React, { useState } from 'react';
import "./category.css";

//import images
import img1 from "../../images/category/category chair.png"
import img2 from "../../images/category/category closet.png"
import img3 from "../../images/category/category office.png"


function Category() {
    return (
        <div className="category">
            <div className="cat"><img src={img1} /></div>
            <div className="cat"><img src={img2} /></div>
            <div className="cat"><img src={img3} /></div>
            <div className="cat"><img src={img1} /></div>
            <div className="cat"><img src={img2} /></div>
            <div className="cat"><img src={img3} /></div>
        </div>
    );
};

export default Category;