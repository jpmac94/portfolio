import React, { useContext, useRef,useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import { BsCalendarEvent } from "react-icons/bs";
import { ContextProduct } from "../../Context/ContextProduct";

export default function Calendario() {

  const [value, setValue] = useState('');
  const { setDatesBlockSerch,setFechaReservaStart,setFechaReservaEnd,cleanCal,setCleanCal } = useContext(ContextProduct);
  const datePickerRef = useRef();

  const aplicar = () => {
    if (value[0] !== undefined) {
      setFechaReservaStart([value[0].year,value[0].month.number,value[0].day]);
      setFechaReservaEnd([value[1].year,value[1].month.number,value[1].day])

      setDatesBlockSerch({
        startDate: value[0].year + "-" + value[0].month + "-" + value[0].day,
        endDate: value[1].year + "-" + value[1].month + "-" + value[1].day,
      });
    }
    datePickerRef.current.closeCalendar();  
  };
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize) 
  }, []);
 

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
  const styless = {
    width: "100%"
  }
  //console.log(cleanCal);
  //cleanCal&&setValue({})
  useEffect(()=>{
    //console.log(cleanCal);
    
      setValue("Check in - Check out")
    
  },[cleanCal===true&&cleanCal])
  if(value==="Check in - Check out"){
    setCleanCal(false)
  }
  return (
    <div className="container-calendar">
      <BsCalendarEvent  className="bscalendar" />

      <div className="c">
        <DatePicker
        
          weekDays={weekDays}
          placeholder="Check in - Check out"
          format="YYYY-MM-DD"
          range={true}
          numberOfMonths={width > 470 ? 2 : 1}
          minDate={new Date()}
          ref={datePickerRef}
          
           value={value}
          onChange={setValue}
          style={styless}
        >
          <button className="button-block-search" onClick={aplicar}>
            Apply
          </button>
        </DatePicker>
      </div>
    </div>
  );
}
