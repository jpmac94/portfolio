import './../../styles/product/headerBlockStyle.css'
import { Link } from 'react-router-dom';
import { VscChevronLeft } from "react-icons/vsc";
import Loader from '../Loader'
import React from 'react'

export default function HeaderBlock({datosHeader}) {

    return (
        <>
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
                <Link to="/"> <VscChevronLeft className='back-icon' /> </Link>

                </div>

            </div>
        </>

    )
}
