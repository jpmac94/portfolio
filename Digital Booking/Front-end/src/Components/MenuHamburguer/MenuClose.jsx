import React, { useEffect, useState } from 'react'
import SocialMedia from '../SocialMedia'
import '../../styles/hamburguer/menuClose.css';
import User from '../Header/User';

import { Link } from 'react-router-dom';

import { VscChromeClose } from "react-icons/vsc";
import Swal from 'sweetalert2'

export default function MenuClose() {
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
    name=JSON.parse(localStorage.getItem("nombre")).split(" ")[0]
    lastname =JSON.parse(localStorage.getItem("nombre")).split(" ")[1]
  }

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("rol")) !== null){
 
      if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_USER"){
        setRol(true)
      }
      if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_ADMIN"){
        setRol(false)
      }
    }
    else{
        setRol(false)
      }

  },[JSON.parse(localStorage.getItem("rol"))])

  const logoutx = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      //text: "You want to leave",
      icon: 'question',
      showCancelButton: true,
    //  confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("jwt")
        localStorage.removeItem("nombre")
        localStorage.removeItem("nombreUsuario")
        localStorage.removeItem("data")
        Swal.fire(
          'Log out!',
          'See you soon'
        )
        
        window.location.reload();
        //setUserBool(false);
      }
    })
 

  }
  return (
    < >

      <div className="headerMenu" >
        <label htmlFor="btn-menu" className="menuAncore"><p><VscChromeClose /> </p></label>

        <User className="container-user" />
      </div>

      <div>

      {(rol!==null&&rol)?
      <>
        <div className='myReserv'>
        <Link className='myFavouriteLink' to={"/myreservation"}>My reservations</Link>
          <hr className='hH' />
        </div>

        <div className='myFavourites'>
          <Link className='myFavouriteLink' to={"/favorite"}>My favourites</Link>
        </div>
        </>
:
        <>
        <div className='myFavourites'>
          <Link className='myFavouriteLink' to={"/administrationMain"}>Administration</Link>
        </div>
        </>}
      </div>


      <div className="logOutMenu">
        {/* <TextWant route= "/"  text = " Do you want to "name="logOut ?"/>  */}
        <p>Do you want to  <label htmlFor="btn-menu" onClick={logoutx}> Log Out?</label></p>


        <hr className='hr-menu-close' />
      </div>

      <div className="network-logos">
        <SocialMedia />
      </div>
    </>
  )
}


