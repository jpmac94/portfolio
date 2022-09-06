import React from 'react'
import HeaderWithAButton from '../Header/HeaderWithAButton'
import Footer from '../Footer'
import Form from './Form'




export default function Login(){
    return(
        <div>
            <HeaderWithAButton title={"singUp"} titulo="Create Account"/>
            <Form/>
            <Footer/>
        </div>
    )
}