import React from 'react';
import  { useEffect, useState } from 'react'
import Card from './Card'
import "../../../styles/card/card.css"
import CardLoader from './CardLoader'

export default function List() {
  const [categories,setCategories]=useState(null)
  // const [loa,setLoa]=useState(true)
  // setTimeout(() => {
  //   setLoa(false)
  // }, 3000);

  const fetchCategories=()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/category/findAll", requestOptions)
      .then(response => response.json())
      .then(result => setCategories(result))
      .catch(error => console.log('error', error));
 
  }

  useEffect(()=>{
    fetchCategories();
  
  },[])


  const [cambio, setCambio] = useState(true);

  const camb = () => {

   setCambio(false)
  }


  return (
    <div className="contenedor-list" >
    <h2>Search by type of accommodation</h2>

     <div className={cambio?"list" :'filtro-activo'} /*onClick={camb}*/>
       
        {(categories!==null ) ? categories.map((category) => {
            return (
                <Card {...category} camb={camb} />
            )})
          :
          <>
           <CardLoader />
           <CardLoader />
           <CardLoader />
           <CardLoader />
          </>}
    </div>
   </div>
  )
}