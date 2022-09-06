import React, { useEffect, useState } from 'react'
import './../../../styles/product/carousel/carouselBlock.css'

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


import ShareSM from "../ShareSM";
import { FaRegHeart } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useContext } from 'react';
import { ContextProduct } from '../../Context/ContextProduct';
import Swal from 'sweetalert2'

export default function CarouselBlock(props) {
    // console.log(props);
    let { datosHeader } = props
    // let imagenes = props;
    // console.log(imagenes);
    const [image, setImage] = useState(null)
    const [heartC, setHeartC] = useState(false);
    const {setIdProductItem,setBoolSaveFav,productItem}=useContext(ContextProduct)
    // props.datosHeader!==null&&console.log(datosHeader.pictures);
    // props.datosHeader!==null&&setImage([...datosHeader.pictures]);
    // props.datosHeader.pictures!==undefined&& setImagenes([...props.datosHeader.pictures]);
    // console.log(imagenes);
    useEffect(() => {
        console.log(datosHeader);
        productItem.length !== 0 && props.datosHeader!==null && productItem.forEach(favourite => {
          if (favourite.product.id === props.datosHeader.id) {
            //debeìa aparecer el corazòn en rojo, sino ponerlo en false
            console.log(favourite.product.id);
            console.log(props.datosHeader.id);
            setHeartC(true)
          }
        })
      }, [datosHeader])
    useEffect(() => {
        setImage(datosHeader)
        // console.log(datosHeader);
    }, [datosHeader])
    // image!==null&&console.log(image.pictures[0].url);

    const images = [
        {
            original: image !== null && image.pictures[0].url,
            thumbnail: image !== null && image.pictures[0].url,
        },
        {
            original: image !== null && image.pictures[1].url,
            thumbnail: image !== null && image.pictures[1].url,
        },
        {
            original: image !== null && image.pictures[2].url,
            thumbnail: image !== null && image.pictures[2].url,
        },
        {
            original: image !== null && image.pictures[3].url,
            thumbnail: image !== null && image.pictures[3].url,
        },
        {
            original: image !== null && image.pictures[4].url,
            thumbnail: image !== null && image.pictures[4].url,
        },
    ];


    const [visible, setVisible] = useState(true);

    const open = () => {
        setVisible(false);
    }

    const close = () => {
        setVisible(true);
    }
    const handleHeart = () => {
        //console.log(JSON.parse(localStorage.getItem("nombre")));
        if (JSON.parse(localStorage.getItem("nombre")) !== null) {
          if(JSON.parse(localStorage.getItem("rol"))=== "ROLE_USER"){
            setHeartC(!heartC)
            console.log(heartC);
            
            if (heartC === false) {
              setIdProductItem(datosHeader.id)
              setBoolSaveFav(true)
            } else {
              Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please, Go to "My favourites"'
              })
              setHeartC(true)
            }
          }
          
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'You must be logged in to save as a favorite!'
          })
        }
      }
    
//className={heartC ? "heartCRed" : "heartC"}

    return (
        <>
            <div className='container-icons-carousel'>
                
                <ShareSM datosHeader ={datosHeader} />
                
                <FaRegHeart className={heartC ? "icons-carousel-red" : 'icons-carousel'}
          onClick={handleHeart} />

            </div>

            <div className='container-pictures'>

                <div className='pic-left'>
                    <img src={image !== null && image.pictures[0].url} alt="" />
                </div>

                <div className='pic-right'>
                    <div className='right-up'>
                        <img src={image !== null && image.pictures[1].url} alt="" />
                        <img src={image !== null && image.pictures[2].url} alt="" />
                    </div>
                    <div className='right-un'>
                        <img src={image !== null && image.pictures[3].url} alt="" />
                        <img src={image !== null && image.pictures[4].url} alt="" />
                        <p className='see-more-pic' onClick={open}>See more..</p>
                    </div>

                </div>
            </div>

            <div className={visible ? "overlay" : "overlay-active"}>
                <div className='pop-up'>
                    <div className='container-close'>
                        <ImageGallery
                            showPlayButton={false}
                            showFullscreenButton={false}
                            /*showIndex={true}*/
                            autoPlay={true}
                            slideOnThumbnailOver={true}

                            items={images}
                        />
                        <VscChromeClose className='close-gallery' onClick={close} />

                    </div>
                </div>
            </div>

            <div className="tablet">

                <ImageGallery
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showIndex={true}
                    autoPlay={true}
                    slideOnThumbnailOver={true}
                    showThumbnails={false}
                    items={images}
                />

            </div>
        </>
    )
}
