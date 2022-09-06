import React, { useContext, useState } from "react";
import { FaMapMarkerAlt, FaSwimmer, FaWifi } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import RatingCard from "../Main/RatingCard/RatingCard";
import "../../styles/favorite/CardFavorite.css";
import { ContextProduct } from "../Context/ContextProduct";
import ModalMap from "../Main/CardProductsByQuery/ModalMap";
import Loader from '../Loader'
import FeatureList from "../Main/FeatureList";

const CardFavorite = ({ favourite }) => {
  const [clickParrafo, setClickParrafo] = useState(false);
  const { deleteProductToFavorite, addProductToFavorite,setIdProductItemDelete,boolDelFav,setBoolDelFav } = useContext(ContextProduct)
  const nav = useNavigate();
  const handleButton = () => {
    nav("/product/" + favourite.product.id + "/" + favourite.product.name);
  };
  const handleButtonDeleteF = () => {
    setIdProductItemDelete(favourite.id)
    setBoolDelFav(true)
    // addProductToFavorite(product)
  }
  // //---------------ManejoScrollX------------------
  // const cardsF=document.querySelectorAll(".cardF");
  // const checkCadrsF=()=>{
  //   const triggerBotton=window.innerHeight/5*4;
  //   cardsF.forEach(card=>{
  //     const cardTop=card.getBoundingClientRect().top;
  //     if(cardTop<triggerBotton){
  //       card.classList.add('show');
  //     }else{
  //       card.classList.remove('show')
  //     }
  //   })
  // }
  // window.addEventListener('scroll',checkCadrsF)
  // checkCadrsF();

  // //----------------------------------------------
  //  console.log(product.pictures[0].url);

  
  const [openMap,setOpenMap]=useState(false);
  const handleMap=()=> setOpenMap(!openMap);
  return (
    <>
      {favourite !== undefined ?
        <div className="cardF" key={favourite.id}>
          <div className="imageF">
            <img
              src={favourite.product.pictures[0].url}
              // src={productUnit.crimg}
              alt="imagen hotel"
              className="image"
            />
          </div>
          <div className="contentF">

            <RatingCard {...favourite.product} />


            <div className="ubi">
              <p>
                <span>
                  <FaMapMarkerAlt />
                </span>
                940m from the center{" "}
                <span className="show-map" onClick={handleMap}>SHOW ON MAP</span>
              </p>

              <div className="icons">
                <FeatureList propsDatos={favourite.product} />
              </div>
            </div>

            <p className="description">
              {clickParrafo
                ? favourite.product.description
                : favourite.product.description.substring(0, 230)}{" "}
              <span
                className="spanMoreLess"
                onClick={() => setClickParrafo(!clickParrafo)}
              >
                {clickParrafo ? "Less..." : "More..."}
              </span>
              {/* {productUnit.description}  <a href="">More..</a> */}
            </p>
            <div className="buttonsF">
              <button onClick={handleButton} className="buttonF buttonDetailF">
                See detail
              </button>
              <button onClick={handleButtonDeleteF} className="buttonF buttonDeleteF">
                Delete
              </button>
            </div>
          </div>
          
          <ModalMap
   openMap={openMap}
   handleMap={handleMap}
  
   datosHeader = {favourite.product}
 

  />
        </div>
        :
        <Loader />}
    </>
  );
};

export default CardFavorite;
