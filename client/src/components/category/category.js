import React from 'react';
import "./category.css";

import {Link} from "react-router-dom";

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
            <Link to="/Products/Chairs"><div className="cat"><img src={img1} /></div></Link>
            <Link to="/Products/Closets"><div className="cat"><img src={img2} /></div></Link>
            <Link to="/Products/Meeting"><div className="cat"><img src={img3} /></div></Link>
            <Link to="/Products/Tables"><div className="cat"><img src={img4} /></div></Link>
            <Link to="/Products/Offices"><div className="cat"><img src={img5} /></div></Link>
            <Link to="/Products/Counters"><div className="cat"><img src={img6} /></div></Link>
        </div>
    );
};

export default Category;