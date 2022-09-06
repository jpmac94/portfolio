import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import Ratings from "../Product/Ratings";

import "../../styles/detailReservation.css";
import Loader from "../Loader";
import { ContextProduct } from "../Context/ContextProduct";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


const DetailReservation = ({props}) => {
  const nav = useNavigate()
  const {productReservation,datesTransferStart,
          datesTransferEnd,setFlagAllTrue,
          boolLcal,setIdProductReservation,
          idProductReservation,
          boolReservation,setBoolReservation,
          setDatesTransferStart,setDatesTransferEnd,
          setTimeCkeckin,timeCheckin,
          setExtraDate,extraDate,
          setTestCovid,testCovid,flagAllTrue,

          fechaReservaStart,setFechaReservaStart,
      fechaReservaEnd,setFechaReservaEnd,
      userName,setUserName,
      nameR,setNameR,
    lastnameR,setLastnameR,
    emailR,setEmailR,
    cityR,setCityR,
    subBool,setsubBool,subBoolDos,setsubBoolDos,
    
    setProductReservation,
    countReservation,setCountReservation
      }=useContext(ContextProduct)
      const [idPR,setIdPR]=useState('')
      const [covidC,setCovidC]=useState(false)
      const [extraT,setExtraT]=useState('')
      const [timeC,setTimeC]=useState('')
      const [fecha1,setfecha1]=useState([])
      const [fecha2,setfecha2]=useState([])
      const [usernameT,setUsernameT]=useState('')
      const [nameRT,setNameRT]=useState('')
      const [lastnameRT,setLastnameRT]=useState('')
      const [emailRT,setEmailRT]=useState('')
      const [cityRT,setCityRT]=useState('')
      useEffect(()=>{
        idProductReservation!==''&&setIdPR(idProductReservation)
      },[idProductReservation])
      useEffect(()=>{
        testCovid!==''&&setCovidC(testCovid)
      },[testCovid])
      useEffect(()=>{
        extraDate!==''&&setExtraT(extraDate)
      },[extraDate])
      useEffect(()=>{
        timeCheckin!==''&&setTimeC(timeCheckin)
      },[timeCheckin])
      
      // useEffect(()=>{
      //   fechaReservaStart.length!==0&&setfecha1(fechaReservaStart);
        
      // },[fechaReservaStart])
      // useEffect(()=>{ 
      //   fechaReservaEnd.length!==0&&setfecha2(fechaReservaEnd);
      // },[fechaReservaEnd])

      useEffect(()=>{
        userName!==''&&setUsernameT(userName)
      },[userName])

      useEffect(()=>{
        nameR!==''&&setNameRT(nameR)
      },[nameR])
      useEffect(()=>{
        lastnameR!==''&&setLastnameRT(lastnameR)
      },[lastnameR])
      useEffect(()=>{
        emailR!==''&&setEmailRT(emailR)
      },[emailR])
      useEffect(()=>{
        cityR!==''&&setCityRT(Object.values(cityR)[0])
      },[cityR])

  const handleBtnSubmit=e=>{
    e.preventDefault();
    setsubBool(true)
    if(idPR!==''&&timeC!==''&&fechaReservaStart.length===3&&fechaReservaEnd.length===3&&usernameT!==''&&nameRT!==''&&lastnameRT!==''&&cityRT!==''&&emailRT!=='' ){
      
      fReservTime()
      setIdPR('')
      setFechaReservaStart([])
      setFechaReservaEnd([])
      setNameRT('')
      setLastnameRT('')
      setCityRT('')
      setEmailRT('')
      setCountReservation(countReservation+1)
      Swal.fire("Success!", "You have successfully Booking", "success");
      nav("/")
    }else{
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Incomplet dates reservation. Please, complete it!",
      });
    }
    console.log(idPR);
    console.log(timeC);
    console.log(fechaReservaStart.length);
    console.log(fechaReservaEnd.length);
    console.log(usernameT);
    console.log(nameRT);
    console.log(lastnameRT);
    console.log(cityRT);
    console.log(emailRT);
  }
  //----------fetch save reservation-------
  const fReservTime=()=>{
    console.log("log");
    let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            "startTime": timeC,
            "startDate": fechaReservaStart[0]+"-"+(fechaReservaStart[1]+1)+"-"+fechaReservaStart[2],
            "endDate": fechaReservaEnd[0]+"-"+(fechaReservaEnd[1]+1)+"-"+fechaReservaEnd[2],
            "extraData": extraT,
            "covidTest": covidC,
            "name": nameRT,
            "lastname": lastnameRT,
            "city": cityRT,
            "email": emailRT,
            "product": {
              "id": idPR
            },
            "usuario": {
              "nombreUsuario": usernameT
            }
          });
          
          
          let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          
            fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/save", requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log(result)
                let requestOptions = {
                  method: 'GET',
                  redirect: 'follow'
                };
                
                userName!==''&&fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findById/"+result.id, requestOptions)
                  .then(response => response.json())
                  .then(result2 => {
                      setProductReservation([...productReservation,result2])
                      window.location.reload(true)
                      console.log(result2)
                  })
                  .catch(error => console.log('error', error));
            })
             
            .catch(error => console.log('error', error));
  }

  // console.log(fechaReservaStart);
  // console.log(fechaReservaEnd);
  // console.log(fechaReservaStart[0]+"-"+(fechaReservaStart[1]+1)+"-"+fechaReservaStart[2]);
  //---------------------------------------
  return (
    <>{props!==null ?
    <div className="container-detail-reservation">
        
        <h2 className="c h2">Details Reservation</h2>
      <div className="container-reservation-body">
      <div className="container-img">
        <img
          //src="aca va una props"
          src={props.pictures[0].url}
          alt={props.pictures[0].title}
          className="image-reservation"
        />
      </div>
      <div className="container-text">
    <div className="texts">
   

          <h4 className="category"> {props.category.title}</h4>

          <h3 className="name-product">{props.name}</h3>
         <div className="container-rating-reservation">
          <Ratings datosHeader={props}/>
      </div>

      <div className="ubication-reservation">
        <IoLocationSharp className="place-icon" /> 
        <p>{props.city.state.name}, {props.city.name}, {props.city.state.country.name}</p>
      </div>
      </div>

      <div className="container-checkAll">
      
      <div className="container-check-in-check-out">
        <p>Check in</p>
        {/* <p>{fecha1!==''?(fecha1[0]+"-"+fecha1[1]+"-"+fecha1[2]):"_-_-_"}</p> */}
        <p>{fechaReservaStart.length!==0?(fechaReservaStart[0]+"-"+(parseInt(fechaReservaStart[1])+1)+"-"+fechaReservaStart[2]):"_-_-_"}</p>
      </div>
      
      <div className="container-check-in-check-out out">
        <p>Check out</p>
        {/* <p> {fecha2!==''?(fecha2[0]+"-"+fecha2[1]+"-"+fecha2[2]):"_-_-_"}</p> */}
        <p>{fechaReservaEnd.length!==0?(fechaReservaEnd[0]+"-"+(parseInt(fechaReservaEnd[1])+1)+"-"+fechaReservaEnd[2]):"_-_-_"}</p>
      </div>
      </div>

      
     

     

      
        <button onClick={handleBtnSubmit} className="button-reservation"> Confirm Reservation</button>
      
        </div>

    </div>
    </div>
   : <Loader/> }
   </>
  );
};
export default DetailReservation;
