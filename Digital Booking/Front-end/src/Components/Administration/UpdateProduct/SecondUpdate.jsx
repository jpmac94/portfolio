import React, { useState, useEffect }from 'react'
import CarouselFet from './../CreateProduct/Carousel'
import { FaBed } from "react-icons/fa";

import { MdKitchen, MdTv, MdPool, MdPets, MdSpa, MdOutlineFreeBreakfast, MdHotTub, MdBathroom, MdOutlineLocalLaundryService } from "react-icons/md";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { BsSnow } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { BiDrink } from "react-icons/bi";
import { RiTempHotLine } from "react-icons/ri";
import { GiPoolTableCorner, GiLockers } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
import FeatureList from '../../Main/FeatureList';
import FeaturesCarousel from './featuresC/FeaturesCarousel';

export default function SecondUpdate({ props }) {
  console.log(props[0])
  const product = props[0];

 

  return (
    <div className="containerFormClass-Features">
      <h2 className="c h2"> Update Features </h2>
      {/*<div className='features-update'>
        <FeatureList propsDatos={product} />
  </div>*/}

      <div className='carousel-features-update'>
        <FeaturesCarousel props={product}/>
      </div>

    </div>
  )
}
