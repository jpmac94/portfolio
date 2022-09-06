import React, { useState } from 'react'

import { BsShare } from "react-icons/bs";
import {
    FacebookShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramIcon,
    WhatsappIcon,
    FacebookIcon,
  } from 'react-share';


export default function ShareSM({datosHeader}) {
  const [SMvisible, setSMVisible] = useState(true);

    const open = () => {
        setSMVisible(false);
    }

    const close = () => {
        setSMVisible(true);
    }
    
    const closeOpen=()=>{
      if(SMvisible === false){
      close()}
      else{
        open()
      }
    }
 
    // const shareUrl = 'http://grupo7-env.eba-ptqqim3c.us-west-1.elasticbeanstalk.com/api/product/20/Silver%20Cloud%20Brodway';
{ 
  if (datosHeader!== null ) {
   var shareUrl = "http://frontend-final.s3-website-us-west-1.amazonaws.com/api/product/"+datosHeader.id+"/"+datosHeader.name
}
  }
  return (
    <div >
      
        <BsShare className ="icons-carousel"  onClick={closeOpen} />
      <div>
     
        <div className={SMvisible ? "hide-none" : "hide-active"} >
          <FacebookShareButton
          url={shareUrl}
          quote={"Digital Booking- My Future Holidays is here ... "}
          hashtag={'#Holidays...'}
        >
          
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton >
        
        <TelegramShareButton
          url={shareUrl}
          quote={'Digital Booking- My Future Holidays is here '}
          hashtag={'#Holidays...'}
        >
          <TelegramIcon size={40} round={true} />
        </TelegramShareButton>
       
        <WhatsappShareButton
          url={shareUrl}
          quote={'Digital Booking- My Future Holidays is here '}
          hashtag={'#Holidays...'}
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <LinkedinShareButton
        url={shareUrl}
        title={'Digital Booking'}
        summary={"Digital Booking- My Future Holidays is here "}
        >
        <LinkedinIcon size={40} round={true} />
        
        </LinkedinShareButton>

        </div>
       
      </div>
   
    </div>
    
  )
}

 