import React from 'react'
import MenuHeader from './MenuHeader'
import MenuMain from './MenuMain'
import '../../styles/hamburguer/menuHamburguer.css';
import SocialMedia from '../SocialMedia';
export default function MenuHamburguer() {
  return (
    <div>
      <MenuHeader />
      <MenuMain />
      <div className="network-logos">
        <SocialMedia />
      </div>
    </div>
  )
}
