import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import '../../styles/header/header.css';
import MenuCreateAccount from '../MenuHamburguer/MenuCreateAccount';
import MenuLogin from '../MenuHamburguer/MenuLogin';
import { VscChromeClose, VscMenu } from "react-icons/vsc";
import React from 'react';

const HeaderWithAButton = (props) => {
  return (
    <header>
      <div className="blockLogo">
        <Link to="/"><img src={logo} alt="LOGO DB"></img> </Link>
        <Link to="/"> <p>Feel at home</p></Link>
      </div>

      <Link to={"/" + props.title}><button className='button'>{props.titulo}</button></Link>


      <div className='hamburguer'>
        <label htmlFor="btn-menu"> <VscMenu /> </label>

        <div className='menu'>

        </div>
      </div>
      <input type="checkbox" id='btn-menu' />
      <div className="container-menu">
        <div className="cont-menu">
          {props.title === "singUp" ? <MenuCreateAccount /> : <MenuLogin />}
        </div>
      </div>
    </header >
  );
}

export default HeaderWithAButton;