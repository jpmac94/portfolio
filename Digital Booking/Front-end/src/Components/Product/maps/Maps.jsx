import React,{ useState,useEffect} from 'react'

import {BiCurrentLocation} from "react-icons/bi"

import GoogleMaps from "simple-react-google-maps";
export default function Maps({datosHeader,st,ci,co}) {


return (
    <>
     { (datosHeader!==undefined&&datosHeader!==null)&&
    <p>
{console.log(datosHeader)}

<BiCurrentLocation className='locationIconMaps'/>{datosHeader.address.street} {datosHeader.address.number}, {datosHeader.city.name}, {datosHeader.city.state.country.name}
          </p>
          } 
      {ci!==undefined&&<p>
        
            {st}, {ci}, {co}
          </p>
        }

    <div className="containerMaps">
    { (datosHeader!==undefined&&datosHeader!==null)&&
        <GoogleMaps
  apiKey={"AIzaSyCNW8zD_9FNDz1JcHSFDpdkEpAW1omqeVQ"}
  style={{height: "400px", width: "100%"}}
  zoom={15}
  center={{lat:parseFloat(datosHeader.address.latitude), lng: parseFloat(datosHeader.address.longitude)}}
  markers={{lat:parseFloat(datosHeader.address.latitude), lng: parseFloat(datosHeader.address.longitude)}}
/>
}
    </div>
    </>
  )
}
