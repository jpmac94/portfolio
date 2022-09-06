import React, { useContext, useEffect, useState } from "react";

import { IoLocationSharp } from "react-icons/io5";

import "../../../styles/detailReservation.css";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ContextProduct } from "../../Context/ContextProduct";

import NewMao from "./NewMao";
import ImageGallery from 'react-image-gallery';
import FeatureListCP from "./FeatureListCP";

export default function ProductAdmin() {
  const {
    cateAdmin,
    addressAdmin,

    nameAdmin,

    descriptionAdmin,
   cityAdmin,

    urlAdmin,
    housesRulesC, healthCareC, cancellationPolicyC, featureContext
  } = useContext(ContextProduct);

  console.log(featureContext)

  const [imagesUrls, setImagesUrls] = useState([])

  useEffect(() => {
    if (urlAdmin.length !== 0) {

      urlAdmin.map(u1 => setImagesUrls([...imagesUrls, u1.description]))
    }
  }, [urlAdmin])

  urlAdmin.length !== 0 && console.log(urlAdmin.description)
  console.log(imagesUrls)
  console.log(addressAdmin + "esto es del product");

  const nav = useNavigate();
  const handleBtnSubmit = (e) => {
    e.preventDefault();

    const pictureArray=[]
    urlAdmin.forEach(p=>{
      pictureArray.push({
        "title": nameAdmin[0],
        "url": p.description
      })
    })
    console.log(pictureArray);
    const featureArray=[]
    featureContext.forEach((f)=>{
      featureArray.push({id:f.id})
    })
    console.log(featureArray);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": nameAdmin[0],
      "description":descriptionAdmin[0] ,
      "category": {
        "id": parseInt(cateAdmin[0])
      },
      "city": {
        "id": 1
      },
      "pictures": pictureArray,
      "features": featureArray
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // fetch("localhost:8080/api/product/save", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

    // Swal.fire("Success!", "You have successfully Booking", "success");
    // nav("/");




    // else{

    //   Swal.fire({
    //     icon: "error",
    //     title: "Error",
    //     text: "Incomplet dates reservation. Please, complete it!",
    //   });
  };




  return (
    <div className="container-card-reservationAdmi">
      <h2 className="c h2">Details Product</h2>
      <div className="container-reservation-body">
        <div className="container-img-create">
          {urlAdmin.length !== 0 &&

            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              showIndex={false}
              autoPlay={true}
              slideOnThumbnailOver={false}
              showThumbnails={false}
              items={urlAdmin}
              selectable={true}
            />
            /*urlAdmin.map((u,index)=>{
                console.log(u.description);
              <img
                //src="aca va una props"
                src={u.description}
                alt="imagen"
                className="image-reservation"
              />
    
            })*/
          }
        </div>
        <div className="container-text">
          <div className="texts">

          {cateAdmin !== undefined && (
              <h3 className="category">{cateAdmin}</h3>
            )}

            {nameAdmin !== undefined && (
              <h3 className="name-product">{nameAdmin}</h3>
            )}
            <div className="ubication-reservation">
              <IoLocationSharp className="place-icon" />
              <p>
               {addressAdmin}
              </p>
            </div>
            {/* <div>
            
                  <NewMao/>
              
            </div> */}
            <div className='features-create-product'>
              {featureContext.length !== undefined &&
                <FeatureListCP propsDatos={featureContext} />
              }
            </div>
            <div className="description-of-product-create">
              <h3> Description of the Product</h3>
              <p className="description">{descriptionAdmin}</p>
              {/* <p className="description">{housesRulesC}</p> */}
            </div>

            <div className="description-create-container">

              {housesRulesC !== undefined &&
                <div className="description-block-create">
                  <h3>House's rules</h3>
                  <p className="description">{housesRulesC.field}</p>
                </div>
              }

              {healthCareC !== '' && (
                <div className="description-block-create">
                  <h3>Health and Care</h3>
                  <p className="description">{healthCareC.field}</p>
                </div>
              )}
              {cancellationPolicyC !== '' && (
                <div className="description-block-create">
                  <h3>Cancellation Policy</h3>
                  <p className="description">{cancellationPolicyC.field}</p>
                </div>
              )}


            </div>

          </div>

          <button onClick={handleBtnSubmit} className="button-create">
            {" "}
            Create Product
          </button>


        </div>
      </div>
    </div>
  );
}
