import React, { useContext } from 'react'
import logo from '../../images/logo.png'
import ButtonsHeader from "./ButtonsHeader";
import User from "./User"
import '../../styles/header/header.css';
import { Link } from 'react-router-dom';

import MenuHamburguer from '../MenuHamburguer/MenuHamburguer';
import MenuClose from '../MenuHamburguer/MenuClose';
import { useEffect, useState } from 'react';
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import { ContextProduct } from '../Context/ContextProduct';
import Swal from 'sweetalert2'

export default function Header() {
  const [userBool, setUserBool] = useState(null);
  let storage = "";

  if (JSON.parse(localStorage.getItem("data")) !== null) {
    storage = JSON.parse(localStorage.getItem("data")).name
  }

  useEffect(() => {
    // if (storage !== '') {
    //   if (JSON.parse(localStorage.getItem("data")).logueado === true) {
    //     setUserBool(true);
    //   }
    // }
    if(JSON.parse(localStorage.getItem("nombre"))!==null && !userBool){
      setUserBool(true);
    }
    console.log(JSON.parse(localStorage.getItem("nombre")));
  }, [])

  const logoutx = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      //text: "You want to leave",
      icon: 'question',
      showCancelButton: true,
      //confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        setUserBool(false);
        localStorage.removeItem("jwt")
        localStorage.removeItem("nombre")
        localStorage.removeItem("nombreUsuario")
        localStorage.removeItem("data")
        Swal.fire(
          'Log out!',
          'See you soon'
        )

        /* localStorage.clear(); */
        // let usuario = JSON.parse(localStorage.getItem("data"))
        // usuario.logueado = false;


        // localStorage.removeItem("jwt")

        // localStorage.setItem("data", JSON.stringify(usuario))
        // setUserBool(false);
        
      }
    })

  }
const {setStateilters,setFechaReservaStart,
  setFechaReservaEnd,}=useContext(ContextProduct)
  return (
    <header>
      <div className="blockLogo">
        <Link onClick={()=>{
          setStateilters([{id:''},{nameCity:''},{startDate:'',endDate:''}])
        }} to="/"><img src={logo} alt="LOGO DB"></img> </Link>
        <Link onClick={()=>{
          setFechaReservaStart([])
          setFechaReservaEnd([])
          setStateilters([{id:''},{nameCity:''},{startDate:'',endDate:''}])}} to="/"> <p>Feel at home</p></Link>
      </div>

      <div className={userBool ? "hideButtons" : "div-containerButtons"}>
        <Link to="/Login"> <ButtonsHeader title="Log In" /></Link>
        <Link to="/SingUp"><ButtonsHeader title="Create Account" /></Link>
      </div>

      <div className={userBool ? "showUser" : "user-container"}>
        <div className='close-user'>
          <Link to="/" onClick={logoutx}> <VscChromeClose /> </Link>
        </div>

        <div className="user-media">
          <User />
        </div>
      </div>


      <div className='hamburguer'>
        <label className="label" htmlFor='btn-menu'> <VscMenu /> </label>

      </div>
      <input type="checkbox" id='btn-menu' />
      <div className="container-menu">
        <div className="cont-menu">
          {userBool ? <MenuClose /> : <MenuHamburguer />}

        </div>
      </div>
    </header >
  )
}