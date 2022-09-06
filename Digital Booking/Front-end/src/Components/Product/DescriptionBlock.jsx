import React from 'react'
import './../../styles/product/descriptionBlockStyle.css'

export default function DescriptionBlock({datosHeader}) {


    return (
        <>
            {datosHeader!==null && <div className='container-description'>
                <h2>Stay in the heart {datosHeader.city.name}</h2>
                <p>{datosHeader.description}</p>
            </div>}


        </>


    )
}
