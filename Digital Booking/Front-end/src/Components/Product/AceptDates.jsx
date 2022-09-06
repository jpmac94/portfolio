import React,{useState} from 'react'
import "../../styles/dates.css"

import {  useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { ContextProduct } from '../Context/ContextProduct';

export default function AceptDates({datosHeader}) {
  // const [reservation,setReservation] = useState(null);
  const nav=useNavigate();
  const {boolReservation,setBoolReservation}=useContext(ContextProduct)

 
  const handleButton=()=>{
    if (JSON.parse(localStorage.getItem("jwt")) === null){
      nav("/login")
      setBoolReservation(true);
    }
else{
  if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_USER"){
    nav("/product/"+datosHeader.id+"/"+datosHeader.name+"/reservation")
    setBoolReservation(false);
    console.log("entrando")
  }
}   
  }

  return (
    <div className="c container-dates-confirm">
        <p>Add your travel dates to get exact prices</p>
        <button onClick={handleButton} className="c buttonDetail"> Start reservation</button>
    </div>
  )
}
