import React from 'react'

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

export default function FeatureList(props) {


    return (
        <>
            {
               props.propsDatos !== undefined &&  props.propsDatos.features.map((feature) => {
                    switch (feature.name) {
                        case "<MdKitchen/>":
                            return (<MdKitchen />);
                            break;

                        case "<AiFillCar/>":
                            return (<AiFillCar />);
                            break;

                        case "<MdTv/>":
                            return (<MdTv />);
                            break;

                        case "<MdPool/>":
                            return (<MdPool />);
                            break;

                        case "<BsSnow/>":
                            return (<BsSnow />);
                            break;

                        case "<AiOutlineWifi/>":
                            return (<AiOutlineWifi />);
                            break;

                        case "<MdPets/>":
                            return (<MdPets />);
                            break;

                        case "<MdSpa/>":
                            return (<MdSpa />);
                            break;

                        case "<MdOutlineFreeBreakfast/>":
                            return (<MdOutlineFreeBreakfast />);
                            break;

                        case "<CgGym/>":
                            return (<CgGym />);
                            break;

                        case "<BiDrink/>":
                            return (<BiDrink />);
                            break;

                        case "<MdHotTub/>":
                            return (<MdHotTub />);
                            break;

                        case "<RiTempHotLine/>":
                            return (<RiTempHotLine />);
                            break;

                        case "<FaBed/>":
                            return (<FaBed />);
                            break;

                        case "<MdBathroom/>":
                            return (<MdBathroom />);
                            break;

                        case "<GiPoolTableCorner/>":
                            return (<GiPoolTableCorner />);
                            break;

                        case "<MdOutlineLocalLaundryService/>":
                            return (<MdOutlineLocalLaundryService />);
                            break;

                        case "<GrPersonalComputer/>":
                            return (<GrPersonalComputer />);
                            break;

                        case "<IoGameControllerOutline/>":
                            return (<IoGameControllerOutline />);
                            break;

                        case "<GiLockers/>":
                            return (<GiLockers />);
                            break;




                    }
                })}
        </>
    )


}
