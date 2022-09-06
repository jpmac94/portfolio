import React from 'react'
import "../../../styles/card/card.css"
import { useContext } from "react";
import { ContextProduct } from "../../Context/ContextProduct";
export default function Card(props) {
  const {sumaFiltrer}=useContext(ContextProduct)

 // const num = props.description.slice(2, 4);
  const description = props.description;


  return (

    <div className="property-card" key={props.id}>
      {/* <Link to={"/category/"+props.id+"/"+props.title} ><img  src={props.url_image} alt="hola" className='property-image' /></Link> */}
      <img onClick={()=>sumaFiltrer({id:props.id})} src={props.url_image} alt="hola" className='property-image' />

      <div className="property-description">
        <h3 >{props.title}</h3>
        <p>{/*num + " " + */description}</p>

      </div>

    </div>

  )
}