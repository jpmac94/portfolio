import React from 'react'
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../styles/formAdmin/slider.css"

import CarouselFet from './Carousel';
export default function SecondForm() {
    console.log('secondForm')
    return (
        <div className="containerFormClass">
        <h2 className="c h2"> Add Features </h2>
        <div>
          <CarouselFet/>
        </div>
          
      </div>
    );
  }
