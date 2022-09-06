import React from 'react'

import MenuHeader from './MenuHeader'
import '../../styles/hamburguer/menuHamburguer.css';
import SocialMedia from '../SocialMedia';
import { Link } from 'react-router-dom';

export default function MenuLogin() {
  return (
    < >
        <MenuHeader/>
        <div className="menuButtons">
        <Link to="/login"> Log in</Link>
        </div>
        <div  className="logosRedes">
        <SocialMedia/>
        </div>

       

    </>
  )
}
