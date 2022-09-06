import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import "../../styles/form.css";

import Swal from 'sweetalert2'
import { useContext } from "react";
import { ContextProduct } from "../Context/ContextProduct";
import SelectorCity from "./CitySelector";
import { VscChromeClose } from "react-icons/vsc";

export default function DataReservation() {
  const [name, setName] = useState({ field: "", valid: null });
  const [lastname, setLastname] = useState({ field: "", valid: null });
  const [email, setEmail] = useState({ field: "", valid: null });
  const [city, setCity] = useState({ field: "", valid: null });
  const [covid, setCovid] = useState(true);
  const {setTestCovid,setExtraDate,setCountR,countR,nameR,setNameR,
    lastnameR,setLastnameR,
    emailR,setEmailR,
    cityR,setCityR,subBool,setsubBool,subBoolDos,setsubBoolDos}=useContext(ContextProduct)
  const nav = useNavigate();

  let storageEmail = "";

  
  //storage!==''&&console.log(storage);

let storageName=""



if (JSON.parse(localStorage.getItem("nombre")) !== null) {
  storageName = JSON.parse(localStorage.getItem("nombre"))
}
let separation = storageName.split(' ');
let localName= separation[0];
let localSurname= separation[1];



 const handleClick = (e) => {
  setCovid(!covid)
  
 }

  const handleSubmit = (e) => {
    const reservation = {
      name: name.field,
      lastname: lastname.field,
      email: email.field,
      city: city.field,
      logueado: true
    };

    if (validatorAll() === true) {
      localStorage.setItem("reservation", JSON.stringify(reservation))
      console.log(reservation);
      //Swal.fire("Success!", "You have successfully booking", "success");

      setNameR(reservation.name)
      setLastnameR(reservation.lastname)
      setEmailR(reservation.email)
      setCityR(reservation.city)

      setsubBoolDos(true)


      setName({ field: "", valid: null });
      setLastname({ field: "", valid: null });
      setEmail({ field: "", valid: null });
      setCity({ field: "", valid: null });


    } else {
      // Swal.fire({
      //   icon: "error",
      //   title: "Error",
      //   text: "Incomplet Form. Please, complete it!",
      // });
    }

  };

  const onChangeName = ({ currentTarget }) =>{

    setName({ ...name, field: currentTarget.value });
    setNameR(currentTarget.value)
  }
  const onChangeLastname = ({ currentTarget }) =>{

    setLastnameR(currentTarget.value)
    setLastname({ ...lastname, field: currentTarget.value });
  }
  const onChangeEmail = ({ currentTarget }) =>{

    setEmailR(currentTarget.value)
    setEmail({ ...email, field: currentTarget.value });
  }
    const onChangeCity = ({ currentTarget }) =>{

      setCityR(currentTarget.value)
      setCity({ ...city, field: currentTarget.value });
    }
 


  //   ---------------------VALIDATIONS---------------
  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letters and spaces can carry accents.
    city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

  };

  const validatorName = () => {
    if (expressions.name.test(name.field)) {
      setName({ ...name, valid: false });
    } else {
      setName({ ...name, valid: true });
    }
  };

  const validatorLastname = () => {
    if (expressions.lastname.test(lastname.field)) {
      setLastname({ ...lastname, valid: false });
    } else {
      setLastname({ ...lastname, valid: true });
    }
  };

  const validatorEmail = () => {
    if (expressions.email.test(email.field)) {
      setEmail({ ...email, valid: false });
    } else {
      setEmail({ ...email, valid: true });
    }
  };
  const validatorCity = () => {
    if (expressions.city.test(city.field)) {
      setCity({ ...city, valid: false });
    } else {
      setCity({ ...city, valid: true });
    }
  };


  const validatorAll = () => {
    if (
      name.field === "" ||
      name.valid === true ||
      lastname.field === "" ||
      lastname.valid === true ||
      email.field === "" ||
      email.valid === true ||
      city.field === "" ||
      city.valid === true
    ) {
      return false
    } else {
      return true
    }
  };

  useEffect(()=>{

    setTestCovid(covid)
  },[covid])
  
  const handleChangeTextarea=e=>{
    // console.log(e.target.value);
    setExtraDate(e.target.value)

  }

  useEffect(()=>{
   
    if(subBool){
      handleSubmit()

      setsubBool(false)
    }
    
  },[subBool])
  return (
    <div className="containerForm">
      <div className="group">
        <label className="labels" htmlFor="name">
          Name
        </label>

        <input
          className={name.valid === true ? "controlsInvalid" : "controls"}
          type="text"
          name="name"
          id="name"
          onChange={onChangeName}
          value={name.field}
          onBlur={validatorName}
          placeholder="Enter your name"

        />
        {name.valid === true ? (
          <span className="incorect n"> Required field </span>
        ) : (
          ""
        )}
      </div>
      <div className="group">
        <label className="labels" htmlFor="lastname">
          Last Name
        </label>

        <input
          className={lastname.valid === true ? "controlsInvalid" : "controls"}
          type="text"
          name="lastname"
          id="lastname"
          onChange={onChangeLastname}
          value={lastname.field}
          onBlur={validatorLastname}
          placeholder="Enter your last name"
        />
        {lastname.valid === true ? (
          <span className="incorect l"> Required field</span>
        ) : (
          ""
        )}
      </div>
      <div className="group">
        <label className="labels" htmlFor="email">
          Email
        </label>
        <input
          className={email.valid === true ? "controlsInvalid" : "controls"}
          type="email"
          name="email"
          id="email"
          onChange={onChangeEmail}
          value={email.field}
          onBlur={validatorEmail}
          placeholder="Enter your email address"
        />
        {email.valid === true ? (
          <span className="incorect e">Required field</span>
        ) : (
          ""
        )}
      </div>

      <div className="group">
        <label className="labels" htmlFor="city">
          City
        </label>

       { /*  <SelectorCity className={city.valid === true ? "controlsInvalid" : "controls"} />
*/}
      <input
          className={city.valid === true ? "controlsInvalid" : "controls"}
          type="city"
          name="city"
          id="city"
          onChange={onChangeCity}
          value={city.field}
          onBlur={validatorCity}
          placeholder="Enter your city"

        />
        {city.valid === true ? (
          <span className="incorect e">Required field</span>
        ) : (
          ""
        )}
      </div>



      <div className="group checkbox">
        <input type="checkbox" id="covid" onClick={handleClick} value={covid} />
        <label for="covid">Are you vaccinated against COVID-19?</label>
      </div>
      <div className="group observations">
        <label for="observations">Observations</label>
        <textarea onChange={handleChangeTextarea} className="textarea" name="observations" id="observations" cols="30" rows="5" placeholder="Do you want to comment something to the owner?"></textarea>
      </div>
    </div>
  );
};