import React, { useContext, useState,useEffect } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { ContextProduct } from "../../Context/ContextProduct";
import NewMao from "./NewMao";
import SlectorCity from "./SlectCity";


export default function FirstForm() {
  const [name, setName] = useState({ field: "", valid: null });
  const [category, setCategory] = useState({ field: "", valid: null });
  const [adress, setAdress] = useState({ field: "", valid: null });
  const [city, setCity] = useState({ field: "", valid: null });
  const [number, setNumber] = useState({ field: "", valid: null });
  const [country, setCountry] = useState({ field: "", valid: null });
  const [state, setState] = useState({ field: "", valid: null });
  const [latitude, setLatitude] = useState({ field: "", valid: null });
  const [longitude, setLongitude] = useState({ field: "", valid: null });
  const [description, setDescription] = useState({ field: "", valid: null });

 const { setCateAdmin,
  setNameAdmin,
  
  setCountryAdmin,setCityAdmin,setNumberAdmin,setLongitudeAdmin,setLatitudeAdmin,setStateAdmin,setDescriptionAdmin
} =useContext(ContextProduct)
  // 
  useEffect(() => {
    setCateAdmin([category.field])
   setCountryAdmin([country.field])
    setNameAdmin([name.field])
    setCityAdmin([city.field])
    setNumberAdmin([number.field])
    setStateAdmin([state.field])
    setDescriptionAdmin([description.field])
}, [category,country,name,city,number,state,description])

useEffect(() => {
  setLatitudeAdmin(latitude.field)

},[latitude])
useEffect(() => {
  setLongitudeAdmin(longitude.field)
},[longitude])

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const createProduct = {
      name: name.field,
      category: category.field,
      adress: adress.field,
      city: city.field,
      country: country.field,
      number: number.field,
      state: state.field,
      latitude: latitude.field,
      longitude: longitude.field,
      description: description.field,
    };

    if (validatorAll() === true) {
      console.log(createProduct);
      Swal.fire(
        "Success!",
        "You have successfully create a Product",
        "success"
      );

      setName({ field: "", valid: null });
      setCategory({ field: "", valid: null });
      setAdress({ field: "", valid: null });
      setCity({ field: "", valid: null });
      setCountry({ field: "", valid: null });
      setState({ field: "", valid: null });
      setNumber({ field: "", valid: null });
      setLongitude({ field: "", valid: null });
      setLatitude({ field: "", valid: null });
      setDescription({ field: "", valid: null });
    } else {
      console.log(createProduct);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Incomplet Form. Please, complete it!",
      });
    }
  };

  const onChangeName = ({ currentTarget }) =>
    setName({ ...name, field: currentTarget.value });
  const onChangeCategory = ({ currentTarget }) =>
    setCategory({ ...category, field: currentTarget.value });
  const onChangeAdress = ({ currentTarget }) =>
    setAdress({ ...adress, field: currentTarget.value });
  const onChangeCity = ({ currentTarget }) =>
    setCity({ ...city, field: currentTarget.value });
  const onChangeCountry = ({ currentTarget }) =>
    setCountry({ ...country, field: currentTarget.value });
  const onChangeState = ({ currentTarget }) =>
    setState({ ...state, field: currentTarget.value });
    const onChangeNumber = ({ currentTarget }) =>
    setNumber({ ...number, field: currentTarget.value });
  const onChangeLatitude = ({ currentTarget }) =>
    setLatitude({ ...latitude, field: currentTarget.value });
  const onChangeLongitude = ({ currentTarget }) =>
    setLongitude({ ...longitude, field: currentTarget.value });
  const onChangeDescription = ({ currentTarget }) =>
    setDescription({ ...description, field: currentTarget.value });

  //   ---------------------VALIDATIONS---------------
  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
    category: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letters and spaces can carry accents.
    city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    state: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    number: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    longitude: /^[\-\+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180\.0{1,10})$/,
    latitude: /^[\-\+]?((0|([1-8]\d?))(\.\d{1,10})?|90(\.0{1,10})?)$/,
    adress: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    description: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  };

  const validatorName = () => {
    if (expressions.name.test(name.field)) {
      setName({ ...name, valid: false });
    } else {
      setName({ ...name, valid: true });
    }
  };

  // const validatorCategory = () => {
  //   if (expressions.category.test(category.field)) {
  //     setCategory({ ...category, valid: false });
  //   } else {
  //     setCategory({ ...category, valid: true });
  //   }
  // };

  const validatorAdress = () => {
    if (expressions.adress.test(adress.field)) {
      setAdress({ ...adress, valid: false });
    } else {
      setAdress({ ...adress, valid: true });
    }
  };
  const validatorNumber = () => {
    if (expressions.number.test(number.field)) {
      setNumber({ ...number, valid: false });
    } else {
      setNumber({ ...number, valid: true });
    }
  };
  const validatorCity = () => {
    if (expressions.city.test(city.field)) {
      setCity({ ...city, valid: false });
    } else {
      setCity({ ...city, valid: true });
    }
  };
  const validatorCountry = () => {
    if (expressions.country.test(country.field)) {
      setCountry({ ...country, valid: false });
    } else {
      setCountry({ ...country, valid: true });
    }
  };
  const validatorState = () => {
    if (expressions.state.test(state.field)) {
      setState({ ...state, valid: false });
    } else {
      setState({ ...state, valid: true });
    }
  };
  const validatorLongitude = () => {
    if (expressions.longitude.test(longitude.field)) {
      setLongitude({ ...longitude, valid: false });
    } else {
      setLongitude({ ...longitude, valid: true });
    }
  };
  const validatorLatitude = () => {
    if (expressions.latitude.test(latitude.field)) {
      setLatitude({ ...latitude, valid: false });
    } else {
      setLatitude({ ...latitude, valid: true });
    }
  };
  const validatorDescription = () => {
    if (expressions.description.test(description.field)) {
      setDescription({ ...description, valid: false });
    } else {
      setDescription({ ...description, valid: true });
    }
  };

  const validatorAll = () => {
    if (
      name.field === "" ||
      name.valid === true ||
      category.field === "" ||
      category.valid === true ||
      adress.field === "" ||
      adress.valid === true ||
      city.field === "" ||
      city.valid === true ||
      country.field === "" ||
      country.valid === true ||
      state.field === "" ||
      state.valid === true ||
      description.field === "" ||
      description.valid === true
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="containerForm">
      <div className="group">
        <label className="labels" htmlFor="name">
          Name of the Product
        </label>

        <input
          className={name.valid === true ? "controlsInvalid" : "controls"}
          type="text"
          name="name"
          id="name"
          onChange={onChangeName}
          placeholder="Enter Name"
          value={name.field}
          onBlur={validatorName}
        />
        {name.valid === true ? (
          <span className="incorect n"> Required field </span>
        ) : (
          ""
        )}
      </div>
     
      <div className="group">
        <label className="labels" htmlFor="category">
          Category
        </label>
        <select
          className={category.valid === true ? "controlsInvalid" : "controls"}
          name="select"
          // onBlur={validatorCategory}
          onChange={onChangeCategory}
          value={category.field}
        >
          <option value="Bed and Breakfast">Bed and Breakfast</option>
          <option value="Hotel">Hotel</option>
          <option value="Hostel">Hostel</option>
          <option value="Apartment">Apartment</option>
        </select>

        {category.valid === true ? (
          <span className="incorect l"> Required field</span>
        ) : (
          ""
        )}
      </div>
      {/* <div className="groupC">
        <div >
        <label className="labels" htmlFor="city">
          City
        </label>
        <SlectorCity className={city.valid === true ? "controlsInvalid" : "controls"} />

      { /* <input
          className={city.valid === true ? "controlsInvalid" : "controls"}
          type="city"
          name="city"
          id="city"
          onChange={onChangeCity}
          value={city.field}
          onBlur={validatorCity}

        />*/}
        {/* {city.valid === true ? (
          <span className="incorect e">Required field</span>
        ) : (
          ""
        )}
      </div>  */}
     

      {/* </div> */}
      <div className="group2">
            
            <NewMao/>
        
      </div>
      {/* <div className="group">
        <label className="labels" htmlFor="adress">
          Adress
        </label>
        <input
          className={adress.valid === true ? "controlsInvalid" : "controls"}
          placeholder="Enter Adress"
          type="adress"
          name="adress"
          id="adress"
          onChange={onChangeAdress}
          value={adress.field}
          onBlur={validatorAdress}
        />
        {adress.valid === true ? (
          <span className="incorect e">Required field</span>
        ) : (
          ""
        )}
      </div>
      <div className="group">
        <label className="labels" htmlFor="number">
          Address Number
        </label>
        <input
          className={number.valid === true ? "controlsInvalid" : "controls"}
          type="number"
          name="number"
          id="number"
          placeholder="Enter a Address Number"
          onChange={onChangeNumber}
          value={number.field}
          onBlur={validatorNumber}
        >
        </input>

        {number.valid === true ? (
          <span className="incorect e">Please enter a valid Address number</span>
        ) : (
          ""
        )}
        
      </div>
      <div className="group">
        <label className="labels" htmlFor="country">
          Country
        </label>
        <input
          className={country.valid === true ? "controlsInvalid" : "controls"}
          type="country"
          name="country"
          id="country"
          placeholder="Enter a Country"
          onChange={onChangeCountry}
          value={country.field}
          onBlur={validatorCountry}
        >
    
        </input>

        {country.valid === true ? (
          <span className="incorect e">Required field</span>
        ) : (
          ""
        )}
      </div>
      <div className="group">
        <label className="labels" htmlFor="state">
          State
        </label>
        <input
          className={state.valid === true ? "controlsInvalid" : "controls"}
          type="state"
          name="state"
          placeholder="Enter a State"
          id="state"
          onChange={onChangeState}
          value={state.field}
          onBlur={validatorState}
        >
     
        </input>

        {state.valid === true ? (
          <span className="incorect e">Required field</span>
        ) : (
          ""
        )}
      </div>
      <div className="group">
        <label className="labels" htmlFor="city">
          City
        </label>
        <input
          className={city.valid === true ? "controlsInvalid" : "controls"}
          type="city"
          name="city"
          id="city"
          placeholder="Enter a City"
          onChange={onChangeCity}
          value={city.field}
          onBlur={validatorCity}
        >
        </input>

        {city.valid === true ? (
          <span className="incorect e">Please enter a valid city</span>
        ) : (
          ""
        )}
        
      </div>
      
      <div className="group">
        <label className="labels" htmlFor="longuitude">
          Longitude
        </label>
        <input
          className={longitude.valid === true ? "controlsInvalid" : "controls"}
          type="longuitude"
          name="longuitude"
          id="longuitude"
          placeholder="Enter the Longitude"
          onChange={onChangeLongitude}
          value={longitude.field}
          onBlur={validatorLongitude}
        >

        </input>

        {longitude.valid === true ? (
          <span className="incorect e">Please enter a valid longitude</span>
        ) : (
          ""
        )}
      </div>
      <div className="group">
        <label className="labels" htmlFor="latitude">
          Latitude
        </label>
        <input
          className={latitude.valid === true ? "controlsInvalid" : "controls"}
          type="latitude"
          name="latitude"
          id="latitude"
          placeholder="Enter Latitude"
          onChange={onChangeLatitude}
          value={latitude.field}
          onBlur={validatorLatitude}
        >
       
        </input>

        {latitude.valid === true ? (
          <span className="incorect e">Please enter a valid latitude</span>
        ) : (
          ""
        )}
      </div> */}
      <div className="group observations">
        <label for="description">Description</label>
        <textarea
          className={
            description.valid === true
              ? "controlsInvalid textarea"
              : "controls textarea"
          }
          onChange={onChangeDescription}
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Write here..."
        ></textarea>
        {description.valid === true ? (
          <span className="incorect e">Please enter a valid description</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
