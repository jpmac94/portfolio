import React from 'react'

import { VscChromeClose } from "react-icons/vsc";

export default function MenuHeader() {
  return (
    <div className="headerMenu" >
      <label htmlFor='btn-menu' className="menuAncore"> <VscChromeClose /> </label>
      <h3>MENÚ</h3>
    </div>
  )
}
