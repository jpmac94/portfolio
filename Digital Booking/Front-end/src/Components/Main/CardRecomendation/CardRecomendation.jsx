import React, { useContext, useState } from "react";

import "../../../styles/card/cardRecomendation.css";

import { FaSwimmer, FaMapMarkerAlt, FaWifi, FaHeart, FaBed } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import { MdKitchen, MdTv, MdPool, MdPets, MdSpa, MdOutlineFreeBreakfast, MdHotTub, MdBathroom, MdOutlineLocalLaundryService } from "react-icons/md";
import { AiFillCar, AiOutlineWifi } from "react-icons/ai";
import { BsSnow } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { BiDrink } from "react-icons/bi";
import { RiTempHotLine } from "react-icons/ri";
import { GiPoolTableCorner, GiLockers } from "react-icons/gi";
import { GrPersonalComputer } from "react-icons/gr";
import { IoGameControllerOutline } from "react-icons/io5";

import { Link, useNavigate } from "react-router-dom";
import RatingCard from "../RatingCard/RatingCard";

import { ContextProduct, ProviderProduct } from "../../Context/ContextProduct";
import FeatureList from "../FeatureList";

export default function CardList(props) {
  const [clickParrafo, setClickParrafo] = useState(false);
  const [heart, setHeart] = useState(false);
  const { addProductToFavorite, deleteProductToFavorite } = useContext(
    ContextProduct
  );

  // console.log(props[0].category.title);

  const nav = useNavigate();
  const handleButton = () => {
    nav("/product/" + props.id + "/" + props.name);
  };

  const handleHeart = () => {
    setHeart(!heart);
    heart ? deleteProductToFavorite(props) : addProductToFavorite(props);
  };

  console.log(props.productItem);
  return (
    <>
      <div className="card" key={props.id}>
        <div className="contenedor-img">
          <FaHeart
            className={heart ? "heartRed" : "heart"}
            onClick={handleHeart}
          />
          <img
            src={props.pictures[0].url}
            // src={productUnit.crimg}
            alt="imagen hotel"
            className="image"
          />
        </div>

        <div className="data">
          <RatingCard {...props} />

          <div className="ubi">
            <p>
              <span>
                <FaMapMarkerAlt />
              </span>
              940m from the center{" "}
              <Link
                className="show-map"
                to={
                  "/maps/" +
                  props.city.state.name +
                  "/" +
                  props.city.name +
                  "/" +
                  props.city.state.country.name
                }
              >
                SHOW ON MAP
              </Link>
            </p>

            <div className="icons">
             <FeatureList propsDatos={props} />
              </div>
          </div>

          <p className="description">
            {clickParrafo
              ? props.description
              : props.description.substring(0, 230)}{" "}
            <span
              className="spanMoreLess"
              onClick={() => setClickParrafo(!clickParrafo)}
            >
              {clickParrafo ? "Less..." : "More..."}
            </span>
            {/* {productUnit.description}  <a href="">More..</a> */}
          </p>
          <button onClick={handleButton} className="buttonDetail">
            See detail
          </button>
        </div>
      </div>
    </>
  );
}
