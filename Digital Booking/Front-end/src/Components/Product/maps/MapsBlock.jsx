import React from 'react'
import { useParams } from 'react-router-dom'
import Maps from "./Maps"
import "../../../styles/product/maps.css"
import Header from '../../Header/Header';
import HeaderBlock from './../HeaderBlock';
import Footer from './../../Footer';
export default function MapsBlock({ datosHeader }) {
  const { state, city, country } = useParams();

  return (
    <>

        

   
      {/*<HeaderBlock datosHeader= {datosHeader}/>*/}

      <div className="container-maps">
        <h2>Where are you going to stay?</h2>
        <p></p>
        <div className="container-maps2">
          <Maps datosHeader={datosHeader} st={state} ci={city} co={country} />
        </div>

      </div>
     
    </>

  )
}
