import React, { useContext, useEffect, useState, memo } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ContextProduct } from "../../Context/ContextProduct";
import Loader from "../../Loader";
import RatingCard from "../RatingCard/RatingCard";
import FeatureList from "../FeatureList";

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
import { VscChromeClose } from "react-icons/vsc";
import Swal from 'sweetalert2'
import ModalMap from "./ModalMap";
import MapsBlock from "../../Product/maps/MapsBlock";


const CardProductByQuery = (props) => {
  const [clickParrafo, setClickParrafo] = useState(false);
  const [heart, setHeart] = useState(false);
  const { addProductToFavorite, deleteProductToFavorite,
    setIdProductReservation, idProductItem, setIdProductItem,
    productItem, idProductItemDelete, setIdProductItemDelete,
    boolSaveFav, setBoolSaveFav } =
    useContext(ContextProduct);

  const [openMap, setOpenMap] = useState(false);
  const handleMap = () => setOpenMap(!openMap);

  const nav = useNavigate();

  useEffect(() => {
    productItem.length !== 0 && productItem.forEach(favourite => {
      if (favourite.product.id === props.product.id) {
        //debeìa aparecer el corazòn en rojo, sino ponerlo en false
        setHeart(true)
      }
    }, [])
  })
  const handleButton = () => {

    setIdProductReservation(props.product.id)
    props.idCategory !== undefined
      ? nav("/product/" + props.idCategory + "/" + props.product.name)
      : nav("/product/" + props.product.id + "/" + props.product.name);
  };
  const handleHeart = () => {
    //console.log(JSON.parse(localStorage.getItem("nombre")));
    if (JSON.parse(localStorage.getItem("nombre")) !== null) {
      if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_USER"){
        setHeart(!heart)

        console.log(heart);
        
        if (heart === false) {
          setIdProductItem(props.product.id)
          setBoolSaveFav(true)
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Please, Go to "My favourites"'
          })
        }
      }
      
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'You must be logged in to save as a favorite!'
      })
    }
  }


  // console.log(props.product);

  return (
    <div className="card" key={props.id + "C"}>
      <div className="contenedor-img">
        <FaHeart
          className={heart ? "heartRed" : "heart"}
          onClick={handleHeart}
        />
        <img
          src={props.product.pictures[0].url}
          // src={productUnit.crimg}
          alt="imagen hotel"
          className="image"
        />
      </div>
      <div className="data">
        {/* <div className="puntuacion">
                <div>
                  <p className="category">
                    {props.category.title}
                    
                    <GrStar className="star" />
                    <GrStar className="star" />
                    <GrStar className="star" />
                    <GrStar className="star" />
                    <GrStar className="star" />
                  </p>

                  <h2 className="title">{props.name}</h2>
                  
                </div>
                <div className="puntuacion2">
                  <p className="numbre"> 8 </p>
                  <p className="raitng">Awfully good</p>
                </div>
              </div> */}
        <RatingCard {...props.product} />
        <div className="ubi">
          <p>
            <span>
              <FaMapMarkerAlt />
            </span>
            940m from the center{" "}

            <span className="show-map" onClick={handleMap}>SHOW ON MAP</span>



          </p>

          <div className="icons">
            <FeatureList propsDatos={props.product} />

          </div>
        </div>
        <p className="description">
          {clickParrafo
            ? props.product.description
            : props.product.description.substring(0, 230)}{" "}
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
      <ModalMap
        openMap={openMap}
        handleMap={handleMap}

        datosHeader={props.product}


      />
    </div>
  );
};

export default CardProductByQuery;
