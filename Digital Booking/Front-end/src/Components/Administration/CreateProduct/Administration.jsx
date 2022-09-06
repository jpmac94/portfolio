import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header/Header'
import HeaderBlockAdm from './HeaderBlockAdm'
import MainCreate from './MainCreate'


export default function Administration() {
  return (
    <div>
        <Header/>
        <HeaderBlockAdm title="administrationMain"/>
        <MainCreate/>
        <Footer />
    </div>
  )
}
