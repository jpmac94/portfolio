import React from 'react'

import '../styles/footer/footer.css';
import SocialMedia from './SocialMedia';

export default function Footer() {
  return (
    <footer>
        <p>© 2022 Digital booking</p>
        <div className="media">
        <SocialMedia/>
        </div>
    </footer>
  )
}
