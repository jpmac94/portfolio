import React from 'react'
import { IoLocationSharp } from "react-icons/io5"
import Loader from '../Loader'

export default function Place({datosHeader}) {
  

  return (
    <>
      {
        datosHeader!==null ? <div className='container-place-jsx'>
        <IoLocationSharp className='place-icon' />

        <div className='ubication'>
          <p>
            {datosHeader.city.state.name}, {datosHeader.city.name}, {datosHeader.city.state.country.name}
          </p>
          <p className='distance'>
            A 940 m del centro
          </p>

        </div>
      </div>
      :
      <Loader/>
      }
    </>
  )
}
