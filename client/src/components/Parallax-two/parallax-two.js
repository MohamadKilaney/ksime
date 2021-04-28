import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import Cards from '../../components/cards/card';
import Slider from "react-slick";
import Tableis from "../../images/is.png";
import './parallax-two.css'

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
    <Parallax bgImage={Tableis} strength={700}>
      <div className="pic-pic2">

        <Slider {...settings} className="content-2">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Slider>
      </div>
    </Parallax>
  );
};

export default ParallaxTwo;
