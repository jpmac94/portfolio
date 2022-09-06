import React, { useState, useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import FeatureList from '../../../Main/FeatureList'
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
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


export default function FeaturesCarousel({ props }) {

    const [productFeatures, setProductFeatures] = useState(props.features)
    console.log(productFeatures)

    const [sliderRef, setSliderRef] = useState(null)

    const [features, setFeatures] = useState([])

    const [width, setWidth] = useState(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize)
    }, []);


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


    /*guardo en array todos los que no estan*/
    let array = [];
    for (let i = 0; i < features.length; i++) {
        let igual = false;
        for (let j = 0; j < productFeatures.length & !igual; j++) {
            if (features[i]['id'] == productFeatures[j]['id'])
                igual = true;
        }
        if (!igual) array.push(features[i]);
    }
    console.log(array)
    // const [aux, setAux] = useState(array)

    //console.log(aux)
    console.log(productFeatures)

    const handleAdd = (e) => {
        console.log(typeof (e.target.value))

        for (let i = 0; i < productFeatures.length; i++) {
            //  console.log('1for')
            if (productFeatures[i].id !== e.target.value) {
                for (let j = 0; j < array.length; j++) {
                    //    console.log('2for')
                    console.log(array[j].id)
                    if (array[j].id == e.target.value) {
                        setProductFeatures([...productFeatures, array[j]])

                    }
                }
                array = array.filter((item) => item.id !== e.value);
            }

        }

        /*  igual = features.filter((item) => item.id === [e.target.value])
          console.log(igual)*/


        console.log(productFeatures)
        console.log(array)
    }
    const [estado, setEstado] = useState([])

    const handleDelete = (e) => {
        console.log(e.target.value)

        setProductFeatures(productFeatures.filter((item) => item.id != e.target.value))
        //setEstado([...i, i])
        console.log(productFeatures)


    }
    console.log(array)

    console.log(productFeatures)
    const sliderSettings = {
        // removes default buttons
        className: "center",
        centerMode: true,
        arrows: false,
        slidesToShow: width > 470 ? 3 : 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
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

    }

    return (
        <>
          
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
                        {array !== undefined && array.map((feature, index) => (
                            <div key={index}>
                                {/*}    <h2 className="c h2Titulo">{card.name}</h2>*/}

                                <div className='features-div-render'>
                                    {switchRender(feature)}
                                </div>
                                {/*} <p className='pFeatured'>{card.id}</p>*/}
                                <button className='add-feature-update' onClick={handleAdd} value={feature.id}>Add</button>
                            </div>

                        ))}

                        {productFeatures !== undefined && productFeatures.map((feature, index) => (
                            <div key={index}>
                                {/*}    <h2 className="c h2Titulo">{card.name}</h2>*/}

                                <div className='features-div-render'>
                                    {switchRender(feature)}
                                </div>


                                {/*} <p className='pFeatured'>{card.id}</p>*/}
                                <button className='delete-feature-update' onClick={handleDelete} value={feature.id} >Delete</button>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>


        </>
    )
}
