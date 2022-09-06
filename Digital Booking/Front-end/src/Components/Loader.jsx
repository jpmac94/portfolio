import React, { useState, useEffect } from 'react'
import "../styles/loader.css"
export default function Loader() {
  //   const [isLoading,setIsLoading] = useState(true)
  // useEffect(()=>{
  //     setTimeout(()=>{
  //         setIsLoading(false)
  //     },2400)
  // })
  return (
    <>
      {
        <div class="core-page-loader splash">
          <div class="plane-spinner">
            <div class="spinner-plane">
            </div>
          </div>
        </div>
      }
    </>
  )
}
