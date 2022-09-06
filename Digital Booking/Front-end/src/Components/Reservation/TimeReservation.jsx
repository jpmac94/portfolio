import React from 'react'
import { useContext } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { ContextProduct } from '../Context/ContextProduct'

export default function TimeReservation() {
  const {setTimeCkeckin}=useContext(ContextProduct)
  const timeSelect=(e)=>{
    // console.log(e.target.value);
    setTimeCkeckin(e.target.value)
  }
  return (
    <div className='containerTime'>

      <BsCheckCircle className='iconCheck' />
      <span>Your room will be ready for check-in between 08:00 AM and 17:00 PM</span>

      <div className="containerSelect">
        <label>Indicate your estimated time of arrival</label>
        <select onChange={timeSelect}  className="selectTime"name="select">
        <option value="08:00:00">08:00</option>
        <option value="9:00:00">09:00</option>
        <option value="10:00:00">10:00</option>
        <option value="11:00:00">11:00</option>
        <option value="12:00:00">12:00</option>
        <option value="13:00:00">13:00</option>
        <option value="14:00:00">14:00</option>
        <option value="15:00:00">15:00</option>
        <option value="16:00:00">16:00</option>
        <option value="17:00:00">17:00</option>
      </select>
      </div>
    </div>
  )
}
