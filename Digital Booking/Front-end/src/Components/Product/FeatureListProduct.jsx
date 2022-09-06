import React from "react";
import { FaBed } from "react-icons/fa";
import {MdKitchen, MdTv, MdPool, MdPets, MdSpa, MdOutlineFreeBreakfast, MdHotTub, MdBathroom, MdOutlineLocalLaundryService, MdOutlineBathroom} from "react-icons/md";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { BsSnow } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { BiDrink } from "react-icons/bi";
import { RiTempHotLine } from "react-icons/ri";
import { GiPoolTableCorner, GiLockers } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";

import './../../styles/product/featureListProductStyles.css'

export default function FeatureListProduct(props) {

    props.datosHeader != undefined && console.log(props.datosHeader.features);

    /* for (let i = 0; i < 2; i++) {*/
    return (
        <>
            <div className="feature-products-container">
                {props.datosHeader != undefined && props.datosHeader.features.map((feature) => {
                    switch (feature.name) {
                        case "<MdKitchen/>":
                            return (
                                <>
                                    <p>
                                        <MdKitchen /> <span>Kitchen</span>
                                    </p>
                                </>

                            );
                            break;

                        case "<AiFillCar/>":
                            return (
                                <>
                                <p>
                                    <AiFillCar /><span>Parking</span> 
                                </p>
                                </>
                            
                            );
                            break;

                        case "<MdTv/>":
                            return (
                                <>
                                <p>
                                    <MdTv /> <span>TV</span>
                                </p>
                                </>
                                );
                            break;

                        case "<MdPool/>":
                            return (
                                <>
                                <p>
                                   <MdPool /> <span>Swimming Pool</span> 
                                </p>
                                </>
                                );
                            break;

                        case "<BsSnow/>":
                            return (
                                <>
                                <p>
                                    <BsSnow /> <span>Air-conditioning</span> 
                                </p>
                                </>
                                );
                            break;

                        case "<AiOutlineWifi/>":
                            return (
                                <>
                                <p>
                                    <AiOutlineWifi /> <span>Wi-Fi</span>
                                </p>
                                </>
                                );
                            break;

                        case "<MdPets/>":
                            return (
                                <>
                                <p>
                                    <MdPets /> <span>Pet friendly</span> 
                                </p>
                                </>
                               );
                            break;

                        case "<MdSpa/>":
                            return (
                                <>
                                <p>
                                    <MdSpa /> <span>Spa</span> 
                                </p>
                                </>
                                );
                            break;

                        case "<MdOutlineFreeBreakfast/>":
                            return (
                                <>
                                <p>
                                    <MdOutlineFreeBreakfast /> <span>Breakfast</span>
                                </p>
                                </>
                                );
                            break;

                        case "<CgGym/>":
                            return (
                                <>
                                <p>
                                    <CgGym /> <span>Gym</span> 
                                </p>
                                </>
                                );
                            break;

                        case "<BiDrink/>":
                            return (
                                <>
                                <p>
                                    <BiDrink /> <span>Drinks</span> 
                                </p>
                                </>
                                );
                            break;

                        case "<MdHotTub/>":
                            return (
                                <>
                                <p>
                                     <MdHotTub /> <span>Bathtub</span> 
                                </p>
                                </>
                               );
                            break;

                        case "<RiTempHotLine/>":
                            return (
                                <>
                                <p>
                                    <RiTempHotLine /> <span>Heating</span> 
                                </p>
                                </>
                                );
                            break;

                        case "<FaBed/>":
                            return (
                                <>
                                <p>
                                    <FaBed /> <span>Bed</span> 
                                </p>
                                </>
                                );
                            break;

                        case "<MdBathroom/>":
                            return (
                                <>
                                <p>
                                   <MdOutlineBathroom /> <span>Bathroom</span>
                                </p>
                                </>
                                );
                            
                            break;

                        case "<GiPoolTableCorner/>":
                            return (
                                <>
                                <p>
                                     <GiPoolTableCorner /> <span>Billiards</span> 
                                </p>
                                </>
                               );
                            break;

                        case "<MdOutlineLocalLaundryService/>":
                            return (
                                <>
                                <p>
                                    <MdOutlineLocalLaundryService /> <span>Laundry Service</span>
                                </p>
                                </>
                                );
                            break;

                        case "<GrPersonalComputer/>":
                            return (
                                <>
                                <p>
                                    <GrPersonalComputer /> <span>Computers</span>
                                </p>
                                </>
                                );
                            break;

                        case "<IoGameControllerOutline/>":
                            return (
                                <>
                                <p>
                                    <IoGameControllerOutline /> <span>Play</span>
                                </p>
                                </>
                                );
                            break;

                        case "<GiLockers/>":
                            return (
                                <>
                                <p>
                                    <GiLockers /><span>Lockers</span> 
                                </p>
                                </>
                                );
                            break;




                    }

                })}
            </div>
        </>
    );
}
