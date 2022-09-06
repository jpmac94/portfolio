import React from "react";
import { useState } from "react";
import { useContext, useEffect } from "react";
import  { Calendar } from "react-multi-date-picker";
import "../../styles/dates.css";
import { ContextProduct } from "../Context/ContextProduct";
import Swal from 'sweetalert2'
export default function Dates({idProduct}) {
    const [valueT,setValueT]=useState('')
    const [dateStartState,setDateStartState]=useState([])
    const [dateEndState,setDateEndState]=useState([])
    const [dVS,setDVS]=useState([])
    const [dVE,setDVE]=useState([])
    const [flagFechaReservada,setFlagFechaReservada]=useState(false)
    const [prodResD,setProdResD]=useState('')
    const [productReservationD,setProductReservationD]=useState('')
    const {productReservation,
      fechaReservaStart,setFechaReservaStart,
      fechaReservaEnd,setFechaReservaEnd,
      idProductReservation,
      userName
      }=useContext(ContextProduct)
    // productReservation.length!==0&&console.log(productReservation[0].startDate.split("-"));
    // productReservation.length!==0&&console.log(productReservation[0].startDate.split("-")[1]);
    // productReservation.length!==0&&console.log(productReservation[0].startDate.split("-")[2]);
  const numberD=[]
  const numberM=[]
  useEffect(()=>{

    console.log(idProduct);
    if(idProduct!==null||idProduct!==undefined){
      setProdResD(idProduct)
      
    }

  },[prodResD])
  useEffect(()=>{
    const fReservationByUserName=()=>{
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          userName!==''&&fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findReservationByUserName?userName="+userName, requestOptions)
            .then(response => response.json())
            .then(result => {
                setProdResD([...result])
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }
    fReservationByUserName();
},[])
  useEffect(()=>{

    console.log(productReservation);
    if( productReservation.length!==0){
      setProductReservationD(productReservation)
      
    }

  },[productReservation])
  // numberD.push(2)
  // numberD.push(5)
  // numberM.push(6)
  // numberM.push(6)
  productReservationD.length!==0&&productReservationD.map(reser=>{
    console.log(reser);
    //idProduct!==null||idProduct!==undefined&&console.log(idProduct);
    console.log(prodResD);
    if (prodResD!==''&&prodResD!==null) {
      console.log(prodResD);
      if(reser.product.id===prodResD.id){
        console.log("es igual");
        numberD.push(parseInt(reser.startDate.split("-")[2]))
        numberD.push(parseInt(reser.endDate.split("-")[2]))
        numberM.push(parseInt(reser.startDate.split("-")[1])-1)
        numberM.push(parseInt(reser.endDate.split("-")[1])-1)
      }
    }
    // numberD.push(parseInt(reser.startDate.split("-")[2]))
    // numberD.push(parseInt(reser.endDate.split("-")[2]))
    // numberM.push(parseInt(reser.startDate.split("-")[1])-1)
    // numberM.push(parseInt(reser.endDate.split("-")[1])-1)
})
  numberD.length!==0&&console.log(numberD);
  numberM.length!==0&&console.log(numberM);
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
    let numberOfMonthsView = null
    if (window.innerWidth < 470) { numberOfMonthsView = 1 } else { numberOfMonthsView = 2 }

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("entró al effect del valueT");
    setDateStartState([]);
    setDateEndState([]);
    if (valueT.length == 2) {
      console.log("valueT es de length2");

      if (
        !(
          valueT[0] !== undefined &&
          numberD.includes(parseInt(valueT[0].day)) &&
          numberM.includes(parseInt(valueT[0].month.index))
        )
      ) {
        console.log("primer if  de rango correcto");
        if (
          !(
            valueT[1] !== undefined &&
            numberD.includes(parseInt(valueT[1].day)) &&
            numberM.includes(parseInt(valueT[1].month.index))
          )
        ) {
          console.log("segundo if  de rango correcto");
          console.log(valueT);
          valueT[0] !== undefined && console.log(valueT[0].day);
          valueT[1] !== undefined && console.log(valueT[1].day);
          if (valueT[0] !== undefined) {
            console.log("tercer if de [0]");
            setDVS([valueT[0].year, valueT[0].month.index, valueT[0].day]);

            console.log(valueT[0].day);
          }
          if (valueT[1] !== undefined) {
            console.log("tercer if de [1]");
            setDVE([valueT[1].year, valueT[1].month.index, valueT[1].day]);

            console.log(valueT[1].day);
          }

          if (flagFechaReservada === false) {
            numberD.forEach((d, i) => {
              if (
                parseInt(valueT[0].day) <= parseInt(d) &&
                parseInt(valueT[1].day) >= parseInt(d)
              ) {
                console.log("cond de prueba 3");
                setValueT("");
                setDVS([]);
                setDVE([]);
                setFechaReservaStart([]);
                setFechaReservaEnd([]);
                setDateStartState([]);
                setDateEndState([]);

                setFlagFechaReservada(true);
                console.log("index: " + i);
                console.log(parseInt(d) + " es mayor o menor al rango elegido");
                console.log(valueT);
                Swal.fire({
                  icon: "error",
                  title: "Invalid date range...",
                  text: "There is already a reservation in that range.. Please try another.!",
                });
              }
            });
          }
        }
      }
    }

    console.log(valueT);
  }, [valueT]);

  useEffect(() => {
    console.log("effect flagFechaReservacion");
    console.log(flagFechaReservada);
    if (flagFechaReservada) {
      console.log(flagFechaReservada);
      console.log("flagFechaReservada");
      setFechaReservaStart([]);
      setFechaReservaEnd([]);
      setDateStartState([]);
      setDateEndState([]);
      setValueT("");
      setDVS([]);
      setDVE([]);
      setFlagFechaReservada(false);
    }
  }, [flagFechaReservada === true && flagFechaReservada]);

  //useEffect para cargar el estado local de fechas cada vez que se modifica
  useEffect(() => {
    setDateStartState([...fechaReservaStart]);
  }, [fechaReservaStart]);

  useEffect(() => {
    setDateEndState([...fechaReservaEnd]);
  }, [fechaReservaEnd]);
 
  useEffect(() => {
    if (dVS.length !== 0) {
      console.log(dVS);
      setFechaReservaStart([...dVS]);
      console.log(dVS.length);

      console.log("hola1");
    }
  }, [dVS]);
  useEffect(() => {
    if (dVE.length !== 0) {
      console.log(dVE);
      setFechaReservaEnd([...dVE]);
      console.log(dVE.length);
      console.log("hola2");
    }
  }, [dVE]);
 
  useEffect(() => {
    setDateStartState([...fechaReservaStart]);
  }, [fechaReservaStart]);
  useEffect(() => {
    setDateEndState([...fechaReservaEnd]);
  }, [fechaReservaEnd]);

  return (
    <div className="c">
      <Calendar
        value={
          dateStartState.length === 3 && dateEndState.length === 3
            ? [
                new Date(
                  dateStartState[0],
                  dateStartState[1],
                  dateStartState[2]
                ),
                new Date(dateEndState[0], dateEndState[1], dateEndState[2]),
              ]
            : valueT
        }
        onChange={setValueT}
        weekDays={weekDays}
        hideYear
        range={true}
        numberOfMonths={width > 470 ? 2 : 1}
        minDate={new Date()}
        mapDays={({ date }) => {
          let isWeekend =
            numberD.length !== 0 &&(
            numberD.includes(date.day) &&
            numberM.includes(date.month.index));

          if (isWeekend)
            return {
              disabled: true,
              style: { color: "#ccc" },
              onClick: () =>
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "There is already reservation for that date",
                }),
            };
        }}
      ></Calendar>
    </div>
  );
}
