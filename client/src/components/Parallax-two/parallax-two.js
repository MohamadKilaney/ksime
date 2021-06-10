import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Cards from '../../components/cards/card';
import Slider from "react-slick";
import Tableis from "../../images/is.png";
import './parallax-two.css'

import showProduct from '../../pages/showProduct/showProduct'
import image1 from '../../images/350.jpg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function ParallaxTwo() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Router>

      <Parallax bgImage={Tableis} strength={500}>
        <div className="c-image">
          <div className="c-title">
            new category
          </div>
          <Slider {...settings} className="content-2">
            <Cards photo={image1} title="test1 , test2" price="0" className="card"/>
            <Cards photo={image1} title="test1 , test2" price="0"/>
            <Cards photo={image1} title="test1 , test2" price="0"/>
            <Cards photo={image1} title="test1 , test2" price="0"/>
            <Cards photo={image1} title="test1 , test2" price="0"/>
 
          </Slider>
        </div>

      </Parallax>


    </Router>

  );
};



export default ParallaxTwo;
