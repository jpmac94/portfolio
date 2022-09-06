import React ,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header/Header';

import PolicyBlock from '../Product/PolicyBlock';

import ContainerReservation from './ContainerReservation';
import HeaderBlockCard from './HeaderBlockCard';
export default function Reservation() {


  const {id}=useParams();
 const [reservation,setReservation]=useState(null)
 useEffect(()=>{
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
     fetch("http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findById/"+id, requestOptions)
      .then(response => response.json())
      .then(result => {
        
        setReservation(result);

      })
      .catch(error => console.log('error', error));
  
},[id])

    return (
    <div> 
        <Header/>
        <HeaderBlockCard datosHeader={reservation} />
        <ContainerReservation datosReservation={reservation} />
        <PolicyBlock/>
      <Footer/>
    </div>
  )
}
