import React, { useState, useEffect } from 'react'
import Footer from '../../Footer'
import Header from '../../Header/Header'
import HeaderBlockAdm from '../CreateProduct/HeaderBlockAdm'
import Select from "react-select";
import OptionProduct from '../DeleteProduct/OptionProduct';
import CardProductUpdate from './CardProductUpdate';
import FormUpdateProduct from './FormUpdateProduct';
import SecondForm from '../CreateProduct/SecondForm';
import ThirdProduct from '../CreateProduct/ThirdProduct';
import ForthProduct from '../CreateProduct/ForthProduct';
import SecondUpdate from './SecondUpdate';
import ThirdUpdate from './ThirdUpdate';
import ForthUpdate from './ForthUpdate';
import NewMao from '../CreateProduct/NewMao';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

export default function UpdateMain() {
    const nav = useNavigate()
    const [products, setProducts] = useState([]);
    const [productUpdate, setProductUpdate] = useState([]);
    //  const { setCityBlockSerch,sumaFiltrer,cleanCity,setCleanCity } = useContext(ContextProduct);

    useEffect(() => {
        let requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(
            "http://group7-env.eba-p73y2chs.us-west-1.elasticbeanstalk.com/api/product/findAll",
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => setProducts([...result]))
            .catch((error) => console.log("error", error));

    }, []);

    const [valueProductName, setValueProductName] = useState('')

    const handleSelectChange = (e) => {

        setValueProductName({ name: e.value })
        /* setCityBlockSerch({ nameCity: e.value });
         sumaFiltrer({ nameCity: e.value });*/
    };

    useEffect(() => {
        products.map((product) => {
            //    console.log(product); 
            //     if (product.name == valueProductName.name) {
            return setProductUpdate(products.filter(product => product.name === valueProductName.name))

            /*     }
                    else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: "This product does not exist!",
                            confirmButtonText: 'Back'
                          })
                    }*/
        })
    }, [valueProductName]);

    const sendUpdate = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update?",
            icon: 'warning',
            showCancelButton: true,
          //  confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Send!',
                    'Your file has been update.',
                    'success',
                    nav("/")
                )
            }
        })

    }
    console.log(productUpdate);
    return (
        <>
            <Header />
            <HeaderBlockAdm title="administrationMain" />
            <div className='container-delete'>
                <div className='title-delete'>
                    <h2>Update Product</h2>
                </div>

                <div className='select-products'>
                    <Select
                        /*value={product}*/
                        classNamePrefix="select"
                        defaultValue={{ label: 'Put name product', value: null }}
                        options={products.map((product) => ({
                            label: (
                                <OptionProduct product={product.name} />
                            ),
                            value: product.name,
                        }))}
                        onChange={handleSelectChange}
                        search
                    //  styles={customStyles}
                    />
                </div>

                {
                    productUpdate.length !== 0 &&
                    <div className='container-all-update'>
                        {/*  <CardProductUpdate product={productUpdate}/>
                        <div className='container-content-features'>*/}
                        <FormUpdateProduct product={productUpdate} />
                        <SecondUpdate props={productUpdate} />


                        {/*<div className='map-update-product'>
                            <NewMao />
                      
                    </div>*/}


                        <ForthUpdate product={productUpdate} />

                       
                        <div className='buttons-update-sendForm'>
                            <button className='update-send' onClick={sendUpdate}>Send</button>

                            <button className='update-cancel'>Cancel</button>
                        </div>

                    </div>


                }



            </div>
            <Footer />
        </>
    )
}
