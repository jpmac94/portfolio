import React from 'react'
import Dates from './Dates'
import AceptDates from './AceptDates'
import "../../styles/dates.css"
export default function DatesContaines({datosHeader}) {
  // datosHeader!==null&&console.log(datosHeader.id);
  return (
    <div className="container-all-dates">
    <h2 className="c h2">Available dates</h2>
    <div className="c container-dates">
        <Dates idProduct={datosHeader}/>
        <AceptDates datosHeader= {datosHeader}/>
    </div>
    </div>
  )
}
