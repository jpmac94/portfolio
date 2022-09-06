import React from 'react'
import Place from './Place'
import Ratings from './Ratings'
import './../../styles/product/ubicationBlockStyle.css'

export default function Ubication({datosHeader}) {
    
    return (
        <>
            <div className='container-ubication'>
                <div className='container-place'>
                    <Place datosHeader={datosHeader} />
                </div>

                <div className='container-rating'>
                    <Ratings datosHeader={datosHeader} />
                </div>

            </div>
        </>


    )
}
