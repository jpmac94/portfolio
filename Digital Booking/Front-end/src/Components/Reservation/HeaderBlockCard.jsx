import React from 'react'
import Loader from '../Loader'
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";


export default function HeaderBlockCard({datosHeader}) {

  return (
    <div> <>
    <div className='container-header-product'>
    {datosHeader!==null ?  
    
        <div>
      
            <h4 className='category-product'> {datosHeader.category.title}</h4>
              
            <h3 className='name-product'>{datosHeader.name}</h3>               
            
        </div>
        :
        <Loader/>
}


        <div className='container-header-product-r'>
        {datosHeader!==null &&(
        <Link to={"/product/" + datosHeader.id + "/" + datosHeader.name}> <VscChevronLeft className='back-icon' /> </Link>
       ) }
        </div>

    </div>
</></div>
  )
}
