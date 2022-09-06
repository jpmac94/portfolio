import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Favorite from '../Favorite/Favorite'

export default function User() {
  const [rol,setRol]=useState(null)
  let name = "";
  let lastname = ""
  let rolUser=''
  
  if (JSON.parse(localStorage.getItem("data")) !== null) {
    if (JSON.parse(localStorage.getItem("data")).logueado === true) {
      name = JSON.parse(localStorage.getItem("data")).name;
      lastname = JSON.parse(localStorage.getItem("data")).lastname;
    }
  }

  if (JSON.parse(localStorage.getItem("nombre")) !== null){

    // console.log(JSON.parse(localStorage.getItem("nombre")));
    // console.log((JSON.parse(localStorage.getItem("nombre")).split(" ")).length);
    // console.log(JSON.parse(localStorage.getItem("nombre")).split(" ")[1]);
    // console.log(JSON.parse(localStorage.getItem("nombre")).split(" ").length);
    name=JSON.parse(localStorage.getItem("nombre")).split(" ")[0]
    lastname =JSON.parse(localStorage.getItem("nombre")).split(" ")[1]
    //console.log(JSON.parse(localStorage.getItem("nombreUsuario")));
  }
  // if (JSON.parse(localStorage.getItem("rol")) !== null){
 
  //   console.log("entro al primer 1");
  //   if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_USER"){
  //     setRol(true)
  //     console.log("entro al 2do 2");
  //   }
  //   if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_ADMIN"){
  //     setRol(false)
  //     console.log("entro al 3do 3");
  //   }
  // }
  //else{
  //   setRol(false)
  // }
  //JSON.parse(localStorage.getItem("rol")) !== null&&console.log(JSON.parse(localStorage.getItem("rol")));
  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("rol")) !== null){
 
      console.log("entro al primer 1");
      if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_USER"){
        setRol(true)
        console.log("entro al 2do 2");
      }
      if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_ADMIN"){
        setRol(false)
        console.log("entro al 3do 3");
      }
    }
    else{
        setRol(false)
        console.log("ultimo log");
      }

  },[JSON.parse(localStorage.getItem("rol"))])
  return (
    <div className='blockUser'>
      <>
      {(rol!==null&&rol)?
        
        <>
          <span className="favorite"><Link className='myf' to={"/myreservation"}>My reservations</Link></span>
          <hr className='hrH' />
          <span className="favorite"><Link className='myf' to={"/favorite"}>My favourites</Link></span>
          <hr className='hrH' />
        </>
        :
<>
        <span className="favorite"><Link className='myf' to={"/administrationMain"}>Administration</Link></span>
        <hr className='hrH' />
    </>
    }
      
      </>
      
      
      <p className="lettersName">{name !== "" ? name[0].toUpperCase() : ""}{lastname !== "" ? lastname[0].toUpperCase() : ""}</p>
      <div className='user-in'>
        <p>Hello,</p>
        <p>{name} {lastname}</p>
      </div>
      {/*<p className="favorite"><Link to={"/favorite"}></Link></p>*/}

    </div>
  )
}
