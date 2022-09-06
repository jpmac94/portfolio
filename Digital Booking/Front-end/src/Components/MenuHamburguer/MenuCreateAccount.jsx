import React from 'react'
import SocialMedia from '../SocialMedia'
import MenuHeader from './MenuHeader'
import '../../styles/hamburguer/menuHamburguer.css';
import { Link } from 'react-router-dom';



export default function MenuCreateAccount() {
  return (
    < >
        <MenuHeader/>
        <div className="menuButtons">
        <Link to="/singUp"> Create Account</Link>
        </div>
        <div  className="logosRedes">
        <SocialMedia/>
        </div>
    </>
    
  )
}
