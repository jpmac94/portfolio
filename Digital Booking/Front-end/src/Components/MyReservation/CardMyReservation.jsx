import React, { useContext, useState, useEffect } from 'react'
import { ContextProduct } from '../Context/ContextProduct';

import Ratings from '../Product/Ratings';
import { Link, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt} from "react-icons/fa";

import RatingsMyReservation from './RatingsMyReservation';
import Swal from 'sweetalert2'
import ModalMap from '../Main/CardProductsByQuery/ModalMap';

export default function CardMyReservation({ reservation,setBoolRe,setReservations }) {
    // const [clickParrafo, setClickParrafo] = useState(false);
    const {setIdProductReservation ,setCountReservation,countReservation,userName,setProductReservation,productReservation} = useContext(ContextProduct);
    let namePerson = reservation.name[0].toUpperCase() + reservation.name.slice(1);
    let lastNamePerson = reservation.lastname[0].toUpperCase() + reservation.lastname.slice(1);
    let partsStart = reservation.startDate.split("-");
    let partsEnd = reservation.endDate.split("-");

    let ddS = partsStart[2]
    let mmS = partsStart[1]
    let aaS = partsStart[0]

    let ddE = partsEnd[2]
    let mmE = partsEnd[1]
    let aaE = partsEnd[0]
    const nav = useNavigate();
    const handleButton = () => {
    
        setIdProductReservation(reservation.product.id)
        reservation.idCategory !== undefined
          ? nav("/product/" + reservation.idCategory + "/" + reservation.product.name)
          : nav("/product/" + reservation.product.id + "/" + reservation.product.name);
      };
      const deleteReservation=()=>{
        Swal
    .fire({
        title: reservation.product.name,
        text: "Delete?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Yes, delete",
        cancelButtonText: "Cancel",
    })
    .then(resultado => {
        if (resultado.value) {
            // Hicieron click en "Sí"
            console.log("*se elimina la venta*");
            console.log(reservation.id);
        setBoolRe(true)
        let requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
      
          reservation.id!==undefined&&fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/deleteById/"+reservation.id, requestOptions)
            .then(response => response.json())
            .then(result =>{
              console.log(reservation.id);
              const nl=productReservation.filter(f=>f.id!==reservation.id)
                console.log(nl);
                setProductReservation([...nl])
                setReservations([...nl])
                setBoolRe(true)
                    // console.log(result)
              //window.location.reload(true)
            //   setBoolRe(true)
               setCountReservation(countReservation)
              
              
            } )
            // setBoolRe(true)
            .catch(error =>
                {

                    console.log('error', error);
                    console.log(reservation.id);
                      const nl=productReservation.filter(f=>f.id!==reservation.id)
                            console.log(nl);
                            setProductReservation([...nl])
                            // setReservations([...nl])
                            setBoolRe(true)
                            
                } )
        } else {
            // Dijeron que no
            console.log("*NO se elimina la venta*");
        }
    });
        
            // setBoolRe(true)
      }

    // console.log(reservation.product);
    const [openMap, setOpenMap] = useState(false);
    const handleMap = () => setOpenMap(!openMap);
  
    return (
        <>

           {reservation!==undefined&&
            <div className="card-reservation" >
            <div className="image-reservation">
                <img
                    src={reservation.product.pictures[0].url}
                    // src={productUnit.crimg}
                    alt="imagen hotel"
                    className="imageR"
                />
            </div>

            <div className="content-reservation">
                <div className='pReservation-name'>
                    <div>
                        <h2>
                            {reservation.product.name}
                        </h2>
                    </div>
                    <div className='div-rating-myR'>
                        <RatingsMyReservation datosHeader={reservation.product} />
                    </div>

                </div>

                <div className="ubi-Reservation">
                    <p>
                        <span>
                            <FaMapMarkerAlt />
                        </span>
                        940m from the center{" "}
                        <span onClick={handleMap}
                            className="show-map"
                           
                        >
                            SHOW ON MAP
                        </span >
                    </p>
                </div>

                <div className='info-reservation'>
                    <div className='info-r'>
                        <h3>Check-in</h3>
                        <p>{ddS + ' - ' + mmS + ' - ' + aaS}</p>
                    </div>


                    <div className='info-r'>
                        <h3>Check-out</h3>
                        <p>{ddE + ' - ' + mmE + ' - ' + aaE}</p>
                    </div>
                </div>

                <div className='info-person-reservation'>
                    <div className='info-r'>
                        <h3>Name</h3>
                        <p>{namePerson}</p>
                    </div>

                    <div className='info-r'>
                        <h3>Last name</h3>
                        <p>{lastNamePerson}</p>
                    </div>
                </div>
                <div className='buttons-reservation'>
                    <button className='see-product' onClick={handleButton}>See details</button>
                    <button onClick={deleteReservation} className='delete-reservation'>Delete reservation</button>
                </div>

            </div>


            <ModalMap
        openMap={openMap}
        handleMap={handleMap}

        datosHeader={reservation.product}


      />


        </div>}


        </>

    )
}
