import React, { useContext, useState } from 'react'

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
import { ContextProduct } from '../../Context/ContextProduct';
import { useEffect } from 'react';

export default function FeatureListCP(props) {

    const {featureContext,setFeatureContext} = useContext(ContextProduct);
    const[featuresCP,setFeaturesCP]=useState([])
    // useEffect(()=>{
    //     setFeaturesCP([...featureContext])
    // },[])
    // useEffect(()=>{
    //     setFeaturesCP(featureContext)
    //     console.log(featuresCP);
    // },[featureContext])
    const deleteF=(e)=>{

        console.log(e.id);
       setFeatureContext([...featureContext.filter(f=>f.id!==e.id)])
       console.log(featuresCP);
    }
    

    return (
        <>
            {
               featureContext.length !== 0 &&  featureContext.map((feature) => {
                    
                        switch (feature.name) {
                        case "<MdKitchen/>":
                            return (<MdKitchen onClick={()=>deleteF(feature)} />);
                            break;

                        case "<AiFillCar/>":
                            return (<AiFillCar onClick={()=>deleteF(feature)} />);
                            break;

                        case "<MdTv/>":
                            return (<MdTv onClick={()=>deleteF(feature)} />);
                            break;

                        case "<MdPool/>":
                            return (<MdPool onClick={()=>deleteF(feature)} />);
                            break;

                        case "<BsSnow/>":
                            return (<BsSnow onClick={()=>deleteF(feature)} />);
                            break;

                        case "<AiOutlineWifi/>":
                            return (<AiOutlineWifi onClick={()=>deleteF(feature)} />);
                            break;

                        case "<MdPets/>":
                            return (<MdPets onClick={()=>deleteF(feature)} />);
                            break;

                        case "<MdSpa/>":
                            return (<MdSpa onClick={()=>deleteF(feature)} />);
                            break;

                        case "<MdOutlineFreeBreakfast/>":
                            return (<MdOutlineFreeBreakfast onClick={()=>deleteF(feature)} />);
                            break;

                        case "<CgGym/>":
                            return (<CgGym onClick={()=>deleteF(feature)} />);
                            break;

                        case "<BiDrink/>":
                            return (<BiDrink onClick={()=>deleteF(feature)} />);
                            break;

                        case "<MdHotTub/>":
                            return (<MdHotTub onClick={()=>deleteF(feature)} />);
                            break;

                        case "<RiTempHotLine/>":
                            return (<RiTempHotLine onClick={()=>deleteF(feature)} />);
                            break;

                        case "<FaBed/>":
                            return (<FaBed onClick={()=>deleteF(feature)} />);
                            break;

                        case "<MdBathroom/>":
                            return (<MdBathroom onClick={()=>deleteF(feature)} />);
                            break;

                        case "<GiPoolTableCorner/>":
                            return (<GiPoolTableCorner onClick={()=>deleteF(feature)} />);
                            break;

                        case "<MdOutlineLocalLaundryService/>":
                            return (<MdOutlineLocalLaundryService onClick={()=>deleteF(feature)} />);
                            break;

                        case "<GrPersonalComputer/>":
                            return (<GrPersonalComputer  onClick={()=>deleteF(feature)} />);
                            break;

                        case "<IoGameControllerOutline/>":
                            return (<IoGameControllerOutline onClick={()=>deleteF(feature)} />);
                            break;

                        case "<GiLockers/>":
                            return (<GiLockers onClick={()=>deleteF(feature)} />);
                            break;




                    }
                })}
        </>
    )


}