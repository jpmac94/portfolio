import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import FeatureList from '../../Main/FeatureList'
import { useParams } from 'react-router-dom'

import { FaBed } from "react-icons/fa";
import { MdKitchen, MdTv, MdPool, MdPets, MdSpa, MdOutlineFreeBreakfast, MdHotTub, MdOutlineBathroom, MdOutlineLocalLaundryService } from "react-icons/md";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { BsSnow } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { BiDrink } from "react-icons/bi";
import { RiTempHotLine } from "react-icons/ri";
import { GiPoolTableCorner, GiLockers } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";
import { useContext } from 'react'
import { ContextProduct } from '../../Context/ContextProduct'

export default function Carousel() {


  const [sliderRef, setSliderRef] = useState(null)

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  const { id } = useParams();

  const [features, setFeatures] = useState()
  const [featuresNew, setFeaturesNew] = useState([])
  const {featureContext,setFeatureContext}=useContext(ContextProduct)

  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/feature/findAll", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        return setFeatures(result);

      })
      .catch(error => console.log('error', error));
  }, [])

  features !== undefined ? console.log(features) : console.log('ndada')


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  }, []);


  const sliderSettings = {
    // removes default buttons
    className: "center",
    centerMode: true,
    arrows: false,
    slidesToShow: width > 940? 3 : 2 && width>470?2 : 1,
    slidesToScroll: 3,
    infinite: true,
   
    speed: 500,
  }
  const switchRender = (feature) => {
    switch (feature.name) {
      case "<MdKitchen/>":
        return (
          <>
            <p>Kitchen</p>
            <MdKitchen />
          </>

        );
        break;

      case "<AiFillCar/>":
        return (
          <>
            <p>Parking</p>

            <AiFillCar />
          </>

        );
        break;

      case "<MdTv/>":
        return (
          <>
            <p> TV </p>
            <MdTv />
          </>
        );
        break;

      case "<MdPool/>":
        return (
          <>
            <p>Swimming Pool</p>
            <MdPool />
          </>
        );
        break;

      case "<BsSnow/>":
        return (
          <>
            <p>Air-conditioning </p>
            <BsSnow />
          </>
        );
        break;

      case "<AiOutlineWifi/>":
        return (
          <>
            <p>Wi-Fi   </p>
            <AiOutlineWifi />

          </>
        );
        break;

      case "<MdPets/>":
        return (
          <>
            <p>Pet friendly</p>
            <MdPets />

          </>
        );
        break;

      case "<MdSpa/>":
        return (
          <>
            <p>Spa</p>
            <MdSpa />
          </>
        );
        break;

      case "<MdOutlineFreeBreakfast/>":
        return (
          <>
            <p>Breakfast</p>
            <MdOutlineFreeBreakfast />

          </>
        );
        break;

      case "<CgGym/>":
        return (
          <>
            <p>Gym  </p>
            <CgGym />

          </>
        );
        break;

      case "<BiDrink/>":
        return (
          <>
            <p>Drinks</p>
            <BiDrink />

          </>
        );
        break;

      case "<MdHotTub/>":
        return (
          <>
            <p>Bathtub</p>
            <MdHotTub />

          </>
        );
        break;

      case "<RiTempHotLine/>":
        return (
          <>
            <p>Heating</p>
            <RiTempHotLine />

          </>
        );
        break;

      case "<FaBed/>":
        return (
          <>
            <p>Bed  </p>
            <FaBed />

          </>
        );
        break;

      case "<MdBathroom/>":
        return (
          <>
            <p>Bathroom  </p>
            <MdOutlineBathroom />

          </>
        );

        break;

      case "<GiPoolTableCorner/>":
        return (
          <>
            <p>Billiards</p>
            <GiPoolTableCorner />

          </>
        );
        break;

      case "<MdOutlineLocalLaundryService/>":
        return (
          <>
            <p>Laundry Service    </p>
            <MdOutlineLocalLaundryService />

          </>
        );
        break;

      case "<GrPersonalComputer/>":
        return (
          <>
            <p>Computers </p>
            <GrPersonalComputer />

          </>
        );
        break;

      case "<IoGameControllerOutline/>":
        return (
          <>
            <p>Play </p>
            <IoGameControllerOutline />

          </>
        );
        break;

      case "<GiLockers/>":
        return (
          <>
            <p>Lockers </p>
            <GiLockers />

          </>
        );
        break;

    }
    const handleButton = () => {
      

    }

  }
  const handleAdd=(e)=>{
    console.log("click");
    console.log(e);
    if(featuresNew.length!==0){

      console.log("entro al if de featureNew !=0");
      featuresNew.forEach(f=>{
        if(f.id===e.id){
          console.log("entro al if de iguales");
          setFeaturesNew([...featuresNew])
        }else{
          console.log("entro al if de id distintos");
          setFeaturesNew([...featuresNew,e])
        }
      })
    }else{
      console.log("entro al if de featureNew === 0");
      setFeaturesNew([...featuresNew,e])
    }
    //setFeaturesNew([...featuresNew,e])
    console.log(featuresNew);
    
  }
  useEffect(()=>{
    console.log(featuresNew);
    setFeatureContext([...featuresNew]);
  },[featuresNew])
 console.log(featuresNew);
 
  return (
    <div className='content'>
      <div className='buttonsContainer'>
        <button onClick={() => sliderRef.slickPrev()}>
          <FaChevronLeft />
        </button>
        <button onClick={() => sliderRef.slickNext()}>
          <FaChevronRight />
        </button>
      </div>

      <div>

        <Slider ref={setSliderRef} {...sliderSettings}>
          {features !== undefined && features.map((card, index) => (
            <div key={index}>
          {/*}    <h2 className="c h2Titulo">{card.name}</h2>*/}

              <div className='features-div-render'>
                {switchRender(card)}
              </div>


             {/*} <p className='pFeatured'>{card.id}</p>*/}
              <button onClick={()=>handleAdd(card)} className='add-feature' >Add</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}