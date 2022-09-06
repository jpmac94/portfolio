import React, { useContext } from "react";

import TextWant from "../MenuHamburguer/TextWant"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import ErrorLogin from "./ErrorLogin.jsx";

import "../../styles/login/Form.css";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from 'react';
import { ContextProduct } from "../Context/ContextProduct";
import AlertReservation from "./AlertReservation";
import Swal from 'sweetalert2'

function Form() {
  const [formData, setFormdata] = useState({});
  const email = "email";
  const password = "password";
  const {boolReservation,setBoolReservation,setUserName}=useContext(ContextProduct)

//   useEffect(() => {
//     var myHeaders = new Headers();

// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({
//   "username":"sarahalfonsin@hotmail.com",
//   "password": "sarah2003"
// });

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://grupo7-env.eba-4j7whm4m.us-west-1.elasticbeanstalk.com/login", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

//   },[api])
  

  const handleChange = (value, key) => {
    setFormdata({ ...formData, ...{ [key]: value } });
  };

  // --------------------
  const [userBool, setUserBool] = useState(null);
  // let storage = "";

  // if (JSON.parse(localStorage.getItem("data")) !== null) {
  //   storage = JSON.parse(localStorage.getItem("data")).name
  // }

  // useEffect(() => {
  //   if (storage !== '') {
  //     setUserBool(true);
  //   }
  // }, [])

  // --------------------
  let navigate = useNavigate();
  const [validacion, setValidacion] = useState(true);

  // const [api,setApi]=useState("")

  let emailLocal = "";
  let passwordLocal = "";

  // if (JSON.parse(localStorage.getItem("data")) !== null) {
  //   emailLocal = JSON.parse(localStorage.getItem("data")).email;
  //   passwordLocal = JSON.parse(localStorage.getItem("data")).password;
  // }

  const enviar = (e) => {
    e.preventDefault();

    console.log(formData);
    if(formData.length!=={}){
      console.log(formData);
      var myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "nombreUsuario":formData.email,
        "password": formData.password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/auth/login", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          // console.log(result.token)
          // console.log(result.nombreUsuario)
          if(result.message==="Bad credentials"){

            Swal.fire({
              icon: "error",
              title: "Error",
              text: "email is not registered. Please, Enter registered email or create an account!",
            });
          }
          if(result.message==="User is disabled"){

            Swal.fire({
              icon: "error",
              title: "There is still one step left.",
              text: "Unverified account. Please go to your email to verify.!",
            });
          }
          if (formData.email === result.nombreUsuario) {
            setValidacion(true);
            // setApi(true);
            //let usuario = JSON.parse(localStorage.getItem("data"))
            //usuario.logueado = true
            //console.log(Object.values(result.authorities[0])[0]);
            localStorage.setItem("rol", JSON.stringify(Object.values(result.authorities[0])[0]))
            localStorage.setItem("nombreUsuario", JSON.stringify(result.nombreUsuario))
            localStorage.setItem("nombre", JSON.stringify(result.nombre))
            localStorage.setItem("jwt", JSON.stringify(result.token))
            //console.log(JSON.parse(localStorage.getItem("jwt")));
            //console.log(JSON.parse(localStorage.getItem("nombreUsuario")));
            //setUserName(result.nombreUsuario)
            setBoolReservation(false)
            navigate("/");
          } else {
            setValidacion(false);
          }
        })
        .catch(error => console.log('error', error));
    }

    
  };

  const [ver, setVer] = useState(true);
  const cambiar = (e) => {
    e.preventDefault();

    setVer(!ver);
  };

  return (
    <div className="container-forms">
      <form className="form-register" onSubmit={enviar}>
        {validacion ? "" : <ErrorLogin />}
        {boolReservation&&<AlertReservation/>}

        <h4>Log in</h4>
        <label className="labels" htmlFor="email">
          Email
        </label>
        <input
          className="controls"
          type="email"
          onChange={(e) => {
            handleChange(e.target.value, email);
          }}
        />

        <div className="input-password">
          <div className="input-password-lie">
            <div>
              <label className="labels" htmlFor="password">
                Password
              </label>

              <input
                className="controls password"
                type={ver ? "password" : "text"}
                onChange={(e) => {
                  handleChange(e.target.value, password);
                }}
              />


            </div>
            <div className="btn" onClick={cambiar}>
              {ver ?
                <AiOutlineEyeInvisible className="eye" />
                :
                <AiOutlineEye />
              }
            </div>
          </div>
        </div>

        {/*                 -------------------------------------------------------------
         */}

        <div>
          <button className="botons" id="botons" type="submit">
            Log in
          </button>
        </div>

        <div className="redirection">

          <TextWant route="/singUp" text="You didnt have an account?" name="Create Account" />
        </div>
      </form>
    </div>
  );
}

export default Form;
