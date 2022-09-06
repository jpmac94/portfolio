import React, {useContext, useEffect, useState} from 'react'
import CardMyReservation from './CardMyReservation';
import { Link } from 'react-router-dom';
import { ContextProduct } from '../Context/ContextProduct';
import '../../styles/myreservation/cardMyReservationStyles.css'
import Header from './../Header/Header'
import Footer from './../Footer';
import Swal from 'sweetalert2'

import { VscChevronLeft } from "react-icons/vsc";

export default function MyReservations() {

    const { productReservation,setCountReservation,setProductReservation } = useContext(ContextProduct)

    const handleEmptyReservations = e => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "You don't have reservations!",
            confirmButtonText: '<a href="/">Back home</a>'
          })
        e.preventDefault();
    }

    const [reservations, setReservations] = useState([]);
    const [boolRe, setBoolRe] = useState(false);
    const [boolEe, setBoolEe] = useState(false);
    useEffect(()=>{
        console.log(boolRe);
        if(boolRe){
            setBoolRe(false)
           // window.location.reload(false)
        }
    },[boolRe])

    // useEffect(() => {
    //     let requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };

    //     fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/reservation/findAll", requestOptions)
    //         .then(response => response.json())
    //         .then(result => {
    //             // console.log(result)
    //             return setReservations(result);

    //         })
    //         .catch(error => console.log('error', error));
    // }, [])

    useEffect(()=>{
        setReservations([...productReservation])
        console.log("effect");
        console.log(productReservation);
        if(productReservation.length===0){
             //handleEmptyReservations();
        }else{
            setReservations([...productReservation])
        }
        // setBoolEe(true)
    }, [])

    useEffect(()=>{
        console.log("reeffect");
        console.log(productReservation);
        
        if(productReservation.length===0){
             handleEmptyReservations();
        }else{
            setReservations([...productReservation])
        }
        // setReservations([...productReservation])
    }, [productReservation])
    // useEffect(()=>{
    //     console.log("reeffect");
    //     console.log(reservations);
    //     console.log(reservations.length);
    //     if(reservations.length===0){
    //         //handleEmptyReservations();
    //         console.log("nada");
    //     }else{
    //         setProductReservation([...reservations])
    //     }
    //     // window.location.reload(false)
    // }, [reservations])
//console.log(reservations);
return (

    <>

        <Header />
        <div className='container-header-product s'>
            <h4 >
                My reservations
            </h4>

            <div className='container-header-product-r'>
                <Link to="/"> <VscChevronLeft className='back-icon' /> </Link>

            </div>
        </div>

        <div style={{ scrollX: 'hidden' }}>
            {/*productItem.length === 0 ?

                <div className="containerFE">
             
                    {handleEmptyReservations()}
                </div>*/}
                
           <div className='container-card-reservation' >

                    {reservations.length!==0 ?
                    reservations.map((p, i) =>
                    (
                        <div key={i} >
                            <CardMyReservation reservation={p} setBoolRe={setBoolRe} setReservations={setReservations} />
                        </div>
                    ))
                    :
                    <h1>sin reservaciones</h1>
                }
                
               </div>
            
        </div>
        <Footer />
    </>

)
}
