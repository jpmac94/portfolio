import React, { useState, useEffect } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer'
import HeaderBlockAdm from '../CreateProduct/HeaderBlockAdm'
import Select from "react-select";
import OptionProduct from './OptionProduct';
import './../../../styles/admin/deleteProductsStyles.css'
import CardProduct from './CardProduct';
import Swal from 'sweetalert2'

export default function DeleteMain() {
    const [products, setProducts] = useState([]);
    const [productDelete, setProductDelete] = useState();
    //  const { setCityBlockSerch,sumaFiltrer,cleanCity,setCleanCity } = useContext(ContextProduct);

    const fProducts = () => {
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
    };
    useEffect(() => {
        fProducts();
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
            return setProductDelete(products.filter(product => product.name === valueProductName.name))

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



    console.log(productDelete);
    return (
        <>
            <Header />
            <HeaderBlockAdm title="administrationMain"/>
            <div className='container-delete'>
                <div className='title-delete'>
                    <h2>Delecte Product</h2>
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
                    productDelete !== undefined ?
                        <div>
                            <CardProduct product={productDelete} />
                        </div>

                        :
                        <div>

                        </div>



                }



            </div>

            <Footer />
        </>
    )
}
