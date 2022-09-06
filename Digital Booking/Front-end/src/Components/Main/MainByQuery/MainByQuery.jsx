import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextProduct } from "../../Context/ContextProduct";
// import {ContextFilters} from "../../Context/ContextFilters";
import Footer from "../../Footer";
import Header from "../../Header/Header";
import BlockSearch from "../BlockSearch/BlockSearch";
import List from "../Card/List";
import ListProductByQuery from "../CardProductsByQuery/ListProductByQuery";
import React from 'react'
import { useEffect } from "react";

const MainByQuery = () => {
    const {id,nameCity,date}=useParams();     
    const {setUserName,productItem}=useContext(ContextProduct)
    // console.log(nameCity);
    //  console.log(filterP);
    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("nombreUsuario"))!==''){
            setUserName(JSON.parse(localStorage.getItem("nombreUsuario")))
        }
        productItem.length!==0&& console.log(productItem)
    },[])
   //productItem.length!==0&& console.log(productItem);
    return ( 
        <>
            
            <main>
                <BlockSearch/>
                <List/>
                <ListProductByQuery  nameCity={nameCity} idCategory={id} date={date}/> 
            </main>
            
        </>
     );
}
 
export default MainByQuery;