import React, { useState, useEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import FormImg from '../CreateProduct/FormImg';
import TaskImg from '../CreateProduct/TaskImg';
import FormPiscsUpdate from './formPics/FormPiscsUpdate';

import { VscChromeClose } from "react-icons/vsc";
export default function ForthUpdate({ product }) {

    const productU = product[0].pictures;

    const [images, setImages] = useState(
        [
            {
                original: productU !== null && productU[0].url,
                thumbnail: productU !== null && productU[0].url,
            },
            {
                original: productU !== null && productU[1].url,
                thumbnail: productU !== null && productU[1].url,
            },
            {
                original: productU !== null && productU[2].url,
                thumbnail: productU !== null && productU[2].url,
            },
            {
                original: productU !== null && productU[3].url,
                thumbnail: productU !== null && productU[3].url,
            },
            {
                original: productU !== null && productU[4].url,
                thumbnail: productU !== null && productU[4].url,
            },
        ])

    const handleAddItem = addItem => {
        setImages([...images, addItem])

    };

    const [urlNew, setUrlNew] = useState([])
    const [visible, setVisible] = useState(true);

    const elimination = (e) => {
        console.log(e.target.src)
        setUrlNew(e.target.src)
        console.log(urlNew);
        setVisible(false);

    }

    const close = () => {
        setVisible(true);
    }

    const deletePic = () => {
        /* console.log(urlNew);*/
        let i = images.filter(pic => pic.original !== urlNew);
        //    console.log(i)
        setImages(i)
        // console.log(images)

        setVisible(true);
    }
    return (
        <>
            <div className='container-update-pictures'>
                <h2 className="c h2"> Update Pictures </h2>
                <div className='pic-add-update'>
                    <div className='pic-update'>

                        <ImageGallery
                            showPlayButton={false}
                            showFullscreenButton={false}
                            showIndex={false}
                            autoPlay={false}
                            slideOnThumbnailOver={true}
                            showThumbnails={true}
                            items={images}
                            selectable={true}
                            onClick={elimination}
                        />
                        {/*  <button onClick={elimination}>delete</button>*/}
                    </div>

                    <div className={visible ? "overlayUpdate" : "overlay-activeUpdate"}>
                        <div className='pop-up-update'>
                            <div className='container-close-update'>
                                <div className='close-cross'>
                                    <VscChromeClose onClick={close} className='close-gallery-update' />
                                </div>

                                <img src={urlNew} alt="" />

                                <div className='div-button-delete-picture'>
                                    <button className='button-delete-picture' onClick={deletePic}>Delete</button>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className={images.length < 5 ? "containerFormPicU" : "containerFormClassNone"}>
                        <h2 className="c h2"> Add Pictures </h2>
                        <div className="containerImages">
                            <FormPiscsUpdate handleAddItem={handleAddItem} />

                            {/* <TaskImg list={list} setList={setList} />*/}
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
