import React from 'react'
import Dates from '../Product/Dates'

export default function BlockDates({datosReservation}) {
  return (
    <div className='calendarContainer' >
        <h2 className="c h2">Select your reservation date</h2>
     
        <Dates idProduct={datosReservation}/>
       
    </div>
  )
}
