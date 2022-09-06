import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header/Header'
import './../../../styles/admin/adminStyles.css'
import HeaderBlockAdm from '../CreateProduct/HeaderBlockAdm'
import { FaRegSave } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineSave } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';

export default function AdminMain() {
    return (
        <>
            <Header />
<HeaderBlockAdm title=""/>
            <div className='container-admin'>
                <Link to="/createProduct" className='container-c-u-d'>
                    <div >
                        <div className='div-icon'>
                            <AiOutlineSave className='icon-admin' />

                        </div>

                        <div className='admin-option'>
                            <p> Create Product </p>
                        </div>
                    </div>
                </Link>

                <Link to="/updateProduct" className='container-c-u-d'>
                <div>
                    <div className='div-icon'>
                        <GrUpdate className='icon-admin' />

                    </div>
                    <div className='admin-option'>
                        <p> Update Product </p>
                    </div>
                </div>
                </Link>

                <Link to="/deleteProduct" className='container-c-u-d'>
                <div>
                    <div className='div-icon'>
                        <AiOutlineDelete className='icon-admin' />

                    </div>
                    <div className='admin-option'>
                        <p> Delecte Product </p>
                    </div>
                </div>
                </Link>
            </div>
            


            <Footer />
        </>
    )
}
