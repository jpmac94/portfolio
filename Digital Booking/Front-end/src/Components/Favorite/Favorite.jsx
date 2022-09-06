import React, { useContext, useEffect, useState } from 'react';
import { ContextProduct } from '../Context/ContextProduct';
import CardFavorite from './CardFavorite';
import '../../styles/favorite/Favorite.css'
import { useRef } from 'react';
import Header from './../Header/Header'
import Footer from './../Footer';
import Swal from 'sweetalert2'

import { VscChevronLeft } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Favorite = () => {
    const { productItem } = useContext(ContextProduct)
    const [productItemF, setProductItemF] = useState([])

    const [boolF, setBoolF] = useState(false)


    useEffect(() => {
        setProductItemF([...productItem])
        console.log(productItem);
    }, [productItem])

    const handleEmptyFavourites = e => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "You don't have favourites!",
            confirmButtonText: '<a href="/">Back home</a>'
        })
        e.preventDefault();
    }

    return (

        <>

            <Header />
            <div className='container-header-product s'>
                <h4 >
                    My favourites
                </h4>

             
                    <Link to="/"> <VscChevronLeft className='back-icon' /> </Link>
</div>

                    <div style={{ scrollX: 'hidden' }}>
                        {productItem.length === 0 ?


                            <div className="containerFE">

                                {handleEmptyFavourites()}
                            </div>
                            :
                            



                                <div style={{ scrollX: 'hidden' }}>
                                    {productItemF.length === 0 ?

                                        <div className="containerFE">
                                            <h1>Favorito vacío</h1>
                                        </div>
                                        :
                                        <div className='mayorFavorite' >

                                            {productItemF.map((p, i) =>
                                            (
                                                <div key={i} className='container-favorite'>
                                                    <CardFavorite favourite={p} />
                                                </div>
                                            ))}
                                        </div>
                                    }
                                </div>
                            

                        }
                    </div>
               
               

                <Footer />
            </>

            )

}

            export default Favorite;