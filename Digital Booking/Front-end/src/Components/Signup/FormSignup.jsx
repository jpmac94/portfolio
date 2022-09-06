import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "../../styles/Signup/FormSignup.css";
import TextWant from "../MenuHamburguer/TextWant"
import Swal from 'sweetalert2'



const FormSignin = () => {
  const [shown, setShown] = useState(null);
  const [name, setName] = useState({ field: "", valid: null });
  const [lastname, setLastname] = useState({ field: "", valid: null });
  const [email, setEmail] = useState({ field: "", valid: null });
  const [password, setPassword] = useState({ field: "", valid: null });
  const [confirmpassword, setConfirmpassword] = useState({
    field: "",
    valid: null,
  });

  const nav = useNavigate();

  


  const handleSubmit = (e) => {
    e.preventDefault();
    const signin = {
      name: name.field,
      lastname: lastname.field,
      email: email.field,
      password: password.field,
      confirmpassword: confirmpassword.field,
      logueado: true
    };

    if (validatorAll() === true) {
      var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "nombre": name.field+" "+lastname.field,
    "nombreUsuario": email.field,
    "email": email.field,
    "password": confirmpassword.field
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/auth/nuevoUsuario", requestOptions)
    .then(response => response.json())
    .then(result =>{

      console.log(result)
      if(result.mensaje==="Usuario creado"){
        localStorage.setItem("data", JSON.stringify(signin))
        Swal.fire("Check your email", "You only need verify your email !", "success");

        setName({ field: "", valid: null });
        setLastname({ field: "", valid: null });
        setEmail({ field: "", valid: null });
        setPassword({ field: "", valid: null });
        setConfirmpassword({ field: "", valid: null });
        nav('/login');
      }
      if(result.mensaje==="Ese nombre ya existe"){
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "User already exists. Please, Enter new data!",
        });
      }
    } )
    .catch(error => console.log('error', error));

    
      //localStorage.setItem("data", JSON.stringify(signin))
      //console.log(signin);
      //localStorage.setItem("jwt", JSON.stringify("Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmEiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJ1c2VyOndyaXRlIn0seyJhdXRob3JpdHkiOiJ1c2VyOnJlYWQifV0sImlhdCI6MTY1NTgwMDUwMSwiZXhwIjoxNjU2OTkwMDAwfQ.zXJtnCm_zRmbHD3a2TdCaFx1tueWf5we2EM_ezsQ56Q"))

      //console.log(JSON.parse(localStorage.getItem("jwt")))
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Incomplet Form. Please, complete it!",
      });
    }

  };

  const onChangeName = ({ currentTarget }) =>
    setName({ ...name, field: currentTarget.value });
  const onChangeLastname = ({ currentTarget }) =>
    setLastname({ ...lastname, field: currentTarget.value });
  const onChangeEmail = ({ currentTarget }) =>
    setEmail({ ...email, field: currentTarget.value });
  const onChangePassword = ({ currentTarget }) =>
    setPassword({ ...password, field: currentTarget.value });
  const onChangeConfirmpassword = ({ currentTarget }) =>
    setConfirmpassword({ ...confirmpassword, field: currentTarget.value });

  const switchShown = () => setShown(!shown);

  //   ---------------------VALIDATIONS---------------
  const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letters, numbers, hyphen and underscore.
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces can carry accents.
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, //Letters and spaces can carry accents.
    password: /^.{6,20}$/, // 4 a 12 digits.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numbers.
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

  const validatorPassword = () => {
    if (expressions.password.test(password.field)) {
      setPassword({ ...password, valid: false });
    } else {
      setPassword({ ...password, valid: true });
    }
  };

  const validatorConfirpassword = (e) => {
    if (confirmpassword.field === password.field) {
      setConfirmpassword({ ...confirmpassword, valid: false });
    } else {
      setConfirmpassword({ ...confirmpassword, valid: true });
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
      password.field === "" ||
      password.valid === true ||
      confirmpassword.field === "" ||
      confirmpassword.valid === true
    ) {
      return false
    } else {
      return true
    }
  };

  return (
    <div className="container-form">
      <form className="form-register" onSubmit={handleSubmit}>
        <h4>Create Account</h4>
        <div className="namelastname">
          <div className="inputName">
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

            />
            {name.valid === true ? (
              <span className="incorect n"> Required field </span>
            ) : (
              ""
            )}
          </div>
          <div className="inputLastname">
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
            />
            {lastname.valid === true ? (
              <span className="incorect l"> Required field</span>
            ) : (
              ""
            )}
          </div>
        </div>
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
        />
        {email.valid === true ? (
          <span className="incorect e">Required field</span>
        ) : (
          ""
        )}
        <div className="input-password">
          <div className="input-password-lie">
            <div>
              <label className="labels" htmlFor="password">
                Password
              </label>

              <input
                className={
                  password.valid === true
                    ? "controlsInvalidPassword"
                    : "controls password"
                }
                type={shown ? "text" : "password"}
                name="password"
                id="password"
                onChange={onChangePassword}
                value={password.field}
                onBlur={validatorPassword}
              />
              {password.valid === true ? (
                <span className="incorect p">Required field</span>
              ) : (
                ""
              )}

            </div>
            <div className="btn" onClick={switchShown}>
              {shown ? <AiOutlineEye className="eye" /> : <AiOutlineEyeInvisible />}
            </div>
          </div>

        </div>
        <label className="labels" htmlFor="confirmpassword">
          Confirm Password
        </label>
        <input

          className={
            confirmpassword.valid === true ? "controlsInvalid" : "controls"
          }
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          onChange={onChangeConfirmpassword}
          value={confirmpassword.field}
          onBlur={validatorConfirpassword}
        />
        {confirmpassword.valid === true ? (
          <span className="incorect c"> Passwords don't match </span>
        ) : (
          ""
        )}
        <div>
          <button className="botons" id="botons" type="submit">
            Create Account
          </button>
        </div>
        <div className="redirection">

          <TextWant route="/login" text="Do you have an account?" name="LogIn" />
        </div>
      </form>
    </div>
  );
};

export default FormSignin;
